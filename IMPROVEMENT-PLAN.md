# Aussie Workplace Challenge - Review & v2.0 Improvement Plan

**Reviewed by:** Billy 🔥  
**Date:** 7 February 2026

---

## Current Version Review

### ✅ What's Working Well
- Clean, mobile-first design matching Your Aussie Uncle brand
- 50 scenarios across 5 categories
- Smooth quiz flow with feedback after each answer
- Score tracking and category breakdown
- Share functionality
- Email gate for lead capture
- localStorage for progress persistence

### 🐛 Bugs & Issues to Fix

| Issue | Severity | Fix |
|-------|----------|-----|
| **Missing images** - og-image.png and favicon.png don't exist | High | Create and upload these assets |
| **ConvertKit not configured** - Emails only stored locally | High | Add Form ID and API key |
| **"Decode" in copy** - AI-sounding word in subtitle | Medium | Change to "figure out" or "work out" |
| **Free scenario shortage** - Only 10 free scenarios total, selecting a specific category may give <10 | Medium | Add more free scenarios OR show warning |
| **No error handling** - If JS fails, blank screen | Medium | Add fallback/error states |
| **No loading states** - Instant transitions may feel jarring | Low | Add subtle loading animations |

### ⚠️ Missing Features (MVP Gaps)

1. **No analytics** - Can't track completions, drop-offs, conversions
2. **No UTM tracking** - Can't attribute traffic sources
3. **No backend** - Emails stored in browser only (lost if cleared)
4. **Results not shareable by URL** - Can't link to specific score

---

## v2.0 Improvement Plan

### Phase 1: Critical Fixes (Do This Week)

#### 1.1 Fix Missing Assets
- [ ] Create og-image.png (1200x630) with app title and branding
- [ ] Create favicon.png (32x32 or 64x64)
- [ ] Upload to /images folder

#### 1.2 Configure ConvertKit
- [ ] Create ConvertKit form for this lead magnet
- [ ] Add form ID to app.js
- [ ] Add tags: `aussie-challenge`, `lead-magnet`, `workplace-english`
- [ ] Set up welcome email sequence

#### 1.3 Fix Copy Issues
```javascript
// Change in index.html:
// FROM:
"Can you decode them all?"
// TO:
"Can you get them all right?"

// FROM (CTA section):
"decode what Aussies really mean"
// TO:
"understand what Aussies really mean"
```

#### 1.4 Fix Free Scenario Logic
```javascript
// Current issue: Selecting "Boss Talk" category only has 2 free scenarios
// Solution: Show all free scenarios regardless of category, OR
// Mark more scenarios as free (at least 4 per category)
```

---

### Phase 2: Analytics & Tracking (Week 2)

#### 2.1 Add Google Analytics / Plausible
Track these events:
- `quiz_started` - Category selected
- `question_answered` - Correct/incorrect
- `quiz_completed` - Final score
- `email_submitted` - Lead captured
- `email_skipped` - Declined to subscribe
- `share_clicked` - Which share method
- `cta_clicked` - Course link clicked

#### 2.2 Add UTM Parameter Handling
```javascript
// Store UTM params on arrival
const params = new URLSearchParams(window.location.search);
const utmData = {
    source: params.get('utm_source'),
    medium: params.get('utm_medium'),
    campaign: params.get('utm_campaign')
};
localStorage.setItem('utm_data', JSON.stringify(utmData));

// Include in email submission
```

#### 2.3 Shareable Result URLs
```
https://challenge.youraussieuncle.com.au/?score=8&total=10
```
- URL shows score on load
- Encourages competition ("Can you beat my score?")

---

### Phase 3: Engagement Features (Week 3-4)

#### 3.1 Sound Effects
- Correct answer: Satisfying "ding" ✅
- Incorrect answer: Gentle "buzz" ❌
- Perfect score: Celebration sounds 🎉
- Toggle on/off in settings

#### 3.2 Streak Counter
- "🔥 3 in a row!"
- Bonus message for 5+ streak
- Resets on incorrect answer
- Adds gamification without complexity

#### 3.3 Difficulty Levels
| Level | Description |
|-------|-------------|
| Easy | Common phrases, obvious answers |
| Medium | Standard workplace scenarios |
| Hard | Subtle differences, nuanced meanings |

#### 3.4 Timer Mode (Optional)
- 15 seconds per question
- Adds pressure/excitement
- Separate leaderboard for timed mode

---

### Phase 4: Growth Features (Month 2)

#### 4.1 Daily Challenge
- One new scenario per day
- Push notification: "Today's Aussie Challenge is ready!"
- Builds habit, increases retention

#### 4.2 Leaderboard
- Weekly high scores
- Compare with friends (via share)
- Optional name/nickname entry

#### 4.3 PWA (Progressive Web App)
- Add to home screen prompt
- Offline support (cached scenarios)
- Push notifications for daily challenge

#### 4.4 A/B Testing
Test variations of:
- Email gate timing (after 5 vs 10 questions)
- CTA copy and button colors
- Results page messaging

---

### Phase 5: Content Expansion (Ongoing)

#### 5.1 More Scenarios
| Category | Current | Target |
|----------|---------|--------|
| Boss Talk | 10 | 25 |
| Meetings | 10 | 25 |
| Small Talk | 10 | 25 |
| Feedback | 10 | 25 |
| Email Phrases | 10 | 25 |
| **New: Interviews** | 0 | 15 |
| **New: First Week** | 0 | 15 |
| **Total** | 50 | 155 |

#### 5.2 Industry-Specific Packs
- Healthcare scenarios
- IT/Tech scenarios
- Construction/Trades scenarios
- Hospitality scenarios

#### 5.3 Audio Scenarios
- Hear the phrase spoken with Aussie accent
- Practice listening comprehension
- ElevenLabs integration for TTS

---

## Technical Improvements

### Backend Requirements (v2.0)
For proper analytics and email storage, add a simple backend:

```
/api/submit-email    - Store email + UTM data
/api/track-event     - Log analytics events
/api/get-leaderboard - Return top scores
```

Options:
- Vercel Serverless Functions (free tier)
- Railway (you already use this)
- Supabase (free tier, includes database)

### Performance Optimizations
- [ ] Minify CSS/JS
- [ ] Add service worker for caching
- [ ] Lazy load non-critical JS
- [ ] Preload critical assets

---

## Recommended Priority Order

| Priority | Feature | Impact | Effort |
|----------|---------|--------|--------|
| 1 | Fix bugs (images, copy, ConvertKit) | High | Low |
| 2 | Add analytics tracking | High | Medium |
| 3 | Shareable result URLs | High | Low |
| 4 | Sound effects | Medium | Low |
| 5 | Streak counter | Medium | Low |
| 6 | More scenarios (100 total) | High | Medium |
| 7 | Daily challenge | High | Medium |
| 8 | PWA support | Medium | Medium |
| 9 | Leaderboard | Medium | High |
| 10 | Industry packs | Medium | High |

---

## Quick Wins (Can Do Today)

1. ✅ Create og-image and favicon
2. ✅ Fix "decode" copy
3. ✅ Add ConvertKit form ID
4. ✅ Mark more scenarios as free (4 per category = 20 free)
5. ✅ Add basic console logging for debugging

---

## Metrics to Track (Success Criteria)

| Metric | Target | How to Measure |
|--------|--------|----------------|
| Completion rate | >60% | Start vs finish |
| Email capture rate | >25% | Emails / completions |
| Share rate | >10% | Share clicks / completions |
| Course CTA click | >5% | CTA clicks / completions |
| Return visitors | >20% | Unique vs returning |

---

*Ready to implement any of these. Let me know which to prioritize!*

— Billy 🔥
