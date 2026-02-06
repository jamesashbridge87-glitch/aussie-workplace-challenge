// Scenario Database for "What Would An Aussie Say?"
// Categories: boss, meetings, smalltalk, feedback, email

const scenarios = [
    // ===== BOSS TALK (10 scenarios) =====
    {
        id: 1,
        category: "boss",
        context: "Your boss says:",
        quote: "We should probably have a chat",
        options: [
            { text: "Great! They want to catch up socially", correct: false },
            { text: "You're in trouble. This is not casual.", correct: true },
            { text: "They need your opinion on something", correct: false },
            { text: "It's optional - you can decline", correct: false }
        ],
        explanation: "When an Aussie boss says 'we should have a chat', it almost always means something serious. It's a gentle way of saying there's an issue to discuss. Don't panic, but do take it seriously.",
        free: true
    },
    {
        id: 2,
        category: "boss",
        context: "After you pitch an idea, your manager says:",
        quote: "That's an interesting idea",
        options: [
            { text: "They love it and want to hear more", correct: false },
            { text: "They're genuinely intrigued", correct: false },
            { text: "They don't love it but are being polite", correct: true },
            { text: "They need time to think about it", correct: false }
        ],
        explanation: "'Interesting' in Australian workplace speak is often a polite way of saying 'I'm not convinced'. If they actually liked it, they'd say 'great idea' or 'love it'. Listen for enthusiasm, not just words.",
        free: true
    },
    {
        id: 3,
        category: "boss",
        context: "Your boss responds to your request with:",
        quote: "Let's put a pin in that",
        options: [
            { text: "They'll definitely come back to it later", correct: false },
            { text: "It's approved but delayed", correct: false },
            { text: "We're never discussing this again", correct: true },
            { text: "It's on hold pending budget approval", correct: false }
        ],
        explanation: "'Putting a pin in it' is the Australian workplace equivalent of a polite no. The topic is being parked... probably forever. If they genuinely wanted to revisit it, they'd set a specific time.",
        free: true
    },
    {
        id: 4,
        category: "boss",
        context: "After delegating a task, your manager says:",
        quote: "I'll leave it with you",
        options: [
            { text: "They trust your judgement completely", correct: false },
            { text: "You can take your time with it", correct: false },
            { text: "This is 100% your responsibility now", correct: true },
            { text: "They'll check in later to help", correct: false }
        ],
        explanation: "This phrase transfers complete ownership. If something goes wrong, it's on you. If it goes well, you get the credit. Either way, don't expect hand-holding from this point.",
        free: true
    },
    {
        id: 5,
        category: "boss",
        context: "In a planning meeting, your boss says:",
        quote: "We need to be a bit more realistic",
        options: [
            { text: "They want more detailed projections", correct: false },
            { text: "Your idea isn't going to happen", correct: true },
            { text: "The timeline needs minor adjustment", correct: false },
            { text: "They want a second opinion", correct: false }
        ],
        explanation: "'A bit more realistic' is a soft way of saying your idea, timeline, or expectations are unrealistic. In Aussie speak, 'a bit' often means 'a lot'. Time to scale back significantly.",
        free: true
    },
    {
        id: 6,
        category: "boss",
        context: "Your manager asks:",
        quote: "How are we tracking?",
        options: [
            { text: "They're making casual conversation", correct: false },
            { text: "They need an update. Preferably a good one.", correct: true },
            { text: "They want to discuss your career path", correct: false },
            { text: "They're checking if you need help", correct: false }
        ],
        explanation: "This is a request for a progress update. The 'we' is inclusive but the question is really 'how are YOU tracking'. Have your status ready and be honest about any blockers.",
        free: false
    },
    {
        id: 7,
        category: "boss",
        context: "Your boss mentions:",
        quote: "Just flag it with me",
        options: [
            { text: "Send them a detailed report", correct: false },
            { text: "Only tell them if it's good news", correct: false },
            { text: "Tell them before it becomes a problem", correct: true },
            { text: "Wait until they ask about it", correct: false }
        ],
        explanation: "'Flag it' means raise it early. Your boss wants advance warning of issues, not surprises. A quick heads-up email or chat is what they're asking for. Don't wait until it's a crisis.",
        free: false
    },
    {
        id: 8,
        category: "boss",
        context: "When you apologise for a mistake, your boss says:",
        quote: "No dramas",
        options: [
            { text: "They're genuinely unbothered", correct: false },
            { text: "It's fine. Or they're annoyed. Context matters.", correct: true },
            { text: "The issue is completely forgotten", correct: false },
            { text: "They want you to explain further", correct: false }
        ],
        explanation: "'No dramas' can mean anything from 'truly fine' to 'I'm annoyed but handling it'. Tone is everything. A flat 'no dramas' with no eye contact? They're bothered. Said warmly? You're actually fine.",
        free: false
    },
    {
        id: 9,
        category: "boss",
        context: "Your boss says in a meeting:",
        quote: "Let me play devil's advocate",
        options: [
            { text: "They're about to agree with you", correct: false },
            { text: "They want someone else to argue against you", correct: false },
            { text: "They disagree but want to seem neutral", correct: true },
            { text: "They're testing your conviction", correct: false }
        ],
        explanation: "When someone says they're playing devil's advocate, they often actually disagree. It's a way to push back while maintaining a friendly tone. Prepare to defend your position.",
        free: false
    },
    {
        id: 10,
        category: "boss",
        context: "Your manager ends a conversation with:",
        quote: "Keep me in the loop",
        options: [
            { text: "Send them every detail as it happens", correct: false },
            { text: "Only update them at milestones", correct: false },
            { text: "Regular updates, especially if things change", correct: true },
            { text: "Wait for them to ask for updates", correct: false }
        ],
        explanation: "'Keep me in the loop' means proactive updates without overwhelming them. A quick weekly update or immediate heads-up if something changes. They don't want to be surprised later.",
        free: false
    },

    // ===== MEETINGS (10 scenarios) =====
    {
        id: 11,
        category: "meetings",
        context: "The meeting organiser says:",
        quote: "Let's kick things off",
        options: [
            { text: "It's time for introductions", correct: false },
            { text: "The meeting is starting. Stop chatting.", correct: true },
            { text: "They're proposing an icebreaker activity", correct: false },
            { text: "You should share your ideas first", correct: false }
        ],
        explanation: "This is the Australian signal that informal chat time is over and the meeting is officially starting. Wrap up your side conversations and focus on the agenda.",
        free: true
    },
    {
        id: 12,
        category: "meetings",
        context: "Someone in the meeting says:",
        quote: "Can we take this offline?",
        options: [
            { text: "They want to discuss it without technology", correct: false },
            { text: "We're not solving this here. Let's talk later.", correct: true },
            { text: "They disagree and want to argue privately", correct: false },
            { text: "The topic is confidential", correct: false }
        ],
        explanation: "'Taking it offline' means this discussion is derailing the meeting or only relevant to certain people. It's a polite way to say 'let's not waste everyone's time' and handle it separately.",
        free: true
    },
    {
        id: 13,
        category: "meetings",
        context: "A colleague promises:",
        quote: "I'll circle back on that",
        options: [
            { text: "They'll get back to you immediately after", correct: false },
            { text: "They'll return to the topic in this meeting", correct: false },
            { text: "They'll get back to you. Maybe.", correct: true },
            { text: "They're asking you to remind them", correct: false }
        ],
        explanation: "'Circling back' is one of the most overused meeting phrases. It can mean they'll genuinely follow up, or it can be a way to move on without committing. If it matters to you, send a follow-up.",
        free: true
    },
    {
        id: 14,
        category: "meetings",
        context: "The chair says:",
        quote: "Let's park that for now",
        options: [
            { text: "We'll discuss it next meeting for sure", correct: false },
            { text: "Good point, but we're moving on", correct: true },
            { text: "The topic has been approved", correct: false },
            { text: "Someone should research it more", correct: false }
        ],
        explanation: "Parking a topic means acknowledging it but not discussing it now. Whether it ever gets 'unparked' depends on how important it really is. Don't hold your breath.",
        free: true
    },
    {
        id: 15,
        category: "meetings",
        context: "At the end of the meeting:",
        quote: "Any other business?",
        options: [
            { text: "Time for casual conversation", correct: false },
            { text: "The meeting has been cancelled", correct: false },
            { text: "Last chance to speak up", correct: true },
            { text: "They're asking for meeting feedback", correct: false }
        ],
        explanation: "AOB (Any Other Business) is your final opportunity to raise something. If you have a quick point, now's the time. But keep it brief - people are ready to leave.",
        free: false
    },
    {
        id: 16,
        category: "meetings",
        context: "The organiser announces:",
        quote: "We're running over",
        options: [
            { text: "The meeting will continue as long as needed", correct: false },
            { text: "Wrap it up. People need to leave.", correct: true },
            { text: "We should schedule a follow-up meeting", correct: false },
            { text: "The room is double-booked", correct: false }
        ],
        explanation: "This is a polite signal that the meeting has exceeded its allotted time. Start wrapping up your points, don't introduce new topics, and let people escape to their next commitment.",
        free: false
    },
    {
        id: 17,
        category: "meetings",
        context: "Someone offers:",
        quote: "I'll send through the minutes",
        options: [
            { text: "They're resigning from their position", correct: false },
            { text: "They'll email a summary. Read it.", correct: true },
            { text: "They need your notes from the meeting", correct: false },
            { text: "The meeting is being rescheduled", correct: false }
        ],
        explanation: "Minutes are the official record of what was discussed and decided. Read them - especially the action items. You might be assigned something you didn't catch in the meeting.",
        free: false
    },
    {
        id: 18,
        category: "meetings",
        context: "At the end, someone asks:",
        quote: "Same time next week?",
        options: [
            { text: "They're asking if you're free socially", correct: false },
            { text: "It's a one-time question about next week", correct: false },
            { text: "This is now a regular thing", correct: true },
            { text: "The meeting will only be next week", correct: false }
        ],
        explanation: "This casual question often signals the birth of a recurring meeting. If you don't push back now, expect this meeting in your calendar indefinitely. Speak up if it shouldn't be regular.",
        free: false
    },
    {
        id: 19,
        category: "meetings",
        context: "Someone interjects with:",
        quote: "Just to piggyback on that",
        options: [
            { text: "They disagree with the previous speaker", correct: false },
            { text: "They're adding to or supporting the previous point", correct: true },
            { text: "They want to change the subject", correct: false },
            { text: "They're asking for clarification", correct: false }
        ],
        explanation: "'Piggybacking' means building on what someone just said. It's a way to add your perspective while crediting the previous speaker. It signals agreement or expansion, not disagreement.",
        free: false
    },
    {
        id: 20,
        category: "meetings",
        context: "The facilitator says:",
        quote: "I'm conscious of time",
        options: [
            { text: "They want to extend the meeting", correct: false },
            { text: "Hurry up. We need to move on.", correct: true },
            { text: "They're proposing a break", correct: false },
            { text: "The meeting is ahead of schedule", correct: false }
        ],
        explanation: "This is a polite way of saying 'you're taking too long' or 'we're running behind'. Wrap up your current point quickly and let the meeting progress.",
        free: false
    },

    // ===== SMALL TALK (10 scenarios) =====
    {
        id: 21,
        category: "smalltalk",
        context: "A colleague asks on Monday morning:",
        quote: "How was your weekend?",
        options: [
            { text: "Give a detailed 10-minute summary", correct: false },
            { text: "Keep it light. One or two sentences.", correct: true },
            { text: "Ask them first instead of answering", correct: false },
            { text: "It's a trick question - don't answer", correct: false }
        ],
        explanation: "This is a ritual greeting, not a genuine inquiry into your life. 'Yeah, good thanks! Quiet one. You?' is the perfect response. Save the details for actual friends.",
        free: true
    },
    {
        id: 22,
        category: "smalltalk",
        context: "Someone at the coffee machine says:",
        quote: "This weather, hey?",
        options: [
            { text: "They want a detailed weather forecast", correct: false },
            { text: "It's a conversation starter. Agree and move on.", correct: true },
            { text: "They're complaining and want you to fix it", correct: false },
            { text: "It's a test of your local knowledge", correct: false }
        ],
        explanation: "Weather talk is the ultimate Australian small talk. Just agree: 'I know, right?' or 'Mad, isn't it?' You don't need to add anything insightful. It's bonding, not meteorology.",
        free: true
    },
    {
        id: 23,
        category: "smalltalk",
        context: "A colleague asks:",
        quote: "Got any plans for the long weekend?",
        options: [
            { text: "They want to invite you somewhere", correct: false },
            { text: "They're making friendly conversation", correct: true },
            { text: "They need you to work the long weekend", correct: false },
            { text: "They're checking if you know it's a long weekend", correct: false }
        ],
        explanation: "Australians love their public holidays and asking about plans is standard small talk. A simple answer works: 'Nothing major, might hit the beach. You?' Don't overthink it.",
        free: true
    },
    {
        id: 24,
        category: "smalltalk",
        context: "Someone asks:",
        quote: "You watching the footy this weekend?",
        options: [
            { text: "They're inviting you to watch with them", correct: false },
            { text: "You must say yes or be seen as un-Australian", correct: false },
            { text: "It's friendly chat. Being honest is fine.", correct: true },
            { text: "They're testing your sports knowledge", correct: false }
        ],
        explanation: "You don't have to follow footy to fit in. 'Nah, not really my thing' is perfectly acceptable. If you want to engage: 'Who are you going for?' shows interest without faking knowledge.",
        free: true
    },
    {
        id: 25,
        category: "smalltalk",
        context: "A colleague comments:",
        quote: "TGIF, am I right?",
        options: [
            { text: "They want to discuss weekend plans in detail", correct: false },
            { text: "It's Friday bonding. Just agree enthusiastically.", correct: true },
            { text: "They're inviting you to Friday drinks", correct: false },
            { text: "They're testing if you work weekends", correct: false }
        ],
        explanation: "'Thank God It's Friday' is a shared celebration of surviving the week. 'Tell me about it!' or 'Absolutely!' is all you need. It's team building in three words.",
        free: false
    },
    {
        id: 26,
        category: "smalltalk",
        context: "Someone asks about your lunch:",
        quote: "What've you got there?",
        options: [
            { text: "They want to eat your food", correct: false },
            { text: "They're making friendly conversation", correct: true },
            { text: "They're checking if the food is office-appropriate", correct: false },
            { text: "They want the recipe", correct: false }
        ],
        explanation: "Kitchen small talk about food is common and friendly. A brief answer is fine: 'Just some leftover pasta' or 'Grabbed a salad from downstairs'. You can ask about theirs too.",
        free: false
    },
    {
        id: 27,
        category: "smalltalk",
        context: "A colleague you barely know says:",
        quote: "How's things?",
        options: [
            { text: "They want an honest assessment of your life", correct: false },
            { text: "They're checking if you need help", correct: false },
            { text: "It's a greeting. 'Good, you?' is the answer.", correct: true },
            { text: "They've noticed something is wrong", correct: false }
        ],
        explanation: "'How's things' is a greeting, not a question. The expected response is positive and brief: 'Yeah, good! You?' Then you both move on with your day. Don't trauma dump.",
        free: false
    },
    {
        id: 28,
        category: "smalltalk",
        context: "Someone mentions:",
        quote: "Did you see that show everyone's watching?",
        options: [
            { text: "You must watch it immediately to fit in", correct: false },
            { text: "They want to spoil it for you", correct: false },
            { text: "It's a conversation starter. Honesty is fine.", correct: true },
            { text: "They're testing your pop culture knowledge", correct: false }
        ],
        explanation: "It's fine to say 'Nah, haven't got around to it yet' or 'Not really my thing'. You can still engage: 'Is it worth watching?' shows interest without pretending you've seen it.",
        free: false
    },
    {
        id: 29,
        category: "smalltalk",
        context: "A senior colleague says in passing:",
        quote: "Keeping busy?",
        options: [
            { text: "They want a full project update", correct: false },
            { text: "They're checking if you're slacking off", correct: false },
            { text: "It's small talk. 'Yeah, flat out!' works.", correct: true },
            { text: "They want to give you more work", correct: false }
        ],
        explanation: "This is casual small talk, not a performance review. 'Yeah, keeping out of trouble!' or 'Flat out as always!' are perfectly good responses. Don't over-explain.",
        free: false
    },
    {
        id: 30,
        category: "smalltalk",
        context: "After a brief chat, someone says:",
        quote: "Anyway, I'll let you get back to it",
        options: [
            { text: "They want to keep talking", correct: false },
            { text: "The conversation is over. Return to work.", correct: true },
            { text: "They're offended by something you said", correct: false },
            { text: "They need help with something", correct: false }
        ],
        explanation: "This is the polite Australian way of ending a conversation. It's not rude - it's considerate. Respond with 'Yeah, catch you later!' and both of you can get back to work.",
        free: false
    },

    // ===== FEEDBACK (10 scenarios) =====
    {
        id: 31,
        category: "feedback",
        context: "Your colleague starts with:",
        quote: "You've been doing great work lately",
        options: [
            { text: "Take the compliment and relax", correct: false },
            { text: "This is the bread. The real feedback is coming.", correct: true },
            { text: "They're recommending you for promotion", correct: false },
            { text: "The conversation is over", correct: false }
        ],
        explanation: "The feedback sandwich starts with praise. This is the setup. The actual message - usually constructive criticism - is coming next. Don't get too comfortable yet.",
        free: true
    },
    {
        id: 32,
        category: "feedback",
        context: "In your review, your manager says:",
        quote: "One area to work on...",
        options: [
            { text: "It's a minor suggestion to consider", correct: false },
            { text: "This is the actual feedback. Pay attention.", correct: true },
            { text: "It's optional personal development", correct: false },
            { text: "They're just filling out a form", correct: false }
        ],
        explanation: "This is the meat of the feedback sandwich. Whatever comes next is what they actually need you to change. Listen carefully and take notes - this is the important part.",
        free: true
    },
    {
        id: 33,
        category: "feedback",
        context: "After giving constructive feedback, they add:",
        quote: "But overall, really good stuff",
        options: [
            { text: "The criticism has been cancelled out", correct: false },
            { text: "More bread. Softening the earlier feedback.", correct: true },
            { text: "You're getting a bonus", correct: false },
            { text: "They've changed their mind about the feedback", correct: false }
        ],
        explanation: "This is the closing bread of the feedback sandwich. It's meant to end on a positive note, but don't let it distract from the middle part. That's still what you need to address.",
        free: true
    },
    {
        id: 34,
        category: "feedback",
        context: "Your manager suggests:",
        quote: "Perhaps you could...",
        options: [
            { text: "It's truly optional - take it or leave it", correct: false },
            { text: "They're brainstorming possibilities", correct: false },
            { text: "You should definitely do this", correct: true },
            { text: "They're not sure what they want", correct: false }
        ],
        explanation: "'Perhaps' in Australian feedback is a softener, not uncertainty. When your manager says 'perhaps you could', they mean 'you should'. The polite framing doesn't make it optional.",
        free: true
    },
    {
        id: 35,
        category: "feedback",
        context: "A colleague mentions:",
        quote: "Something to think about...",
        options: [
            { text: "They're sharing a random observation", correct: false },
            { text: "You can ignore it if you disagree", correct: false },
            { text: "Change this behaviour", correct: true },
            { text: "They're philosophising out loud", correct: false }
        ],
        explanation: "'Something to think about' is indirect feedback. They're not just musing - they're telling you something needs to change. The soft phrasing is Australian politeness, not ambivalence.",
        free: false
    },
    {
        id: 36,
        category: "feedback",
        context: "In your review, you see:",
        quote: "Meets expectations",
        options: [
            { text: "You're doing an excellent job", correct: false },
            { text: "You're doing fine. Nothing special.", correct: true },
            { text: "You're underperforming", correct: false },
            { text: "You're ready for promotion", correct: false }
        ],
        explanation: "'Meets expectations' is middle-of-the-road. You're not in trouble, but you're not standing out either. If you want to advance, you need to be 'exceeding expectations'.",
        free: false
    },
    {
        id: 37,
        category: "feedback",
        context: "Your review mentions:",
        quote: "Room for growth",
        options: [
            { text: "They see leadership potential in you", correct: false },
            { text: "You need to improve in this area", correct: true },
            { text: "There's a promotion available", correct: false },
            { text: "The company is expanding", correct: false }
        ],
        explanation: "'Room for growth' is a diplomatic way of saying you're not where you need to be in this area. It's not devastating feedback, but it does require action.",
        free: false
    },
    {
        id: 38,
        category: "feedback",
        context: "Someone says in a 1:1:",
        quote: "To be honest with you...",
        options: [
            { text: "They've been lying before this", correct: false },
            { text: "Brace yourself. Direct feedback incoming.", correct: true },
            { text: "They're about to give false praise", correct: false },
            { text: "They're unsure of what to say", correct: false }
        ],
        explanation: "'To be honest' signals that the gloves are coming off. The speaker is about to drop the Australian politeness filter and tell you something straight. Listen carefully.",
        free: false
    },
    {
        id: 39,
        category: "feedback",
        context: "A peer mentions casually:",
        quote: "I probably would have done it differently",
        options: [
            { text: "They're just thinking out loud", correct: false },
            { text: "They have a mild preference", correct: false },
            { text: "They think you did it wrong", correct: true },
            { text: "They want to learn from you", correct: false }
        ],
        explanation: "This is indirect criticism. They're not 'probably' anything - they definitely think your approach was wrong. The softening is politeness, but the message is clear.",
        free: false
    },
    {
        id: 40,
        category: "feedback",
        context: "Your manager ends with:",
        quote: "Happy to discuss further if needed",
        options: [
            { text: "They want you to book another meeting", correct: false },
            { text: "They're hoping you won't ask questions", correct: false },
            { text: "The door is open if you need clarification", correct: true },
            { text: "The feedback is negotiable", correct: false }
        ],
        explanation: "This is a genuine offer to talk more. If you're confused or upset about feedback, take them up on it. But don't use it to argue against the feedback - use it to understand it better.",
        free: false
    },

    // ===== EMAIL PHRASES (10 scenarios) =====
    {
        id: 41,
        category: "email",
        context: "An email starts with:",
        quote: "As per my last email",
        options: [
            { text: "They're referencing helpful context", correct: false },
            { text: "They already told you this. Please read it.", correct: true },
            { text: "They're being extra thorough", correct: false },
            { text: "It's a standard email greeting", correct: false }
        ],
        explanation: "This is passive-aggressive email speak for 'I already answered this'. Go back and read their previous email before responding. You probably missed something important.",
        free: true
    },
    {
        id: 42,
        category: "email",
        context: "Someone writes:",
        quote: "Just following up",
        options: [
            { text: "They're being proactively helpful", correct: false },
            { text: "You haven't replied and they're waiting", correct: true },
            { text: "They have new information to share", correct: false },
            { text: "They want to continue the conversation", correct: false }
        ],
        explanation: "'Just following up' means you owe them a response. The 'just' makes it sound casual, but there's impatience underneath. Reply soon or at least acknowledge you received it.",
        free: true
    },
    {
        id: 43,
        category: "email",
        context: "An email ends with:",
        quote: "Please advise",
        options: [
            { text: "They're offering their advice", correct: false },
            { text: "It's a standard email sign-off", correct: false },
            { text: "They need an answer. Soon.", correct: true },
            { text: "They want your opinion but it's optional", correct: false }
        ],
        explanation: "'Please advise' is a request for action, not a polite sign-off. They need you to respond with information, a decision, or next steps. Don't leave this email unanswered.",
        free: true
    },
    {
        id: 44,
        category: "email",
        context: "Someone writes:",
        quote: "Friendly reminder",
        options: [
            { text: "It's a casual, pressure-free note", correct: false },
            { text: "They're being extra nice today", correct: false },
            { text: "This is your last warning before escalation", correct: true },
            { text: "They're just double-checking something", correct: false }
        ],
        explanation: "There's nothing friendly about a 'friendly reminder'. It means you've missed a deadline or haven't done something you should have. Action required immediately.",
        free: true
    },
    {
        id: 45,
        category: "email",
        context: "An email includes:",
        quote: "Going forward",
        options: [
            { text: "They're planning future collaboration", correct: false },
            { text: "Don't do it that way again", correct: true },
            { text: "They're excited about upcoming projects", correct: false },
            { text: "It's a transition phrase with no meaning", correct: false }
        ],
        explanation: "'Going forward' signals that something has changed or needs to change. What came before wasn't right; what comes after this phrase is the new expectation. Pay attention.",
        free: false
    },
    {
        id: 46,
        category: "email",
        context: "Someone writes:",
        quote: "Thanks in advance",
        options: [
            { text: "They're being extra polite", correct: false },
            { text: "They're assuming you'll do this", correct: true },
            { text: "Thanks is optional if you don't do it", correct: false },
            { text: "They'll thank you again later", correct: false }
        ],
        explanation: "'Thanks in advance' is a presumptive close. They're assuming you'll do what they've asked. It's polite pressure - you're now semi-committed without having agreed.",
        free: false
    },
    {
        id: 47,
        category: "email",
        context: "An email states:",
        quote: "For your reference",
        options: [
            { text: "You can ignore this attachment", correct: false },
            { text: "Keep this. You might need it later.", correct: true },
            { text: "They're showing off their work", correct: false },
            { text: "It's completely optional reading", correct: false }
        ],
        explanation: "'For your reference' means this information could be important later. File it somewhere you can find it. If something goes wrong and you should have known, this email is your paper trail.",
        free: false
    },
    {
        id: 48,
        category: "email",
        context: "Someone writes:",
        quote: "Happy to discuss",
        options: [
            { text: "They want to have a long conversation", correct: false },
            { text: "They're offering a meeting as a last resort", correct: false },
            { text: "Call them if you're confused", correct: true },
            { text: "They prefer written communication", correct: false }
        ],
        explanation: "'Happy to discuss' is an invitation to pick up the phone or book a meeting if the email isn't clear. It's not a demand for a meeting - just an offer if you need more context.",
        free: false
    },
    {
        id: 49,
        category: "email",
        context: "An email contains:",
        quote: "I would have thought",
        options: [
            { text: "They're sharing an interesting opinion", correct: false },
            { text: "They're mildly curious about something", correct: false },
            { text: "You've done something they consider wrong", correct: true },
            { text: "They're uncertain and seeking input", correct: false }
        ],
        explanation: "'I would have thought' is criticism disguised as musing. They expected something different from you and are disappointed. This is them telling you politely that you've missed the mark.",
        free: false
    },
    {
        id: 50,
        category: "email",
        context: "An email ends with:",
        quote: "Let me know your thoughts",
        options: [
            { text: "Your opinion is optional", correct: false },
            { text: "They want your feedback before proceeding", correct: true },
            { text: "They've already decided", correct: false },
            { text: "It's just a polite sign-off", correct: false }
        ],
        explanation: "When someone asks for your thoughts, they generally want them. This is an invitation to contribute, push back, or approve. Don't just ignore it - respond even if it's just 'Looks good to me'.",
        free: false
    }
];

// Helper functions
function getScenariosByCategory(category) {
    if (category === 'all') {
        return scenarios;
    }
    return scenarios.filter(s => s.category === category);
}

function getFreeScenarios() {
    return scenarios.filter(s => s.free);
}

function getRandomScenarios(count, category = 'all') {
    const pool = getScenariosByCategory(category);
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

function getCategoryName(category) {
    const names = {
        boss: 'Boss Talk',
        meetings: 'Meeting Speak',
        smalltalk: 'Small Talk',
        feedback: 'Feedback',
        email: 'Email Phrases'
    };
    return names[category] || category;
}

function getCategoryIcon(category) {
    const icons = {
        boss: '👔',
        meetings: '📋',
        smalltalk: '☕',
        feedback: '💬',
        email: '📧'
    };
    return icons[category] || '🎯';
}
