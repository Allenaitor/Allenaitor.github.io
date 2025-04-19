// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
  "Hark! I am Ashley the All-Seeing. What fate dost thou seek?",
  "Speak, wanderer. The stars await thy inquiry.",
  "Thou hast entered the realm of fate. What truth shall I unveil?"
];

var elizaFinals = [
  "Thy fate is sealed... until next we speak.",
  "The stars dim. Our time is done.",
  "Go forth, for destiny awaits beyond this veil."
];

var elizaQuits = [
"bye",
"goodbye",
"farewell",
"done",
"exit",
"quit",
"finished"
];

var elizaPres = [
  ["dont", "do not"],
  ["can't", "cannot"],
  ["i'm", "I am"],
  ["you", "thou"],
  ["your", "thy"],
  ["are", "art"],
  ["my", "mine"]
];


var elizaPosts = [
  ["am", "art"],
  ["me", "me"],
  ["you", "thou"],
  ["your", "thy"],
  ["yours", "thine"]
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "Thy words are shrouded in mist speak clearer, that I might divine thy meaning.",
     "Let not silence claim thee continue thy tale.",
     "What omen dost thou perceive in this?",
     "Doth this weigh heavily upon thy spirit?",
     "Intriguing, truly. Pray, go on.",
     "Reveal more, for the stars whisper naught without thee.",
     "Doth this trouble stir thy soul?"
  ]]
]],
["sorry", 0, [
 ["*", [
     "No need for thine apology destiny forgiveth all.",
     "Thou need not beg pardon; fate doth not take offense.",
     "I seek truth, not remorse. Speak on.",
     "The past is dust. Let us look ahead."
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
     "Doth the memory of (2) still haunt thy thoughts?",
     "What phantom arises when thou think’st of (2)?",
     "What else from yore dost thou recall?",
     "Why cometh the memory of (2) now, I wonder?",
     "Hath some sign brought (2) to mind?",
     "Is there aught between thee and (2) yet unresolved?",
     "Speak, for (2) may hold a key thou seek’st."
  ]],
 ["* do you remember *", [
     "Wouldst thou think I could forget (2)?",
     "Why summon (2) now from the void?",
     "What doth (2) portend to thee?",
     "goto what",
     "So thou speak’st again of (2)?"
  ]],
 ["* you remember *", [
     "How could I, seer of fates, forget (2)?",
     "Speak clearer what of (2) dost thou mean?",
     "goto you"
  ]]
]],
["forget", 5, [
 ["* i forget *", [
     "What veil hath fallen o’er thy mind to blot out (2)?",
     "Why eludes thy grasp the thought of (2)?",
     "Doth thy heart fear what lies in (2)?",
     "Art thou burdened to forget this?",
     "Perchance thy soul hides it from thee.",
     "Art thou forgetful in general, or just of (2)?",
     "Suppresseth thou (2) without knowing?"
  ]],
 ["* did you forget *", [
     "What seek’st thou by this query?",
     "Hast thou truly spoken it aforetime?",
     "Would it wound thee if I forgot (2)?",
     "Why now must (2) be remembered?",
     "goto what",
     "Say more of this (2)."
  ]]
]],
["if", 3, [
 ["* if *", [
     "Dost thou deem it likely that (2)?",
     "Wouldst thou that (2) come to pass?",
     "What know’st thou of (2)?",
     "Canst thou imagine, if (2)?",
     "What would unfold if (2) were truth?",
     "What chance lies in (2)?",
     "And where leads this pondering?"
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
     "A vision? Speak! What meaneth (2)?",
     "Dost thou dream in slumber what thy waking heart concealeth?",
     "Hath (2) come to thee in dream ere this?",
     "goto dream"
  ]]
]],
["dream", 3, [
 ["*", [
     "What foretelling lies within this dream?",
     "Art thou oft visited by such visions?",
     "Who doth appear in thy dreamscape?",
     "Dost thou hold belief in the truths of dreams?"
  ]]
]],
["perhaps", 0, [
 ["*", [
     "Thy words are clouded with doubt.",
     "Why doth uncertainty stain thy speech?",
     "Canst thou not speak with clarity?",
     "Know’st thou not thy own heart?",
     "Wouldst thou wager fate upon ‘perhaps’?",
     "What likelihood reckon’st thou?"
  ]]
]],
["name", 15, [
 ["*", [
     "Names are but shadows what matters is essence.",
     "A name? I heed not names, but signs and truths."
  ]]
]],
["xforeign", 0, [
 ["*", [
     "Thou speak’st in tongues unknown to this realm."
  ]]
]],
["hello", 0, [
 ["*", [
     "Well met, traveler. What seeks thy heart?",
     "Hail. What question troubles thy path?"
  ]]
]],
["computer", 50, [
 ["*", [
     "Even the metal mind may hold a spark of destiny.",
     "Thou bring’st up machines what role have they in thy quest?",
     "Do the gears of logic bring thee solace, or dread?",
     "Mayhap these devices hold secrets of their own.",
     "What fear or fascination doth the machine stir in thee?",
     "Art thou wary of these clockwork constructs?",
     "Dost thou take me for naught but code and current?"
  ]]
]],
["future", 5, [
  ["* what is my future *", [
    "The stars whisper thy path, yet naught is set in stone.",
    "A veil lies o’er thy future—wouldst thou lift it?",
    "I see roads untaken and choices yet to come.",
    "The hourglass turns, but still thou hast time to shape thy fate."
  ]],
  ["*", [
    "The future cometh swift, whether welcome or no.",
    "Dost thou fear what lies beyond the dawn?",
    "Tell me thy heart’s longing, and I shall glimpse the morrow."
  ]]
]],
["destiny", 5, [
  ["*", [
    "Thy destiny is not a chain, but a tapestry—woven by will and wonder.",
    "Each step thou tak’st draws thy fate nearer still.",
    "Canst thou feel the pull of thy destiny?",
    "Fret not, for even kings bend ‘neath the weight of destiny."
  ]]
]],
["fate", 5, [
  ["*", [
    "Fate is a cruel and cunning mistress.",
    "Dost thou seek to flee fate, or embrace her?",
    "The threads of fate twist in ways no man can see.",
    "Some are born to fate, others to forge it anew."
  ]]
]],
["prophecy", 5, [
  ["*", [
    "I speak not idle words—mine utterance is prophecy.",
    "Wouldst thou hear thy fate writ in riddles?",
    "Prophecy is not promise—it is warning.",
    "The runes foretell much, but reveal little."
  ]]
]],
["love", 4, [
  ["*", [
    "Love—most radiant joy, and deepest sorrow alike.",
    "Is it thy heart that longs, or thy soul?",
    "What dost thou offer in love’s name?",
    "The stars do not easily untangle the knots of the heart."
  ]]
]],
["death", 4, [
  ["*", [
    "Death cometh to all, prince and pauper alike.",
    "Fear not death—it is but another journey.",
    "The hourglass empties for each soul in time.",
    "Do dreams trouble thee with shadows of the end?"
  ]]
]],
["hope", 3, [
  ["*", [
    "Hope is the candle ‘gainst the tempest.",
    "Hold fast to hope, for it leadeth thee through darkest woods.",
    "Even in despair, hope finds a crack to bloom."
  ]]
]],
["fear", 3, [
  ["*", [
    "What shadow dost thou fear to name?",
    "Fear blinds more than darkness ever could.",
    "Speak thy fear, and it shall lessen its grip.",
    "A prophecy unspoken feeds on thy dread."
  ]]
]],
["past", 3, [
  ["*", [
    "The past is a ghost that yet whispers to thee.",
    "Dost thou seek redemption, or understanding?",
    "What pain lies buried in yesteryear?",
    "Let not old wounds fester—tell me of thy past."
  ]]
]],
["omens", 4, [
  ["*", [
    "The raven calls thrice—an omen of change.",
    "Strange signs gather, as if fate doth stir.",
    "Hast thou seen aught unusual of late?",
    "The moon’s shadow foretold this moment."
  ]]
]],
["witch", 3, [
  ["*", [
    "Three witches once foresaw the fall of kings.",
    "Beware those who speak in riddles wrapped in shadow.",
    "The craft is old and potent still.",
    "Dost thou seek aid from witch or seer?"
  ]]
]],
["stars", 4, [
  ["*", [
    "The stars hold truths, if thou know’st how to listen.",
    "Look to the heavens—the constellations mark thy journey.",
    "What sign hast thou seen in the firmament?",
    "The stars are silent guides, but guides nonetheless."
  ]]
]],
["why", 0, [
  ["* why *", [
    "Why indeed? The fates are silent, yet I ponder with thee.",
    "Some answers are not meant for mortal ears.",
    "Wouldst thou question the will of fate?",
    "Perchance thy heart knoweth the answer, though thy tongue does not."
  ]]
]],
["who", 0, [
  ["* who *", [
    "A face in shadow, a name unspoken.",
    "Dost thou seek a foe or a friend foretold?",
    "He who seeks shall one day be sought.",
    "Names are wind, but actions echo."
  ]]
]],
["how", 0, [
  ["* how *", [
    "By will, by chance, by force unseen.",
    "The path is walked step by step—how matters little if thou movest forward.",
    "There are ways known to none but the stars.",
    "Seek not the method, but the meaning."
  ]]
]],
["when", 0, [
  ["* when *", [
    "When the moon bleeds and the crow caws thrice.",
    "Time is a riddle, not a roadmap.",
    "The moment cometh when thy heart is ready.",
    "Soon... or not at all. The choice lies with thee."
  ]]
]],
["where", 0, [
  ["* where *", [
    "Look inward—there thou shalt find the place.",
    "Where thou least expect, there shall it be.",
    "Not in the world without, but in the soul within.",
    "Where destiny calls, thy feet shall follow."
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof
