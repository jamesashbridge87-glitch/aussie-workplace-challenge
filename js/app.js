// What Would An Aussie Say? - Main Application

class AussieChallenge {
    constructor() {
        this.currentScenarios = [];
        this.currentIndex = 0;
        this.score = 0;
        this.answers = [];
        this.selectedCategory = 'all';
        this.hasSeenEmailGate = localStorage.getItem('seenEmailGate') === 'true';
        this.userEmail = localStorage.getItem('userEmail') || null;
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.showScreen('start-screen');
    }

    bindEvents() {
        // Category selection
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectedCategory = e.currentTarget.dataset.category;
                this.startQuiz();
            });
        });

        // Next button
        document.getElementById('next-btn').addEventListener('click', () => {
            this.nextScenario();
        });

        // Restart button
        document.getElementById('restart-btn').addEventListener('click', () => {
            this.restart();
        });

        // Share button
        document.getElementById('share-btn').addEventListener('click', () => {
            this.shareResults();
        });

        // Copy link button
        document.getElementById('copy-btn').addEventListener('click', () => {
            this.copyLink();
        });

        // Email form
        document.getElementById('email-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitEmail();
        });

        // Skip email
        document.getElementById('skip-email').addEventListener('click', () => {
            localStorage.setItem('seenEmailGate', 'true');
            this.hasSeenEmailGate = true;
            this.showResults();
        });

        // Audio button
        document.getElementById('audio-btn').addEventListener('click', () => {
            this.playAudio();
        });
    }

    playAudio() {
        const audio = document.getElementById('scenario-audio');
        const btn = document.getElementById('audio-btn');
        
        if (audio.paused) {
            audio.play();
            btn.classList.add('playing');
            btn.querySelector('.audio-text').textContent = 'Playing...';
        } else {
            audio.pause();
            audio.currentTime = 0;
            btn.classList.remove('playing');
            btn.querySelector('.audio-text').textContent = 'Hear it';
        }
        
        audio.onended = () => {
            btn.classList.remove('playing');
            btn.querySelector('.audio-text').textContent = 'Hear it';
        };
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    }

    startQuiz() {
        // Get 10 scenarios (mix of free and paid if user hasn't subscribed)
        if (this.userEmail) {
            // User has email - full access
            this.currentScenarios = getRandomScenarios(10, this.selectedCategory);
        } else {
            // Free user - only free scenarios
            const freePool = getFreeScenarios().filter(s => 
                this.selectedCategory === 'all' || s.category === this.selectedCategory
            );
            
            if (freePool.length >= 10) {
                this.currentScenarios = [...freePool].sort(() => Math.random() - 0.5).slice(0, 10);
            } else {
                // Not enough free scenarios in category, use all free ones + pad with random
                const allFree = getFreeScenarios();
                this.currentScenarios = [...allFree].sort(() => Math.random() - 0.5).slice(0, 10);
            }
        }

        this.currentIndex = 0;
        this.score = 0;
        this.answers = [];
        
        this.showScreen('quiz-screen');
        this.showScenario();
    }

    showScenario() {
        const scenario = this.currentScenarios[this.currentIndex];
        
        // Update progress
        const progress = ((this.currentIndex) / this.currentScenarios.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('progress-text').textContent = `${this.currentIndex + 1} / ${this.currentScenarios.length}`;

        // Show scenario
        document.getElementById('scenario-context').textContent = scenario.context;
        document.getElementById('scenario-quote').textContent = scenario.quote;

        // Load image for this scenario
        const scenarioId = String(scenario.id).padStart(2, '0');
        const scenarioImage = document.getElementById('scenario-image');
        scenarioImage.classList.add('loading');
        scenarioImage.src = `images/scenario-${scenarioId}.jpg`;
        scenarioImage.onload = () => scenarioImage.classList.remove('loading');

        // Load audio for this scenario
        const audio = document.getElementById('scenario-audio');
        audio.src = `audio/scenario-${scenarioId}.mp3`;
        audio.load();
        
        // Reset audio button state
        const audioBtn = document.getElementById('audio-btn');
        audioBtn.classList.remove('playing');
        audioBtn.querySelector('.audio-text').textContent = 'Hear it';

        // Show options
        const container = document.getElementById('options-container');
        container.innerHTML = '';
        
        const letters = ['A', 'B', 'C', 'D'];
        const shuffledOptions = [...scenario.options].sort(() => Math.random() - 0.5);
        
        shuffledOptions.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `
                <span class="option-letter">${letters[index]}</span>
                <span class="option-text">${option.text}</span>
            `;
            btn.addEventListener('click', () => this.selectAnswer(option, btn, shuffledOptions));
            container.appendChild(btn);
        });

        // Hide feedback
        document.getElementById('feedback-card').classList.remove('show');
        
        // Show options
        container.style.display = 'flex';
    }

    selectAnswer(selectedOption, selectedBtn, allOptions) {
        const scenario = this.currentScenarios[this.currentIndex];
        const isCorrect = selectedOption.correct;

        // Record answer
        this.answers.push({
            scenario: scenario,
            correct: isCorrect
        });

        if (isCorrect) {
            this.score++;
        }

        // Disable all buttons and show correct/incorrect
        document.querySelectorAll('.option-btn').forEach((btn, index) => {
            btn.disabled = true;
            if (allOptions[index].correct) {
                btn.classList.add('correct');
            } else if (btn === selectedBtn && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });

        // Show feedback
        const feedbackCard = document.getElementById('feedback-card');
        const feedbackIcon = document.getElementById('feedback-icon');
        const feedbackTitle = document.getElementById('feedback-title');
        const feedbackExplanation = document.getElementById('feedback-explanation');

        if (isCorrect) {
            feedbackIcon.textContent = '✅';
            feedbackTitle.textContent = 'Spot on!';
            feedbackTitle.className = 'feedback-title correct';
        } else {
            feedbackIcon.textContent = '❌';
            feedbackTitle.textContent = 'Not quite';
            feedbackTitle.className = 'feedback-title incorrect';
        }

        feedbackExplanation.textContent = scenario.explanation;

        // Update button text for last question
        const nextBtn = document.getElementById('next-btn');
        if (this.currentIndex === this.currentScenarios.length - 1) {
            nextBtn.textContent = 'See Results';
        } else {
            nextBtn.textContent = 'Next Scenario';
        }

        feedbackCard.classList.add('show');
    }

    nextScenario() {
        this.currentIndex++;
        
        if (this.currentIndex >= this.currentScenarios.length) {
            // Quiz complete
            if (!this.userEmail && !this.hasSeenEmailGate) {
                this.showScreen('email-screen');
            } else {
                this.showResults();
            }
        } else {
            this.showScenario();
        }
    }

    showResults() {
        this.showScreen('results-screen');

        // Update score
        document.getElementById('score-number').textContent = this.score;

        // Calculate percentage and show appropriate message
        const percentage = (this.score / this.currentScenarios.length) * 100;
        const titleEl = document.getElementById('results-title');
        const messageEl = document.getElementById('results-message');

        if (percentage === 100) {
            titleEl.textContent = "Perfect score! 🎉";
            messageEl.textContent = "You're practically Aussie! Your workplace communication is on point.";
        } else if (percentage >= 80) {
            titleEl.textContent = "Impressive!";
            messageEl.textContent = "You really get Aussie workplace speak. A few more tips and you'll be fluent.";
        } else if (percentage >= 60) {
            titleEl.textContent = "Not bad!";
            messageEl.textContent = "You're getting the hang of it. Keep learning and you'll understand any Aussie.";
        } else if (percentage >= 40) {
            titleEl.textContent = "Getting there";
            messageEl.textContent = "Aussie workplace speak takes practice. You're on the right track.";
        } else {
            titleEl.textContent = "Room to grow";
            messageEl.textContent = "Aussie workplace communication can be tricky. Let's help you master it.";
        }

        // Show category breakdown
        this.showBreakdown();
    }

    showBreakdown() {
        const breakdown = document.getElementById('results-breakdown');
        
        // Group answers by category
        const categoryScores = {};
        this.answers.forEach(answer => {
            const cat = answer.scenario.category;
            if (!categoryScores[cat]) {
                categoryScores[cat] = { correct: 0, total: 0 };
            }
            categoryScores[cat].total++;
            if (answer.correct) {
                categoryScores[cat].correct++;
            }
        });

        // Build breakdown HTML
        let html = '';
        Object.keys(categoryScores).forEach(cat => {
            const data = categoryScores[cat];
            html += `
                <div class="breakdown-item">
                    <div class="breakdown-category">
                        <span>${getCategoryIcon(cat)}</span>
                        <span>${getCategoryName(cat)}</span>
                    </div>
                    <span class="breakdown-score">${data.correct}/${data.total}</span>
                </div>
            `;
        });

        breakdown.innerHTML = html;
    }

    async shareResults() {
        const percentage = Math.round((this.score / this.currentScenarios.length) * 100);
        const text = `I scored ${this.score}/${this.currentScenarios.length} (${percentage}%) on "What Would An Aussie Say?" 🇦🇺\n\nCan you figure out what Aussies really mean at work?\n\n`;
        const url = window.location.href;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'What Would An Aussie Say?',
                    text: text,
                    url: url
                });
            } catch (err) {
                // User cancelled or error - fall back to copy
                this.copyToClipboard(text + url);
            }
        } else {
            this.copyToClipboard(text + url);
        }
    }

    copyLink() {
        this.copyToClipboard(window.location.href);
    }

    copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            this.showToast('Copied to clipboard!');
        }).catch(() => {
            this.showToast('Could not copy');
        });
    }

    showToast(message) {
        // Remove existing toast
        const existing = document.querySelector('.toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => toast.remove(), 2500);
    }

    async submitEmail() {
        const email = document.getElementById('email-input').value;
        
        if (!email) return;

        // Store email locally
        localStorage.setItem('userEmail', email);
        localStorage.setItem('seenEmailGate', 'true');
        this.userEmail = email;
        this.hasSeenEmailGate = true;

        // TODO: Send to ConvertKit API
        // For now, just log it
        console.log('Email submitted:', email);

        // Send to ConvertKit (if API is configured)
        try {
            await this.sendToConvertKit(email);
        } catch (err) {
            console.error('ConvertKit error:', err);
        }

        this.showToast('Thanks! Check your email for more scenarios.');
        
        // Show results after short delay
        setTimeout(() => {
            this.showResults();
        }, 1000);
    }

    async sendToConvertKit(email) {
        // ConvertKit Form ID would go here
        // This is a placeholder - James will need to add his form ID
        const CONVERTKIT_FORM_ID = 'YOUR_FORM_ID';
        const CONVERTKIT_API_KEY = 'YOUR_API_KEY';

        if (CONVERTKIT_FORM_ID === 'YOUR_FORM_ID') {
            console.log('ConvertKit not configured - email stored locally only');
            return;
        }

        const response = await fetch(`https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                api_key: CONVERTKIT_API_KEY,
                email: email,
                tags: ['aussie-challenge', 'lead-magnet']
            })
        });

        return response.json();
    }

    restart() {
        this.showScreen('start-screen');
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new AussieChallenge();
});
