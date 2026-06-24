// Ashley's Strength — entries.js  (SEED / PROOF SET)
// Four fully-written proof entries, one per section, at the quality bar.
// All original-language terms LEXICON-VERIFIED (BDB/Strong's). See VERIFIED_TERMS.md.
// Claude Code: extend to ~20 per section per BUILD_INSTRUCTION.md. Match this voice
// and depth exactly. Verify every new term. Do NOT invent or gloss from memory.

export const SECTIONS = [
  { id:'mother', kicker:'When you are pouring out', title:'For the Mother', color:'#E8B4C4',
    desc:'For the days you are carrying someone, and wondering who is carrying you.' },
  { id:'thin', kicker:'When there is nothing left', title:'Stretched Thin', color:'#E8C97A',
    desc:'For when you are emptied out before the day has even started.' },
  { id:'rest', kicker:'When you cannot quiet down', title:'Permission to Rest', color:'#7FD9B8',
    desc:'For the mind that will not stop, and the body that needs to.' },
  { id:'voice', kicker:'When the words run out', title:'The Words You Carry', color:'#A78BFF',
    desc:'For what you say to yourself, and finding your own voice again under all the noise.' },
];

export const ENTRIES = [
  {
    id:'e001', section:'mother',
    title:'For the One Still Carrying Someone',
    land:{ ref:'Isaiah 40:11',
      text:'He protects his flock like a shepherd; he gathers the lambs in his arms and carries them in the fold of his garment. He gently leads those that are nursing.'},
    where:'Isaiah is writing to people who are worn out and far from home, exiles who feel like God has stopped paying attention. Right in the middle of a chapter about how unimaginably big God is, who measures the oceans in the palm of his hand, he stops and gets small and tender. He says: and that same God is a shepherd, and he handles the nursing mothers differently. He slows down for them.',
    word:{ term:'נָהַל', translit:'nahal', gloss:'to lead gently, at the pace of the weak, to water and to rest',
      note:'It is not a word for driving a flock forward. It is the word for leading the ones who cannot go fast. The lexicon says it means to bring them to water and let them stop there. He sets the pace to you, not you to him.'},
    reflect:[
      'Notice who he singles out. Not the strong sheep, not the fast ones. The ones that are nursing. The ones with something small and constant depending on their body. He does not tell them to keep up. He changes how he leads so they do not have to.',
      'You have been setting the pace for everyone in your house for a long time. Their hunger, their mornings, their needing. And somewhere in there the quiet belief crept in that you have to keep up too, with all of it, perfectly, without slowing down. That belief is not from him.',
      'He leads the nursing ones gently. That is the whole picture. He already knows you are carrying someone. He is not waiting for you to put them down and become efficient again. He is leading you the way you actually are, at the pace you can actually go, toward water.'
    ],
    carry:'You do not have to keep up today. You are being led, gently, by Someone who set the pace to you.'
  },
  {
    id:'e002', section:'thin',
    title:'When There Is Nothing Left to Pour',
    land:{ ref:'Matthew 11:28',
      text:'Come to me, all of you who are weary and burdened, and I will give you rest.'},
    where:'Jesus says this on a hard day, right after being rejected by the towns he had poured the most into. He is not speaking from a calm mountaintop. He is tired too, and turned away, and that is the moment he opens his arms to everyone else who is tired. He says it to ordinary people who were exhausted from trying to be good enough. He says come.',
    word:{ term:'ἀναπαύω', translit:'anapauo', gloss:'to refresh, to restore strength, not merely to stop',
      note:'This is not the word for collapsing on the couch. It is built to mean being filled back up. It is the same word used for God resting on the seventh day. And the way he says it here is a promise, not a maybe: I will give you rest.'},
    reflect:[
      'There is a kind of tired that sleep does not fix. You can get a full night and wake up already behind, already poured out before your feet hit the floor. That is the tired he is talking to. Not the body. The part of you underneath the body.',
      'Look at what he does not say. He does not say come to me once you have caught up. He does not say rest after the laundry, after they are asleep, after you have earned it. He says come, weary, as you are, right now, mid-mess.',
      'And the rest he offers is not just permission to stop. The word means to be refreshed, refilled, given strength back. You have been running on a tank that says empty. He is not asking you to keep driving on it. He is offering to fill it. That is the promise, and it is a definite one. He will.'
    ],
    carry:'You are not asked to refill yourself. Come empty. The filling is his to do.'
  },
  {
    id:'e003', section:'rest',
    title:'The Child Who Stopped Crying',
    land:{ ref:'Psalm 131:2',
      text:'Instead, I have calmed and quieted my soul like a weaned child with its mother; my soul is like a weaned child.'},
    where:'This is one of the shortest psalms in the Bible, written by David, a man who ran a kingdom and could have let his mind run just as wide. Instead he writes a tiny poem about not doing that. About laying down the things too big to hold. He does not picture a soldier or a king. He pictures a small child who has finally stopped fussing on its mother.',
    word:{ term:'דָּמַם', translit:'damam', gloss:'to be silent, to grow still, to quiet the inner noise',
      note:'It does not mean nothing is wrong. It means the noise inside has gone quiet. In the verse it is paired with another word for actively calming yourself, smoothing out what was agitated. Stillness you choose, not stillness you wait to feel.'},
    reflect:[
      'A weaned child is the picture here, and it matters that it is weaned. A nursing baby on its mother is crying for something, wanting, reaching. A weaned child has learned it can just be held. Not getting anything. Not needing the next thing. Just close, and quiet, and enough.',
      'Your mind probably does not stop when your hands do. The lists keep running. The things too big for you to fix keep circling, the worries about them, the ones you love, the future you cannot see. David knew that pull. He wrote this to talk himself down from it.',
      'And notice it was something he did, on purpose. I have calmed and quieted my soul. He did not wait until he felt peaceful. He stilled the noise like you would settle a child, gently, deliberately, again and again. You are allowed to do that today. To be the weaned child for once instead of the mother. To stop reaching, and just be held.'
    ],
    carry:'You can put it down. The things too big for you were never yours to hold. Be still, and be held.'
  },
  {
    id:'e004', section:'voice',
    title:'The Voice You Use on Yourself',
    land:{ ref:'Proverbs 18:21',
      text:'Death and life are in the power of the tongue, and those who love it will eat its fruit.'},
    where:'Proverbs is a collection of hard-won wisdom, much of it about the mouth, how a word lands, builds, or wounds. This one usually gets read as a warning about how we talk to other people. But the Hebrew does not limit it that way. The tongue is the tongue, whoever it is aimed at. And the person most in range of yours, all day, every day, is you.',
    word:{ term:'לָשׁוֹן', translit:'lashon', gloss:'the tongue, and the speech it carries',
      note:'In Hebrew the same word means the tongue and the words it makes. You cannot separate them. The verse literally says life and death are in the hand of the tongue, like a tool a hand picks up. The voice in your own head is holding that tool too.'},
    reflect:[
      'Listen to how you talk to yourself on a hard day. Not enough. Behind. Should have handled that better. Falling apart. If a friend spoke to you the way you speak to you, you would not keep her around. But you let that voice run all day, and you believe it, because it sounds like the truth when you are tired.',
      'The verse says the tongue holds life and death like a hand holds a tool. That is just as true pointed inward. The words you say over yourself are planting something, and the verse is honest that you will eat the fruit of it. Speak death over yourself all week and you will feel it by Friday. It shapes you.',
      'You do not have to manufacture some cheerful voice you do not believe. That is not the fix. The fix is to stop letting the cruelest voice be the loudest one, and to say something truer instead. You are tired, not failing. You are stretched, not broken. You came today. Start there, and say it like you would say it to someone you love.'
    ],
    carry:'The kindest voice in your day can be your own. Speak life over yourself today. You will eat that fruit too.'
  },

  // ── BATCH 1 · For the Mother · terms lexicon-verified (BLB/Strong's) ──
  // LAND verse text PENDING — paste exact CSB wording into each `text` field
  // before deploying. Not live until filled.
  {
    id:'e005', section:'mother',
    title:'The One Who Cannot Forget You',
    land:{ ref:'Isaiah 49:15', text:`Can a woman forget her nursing child, or lack compassion for the child of her womb? Even these may forget, but I will not forget you.`},
    where:`Isaiah is speaking to exiles who had decided God forgot them — "the Lord has abandoned me." God answers by reaching for the one love everybody assumes can't fail: a nursing mother's. Even that, he says, could give out before he forgets you.`,
    word:{ term:'רָחַם', translit:'racham', gloss:'womb-deep compassion, a nursing mother’s tenderness',
      note:`It is built from the same root as rechem, the womb. God's compassion is not a decision he talks himself into — it is the involuntary ache a mother feels in her body. Wired in. Not earned.`},
    reflect:[
      `The verse leans on something you now know from the inside. Before kids, "a mother's love" was a phrase. Now it is the ache you feel in your chest when they cry in another room. God picked that exact love to make his point.`,
      `And then he says: even that could fail before mine does. Your compassion for them, as fierce as it is, is a small echo of his racham for you — the womb-deep kind that aches.`,
      `You spend all day holding everyone in mind — their meals, their moods, their needing. It is worth asking who is holding you in mind that way. He is. The verse goes on to say he has you engraved on his hands. Not forgotten. Carried in his attention the way you carry them in yours.`
    ],
    carry:`You are not forgotten today. The One whose compassion runs deeper than a mother's has you engraved where he cannot lose you.`
  },
  {
    id:'e006', section:'mother',
    title:'What Holds You Up',
    land:{ ref:'Numbers 11:12', text:`Did I conceive all these people? Did I give them birth so you should tell me, ‘Carry them at your breast, as a nursing mother carries a baby,’ to the land that you swore to give their ancestors?`},
    where:`Moses, worn down to nothing by carrying a whole nation that only complained, cries out to God — did I give birth to these people, that you would have me carry them like a nurse carries an infant? It may be the most honest burnout prayer in the Bible. God does not scold him for it.`,
    word:{ term:'אָמַן', translit:'aman', gloss:'to support, to carry, to be firm and trustworthy',
      note:`It is the root behind the word "amen." The same idea: something so steady you can lay your whole weight on it and it holds.`},
    reflect:[
      `Moses names your exact day — carrying people who cannot yet carry themselves, who mostly just need. He said it out loud to God, as a complaint, and it is in Scripture without a rebuke attached. You are allowed to feel the weight of it.`,
      `The word for that carrying is aman — firm, trustworthy, weight-bearing. It is the word we have turned into "amen": this is sure, I can rest here.`,
      `You are the aman for everyone under your roof — the firm thing they lean their whole weight on. But you were never meant to be the bottom of the stack. You need something steadier than you underneath you. When you say "amen" tonight, hear it as a place to set the weight down: this One is firm. Lean.`
    ],
    carry:`You hold everyone up. Tonight, let yourself be held by the One who is firmer than you — and rest your weight there.`
  },
  {
    id:'e007', section:'mother',
    title:'Strength You Do Not Have to Make',
    land:{ ref:'Isaiah 41:10', text:`Do not fear, for I am with you; do not be afraid, for I am your God. I will strengthen you; I will help you; I will hold on to you with my righteous right hand.`},
    where:`God speaks to people with no strength left of their own: do not fear, I am with you; I will strengthen you, I will help you, I will hold you. Three promises in a row, and the subject of every one of them is God, not them.`,
    word:{ term:'חָזַק', translit:'chazaq', gloss:'to be strong, to grow firm — here, to be made strong by another',
      note:`Here is the striking part: God is the one doing the verb. "I will strengthen you." It is not strength you summon up — it is strength handed to you from outside.`},
    reflect:[
      `You have been told to "be strong" so many times it barely means anything — usually it just means do not fall apart where they can see. That is not strength, that is holding your breath.`,
      `But chazaq here is not an order to manufacture anything. God makes himself the subject: I will strengthen you. You are not the engine. You are the one receiving.`,
      `So the days you have nothing left to be strong with are not the days you are failing the verse — they are the days it is actually for. The strength is given, refilled from outside you. You can unclench your jaw and take it.`
    ],
    carry:`You do not have to generate the strength today. It is his to give and yours to receive. Stop white-knuckling, and let him.`
  },
  {
    id:'e008', section:'mother',
    title:'Carried the Whole Way',
    land:{ ref:'Deuteronomy 1:31', text:`And you saw in the wilderness how the LORD your God carried you as a man carries his son all along the way you traveled until you reached this place.`},
    where:`Moses reminds the people how they got through the wilderness — the Lord your God carried you, as a father carries his son, the whole way, until you reached this place. He says it to people who half-believed they had survived on their own grit.`,
    word:{ term:'נָשָׂא', translit:'nasa', gloss:'to lift, to bear, to carry',
      note:`The same verb is used when God "lifts up his face" toward you to bless you (Numbers 6:26). To carry you and to turn his face toward you are the same motion.`},
    reflect:[
      `You carry people all day — on your hip, in your arms, in the back of your mind. You do not often get carried.`,
      `The verse says God carried them the entire way, the way you carry a child whose legs gave out a mile ago. And here is the thing: they only saw it clearly looking back.`,
      `You will look back on this stretch the same way. The strength that got you through the hardest part was not all yours — you were being carried, even on the days it felt like crawling. And the arms carrying you belong to the One who lifts his face toward you while he does it. You are not just hauled along. You are looked at, with love, the whole way.`
    ],
    carry:`You are being carried further than you can feel right now — and looked on with love the whole way there.`
  },
  {
    id:'e009', section:'mother',
    title:'A Hand Under the Bent-Over',
    land:{ ref:'Psalm 145:14', text:`The LORD helps all who fall; he raises up all who are oppressed.`},
    where:`Psalm 145 is a song about how majestic God is — and right in the middle of all that height, one line bends low: the Lord upholds all who are falling and raises up all who are bowed down. A small, specific mercy tucked inside a huge psalm.`,
    word:{ term:'סָמַךְ', translit:'samak', gloss:'to prop, to support, to uphold the one who is sinking',
      note:`It is a hands-on word: a prop wedged under something about to give way, a flat hand pressed against a back that is bending. Not cheering from across the room — weight-bearing support, right where you are caving.`},
    reflect:[
      `Bent low is a posture you know in your body — curved over a sink, a crib, a basket, a phone at 2am, your shoulders folding under what they carry.`,
      `Samak is the word for a hand placed exactly there, under the part that is giving way. It is not encouragement shouted from a distance. It is a prop. Pressure precisely where you are sinking.`,
      `And notice who it is for: the ones who fall, the ones bent low. He does not wait for you to straighten up and look strong before he helps. The bending is the qualification. You do not have to stand up first — let the hand take the weight that is folding you.`
    ],
    carry:`You do not have to straighten up before he helps. He props the ones already bending. Let the weight rest on his hand.`
  },

  // ── BATCH 2 · For the Mother (completes the section, 10 terms) · verified ──
  {
    id:'e010', section:'mother',
    title:'Run Toward the Wing',
    land:{ ref:'Psalm 91:4', text:`He will cover you with his feathers; you will take refuge under his wings. His faithfulness will be a protective shield.`},
    where:`Psalm 91 pictures God as a mother bird — he will cover you with his feathers, and under his wings you will find refuge. The image is a hen pulling her chicks under her in a storm. They run toward her, not away.`,
    word:{ term:'כָּנָף', translit:'kanaph', gloss:'a wing; the corner of a garment that covers',
      note:`It is the mother-bird's wing the chicks scramble under when danger comes. The same word is the corner of a garment pulled over someone to shelter them. A covering you run toward, not away from.`},
    reflect:[
      `When everything is loud and coming apart, your instinct is to make yourself bigger — handle it, cover everyone else. A chick does the opposite. It runs small and fast toward the wing.`,
      `Kanaph is that wing. God does not ask you to weather the storm standing tall and exposed. He opens a covering and says, get under here.`,
      `You are allowed to be the one who runs for shelter, not only the shelter everyone else runs to. Get small under the wing for a minute. It is not weakness. It is exactly where the chick is safest.`
    ],
    carry:`You do not have to be the shelter right now. There is a wing open for you too. Run small, and get under it.`
  },
  {
    id:'e011', section:'mother',
    title:'The One Who Does Not Sleep',
    land:{ ref:'Psalm 121:3-4', text:`He will not allow your foot to slip; your Protector will not slumber. Indeed, the Protector of Israel does not slumber or sleep.`},
    where:`Psalm 121 is a song for travelers, and it keeps repeating one word: the Lord keeps you, keeps your life, and neither slumbers nor sleeps. It was sung by people walking dangerous roads who needed to know someone was watching while they could not.`,
    word:{ term:'שָׁמַר', translit:'shamar', gloss:'to guard, to keep watch, to hedge around and protect',
      note:`It is the word for a watchman on the wall through the night. The psalm's comfort is that the One doing it never even dozes. The night watch is covered without you.`},
    reflect:[
      `You know the night shift. The 2am feed, the ear kept half-open for a cough, the watching that never quite clocks out.`,
      `Shamar is that watching — guarding, keeping, eyes open in the dark. And the whole point of the psalm is that the One who keeps you does it without ever needing to sleep.`,
      `You cannot stay awake forever, and you were never meant to be the only one on watch. While you finally close your eyes, the watch is still being kept. You can sleep, because Someone who never sleeps is keeping you and the ones you love.`
    ],
    carry:`You can close your eyes tonight. The watch does not go unmanned when you sleep — He never does.`
  },
  {
    id:'e012', section:'mother',
    title:'Folded In',
    land:{ ref:'Genesis 33:4', text:`But Esau ran to meet him, hugged him, threw his arms around him, and kissed him. Then they wept.`},
    where:`Jacob is bracing to meet a brother who had every reason to hate him. Instead Esau runs to him, throws his arms around his neck, and holds him — years of dread dissolving in one embrace. The Hebrew is the word for being folded all the way in.`,
    word:{ term:'חָבַק', translit:'chabaq', gloss:'to clasp, to embrace, to fold someone all the way into your arms',
      note:`Not a side-hug or a pat. The whole-arms, pulled-all-the-way-in kind of hold — the one that says you are safe now, you can stop bracing.`},
    reflect:[
      `You give that hold all day — the kind where a small body finally goes soft against you because it knows it is safe. You are very good at being the arms.`,
      `Chabaq is that fold-all-the-way-in embrace, and in the story it lands on the one who was braced for rejection. The dread melts because the arms got there first.`,
      `You spend so much energy braced — for the next need, the next thing to go wrong. Imagine being the one folded in for once. That is what is offered. Not a pat on the back for keeping it together. Arms all the way around, and permission to finally stop bracing.`
    ],
    carry:`You can stop bracing. The arms are already around you, all the way, and you are safe to go soft.`
  },
  {
    id:'e013', section:'mother',
    title:'Gathered Before You Are Carried',
    land:{ ref:'Isaiah 40:11', text:`He protects his flock like a shepherd; he gathers the lambs in his arms and carries them in the fold of his garment. He gently leads those that are nursing.`},
    where:`Back to the shepherd of Isaiah 40. Before he carries the lambs in the fold of his garment, he gathers them in. There is a motion before the carrying — collecting the ones who scattered, drawing them back into the circle of his arm.`,
    word:{ term:'קָבַץ', translit:'qabats', gloss:'to gather in, to collect, to draw the scattered back together',
      note:`It is the motion that comes before the carrying. First the gathering — sweeping in the ones who wandered or got lost — then the lifting. He collects you before he carries you.`},
    reflect:[
      `Some days you feel scattered — pieces of you left in every room, in everyone's needs, nothing gathered, nothing whole.`,
      `The shepherd's first move is not to carry. It is to qabats — to gather. He sweeps the scattered lambs back into the circle of his arm before he lifts a single one.`,
      `Before he asks anything of you, before the carrying even starts, he gathers. He collects the scattered pieces of you back into one place, held. You do not have to pull yourself together first. The gathering is his to do, and it comes before everything else.`
    ],
    carry:`You do not have to pull yourself together first. He gathers the scattered pieces in — that comes before anything is asked of you.`
  },

  // ════════ STRETCHED THIN ════════ terms lexicon-verified (BLB/Strong's)
  {
    id:'e014', section:'thin', title:'Even He Sat Down Tired',
    land:{ ref:'John 4:6', text:`Jacob's well was there, and Jesus, worn out from his journey, sat down at the well. It was about noon.`},
    where:`It is the middle of the day, and Jesus — fully God — is also fully worn out. He stops at a well because his body cannot keep going without a rest. The Gospel does not hide it. The One holding the universe together sat down because he was tired.`,
    word:{ term:'κοπιάω', translit:'kopiao', gloss:'to labor to exhaustion, to grow weary',
      note:`It is the word for bone-tired from work — the same word Jesus uses in "come to me, all you who labor." He knows the feeling from the inside.`},
    reflect:[
      `There is something quietly freeing about a tired God. Jesus did not power through the noon heat to prove a point. He sat down. His body had a limit, and he honored it, in the middle of the most important work anyone has ever done.`,
      `You carry a quiet belief that stopping is failing — that if you were really managing, you would not need to sit down. That belief did not come from him. He stopped. Mid-mission, mid-day, he stopped.`,
      `Kopiao is your kind of tired, and he has felt it. You are not being weak when your body asks to rest. You are being human, the way he was human. Sit down at the well for a minute. He did.`
    ],
    carry:`Even he sat down when he was tired. You are allowed to stop in the middle of the day — it is not failure, it is being made the way he was made.`
  },
  {
    id:'e015', section:'thin', title:'The Reaping Comes Later',
    land:{ ref:'Galatians 6:9', text:`Let us not get tired of doing good, for we will reap at the proper time if we don't give up.`},
    where:`Paul writes to people doing the slow, unseen good that never seems to pay off, and tells them not to give up — the harvest comes at its own time, not on their schedule. He names the exact temptation of anyone pouring out with nothing visible coming back.`,
    word:{ term:'ἐκκακέω', translit:'ekkakeo', gloss:'to lose heart, to grow weary in doing good',
      note:`Not physical tiredness — the soul-level weariness of doing good that no one notices. The kind that whispers, what is even the point.`},
    reflect:[
      `The work you do mostly disappears. The meal is eaten and they are hungry again. The floor is clean for an hour. The patience you spent this morning is gone by noon, and no one saw it. That is the soil this verse is planted in.`,
      `Ekkakeo is the weariness of unseen good — not your arms, your heart. The slow erosion of "does any of this matter." Paul does not scold it. He just says, do not give up, because the reaping is real and it comes at the proper time.`,
      `You are not failing to see results because you are doing it wrong. The harvest of these years is simply not in yet. Seeds do not look like anything for a long time. What you are pouring out is not vanishing. It is planted.`
    ],
    carry:`The good you are doing has not disappeared — it is planted, and the harvest comes at its own time. Do not give up before it grows.`
  },
  {
    id:'e016', section:'thin', title:'Renewed on the Inside',
    land:{ ref:'2 Corinthians 4:16', text:`Therefore we do not give up. Even though our outer person is being destroyed, our inner person is being renewed day by day.`},
    where:`Paul admits the obvious — the outer self is wearing out — and then says something almost stubborn against it: even so, the inner self is being renewed, day by day. Both things true at once.`,
    word:{ term:'ἀνακαινόω', translit:'anakainoo', gloss:'to renew, to make new again from the inside',
      note:`Present tense, ongoing — being renewed, day by day. Not a one-time fix. A daily, quiet refurbishing of the part of you the mirror does not show.`},
    reflect:[
      `Some days the outer wearing-out is all you can feel — the tiredness in your face, the body that is not what it was, the running on empty. Paul does not deny any of it. He says, yes, the outer person is being destroyed. He is honest.`,
      `But underneath, he says, something else is happening that you cannot see in a mirror — anakainoo, a daily renewing of the inner you. Worn out and being made new, in the same body, on the same day.`,
      `You are not only depleting. While the outer is spending itself on everyone, the inner is being quietly refilled by God, day by day. You do not have to engineer it. It is being done in you, even now, even tired.`
    ],
    carry:`You are wearing out and being renewed at the same time. The part of you no mirror shows is being made new today.`
  },
  {
    id:'e017', section:'thin', title:'Even the Strong Ones Fall',
    land:{ ref:'Isaiah 40:30', text:`Youths may become faint and weary, and young men stumble and fall,`},
    where:`Right before the famous promise about renewed strength, Isaiah is honest: even the young and strong — the ones who should never run out — grow weary and fall. He names the limit before he names the hope.`,
    word:{ term:'יָגַע', translit:'yaga', gloss:'to grow weary through toil, to be worn out by labor',
      note:`It is the weariness that comes from spending effort, from giving out energy. Even the strongest run dry, and the verse refuses to pretend otherwise.`},
    reflect:[
      `Notice the verse does not say only the weak get tired. It says the youths, the ones built for stamina — even they faint, even they fall. Strength is not the same thing as never running out.`,
      `Yaga is the weariness of spent effort, and Isaiah puts it on the strongest people he can name, on purpose. So you can stop measuring yourself against some imaginary mother who never gets tired. She does not exist. The young and strong fall too.`,
      `Your tiredness is not evidence that you are doing this badly. It is evidence that you are spending yourself, like every real person does. The verse names the falling honestly — and then, in the next breath, tells you where the other kind of strength comes from.`
    ],
    carry:`Even the strong run out — that is not your failure, it is everyone's limit. Your tiredness is honest, and it is not the end of the verse.`
  },
  {
    id:'e018', section:'thin', title:'Strength for the Empty',
    land:{ ref:'Isaiah 40:29', text:`He gives strength to the faint and strengthens the powerless.`},
    where:`In the same passage, Isaiah says who God actually gives strength to — not the capable, not the topped-up, but the faint and the powerless. The gift goes precisely to the ones with nothing left.`,
    word:{ term:'עָיֵף', translit:'ayeph', gloss:'faint, exhausted, drained to empty',
      note:`The word for someone whose tank reads empty. And this is exactly who the verse says receives strength — not despite being empty, but because that is who the strength is for.`},
    reflect:[
      `Read who qualifies: the faint, the powerless. Not the ones holding it together. Not the ones who got enough sleep. The gift is aimed at the ayeph — the drained, the ones with nothing in reserve.`,
      `You keep waiting to feel less empty before you expect anything from God, as if you have to bring some strength to the table first. The verse says the opposite. Empty is the address the strength gets delivered to.`,
      `You do not need to manufacture a little energy to make yourself eligible. Your emptiness is not disqualifying — it is the exact condition this promise was written for. He gives strength to the faint. That is you, today.`
    ],
    carry:`The strength is for the empty, not the topped-up. You do not have to find some first — being faint is who the promise is for.`
  },
  {
    id:'e019', section:'thin', title:'Strength That Gets Traded In',
    land:{ ref:'Isaiah 40:31', text:`but those who trust in the LORD will renew their strength; they will soar on wings like eagles; they will run and not become weary, they will walk and not faint.`},
    where:`The passage lands here: those who trust in the Lord will renew their strength. After naming the falling and the faint, Isaiah names the turn — not strength you summon, but strength exchanged for his.`,
    word:{ term:'חָלַף', translit:'chalaph', gloss:'to exchange, to change one thing for another, to renew',
      note:`It does not mean you dig deeper and find more of your own. It means a trade — your spent strength swapped out for his fresh one, the way you swap an empty tank for a full one.`},
    reflect:[
      `"Renew their strength" sounds like it means try harder, reach down further. The word does not mean that. Chalaph is an exchange — handing over the empty and receiving the full. A trade, not a squeeze.`,
      `That changes what "trusting in the Lord" is for. It is not standing around hoping you feel better. It is the handoff — bringing him the drained tank because you cannot refill it yourself, and letting him do the swap.`,
      `You have been trying to renew your own strength by sheer will, and it keeps running out because it is still yours. The verse offers a different supply entirely. Trade it in. Let the strength you run on stop being the strength you have to make.`
    ],
    carry:`You do not renew your strength by finding more of your own. You trade the empty in for his. Hand it over today.`
  },
  {
    id:'e020', section:'thin', title:'Built Into the Week',
    land:{ ref:'Exodus 23:12', text:`Do your work for six days but rest on the seventh day so that your ox and your donkey may rest, and the son of your female slave as well as the resident alien may be refreshed.`},
    where:`In the middle of the law, God commands a rest — not as a reward, but as a rhythm, so that everyone, down to the animals and the overlooked, may catch their breath. Rest is not earned here. It is built in.`,
    word:{ term:'נָפַשׁ', translit:'naphash', gloss:'to breathe, to catch one’s breath, to be refreshed',
      note:`It is literally about breathing again — the deep breath after holding it too long. God wired a breath-catching day into the very structure of time.`},
    reflect:[
      `Notice God did not make rest optional, or something you reach once everything is finished. He commanded it, and aimed it at the ones most likely to be worked to nothing — the servant, the foreigner, the animals. The ones who do not get to stop unless someone tells them they are allowed.`,
      `Naphash is the exhale you have been forgetting to take. God built a day for it into the week itself, which means rest is not stolen time you have to feel guilty about. It is part of the design.`,
      `You are allowed to breathe. Not after the list is done — the list is never done. The breath is built in, commanded, blessed. Take the one you have been holding.`
    ],
    carry:`Rest is not stolen time you have to earn back. God built the breath into the week. You are allowed to take it.`
  },
  {
    id:'e021', section:'thin', title:'The One Who Gets Filled',
    land:{ ref:'Jeremiah 31:25', text:`for I satisfy the thirsty person and feed all those who are weak.`},
    where:`God makes a flat promise to the worn-out: I satisfy the weary, I feed the weak. No conditions attached, no list to complete first. Just the promise to do the filling himself.`,
    word:{ term:'רָוָה', translit:'rava', gloss:'to drench, to satiate, to water until fully satisfied',
      note:`It is the word for ground soaked by rain until it can hold no more, for thirst completely quenched. Not a sip. A drenching.`},
    reflect:[
      `You are good at being the one who fills — cups, bellies, needs, gaps. You are out of practice at being the one who gets filled. This verse is for that out-of-practice part.`,
      `Rava is not a top-off. It is a soaking, the way dry ground drinks a long rain. And God says he is the one who does it: I satisfy the weary soul. You are not assigned to refill yourself from a well that is already dry.`,
      `The thirst you feel at the end of these long days is not a flaw to fix on your own. It is exactly what he offers to meet. Come thirsty. The filling is his to pour, and he pours it deep.`
    ],
    carry:`You do not have to fill yourself from an empty well. Come thirsty — the soaking is his to give, and he gives it deep.`
  },
  {
    id:'e022', section:'thin', title:'The Longing Gets Met',
    land:{ ref:'Psalm 107:9', text:`For he has satisfied the thirsty and filled the hungry with good things.`},
    where:`A psalm of people rescued from wandering and hunger remembers what God does: he satisfies the longing soul and fills the hungry with good. The deep wanting is not ignored. It is filled.`,
    word:{ term:'שָׂבַע', translit:'saba', gloss:'to be satisfied, to be filled to the point of enough',
      note:`The word for the fullness after a real meal — not still wanting, not gnawing. Enough. The longing finally quieted by being met.`},
    reflect:[
      `There is a hunger under the physical tiredness — a longing to be filled, noticed, enough. You feed everyone else's hunger all day and quietly wonder if yours just does not get a turn.`,
      `Saba is the satisfied fullness this psalm promises, and it is aimed straight at the longing soul. Not a scolding for wanting. A filling of the want. He satisfies the one who longs.`,
      `Your longing to be poured into is not selfishness to suppress. It is a real hunger that God names and says he meets. You are allowed to be hungry for filling, and you are allowed to believe it is coming. He fills the hungry with good things.`
    ],
    carry:`The longing under the tiredness is not selfish — it is a hunger God promises to fill. You are allowed to be filled.`
  },
  {
    id:'e023', section:'thin', title:'Pouring Out, Honestly',
    land:{ ref:'1 Samuel 1:15', text:`"No, my lord," Hannah replied. "I am a woman with a broken heart. I haven't had any wine or beer; I've been pouring out my heart before the LORD.`},
    where:`Hannah is so emptied by grief that she is mistaken for drunk while she prays. She is not. She is doing something holier than composure — pouring her whole self out before God, raw and unhidden.`,
    word:{ term:'שָׁפַךְ', translit:'shaphak', gloss:'to pour out, to empty completely',
      note:`The word for tipping a vessel until nothing is left — and Hannah uses it of her own soul. She does not bring God a tidy prayer. She brings him the whole emptying.`},
    reflect:[
      `Hannah did not wait until she had it together to come to God. She came undone, weeping, mouthing words, so spent she looked unwell. And that pouring-out was not irreverent. It was the prayer.`,
      `Shaphak is the complete emptying, and Hannah aims it upward — pouring her heart out before the Lord. You are allowed to do that. Not a polished prayer. The actual contents of a worn-out heart, tipped out where he can hold them.`,
      `You do not have to clean yourself up before you come. The mess is welcome. Pour it out — the worry, the depletion, the things you cannot say to anyone else — and let him be the one who catches it.`
    ],
    carry:`You do not have to come to him composed. Pour the whole heart out, mess and all. That emptying is the prayer.`
  },
  {
    id:'e024', section:'thin', title:'When It All Feels Pointless',
    land:{ ref:'Ecclesiastes 2:11', text:`When I considered all that I had accomplished and what I had labored to achieve, I found everything to be futile and a pursuit of the wind. There was nothing to be gained under the sun.`},
    where:`The wisest, most accomplished man alive looks at everything he built and labored for and calls it vapor — a chasing after wind. Not despair, exactly. Honesty about how empty even good work can feel.`,
    word:{ term:'עָמָל', translit:'amal', gloss:'wearying toil, labor that drains body and mind',
      note:`It is work that costs you, the kind that wears down. Solomon uses it of his whole life's effort, and admits how often it felt like grasping at air.`},
    reflect:[
      `Some days the work feels exactly like this — endless amal, effort poured into things that come undone by bedtime, and the quiet question of whether any of it counts. If the wisest man alive felt that, you are not broken for feeling it.`,
      `The verse does not rush to fix the feeling. It sits in the honesty. There is a strange relief in Scripture admitting that toil under the sun really can feel like chasing wind — that you are not ungrateful for noticing.`,
      `But the same book ends by pointing past the sun: the work is not actually pointless when it is held by God, even the parts that vanish by nightfall. Your laundry-and-crumbs days are not vapor to him. He sees the toil the mirror and the to-do list never credit.`
    ],
    carry:`It is not ungrateful to feel the work is endless. Even the toil that vanishes by nightfall is seen and held by God.`
  },
  {
    id:'e025', section:'thin', title:'The Mercy That Did Not Run Out',
    land:{ ref:'Lamentations 3:22', text:`Because of the LORD's faithful love we do not perish, for his mercies never end.`},
    where:`A man sitting in the rubble of everything he loved finds one thing still standing: God's faithful love has not ended. In the lowest book in the Bible, this is the turn — the mercy that outlasted the worst.`,
    word:{ term:'חֶסֶד', translit:'hesed', gloss:'steadfast covenant love; loyal mercy that does not quit',
      note:`Not a feeling-based affection but a committed, unbreakable love. The reason "we do not perish" — his hesed simply does not run out, even when everything else does.`},
    reflect:[
      `This is written from rock bottom, by someone who lost nearly everything. And what he reaches for is not a silver lining. It is hesed — a love so steady it is the only reason he is still here at all.`,
      `You measure a lot of days by what ran out — patience, energy, time, margin. This verse points at the one thing that did not. His faithful love did not deplete overnight, no matter how depleted you went.`,
      `You woke up today still held, still inside a love that did not give out while you slept. That is not because you earned a refill. It is because his hesed does not run dry. The mercy was there before you opened your eyes.`
    ],
    carry:`Whatever ran out yesterday, his faithful love did not. You woke inside a mercy that does not run dry.`
  },
  {
    id:'e026', section:'thin', title:'New Every Morning',
    land:{ ref:'Lamentations 3:23', text:`They are new every morning; great is your faithfulness!`},
    where:`The same man, in the same rubble, says the mercies are new every morning — and names God's faithfulness as great. From the bottom, he discovers that mercy arrives fresh each day, like it cannot help itself.`,
    word:{ term:'אֱמוּנָה', translit:'emunah', gloss:'firmness, steadfast faithfulness, reliability',
      note:`The word for something you can count on, fixed and sure. Here it describes a faithfulness that reloads every single morning — not last night's leftovers, but new.`},
    reflect:[
      `Whatever you used up yesterday — the patience, the grace, the gentleness you ran clean out of by 8pm — did not have to be rationed into today. The mercy is new this morning. A fresh allotment, not yesterday's scraps.`,
      `Emunah is the steady faithfulness behind that resupply. It is great, the verse says — meaning vast, more than enough, refilling before you are even awake to ask.`,
      `You do not start today with whatever was left over. You start it with new. However badly yesterday went, this morning's mercy did not carry the grudge. It came fresh, because his faithfulness simply does that, every day, without fail.`
    ],
    carry:`You do not run on yesterday's leftovers. The mercy is new this morning — it always is. Begin there.`
  },

  // ════════ PERMISSION TO REST ════════ terms lexicon-verified (BLB/Strong's)
  {
    id:'e027', section:'rest', title:'Somewhere to Run',
    land:{ ref:'Psalm 34:8', text:`Taste and see that the LORD is good. How happy is the person who takes refuge in him!`},
    where:`David, who knew real danger, invites people to taste and see that God is good — and calls the one who takes refuge in him happy. It is an invitation to stop bracing and come hide somewhere safe.`,
    word:{ term:'חָסָה', translit:'chasah', gloss:'to flee for protection, to take refuge, to hide in',
      note:`The word for running to a shelter when the storm hits. Not analyzing the shelter from a distance — getting inside it. Refuge is something you enter, not admire.`},
    reflect:[
      `"Taste and see" is a strangely gentle command. Not figure out, not earn, not perform. Just come close enough to find out for yourself that he is good — the way you only really know a shelter once you are inside it.`,
      `Chasah is that running-in. And the verse calls the one who does it happy — not the one who handled everything alone, but the one who fled to safety. There is no medal here for toughing it out in the open.`,
      `You are allowed to run somewhere. You do not have to be the immovable shelter for everyone every hour. There is a refuge with your name on it, and the invitation is simply to get inside and find it good.`
    ],
    carry:`You do not have to weather it in the open. There is a refuge to run into — get inside, and find it good.`
  },
  {
    id:'e028', section:'rest', title:'Where the Mind Can Rest',
    land:{ ref:'Isaiah 26:3', text:`You will keep the mind that is dependent on you in perfect peace, for it is trusting in you.`},
    where:`Isaiah promises perfect peace to the mind that stays on God — not because the circumstances are calm, but because of where the thoughts are leaning. Peace tied to trust, not to the day going well.`,
    word:{ term:'בָּטַח', translit:'batach', gloss:'to trust, to lean your full weight, to feel secure',
      note:`It is leaning-trust — putting your weight on something because you are sure it will hold. The peace comes from the leaning, from where the mind rests, not from the storm stopping.`},
    reflect:[
      `Your mind is probably the last thing to lie down. The body stops, the house goes quiet, and the thoughts keep running their laps — the lists, the worries, the what-ifs about the people you love.`,
      `The verse does not promise the laps will stop on their own. It promises peace to the mind that leans — batach — on God. The rest comes from where you put the weight of your thinking, not from emptying your head.`,
      `You do not have to win the fight with your own mind tonight. You just have to lean it somewhere that holds. When the thoughts spin up, you can set them, again and again, on the One who is steady. The peace follows the leaning.`
    ],
    carry:`You do not have to quiet every thought tonight. Lean your mind where it is held, and the peace comes from the leaning.`
  },
  {
    id:'e029', section:'rest', title:'His Presence, and Rest',
    land:{ ref:'Exodus 33:14', text:`And he replied, "My presence will go with you, and I will give you rest."`},
    where:`Moses, overwhelmed by leading people he cannot carry, is given a promise that is really two things braided together: my presence will go with you, and I will give you rest. The rest comes attached to the presence.`,
    word:{ term:'נוּחַ', translit:'nuach', gloss:'to rest, to settle down, to come to a place of quiet',
      note:`The word for settling, like something finally set down that stops moving. And notice God gives it: I will give you rest. It is handed to you, not achieved.`},
    reflect:[
      `Moses was carrying more than a person can carry, and he basically tells God he cannot do it. God's answer is not a productivity tip. It is presence — my presence will go with you — and then, fastened to it, rest.`,
      `Nuach is the settling-down of something that has been carried too far. And the order matters: the presence comes first, then the rest. You do not rest your way into his nearness. His nearness is what finally lets you settle.`,
      `You are not promised an empty schedule. You are promised company in the middle of the full one, and a settledness that comes from not being alone in it. He goes with you. That is where the rest actually lives.`
    ],
    carry:`The rest is not an empty schedule — it is his presence in the full one. You are not carrying it alone, and that is where you settle.`
  },
  {
    id:'e030', section:'rest', title:'Quiet Is Your Strength',
    land:{ ref:'Isaiah 30:15', text:`For the Lord GOD, the Holy One of Israel, has said: "You will be delivered by returning and resting; your strength will lie in quiet confidence. But you are not willing."`},
    where:`God offers a worn, anxious people a counterintuitive rescue — you will be saved by returning and resting, your strength is in quietness and trust — and then notes, sadly, that they were not willing. The rest was offered. They could not take it.`,
    word:{ term:'שָׁקַט', translit:'shaqat', gloss:'to be quiet, to be still, to be at ease',
      note:`It is settledness, the stilling of agitation. The verse makes the startling claim that this quiet is where strength actually is — not in the frantic doing, but in the stillness.`},
    reflect:[
      `Everything in you says strength looks like motion — more doing, more managing, more proving you can handle it. The verse says the opposite, and means it: your strength is in quietness and trust. The stillness is not the weakness. It is the power source.`,
      `Shaqat is that quiet, and the heartbreaking line is the last one — but you are not willing. The rest was right there, offered freely, and they could not bring themselves to take it. Striving felt safer.`,
      `You are allowed to be willing. To choose the quiet you keep postponing until everything is handled. It will never all be handled. The strength is not waiting on the far side of the to-do list. It is in the stillness you can step into now.`
    ],
    carry:`Your strength is not in the frantic doing — it is in quiet and trust. The rest is offered. You are allowed to be willing to take it.`
  },
  {
    id:'e031', section:'rest', title:'Even God Stopped',
    land:{ ref:'Genesis 2:2-3', text:`On the seventh day God had completed his work that he had done, and he rested on the seventh day from all his work that he had done. God blessed the seventh day and declared it holy, for on it he rested from all his work of creation.`},
    where:`At the very beginning, after making everything, God rests — not because he was tired, but to make a stopping point holy. The rhythm of work-then-rest is woven into creation itself, blessed from day one.`,
    word:{ term:'שָׁבַת', translit:'shabath', gloss:'to cease, to stop, to rest from labor',
      note:`It does not mean to collapse exhausted. It means to deliberately stop — to declare the work set down. God did it first, and made the stopping itself holy.`},
    reflect:[
      `God did not rest because he ran out of energy. He rested to set a pattern, to bless the act of stopping, to write into the world that work is not supposed to be endless. The very first full day humans had was a day of rest.`,
      `Shabath is a chosen ceasing, not a crash. And God called it holy — meaning stopping is not laziness sneaking in. It is sacred, built into the order of things by the One who needed it least.`,
      `You do not have to finish everything to be allowed to stop, because the work was never meant to be finished in one unbroken push. Even God set it down. You can declare a stopping point holy too — not when it is all done, but because you are made in the image of a God who rested.`
    ],
    carry:`Stopping is not laziness — God did it first and made it holy. You are allowed to set the work down before it is finished.`
  },
  {
    id:'e032', section:'rest', title:'Made to Lie Down',
    land:{ ref:'Psalm 23:2', text:`He lets me lie down in green pastures; he leads me beside quiet waters.`},
    where:`The most beloved psalm pictures God as a shepherd who does not drive the sheep harder but makes them lie down in green pastures and leads them beside restful waters. The rest is something the shepherd arranges, not something the sheep negotiates.`,
    word:{ term:'מְנוּחָה', translit:'menuchah', gloss:'a resting place, repose, waters of rest',
      note:`The "quiet waters" are literally waters of menuchah — rest. The shepherd does not lead the flock to rushing rapids but to still, drinkable water, to a place made for stopping.`},
    reflect:[
      `Sheep do not lie down easily when they are anxious — they have to feel safe first. So the shepherd makes them lie down. He arranges the safety that lets the resting happen. The rest is his doing, not the sheep's discipline.`,
      `Menuchah is the still water he leads you to, on purpose, away from the rushing. He is not standing over you tapping his foot while you fail to relax. He is the one engineering a place quiet enough that lying down finally feels possible.`,
      `You do not have to force yourself to rest by willpower. You have a Shepherd whose actual job is to bring you to still water and to make you able to lie down in it. Let him lead you there. The resting place is one he prepares.`
    ],
    carry:`You do not have to force rest by willpower. The Shepherd leads you to still water and makes you able to lie down. Let him.`
  },
  {
    id:'e033', section:'rest', title:'Stop Fighting',
    land:{ ref:'Psalm 46:10', text:`"Stop fighting, and know that I am God, exalted among the nations, exalted on the earth."`},
    where:`In a psalm about the world shaking and nations in uproar, God says one short thing into the chaos: be still, and know that I am God. The stillness is commanded right in the middle of everything coming apart.`,
    word:{ term:'רָפָה', translit:'raphah', gloss:'to let go, to slacken, to drop the hands, to cease striving',
      note:`It does not mean go limp from defeat. It means stop gripping — unclench the hands that have been holding on so hard. Your CSB renders it "stop fighting." Let go, and know.`},
    reflect:[
      `The "be still" here is not for a calm day. It is spoken over earthquakes and wars. Which means stillness is not something you wait for the chaos to allow — it is something you do in the middle of it, by letting go of the grip.`,
      `Raphah is that releasing — the unclenching of hands that have been white-knuckled around things you cannot actually control. Your translation says it plainly: stop fighting. Stop trying to hold the world together by force.`,
      `You do not have to keep a grip on everything for it to be okay. The verse pairs the letting-go with a knowing — know that I am God. He is holding what you keep trying to. You can open your hands, not because nothing is shaking, but because Someone steadier than you is in charge of it.`
    ],
    carry:`You can open your hands. Stop fighting to hold it all together — He is God, and He is holding what you cannot.`
  },
  {
    id:'e034', section:'rest', title:'Sleep Is a Gift, Not a Reward',
    land:{ ref:'Psalm 127:2', text:`In vain you get up early and stay up late, working hard to have enough food—yes, he gives sleep to the one he loves.`},
    where:`This psalm looks straight at the anxious early-rising and late-staying-up of someone trying to do enough — and gently undercuts it: he gives sleep to the one he loves. Sleep is reframed from something you earn to something you are given.`,
    word:{ term:'שֵׁנָה', translit:'shenah', gloss:'sleep',
      note:`Simple and physical — actual sleep. The striking part is the framing: it is given, to the beloved, as a gift. Not the prize for finishing. A present handed to someone he loves.`},
    reflect:[
      `The verse describes you almost too well — up early, up late, working hard for enough, the anxious arithmetic of a long day. And it does not praise the hustle. It quietly calls it "in vain," then turns to the alternative.`,
      `Shenah, sleep, is named as a gift God gives to the one he loves. Not the reward for a finished list. A gift, the way you tuck in a child you adore — not because they earned the night's rest, but because they are yours.`,
      `You can lie down tonight as the beloved, not the worker who did not get enough done. The sleep is being handed to you by a God who loves you, not withheld until you measure up. Receiving it is not quitting. It is being his.`
    ],
    carry:`Sleep is a gift to the one he loves, not a reward you earn. Lie down tonight as the beloved, and receive it.`
  },
  {
    id:'e035', section:'rest', title:'Lie Down in Peace',
    land:{ ref:'Psalm 4:8', text:`I will both lie down and sleep in peace, for you alone, LORD, make me live in safety.`},
    where:`David, with real enemies and real pressure, still says he will lie down and sleep in peace — because his safety does not rest on his own vigilance but on God alone keeping him. He can stop watching, because Someone else is.`,
    word:{ term:'שָׁלוֹם', translit:'shalom', gloss:'peace, wholeness, safety, all-is-well',
      note:`More than the absence of trouble — it is wholeness, the deep okayness of being kept. David lies down in it because, he says, God alone makes him dwell secure.`},
    reflect:[
      `David had every reason to lie awake — actual threats, actual weight. And he lies down anyway, in shalom, because he has decided the keeping is not his job tonight. God alone makes him safe, so he is free to close his eyes.`,
      `Shalom is not the feeling you get when everything is finally handled. It is the wholeness of being kept by Someone, whether or not it is all handled. The safety is in the keeper, not in your watching.`,
      `You can stop standing guard over everything before you sleep. You were not made to be the only thing between your family and the dark. You can lie down in peace — not because the list is done or the worries are solved, but because the One who keeps you does not need you awake to do it.`
    ],
    carry:`You can lie down in peace tonight. You are not the only thing keeping watch — the One who keeps you does not need you awake.`
  },
  {
    id:'e036', section:'rest', title:'A Rest Still Left for You',
    land:{ ref:'Hebrews 4:9', text:`Therefore, a Sabbath rest remains for God's people.`},
    where:`The writer of Hebrews, looking back over all of Scripture's talk of rest, makes a quiet promise to tired believers: there still remains a Sabbath rest for the people of God. Not used up, not expired. Still there, still yours.`,
    word:{ term:'σαββατισμός', translit:'sabbatismos', gloss:'a Sabbath-keeping; a rest that remains',
      note:`A word coined for a rest that is more than a day off — the deep, settled rest of God's people, still on offer, still waiting to be entered.`},
    reflect:[
      `It would be easy to believe rest is for other people, other seasons — that this stretch of life simply does not come with any. Hebrews says otherwise. There remains a rest. It did not get spent on someone else. It is still there.`,
      `Sabbatismos is that remaining rest, and the word "remains" is the gift — it has not run out, has not passed you by, is not reserved for when the kids are grown. It is held open for the people of God, which includes you, right now, mid-season.`,
      `You are not too late for rest, and you have not missed your turn. There is a Sabbath kind of settledness still kept for you. The invitation has not closed. You are still welcome to enter it.`
    ],
    carry:`You have not missed your turn at rest. A Sabbath stillness remains, still open, still yours. You are welcome to enter it.`
  },
  {
    id:'e037', section:'rest', title:'Rest for Your Soul',
    land:{ ref:'Matthew 11:29', text:`Take my yoke upon you and learn from me, because I am lowly and humble in heart, and you will find rest for your souls.`},
    where:`Jesus invites the weary to take his yoke — not more work, but a different way of carrying — and promises something specific: you will find rest for your souls. The rest he offers reaches the part of you sleep cannot touch.`,
    word:{ term:'ἀνάπαυσις', translit:'anapausis', gloss:'rest, refreshing, a ceasing that restores',
      note:`The noun form of the rest Jesus gives — not just a pause but a deep restoring. And he locates it in the soul, the worn-out place underneath the body's tiredness.`},
    reflect:[
      `Jesus does not offer to remove the yoke — there is still a life to carry. He offers to change the yoke, to make the carrying fit, gentle, shared. And the rest he promises is not just for your arms. It is anapausis for your soul.`,
      `That is the rest you actually need. The body's tiredness, sleep can help. But the soul-tiredness — the depleted, stretched-thin place underneath — that is what Jesus aims this rest at. Rest for your souls, he says, as if he knows that is where you are most worn.`,
      `You can come to him with the deep kind of tired, the kind that does not lift with a nap. He is gentle and lowly, he says — not one more demanding voice. The rest he gives reaches all the way down to the part of you that has been tired the longest.`
    ],
    carry:`The deep tired — the soul-tired that sleep cannot reach — is exactly what he offers rest for. Come to the gentle One and find it.`
  },

  // ════════ THE WORDS YOU CARRY ════════ terms lexicon-verified (BLB/Strong's)
  {
    id:'e038', section:'voice', title:'Guard the Source',
    land:{ ref:'Proverbs 4:23', text:`Guard your heart above all else, for it is the source of life.`},
    where:`Proverbs urges that, above everything else you protect, you guard your heart — because everything else in your life flows from it. Of all the things competing for your attention, this is the one to put a watch over.`,
    word:{ term:'נָצַר', translit:'natsar', gloss:'to guard, to keep watch over, to protect like a sentry',
      note:`The word for posting a guard, keeping vigilant watch. Not locking the heart away, but watching what is allowed in and what is allowed to set up camp.`},
    reflect:[
      `You guard a lot of things — schedules, snacks, screen time, everyone's wellbeing but your own. This verse asks for a guard on the one place you tend to leave unwatched: your own heart, where the day's harsh words and quiet verdicts about yourself slip in unchecked.`,
      `Natsar is that watchfulness, and the reason given is huge: everything flows from here. What you let take root in your heart becomes the spring the rest of your life runs from. The unguarded thought does not stay just a thought.`,
      `You are allowed to stand guard over what gets said to you and about you, including by your own voice. Not every accusation gets to move in. Guarding your heart is not self-absorption — it is protecting the source the people you love drink from too.`
    ],
    carry:`Guard your own heart like you guard everyone else's. Not every harsh word gets to move in — it is the source the rest of you flows from.`
  },
  {
    id:'e039', section:'voice', title:'What Runs Under Your Breath',
    land:{ ref:'Psalm 19:14', text:`May the words of my mouth and the meditation of my heart be acceptable to you, LORD, my rock and my Redeemer.`},
    where:`David ends a psalm about God's vast glory with a small, personal prayer — that the words of his mouth and the meditation of his heart would be pleasing to God. He cares about the quiet inner script, not just the public speech.`,
    word:{ term:'הִגָּיוֹן', translit:'higgayon', gloss:'meditation; the murmuring of the heart; what you mutter under your breath',
      note:`It is the low, running inner monologue — the things you say to yourself just under hearing. David asks God to find even that acceptable, which means even that matters.`},
    reflect:[
      `There is a soundtrack running under your day that no one else hears — the muttered "I cannot keep up," "I am failing at this," the quiet commentary on yourself. That is higgayon. The meditation of the heart. And David treats it as something that matters to God.`,
      `He prays for it to be acceptable, pleasing — a strange thing to want for your inner mutterings unless they actually shape something. They do. The script under your breath becomes the lens you see your whole day through.`,
      `You can pray the same small prayer over your own inner voice — that the things you murmur to yourself would be true and kind enough to please the God who is listening to them too. He hears the under-breath track. You are allowed to want it gentler.`
    ],
    carry:`There is a script running under your breath all day. It matters, and it can be kinder. Ask for the inner words to please him too.`
  },
  {
    id:'e040', section:'voice', title:'A Tongue That Heals',
    land:{ ref:'Proverbs 15:4', text:`The tongue that heals is a tree of life, but a devious tongue breaks the spirit.`},
    where:`Proverbs sets two tongues side by side — one that heals, and one that breaks the spirit — and calls the healing one a tree of life. Words are weighed here by what they do to a person: mend, or fracture.`,
    word:{ term:'מַרְפֵּא', translit:'marpe', gloss:'healing, a cure, a mending',
      note:`The word for medicine, for what restores health. A tongue can be marpe — actually healing — or it can break. The verse insists words are not neutral. They do one or the other.`},
    reflect:[
      `You know the breaking kind of words from the inside — you have aimed plenty at yourself on the hard days. "Useless," "behind," "falling apart." The verse calls that what it is: spirit-breaking. And it offers the alternative, marpe, a tongue that heals.`,
      `Here is the part worth sitting with: the healing tongue and the breaking tongue can both be yours, aimed at the same person — you. You get to choose which medicine you administer to yourself all day.`,
      `You do not have to keep speaking the breaking words over your own spirit. You can learn the healing ones — true, gentle, mending — and say them to yourself the way you would tend a hurt child. A tongue that heals is a tree of life, and it can be the voice in your own head.`
    ],
    carry:`The voice in your head can heal instead of break. Speak the mending words to yourself today, the way you would to someone hurt.`
  },
  {
    id:'e041', section:'voice', title:'Truth in the Hidden Place',
    land:{ ref:'Psalm 51:6', text:`Surely you desire integrity in the inner self, and you teach me wisdom deep within.`},
    where:`In his rawest prayer, David says God desires truth in the inmost being — the hidden, interior place. Not performance, not the version others see. The real, inward truth is what God is after, and where he teaches wisdom.`,
    word:{ term:'אֱמֶת', translit:'emet', gloss:'truth, firmness, what is solid and reliable',
      note:`More than not-lying — it is firmness, what is solid and dependable. God wants emet in the inner self: a true, steady foundation underneath, not a brittle performance on top.`},
    reflect:[
      `The inner self is where the untrue things get believed — the harsh self-verdicts that feel like facts when you are tired, the "everyone else has this together" stories that are not actually true. God wants emet down there. Solid truth in the hidden place.`,
      `Emet is firmness, something you can stand on. And the verse pairs God's desire for it with a promise: he teaches wisdom deep within. He does not just want the inner truth, he supplies it — replacing the brittle lies with something that holds.`,
      `You do not have to be the polished version on the surface for God. He is after what is true and solid underneath, and he is gentle enough to teach it to you there. The truest thing about you is not the cruel inner verdict. It is what he says in the hidden place: redeemed, his, held.`
    ],
    carry:`God wants what is true in your hidden self, not the polished surface — and he teaches it there. The cruel verdict is not the truest thing about you.`
  },
  {
    id:'e042', section:'voice', title:'Called by Name',
    land:{ ref:'Isaiah 43:1', text:`Now this is what the LORD says—the one who created you, Jacob, and the one who formed you, Israel—"Do not fear, for I have redeemed you; I have called you by your name; you are mine.`},
    where:`God speaks over a fearful people the words that settle who they are: do not fear, I have redeemed you, I have called you by name, you are mine. Identity handed down from God's own mouth, not assembled from how the day went.`,
    word:{ term:'קָרָא', translit:'qara', gloss:'to call out, to summon, to name',
      note:`To call by name is to claim, to know personally. God does not address a category. He uses a name. The same word for naming is the word for claiming — you are named, therefore you are his.`},
    reflect:[
      `Most of your names these days are functional — mom, the one who handles it, the one everyone needs. Useful, but not quite you. And under the tiredness it is easy to lose track of who you are apart from what you do.`,
      `Qara is God speaking your actual name and attaching "you are mine" to it. Not the role. You. He calls you by name, which means he knows the specific person under all the functions, and he claims her.`,
      `Your identity is not something you have to reassemble from a good day or earn back from a hard one. It was spoken over you by God, by name, and it holds when everything else about your day does not. Do not fear — you are called, you are redeemed, you are his.`
    ],
    carry:`You are more than the roles everyone needs. God calls you by your own name and says, you are mine. That holds when nothing else does.`
  },
  {
    id:'e043', section:'voice', title:'The Voice That Whispers',
    land:{ ref:'1 Kings 19:12', text:`After the earthquake there was a fire, but the LORD was not in the fire. And after the fire there was a voice, a soft whisper.`},
    where:`Elijah, burned out and hiding in a cave, waits for God in wind, earthquake, and fire — and God is in none of them. God comes instead in a low, gentle whisper. The exhausted prophet is met not with a thunderclap but a quiet.`,
    word:{ term:'דְּמָמָה', translit:'demamah', gloss:'a soft whisper, a calm, a thin stillness',
      note:`The word for near-silence, a hush. God deliberately chose the smallest possible voice for the most worn-out man — not to overwhelm him, but to come close and quiet.`},
    reflect:[
      `Elijah was done — so spent he wanted to die. And God did not show up to lecture him or shake him into shape. The dramatic stuff passed by, and then came demamah: a soft whisper. God met exhaustion with gentleness.`,
      `That tells you something about the voice of God toward a worn-out person. It is not the loudest voice in your head. The loud one — the harsh, accusing, hurry-up one — is rarely him. He tends to come in the quiet, low and kind.`,
      `When you are at the end of yourself, listen for the gentle voice, not the booming one — the one that is patient, that comes close instead of crushing. The harshest voice in your head is not God. He is the soft whisper, and he is kind to the burned-out.`
    ],
    carry:`The harsh, loud voice in your head is not God. He comes to the worn-out in a soft whisper, close and kind. Listen for that one.`
  },
  {
    id:'e044', section:'voice', title:'What Fills You Comes Out',
    land:{ ref:'Luke 6:45', text:`A good person produces good out of the good stored up in his heart. An evil person produces evil out of the evil stored up in his heart, for his mouth speaks from the overflow of the heart.`},
    where:`Jesus explains that the mouth speaks from the overflow of the heart — what spills out in words is simply what was already stored up inside. The speech is a readout of the reservoir. Fill the heart, and you change what overflows.`,
    word:{ term:'περίσσευμα', translit:'perisseuma', gloss:'overflow, surplus, what brims over the top',
      note:`The abundance that spills because the container is full. Jesus says words are perisseuma — the runoff of whatever the heart is full of. The output reveals the supply.`},
    reflect:[
      `The cruel things you say to yourself on a hard day are not random. They are overflow — perisseuma — spilling out from whatever has been stored up inside. If the reservoir is full of "not enough," that is what brims over when you are tired and stretched.`,
      `Jesus is not adding pressure to police your words harder. He is pointing upstream. The fix is not clamping the mouth shut; it is changing what fills the heart, so that what overflows is gentler on its own.`,
      `You can tend the reservoir. Store up the true words — you are loved, you are kept, you came today — and over time those are what spill out under pressure, instead of the old harsh script. Fill the heart with grace, and grace is what overflows.`
    ],
    carry:`What you store in your heart is what spills out when you are stretched. Fill it with grace, and grace is what overflows.`
  },
  {
    id:'e045', section:'voice', title:'Words That Build',
    land:{ ref:'Ephesians 4:29', text:`No foul language should come from your mouth, but only what is good for building up someone in need, so that it gives grace to those who hear.`},
    where:`Paul gives a simple measure for speech: nothing that tears down, only what builds up the one who needs it — words that hand grace to whoever hears them. A test you can hold any sentence up against, including the ones aimed at yourself.`,
    word:{ term:'οἰκοδομή', translit:'oikodome', gloss:'building up, construction, edification',
      note:`A construction word — the raising of a structure, brick on brick. Paul says words should be oikodome, building someone up, adding to them, never demolishing.`},
    reflect:[
      `Paul's test for words is whether they build or tear down — and it applies to the relentless inner commentary too. Most of the sentences you aim at yourself on a hard day are demolition: tearing down the person who is actually trying her hardest.`,
      `Oikodome is the opposite motion — adding, raising, constructing. Words that leave a person more whole than they found her. Paul says speech should hand grace to the one who hears it, and you are one of the ones who hears yours all day.`,
      `You are allowed to talk to yourself in a way that builds. To hand grace to the woman in the mirror instead of another verdict. She needs building up more than she needs correcting right now. Let the words you carry add to you, not tear you down.`
    ],
    carry:`Let the words you aim at yourself build, not demolish. You hear your own voice all day — hand it grace, not another verdict.`
  },
  {
    id:'e046', section:'voice', title:'The Gentle Answer',
    land:{ ref:'Proverbs 15:1', text:`A gentle answer turns away anger, but a harsh word stirs up wrath.`},
    where:`Proverbs observes how a gentle answer turns away anger while a harsh word stirs it up. It is usually read about other people — but the first person you answer all day, in your own head, is yourself.`,
    word:{ term:'רַךְ', translit:'rak', gloss:'soft, tender, gentle',
      note:`The word for tender and soft. A rak answer is the gentle one, and the verse says it has power — it defuses, where harshness escalates. Gentleness is not weakness here. It is what works.`},
    reflect:[
      `You know how a gentle word lands on a melting-down child versus a sharp one — the soft answer settles, the harsh one escalates. The same is true of the answers you give yourself when you have made a mistake or run out of patience.`,
      `Rak is that gentleness, and Proverbs insists it is not the weak option — it is the effective one. A harsh word, even aimed inward, just stirs up more of the storm. The gentle answer is what actually calms it.`,
      `When you fail at something today, you will answer yourself one way or another. You can choose the rak answer — the gentle one you would give someone you love — because it is not soft in the useless sense. It is the thing that actually turns the anger, including your own at yourself, away.`
    ],
    carry:`When you slip today, answer yourself gently. The soft answer is not weak — it is what actually calms the storm, even your own.`
  },

  // ════════ FOR THE MOTHER · part 2 (to 20) ════════ verified / reused on fresh passages
  {
    id:'e047', section:'mother', title:"Compassion Like a Parent's",
    land:{ ref:'Psalm 103:13', text:`As a father has compassion on his children, so the LORD has compassion on those who fear him.`},
    where:`David reaches for the most familiar tenderness he can name — a parent's compassion — and says God's is like it, only surer. He measures God's heart by the one ache you feel every day.`,
    word:{ term:'רָחַם', translit:'racham', gloss:'compassion, the tenderness that rises from the gut',
      note:`The same womb-root as before — racham is feeling-it-in-your-body compassion, the kind that bends a parent toward a hurting child without deciding to.`},
    reflect:[
      `You know this compassion from the inside now — the way your whole body turns toward a crying child before your mind catches up. David says that involuntary tenderness is the nearest picture we have of how God feels toward you.`,
      `And he aims it carefully: as a father has compassion on his children, so the Lord has compassion on you. Not less than a parent's. Like it, and steadier. The same bend-toward-the-hurting motion, pointed at you.`,
      `On the days you are all compassion for everyone else and none for yourself, hear this: Someone feels that ache for you. You are not only the one who bends toward the crying. You are also the child being bent toward, with a tenderness you do not have to earn.`
    ],
    carry:`The tenderness you feel for your children is a small echo of how God feels toward you. You are bent toward, not just the one bending.`
  },
  {
    id:'e048', section:'mother', title:'He Suffered With Them',
    land:{ ref:'Isaiah 63:9', text:`In all their suffering, he suffered, and the angel of his presence saved them. He redeemed them because of his love and compassion; he lifted them up and carried them all the days of the past.`},
    where:`Looking back over a whole rough history, Isaiah says something tender about how God was present in it — in their suffering, he suffered too, and he lifted and carried them through all of it. Not distant from the hard years. In them, carrying.`,
    word:{ term:'נָשָׂא', translit:'nasa', gloss:'to lift, to bear, to carry',
      note:`The same carrying word as before, here stretched across "all the days" — not a one-time rescue but a carrying that lasted the whole long stretch.`},
    reflect:[
      `The line that stops you is "in all their suffering, he suffered." God was not watching the hard seasons from a safe distance. He was in them, close enough to ache alongside.`,
      `And then: he lifted them up and carried them, all the days. Nasa, again — the carrying that does not quit. Not just on the good days. Through the whole long history, including the parts that felt unbearable while they happened.`,
      `Whatever this season has held, you were not carrying it watched-from-above. He was in it, suffering with you, and carrying you the whole way — all the days, even the ones you barely remember getting through.`
    ],
    carry:`He did not watch your hard season from a distance — he was in it, suffering with you, and carrying you the whole way.`
  },
  {
    id:'e049', section:'mother', title:'Strong Because He Is With You',
    land:{ ref:'Joshua 1:9', text:`Haven't I commanded you: be strong and courageous? Do not be afraid or discouraged, for the LORD your God is with you wherever you go.`},
    where:`Joshua is about to lead an impossible thing, terrified, and God's charge to him is not "try harder" but "be strong — because I am with you." The strength is commanded and then immediately sourced.`,
    word:{ term:'חָזַק', translit:'chazaq', gloss:'to be strong, to take hold, to be made firm',
      note:`The strength word again — and notice the reason attached. Be strong, for the Lord is with you. The strength rests on his presence, not on your reserves.`},
    reflect:[
      `"Be strong and courageous" can sound like one more demand on a day you feel neither. But read what it leans on: for the Lord your God is with you wherever you go. The strength is not a mood you have to conjure. It is a fact you stand on.`,
      `Chazaq is strength, and God hands Joshua the basis for it in the same breath — his presence. You are not told to be strong out of nothing. You are told you can be strong because Someone is with you, everywhere, including the ordinary hard places.`,
      `Wherever you go today — the carpool, the kitchen, the 3am room — that "wherever you go" includes it. You are not facing any of it alone, and that is where the strength actually comes from. Not from you being enough. From him being there.`
    ],
    carry:`You can be strong today not because you have enough in reserve, but because he is with you wherever you go.`
  },
  {
    id:'e050', section:'mother', title:'Watched Over While You Run',
    land:{ ref:'Genesis 28:15', text:`Look, I am with you and will watch over you wherever you go. I will bring you back to this land, for I will not leave you until I have done what I have promised you.`},
    where:`Jacob is running, alone and afraid, with a stone for a pillow, and God meets him in a dream with a promise: I am with you, I will watch over you, I will not leave you. Spoken to a man at his most exposed.`,
    word:{ term:'שָׁמַר', translit:'shamar', gloss:'to guard, to keep, to watch over',
      note:`The keeping word again — a vigilant, protective watching. God promises it "wherever you go," and seals it with "I will not leave you." The watch does not lift.`},
    reflect:[
      `Jacob had nothing — on the run, head on a rock, the future a blank. And into that, God does not give him a plan. He gives him a presence: I am with you, I will watch over you, I will not leave.`,
      `Shamar is that watching-over, and the promise has no expiration: until I have done what I promised. The guard stays posted the whole way, through all the uncertain middle, not just at the destination.`,
      `You may not be able to see how this season resolves either. But the promise is not mainly about the destination. It is about the company on the way — watched over wherever you go, not left, all the way until it is done.`
    ],
    carry:`You are watched over wherever you go, and he will not leave you until it is finished. The keeping holds even when the outcome is unclear.`
  },
  {
    id:'e051', section:'mother', title:'He Holds On to You',
    land:{ ref:'Psalm 63:8', text:`I follow close to you; your right hand holds on to me.`},
    where:`David, in a dry and desperate stretch, describes the dynamic that keeps him: he clings to God, and — the part that actually holds it together — God's hand holds on to him. Two grips, and his is not the strong one.`,
    word:{ term:'תָּמַךְ', translit:'tamak', gloss:'to grasp, to hold firmly, to uphold and sustain',
      note:`A firm, holding-on grip — the strong hand keeping the weaker one from slipping. The verse says it is God's hand doing the holding. You cling, but his is the grip that holds.`},
    reflect:[
      `There is a beautiful order in this verse. David says I follow close, I cling — and then, as if to admit his clinging is not what keeps him, your right hand holds on to me. The thing that actually holds is God's grip, not his.`,
      `Tamak is that holding-on, and it matters which direction it runs. On the days your own grip on faith feels weak — too tired to cling well, barely hanging on — the verse quietly relocates the strength. His hand is holding you.`,
      `You do not have to hold on tightly enough today. You are held. Even when your clinging is feeble, his grip is not. The hand that holds on to you does not get tired the way yours does.`
    ],
    carry:`You do not have to grip tightly enough today. His hand holds on to you — and his grip does not tire when yours does.`
  },
  {
    id:'e052', section:'mother', title:'The God Who Labored to Birth You',
    land:{ ref:'Deuteronomy 32:18', text:`You ignored the Rock who gave you birth; you forgot the God who gave birth to you.`},
    where:`In an old song, God uses startling language about himself — not just maker, but the one who gave birth, who labored to bring you forth. He reaches for a mother's image to describe how he made you.`,
    word:{ term:'חוּל', translit:'chuwl', gloss:'to writhe, to bring forth in labor, to give birth',
      note:`Labor-pain language — the writhing of childbirth. God uses it of himself, claiming the most costly, bodily kind of bringing-forth. You were not casually made. You were labored into being.`},
    reflect:[
      `It is easy to picture God making the world like a craftsman — efficient, at arm's length. This verse refuses that. It says he gave birth to you, used the word for labor, for the effort of bringing a life out of one's own body.`,
      `Chuwl is that bringing-forth, and God claims it about you. You were not assembled. You were labored over, brought forth with the kind of cost a mother knows. The God who made you knows what it is to writhe a life into being.`,
      `You give that costly bringing-forth every day, in a hundred small labors no one counts. The God you are pouring yourself out for is not a stranger to it. He birthed you the same way — and a mother does not forget the child she labored for.`
    ],
    carry:`You were not casually made — you were labored into being by a God who knows the cost. He does not forget the child he birthed.`
  },
  {
    id:'e053', section:'mother', title:'Come Under the Wings',
    land:{ ref:'Ruth 2:12', text:`May the LORD reward you for what you have done, and may you receive a full reward from the LORD God of Israel, under whose wings you have come for refuge.`},
    where:`Boaz blesses Ruth — a widow, a foreigner, a woman with nothing, who left everything to follow her mother-in-law's God. And the image he reaches for is shelter: you have come under his wings for refuge.`,
    word:{ term:'כָּנָף', translit:'kanaph', gloss:'wing; the sheltering edge of a garment',
      note:`The mother-bird wing again, here as the place Ruth ran to. Not earned by status — she had none. A covering the weary and the outsider are simply invited under.`},
    reflect:[
      `Ruth had every reason to feel she did not belong anywhere — widowed, foreign, starting over with nothing. And Boaz does not praise her for toughing it out. He blesses her for running somewhere: under his wings you have come for refuge.`,
      `Kanaph is that wing, and what moves you is who gets to come under it. Not the secure, not the put-together. The depleted, the unsure, the one who left everything and is not certain she made it. She is exactly who the wing is for.`,
      `On the days you feel like you are barely holding your place — too tired, not doing it well enough, an impostor at your own life — the wing is open to you too. You do not qualify by having it together. You come under it as the weary one who needs it.`
    ],
    carry:`You do not earn your way under the wing. The weary and unsure are exactly who it is open for. Come under it.`
  },
  {
    id:'e054', section:'mother', title:'Carried on the Hip',
    land:{ ref:'Isaiah 60:4', text:`Raise your eyes and look around: they all gather and come to you; your sons will come from far away, and your daughters on the hips of nursing mothers.`},
    where:`Isaiah paints a homecoming — scattered children streaming back — and the tender detail he cannot resist is the littlest ones: daughters carried home on the hips of nursing mothers. Even the grand restoration includes a baby on a hip.`,
    word:{ term:'אָמַן', translit:'aman', gloss:'to carry, to nurse, to support a child',
      note:`The carrying-and-nursing word again — the same root as "amen," steady and trustworthy. The image is the most ordinary thing in the world: a child supported on a hip, carried home.`},
    reflect:[
      `Of all the ways to picture restoration, Isaiah includes a baby on a hip — the big sweeping homecoming, and right in the middle of it, the mundane, aching-arm reality of carrying a little one who cannot walk the distance herself.`,
      `Aman is that carrying, and it is worth noticing God put it in the picture of glory. The thing you do all day — the hip, the constant supporting of someone too small to go it alone — is not beneath the holy story. It is woven right into it.`,
      `The ordinary carrying you do is seen, and honored. And the same God who notices the babies on the hips is carrying you the same way — supporting the one who cannot make the distance alone. You carry, and you are carried, both at once.`
    ],
    carry:`The everyday carrying you do is woven right into God's picture of glory. You carry someone on your hip — and you are carried the same way.`
  },
  {
    id:'e055', section:'mother', title:'Carried to the Gray Hair',
    land:{ ref:'Isaiah 46:4', text:`I will be the same until your old age, and I will bear you up when you turn gray. I have made you, and I will carry you; I will bear and rescue you.`},
    where:`God contrasts himself with idols people have to lug around — and makes a promise no idol could: I will carry you, all the way to old age, to gray hair. The carrying is not for a season. It is for your whole life.`,
    word:{ term:'עָמַס', translit:'amas', gloss:'to load up, to carry a heavy burden, to bear a load',
      note:`The word for shouldering a load — and God deliberately puts himself in the carrier's role. Other gods get carried; this God carries. He loads your weight onto himself.`},
    reflect:[
      `The whole point of the verse is a reversal. Idols have to be hauled around by tired people. The true God says: I am not the burden you carry — I am the One who carries you. I made you, and I will carry you.`,
      `Amas is shouldering a heavy load, and God claims it about your whole life — to your old age, to the gray hair, I will bear you. Not a burst of help in a hard week. A lifetime of being carried, all the way to the end.`,
      `You spend your days as the carrier, shouldering everyone's weight. This verse hands you a different identity: the carried one. From the womb to the gray hair, your weight is on him. You can set down the belief that you have to shoulder it all yourself, for life.`
    ],
    carry:`From the womb to the gray hair, you are the carried one, not only the carrier. Your weight is on him, for your whole life.`
  },
  {
    id:'e056', section:'mother', title:'You Wake Because He Held You',
    land:{ ref:'Psalm 3:5', text:`I lie down and sleep; I wake again because the LORD sustains me.`},
    where:`David writes this on the run from his own son, with enemies all around — and still says he lies down, sleeps, and wakes, because God sustains him through the night. Sleep itself becomes evidence of being held.`,
    word:{ term:'סָמַךְ', translit:'samak', gloss:'to uphold, to sustain, to prop up the one who would fall',
      note:`The propping word again — here doing its work invisibly, overnight. He lay down and woke, and credits the unseen sustaining of God for the simple fact that he made it through.`},
    reflect:[
      `David is in real danger, and what he points to as proof of God's care is almost embarrassingly ordinary: he slept, and he woke up. The miracle he names is getting through the night.`,
      `Samak is the sustaining that did that — the quiet, unseen holding that carried him from one day to the next while he was unconscious and could do nothing. He woke because God upheld him, not because he kept watch.`,
      `You made it to this morning too. However hard yesterday was, you lay down and you woke up, and that was not nothing — it was God sustaining you through hours you were not even awake to manage. The waking itself is evidence. You are being held, even in your sleep.`
    ],
    carry:`You woke up today because he sustained you through the night. The waking itself is proof — you are held, even while you sleep.`
  },

  // ════════ STRETCHED THIN · part 2 (to 20) ════════ verified / reused on fresh passages
  {
    id:'e057', section:'thin', title:'Come Away and Rest',
    land:{ ref:'Mark 6:31', text:`He said to them, "Come away by yourselves to a remote place and rest for a while." For many people were coming and going, and they did not even have time to eat.`},
    where:`The disciples are so swamped with people that they cannot even eat — and Jesus' response is not to push them harder. He pulls them out of it: come away, just you, to a quiet place, and rest. The demand is endless, so he interrupts it on purpose.`,
    word:{ term:'ἀναπαύω', translit:'anapauo', gloss:'to refresh, to give rest, to restore',
      note:`The same restoring-rest word — not just stopping, but being refilled. And notice it is Jesus' idea, not theirs. He initiates the rest.`},
    reflect:[
      `The detail is painfully familiar: so many people coming and going they did not even have time to eat. That is a kind of day you know. And Jesus, watching it, does not admire their busyness. He calls them out of it.`,
      `Anapauo is the rest he sends them toward — and the striking thing is that he is the one prescribing it. Rest was his idea, his care for tired people. He looked at their nonstop day and said, enough, come away.`,
      `You do not have to wait for the demands to end before you are allowed to rest — they did not even have time to eat, and he still said come away. The permission comes from him, the same voice that loves you, saying, come away and be refreshed.`
    ],
    carry:`Jesus looks at your nonstop day and says the same thing: come away and rest a while. The permission is his, not something you earn.`
  },
  {
    id:'e058', section:'thin', title:'Love as High as the Sky',
    land:{ ref:'Psalm 103:11', text:`For as high as the heavens are above the earth, so great is his faithful love toward those who fear him.`},
    where:`David tries to measure God's faithful love and can only reach for the biggest thing he can see — the distance from earth to sky. That high, that vast, is how much steadfast love is aimed at you.`,
    word:{ term:'חֶסֶד', translit:'hesed', gloss:'steadfast, covenant love that does not quit',
      note:`The unbreakable-love word again — and here David measures its size by the height of the heavens. Not a moderate fondness. A love whose only comparison is the whole sky.`},
    reflect:[
      `When you are running on empty, love can feel like a scarce resource — something you ration and run short of. David reaches for the opposite picture. God's faithful love is as high as the heavens are above the earth. Never the thing in short supply.`,
      `Hesed is that steadfast love, and its size is the point. You pour out love all day until you feel like there is none left for you. But the love aimed at you is not running low. It is sky-high, more than you could spend in a lifetime.`,
      `You are not loved a little, on the condition of a good day. You are loved as high as the sky, steadily, by a God whose supply does not run out the way yours does. Stand under that for a second. It is over you like the whole heavens.`
    ],
    carry:`You are not loved on the condition of a good day. His faithful love is as high as the sky over you — it never runs short.`
  },
  {
    id:'e059', section:'thin', title:'Pour It Out, Then Rest',
    land:{ ref:'Psalm 62:8', text:`Trust in him at all times, you people; pour out your hearts before him. God is our refuge. Selah`},
    where:`David tells a whole worn-out community the same thing: pour out your hearts before God, because he is a refuge. Not bottle it up, not perform fine. Empty the heart out in a safe place.`,
    word:{ term:'שָׁפַךְ', translit:'shaphak', gloss:'to pour out, to empty completely',
      note:`The pouring-out word again — tipping the heart all the way out. Paired here with "refuge": you can pour out everything because the place you are pouring it is safe.`},
    reflect:[
      `"Pour out your hearts before him" is permission you rarely give yourself. You hold it together, manage your face, keep the hard things contained because there is no safe place to set them down. David says there is one.`,
      `Shaphak is the full emptying, and it comes attached to a promise: God is our refuge. You can tip the whole heart out — the resentment, the exhaustion, the fear you would not say aloud — because the One you are pouring it before is shelter, not judgment.`,
      `You do not have to keep carrying the contents of your heart sealed up. Pour them out. Not to fix them, not to phrase them right — just to empty them somewhere safe. He is a refuge for everything you have been holding in.`
    ],
    carry:`You do not have to keep it sealed up. Pour your whole heart out before him — he is a safe place, not a judge.`
  },
  {
    id:'e060', section:'thin', title:'Thirsty in a Dry Land',
    land:{ ref:'Psalm 63:1', text:`God, you are my God; I eagerly seek you. I thirst for you; my body faints for you in a land that is dry, desolate, and without water.`},
    where:`David writes this in an actual wilderness, and turns his physical thirst into a prayer: my soul thirsts, my body faints for you, in a dry and weary land. He does not wait to feel spiritual. He brings God the parched version of himself.`,
    word:{ term:'עָיֵף', translit:'ayeph', gloss:'faint, weary, drained dry',
      note:`The wear-out word again — here describing both the land and the soul. A dry, weary place, and a person fainting in it. David prays from inside the depletion.`},
    reflect:[
      `Some seasons are just dry. Not dramatic, not a crisis — a stretch of life that is parched and depleting, where you feel like you are fainting a little, running on fumes in a land without much water. David knew that exact terrain.`,
      `Ayeph is the faint, dried-out weariness, and David does not clean himself up before praying. He brings God the thirst itself: I am parched, I am fainting, and I want you. The dryness becomes the prayer.`,
      `You do not have to manufacture a thriving, full feeling to come to God. You can come exactly as thirsty as you are. The dry land is not a disqualification. It is where David prayed his most honest prayer — and where you are allowed to pray yours.`
    ],
    carry:`You do not have to feel full to come to God. Bring him the thirst itself. The dry land is where the most honest prayers get prayed.`
  },
  {
    id:'e061', section:'thin', title:'An Open Hand',
    land:{ ref:'Psalm 145:16', text:`You open your hand and satisfy the desire of every living thing.`},
    where:`In a psalm cataloguing God's goodness, David lands on a simple, generous image — God opens his hand and satisfies the desire of every living thing. Not a stingy handout. An open hand, meeting the longing of everything that lives.`,
    word:{ term:'שָׂבַע', translit:'saba', gloss:'to satisfy, to fill until content',
      note:`The satisfying-fullness word again — paired here with "open your hand." The picture is unforced generosity: a hand opened wide, filling the want of every creature, including you.`},
    reflect:[
      `The image is an open hand — not clenched, not rationing, not making you prove your need first. God opens his hand and satisfies the desire of every living thing. Every. That is not a list you have to earn your way onto.`,
      `Saba is that satisfying, and the open hand is the tone of it. You are so used to being the open hand for everyone else — filling desires all day — that it is easy to forget there is a hand open toward you too, meeting your want.`,
      `Your own longings are not too much, or last in line. The hand that feeds every living thing is open toward you. You are included in "every." The desire under your tiredness — to be filled, held, enough — is exactly what that open hand is for.`
    ],
    carry:`There is an open hand toward you, not just the ones you fill all day. Your longing is included in "every living thing."`
  },
  {
    id:'e062', section:'thin', title:'Exhausted, So They Rested',
    land:{ ref:'2 Samuel 16:14', text:`Finally, the king and all the people with him arrived exhausted, so they rested there.`},
    where:`David is fleeing, betrayed, grieving — and the verse records something almost mundane in the middle of the crisis: they arrived exhausted, so they rested. No heroics. They were spent, so they stopped and were refreshed.`,
    word:{ term:'נָפַשׁ', translit:'naphash', gloss:'to catch one’s breath, to be refreshed',
      note:`The breathing-again word — and the logic of the verse is simply: exhausted, so they rested. The exhaustion was reason enough. No need to push through.`},
    reflect:[
      `Notice how plain it is. They arrived exhausted, so they rested. Not "so they pushed on to prove their toughness." The tiredness was treated as a sufficient reason to stop. Even in a real crisis, being spent was allowed to mean: now we rest.`,
      `Naphash is that catching-of-breath, and the verse gives it the simplest possible justification — exhaustion. You do not need a better reason than that. Spent is reason enough to stop and breathe.`,
      `You keep waiting for permission to rest that never comes — for the work to be done, the crisis to pass, the deserving to be earned. This verse just says: they were exhausted, so they rested. You are exhausted. That can be reason enough, today.`
    ],
    carry:`Exhausted is reason enough to rest. You do not need a better justification than the one you already have — you are spent. So stop and breathe.`
  },

  // ════════ PERMISSION TO REST · part 2 (to 20) ════════ verified / reused on fresh passages
  {
    id:'e063', section:'rest', title:'You Do Not Have to Figure It Out',
    land:{ ref:'Proverbs 3:5', text:`Trust in the LORD with all your heart, and do not rely on your own understanding;`},
    where:`Proverbs gives one of its most quoted instructions — trust God with your whole heart, and stop leaning on your own understanding. It is permission, really: you are not required to think your way through everything.`,
    word:{ term:'בָּטַח', translit:'batach', gloss:'to trust, to lean your full weight, to feel secure',
      note:`The leaning-trust word again — paired here with its opposite: do not lean on your own understanding. Two things to lean on, and the verse points you off of yourself and onto God.`},
    reflect:[
      `"Do not rely on your own understanding" is a strange relief once you hear it as permission. You spend so much energy trying to understand, figure out, stay three steps ahead of everything that could go wrong. The verse says: you can stop carrying that.`,
      `Batach is leaning your weight, and the instruction is about where to put it. Not on your own ability to understand and manage — that is exhausting and runs out — but on God. You are allowed to lean off of yourself.`,
      `You do not have to have it figured out tonight. The future of the people you love is not held up by your understanding of it. You can trust with your whole heart and let your own exhausted analysis rest.`
    ],
    carry:`You do not have to figure it all out. Lean your weight on him instead of your own understanding, and let your tired mind rest.`
  },
  {
    id:'e064', section:'rest', title:'Rest Is Built Into the World',
    land:{ ref:'Exodus 20:11', text:`For the LORD made the heavens and the earth, the sea, and everything in them in six days; then he rested on the seventh day. Therefore the LORD blessed the Sabbath day and declared it holy.`},
    where:`When God gives the Sabbath command, he roots it in his own example: he made everything, then he rested, and he blessed that rest and made it holy. The rhythm of work-then-stop is stitched into creation.`,
    word:{ term:'נוּחַ', translit:'nuach', gloss:'to rest, to settle, to come to quiet',
      note:`The settling-down word again — and here it is God himself doing it, then blessing it. Rest is not a concession to weakness. It is a holy thing God modeled and built into the week.`},
    reflect:[
      `The command to rest is not God being arbitrary. He grounds it in what he himself did: made the world, then rested. The God who needs nothing chose to stop, and then made that stopping holy. The rhythm is in the design.`,
      `Nuach is that settling, and God blessed it. Which means your rest is not stolen, not lazy, not a failure of stamina. It is participation in something God blessed and called holy from the very beginning of the world.`,
      `You can rest today as someone obeying the shape of creation, not someone falling behind it. The seventh-day stop is woven into how the world was made — and you are made for it too. Stopping is not you breaking. It is you living in the rhythm God blessed.`
    ],
    carry:`Your rest is not laziness — it is woven into how God made the world and blessed it. Stopping is living in the rhythm, not falling behind.`
  },
  {
    id:'e065', section:'rest', title:'Return to Your Rest',
    land:{ ref:'Psalm 116:7', text:`Return to your rest, my soul, for the LORD has been good to you.`},
    where:`The psalmist, just brought through something hard, speaks gently to his own exhausted soul — return to your rest — and gives the reason: the Lord has been good to you. He talks himself back to rest by remembering how he has been treated.`,
    word:{ term:'מְנוּחָה', translit:'menuchah', gloss:'a resting place, repose, settled quiet',
      note:`The resting-place word again — and notice it is somewhere to return to. Rest is framed as home, a place your soul belongs and has wandered from. Come back to it.`},
    reflect:[
      `"Return to your rest, my soul." He is talking to himself, gently, the way you would coax a wound-up child back to calm. And he calls rest a place to return to — implying your soul has a settled home it drifts from when the days get hard.`,
      `Menuchah is that resting place, and the way back to it is memory: for the Lord has been good to you. Not "because everything is fine now" — because of how you have been treated. The goodness already shown is the path home to rest.`,
      `You can speak to your own tired soul like this tonight. Not "you should be doing more," but "return to your rest — he has been good to you." Look back at the ways you have been carried, and let that coax you home.`
    ],
    carry:`Speak gently to your own tired soul tonight: return to your rest — he has been good to you. Let the remembering coax you home.`
  },
  {
    id:'e066', section:'rest', title:'His Face Turned Toward You',
    land:{ ref:'Numbers 6:26', text:`may the LORD look with favor on you and give you peace.`},
    where:`This is the end of the oldest blessing in the Bible, the words priests spoke over God's people for thousands of years: may the Lord turn his face toward you and give you peace. The blessing ends not with stuff, but with peace.`,
    word:{ term:'שָׁלוֹם', translit:'shalom', gloss:'peace, wholeness, deep well-being',
      note:`The wholeness word again — the blessing's final, climactic gift. Not the absence of trouble, but the deep okayness that comes from God's face being turned toward you in favor.`},
    reflect:[
      `For thousands of years, the blessing spoken over God's people ended right here: may he look on you with favor and give you peace. Of all the things to leave them with, this was the last and highest — his face turned toward them, and shalom.`,
      `Shalom is that peace, and it is tied to a face. Not God turned away, distracted, disappointed — but turned toward you, looking on you with favor. The wholeness flows from being looked at with love, not from your circumstances settling down.`,
      `This blessing is over you too. The face of God is not turned away from you on your worst day. It is turned toward you, in favor, giving peace — the same words sung over weary people for millennia, now resting on you.`
    ],
    carry:`God's face is turned toward you in favor, not away. The oldest blessing is over you: peace, because you are looked at with love.`
  },
  {
    id:'e067', section:'rest', title:'Remember to Stop',
    land:{ ref:'Exodus 20:8', text:`Remember the Sabbath day, to keep it holy:`},
    where:`Of all the commands, this is the one that has to tell you to remember — because stopping is the thing we forget. God does not say "achieve the Sabbath" or "earn it." He says remember it, keep it holy. Set a day apart to cease.`,
    word:{ term:'שָׁבַת', translit:'shabath', gloss:'to cease, to stop, to rest from work',
      note:`The ceasing word again — at the root of "Sabbath" itself. The command is simply to remember to stop, and to treat the stopping as holy, set apart, protected.`},
    reflect:[
      `It is telling that this command begins with "remember." The other commands assume you might want to break them. This one assumes you will forget — forget to stop, forget you are allowed to, forget that ceasing is even an option. So God says: remember.`,
      `Shabath is that ceasing, and God calls it holy — set apart, protected, not up for negotiation with your to-do list. The stopping is not the leftover time after everything is done. It is sacred ground, guarded on purpose.`,
      `You forget to stop. The list is loud and the needs are constant and rest slips off the schedule first. This command is a gift disguised as a rule: remember. You are allowed to cease, and the ceasing is holy. Guard a little of it like it matters, because God says it does.`
    ],
    carry:`You are allowed to stop, and the stopping is holy. Remember it — guard a little of your ceasing like it matters, because God says it does.`
  },
  {
    id:'e068', section:'rest', title:'Until the Danger Passes',
    land:{ ref:'Psalm 57:1', text:`Be gracious to me, God, be gracious to me, for I take refuge in you. I will seek refuge in the shadow of your wings until danger passes.`},
    where:`David prays this hiding in a cave from people trying to kill him — and the picture he reaches for is not a fortress but a wing: I will take refuge in the shadow of your wings until the danger passes. A sheltering image for a frightening time.`,
    word:{ term:'חָסָה', translit:'chasah', gloss:'to take refuge, to flee for shelter, to hide in',
      note:`The refuge word again — running to safety. And note the time frame: until the danger passes. Refuge is a sheltered place to wait out the worst of the storm.`},
    reflect:[
      `David is in real danger, and twice he says it — be gracious to me, be gracious to me — like someone too overwhelmed for elaborate words. And then he gets specific about where he is going: the shadow of your wings, until this passes.`,
      `Chasah is that fleeing-to-shelter, and the phrase "until the danger passes" is honest. He does not pretend the threat is gone. He just knows where to wait it out — tucked in the shadow of the wing, sheltered while the storm does its worst.`,
      `You may be waiting out something hard right now, with no idea when it lifts. You do not have to make it stop by yourself. There is a shadow to tuck under until it passes. Run there. You can be safe in the middle of unsafe, under the wing, until the danger passes.`
    ],
    carry:`You do not have to make the hard thing stop. There is a shelter to tuck under until it passes. Run there, and wait it out safe.`
  },
  {
    id:'e069', section:'rest', title:'Quiet, and Waiting',
    land:{ ref:'Psalm 37:7', text:`Be silent before the LORD and wait expectantly for him; do not be agitated by one who prospers in his way, by the person who carries out evil plans.`},
    where:`In a psalm about not being eaten alive by comparison and unfairness, the instruction is to go quiet before God and wait — instead of stirring yourself up over everyone who seems to have it easier.`,
    word:{ term:'דָּמַם', translit:'damam', gloss:'to be silent, to grow still, to quiet the inner churn',
      note:`The same stilling word from the weaned-child psalm — here aimed at the specific churn of comparison and resentment. Go quiet. Stop stirring yourself up. Wait.`},
    reflect:[
      `The agitation this verse names is so current: do not get worked up over the one who prospers, who seems to have it easier, whose life looks smoother than your stretched-thin one. The scrolling, the comparing, the quiet "why is it so much harder for me."`,
      `Damam is the antidote it offers — be silent before the Lord and wait. Not figure out the unfairness, not win the comparison. Go quiet. Let the inner stirring settle, and wait expectantly instead of anxiously.`,
      `You can put down the exhausting math of comparison tonight. It will only stir you up. The verse offers stillness instead — quiet before God, waiting with expectation rather than agitation. Your story is not behind anyone's.`
    ],
    carry:`Put down the exhausting comparison. Be silent before him and wait — let the churn go still, and trust your story to him.`
  },
  {
    id:'e070', section:'rest', title:'Sleep Without Fear',
    land:{ ref:'Proverbs 3:24', text:`When you lie down, you will not be afraid; you will lie down, and your sleep will be pleasant.`},
    where:`Proverbs promises something deeply practical to the one who walks with wisdom and trust: when you lie down, you will not be afraid, and your sleep will be sweet. Not a guaranteed easy life — a guaranteed safe place to lay your head.`,
    word:{ term:'שֵׁנָה', translit:'shenah', gloss:'sleep',
      note:`The sleep word again — here promised as pleasant, unafraid. The gift is not just unconsciousness but the absence of dread when you lie down.`},
    reflect:[
      `There is lying down, and there is lying down afraid — the body horizontal but the mind running its night patrol, braced for the next thing. The verse promises the other kind: you will lie down and not be afraid, and your sleep will be sweet.`,
      `Shenah that is pleasant is the gift here — not just hours logged, but rest without the undercurrent of dread. The kind of sleep where you actually set the watch down, because you trust it is held by Someone else.`,
      `You are allowed to lie down unafraid tonight. Not because nothing could go wrong, but because you are not the one keeping the world spinning while you sleep. You can lay your head down, let the bracing go, and let your sleep be sweet.`
    ],
    carry:`You can lie down unafraid tonight and let your sleep be sweet. You are not keeping the world spinning — Someone else holds the night.`
  },

  // ════════ THE WORDS YOU CARRY · part 2 (to 20) ════════ verified / reused on fresh passages
  {
    id:'e071', section:'voice', title:'Words That Pierce, Words That Heal',
    land:{ ref:'Proverbs 12:18', text:`There is one who speaks rashly, like a piercing sword; but the tongue of the wise brings healing.`},
    where:`Proverbs sets two kinds of speech side by side — rash words that stab like a sword, and wise words that heal. The contrast is about what your words do to a person when they land. Wound, or mend.`,
    word:{ term:'לָשׁוֹן', translit:'lashon', gloss:'the tongue, and the words it carries',
      note:`The tongue word again — and here it can pierce like a sword or bring healing. The same instrument, two opposite effects. And the tongue you aim at yourself most is your own inner one.`},
    reflect:[
      `The rash, piercing words in this verse — you know them well, because you aim a lot of them inward. The quick stab of "stupid," "failing," "what is wrong with you" when you drop something or lose your patience. They land like a sword, even when no one else hears.`,
      `Lashon is the tongue, and Proverbs says it can also heal. Same instrument, opposite work. The wise tongue brings healing — and that wisdom can govern your inner voice as much as your outer one.`,
      `You do not have to keep running yourself through with rash words. You can learn the healing kind and turn them inward — the steady, true, gentle ones. The tongue in your own head can stop piercing and start mending.`
    ],
    carry:`The voice in your head can pierce or heal. Stop running yourself through with rash words — speak to yourself like the wise, and mend.`
  },
  {
    id:'e072', section:'voice', title:'Sweet, and Healing',
    land:{ ref:'Proverbs 16:24', text:`Pleasant words are a honeycomb: sweet to the taste and health to the body.`},
    where:`Proverbs compares kind words to honeycomb — sweet to taste, and actually good for the body. Gentle words are not just nice; the proverb claims they do something real, all the way down to your physical frame.`,
    word:{ term:'מַרְפֵּא', translit:'marpe', gloss:'healing, a cure, medicine for the body',
      note:`The healing word again — here paired with sweetness. Pleasant words are marpe, medicine. The proverb insists kindness in speech is not soft fluff. It heals, body and soul.`},
    reflect:[
      `Honeycomb is the image — something sweet, but also nourishing, doing you actual good. Proverbs says pleasant words are like that: not just nice to hear, but health to the body, medicine that reaches the bones.`,
      `Marpe is that healing, and it works on you when the words are aimed inward too. The relentless harsh commentary you run does the opposite — it wears the body down, tightens the shoulders, sours the day. Gentle words taste sweet and heal.`,
      `You can choose to feed yourself honeycomb instead of vinegar. The words you say over your own tired body — "you are doing your best," "you came today," "you are loved" — are not just pleasant. They are medicine. Speak the sweet ones, and let them reach the bone.`
    ],
    carry:`Kind words to yourself are not fluff — they are medicine that reaches the bone. Feed yourself honeycomb today, not vinegar.`
  },
  {
    id:'e073', section:'voice', title:'The Truth You Tell Yourself',
    land:{ ref:'Psalm 15:2', text:`The one who lives blamelessly, practices righteousness, and acknowledges the truth in his heart—`},
    where:`Asking who may dwell with God, the psalm describes a person of integrity — and slips in a quiet phrase: who speaks the truth in his heart. Not just to others. Inside. The honest inner life, where you tell yourself what is actually true.`,
    word:{ term:'אֱמֶת', translit:'emet', gloss:'truth, what is firm and real and reliable',
      note:`The truth word again — located here in the heart, the inner room. Emet in the heart means the things you tell yourself are true and solid, not the brittle lies tiredness whispers.`},
    reflect:[
      `"Speaks the truth in his heart." The phrase is about the inner conversation — what you say to yourself when no one is listening. And the psalm holds it up as part of integrity: telling yourself the truth, not the cruel distortions that feel true when you are worn down.`,
      `Emet is firm, reliable truth, and the verse wants it in your heart. So much of your inner talk is not actually true — "I am failing," "everyone else manages better," "I am not enough." Those feel like facts, but they are not emet. They are exhaustion talking.`,
      `You can practice telling yourself the truth in your heart. The real truth: you are tired, not failing. You are stretched, not broken. You are loved and kept and doing hard things faithfully. That is the firm ground. Speak that, because it is true, and the cruel version is not.`
    ],
    carry:`Speak the truth to yourself in your heart — you are tired, not failing; loved, not falling short. The cruel version only feels true; it is not.`
  },
  {
    id:'e074', section:'voice', title:'Named Before You Did Anything',
    land:{ ref:'Isaiah 49:1', text:`Coasts and islands, listen to me; distant peoples, pay attention. The LORD called me before I was born. He named me while I was in my mother's womb.`},
    where:`The servant in Isaiah declares where his identity came from: the Lord named him while he was still in the womb — before he had done anything, proven anything, earned anything. Identity given at the very start, by God, by name.`,
    word:{ term:'קָרָא', translit:'qara', gloss:'to call, to name, to summon by name',
      note:`The naming word again — here pushed all the way back to the womb. You were named before you could do a thing. Your name, and your belonging, came before your performance.`},
    reflect:[
      `He says God named him in the womb — before any accomplishment, any failure, any productive day. The name came first, from God, attached to nothing he had done. That is the order: named, then a life. Not a life earned, then a name.`,
      `Qara is that naming, and it lands hardest for someone whose days are measured by output. You were named before you produced anything. Your worth was set in the womb, by God, with zero on the scoreboard. It did not come from doing. It came before doing.`,
      `So a day where you got "nothing done" does not lower it. Your name, your belonging, was spoken over you before you lifted a finger, and it does not fluctuate with your productivity. You are still that named, claimed person on your emptiest day.`
    ],
    carry:`You were named by God before you had done anything. Your worth was set in the womb — an empty-feeling day cannot lower it.`
  },
  {
    id:'e075', section:'voice', title:'Gentle, and Strong',
    land:{ ref:'Proverbs 25:15', text:`A ruler can be persuaded through patience, and a gentle tongue can break a bone.`},
    where:`Proverbs makes a surprising claim — a gentle tongue can break a bone. Gentleness, it says, is not weakness; it has a quiet power that hard force does not. The soft approach accomplishes what the harsh one cannot.`,
    word:{ term:'רַךְ', translit:'rak', gloss:'soft, tender, gentle',
      note:`The gentle word again — and the verse insists it is strong. A rak tongue breaks bone. Gentleness is not the weak option. It is, strangely, the powerful one.`},
    reflect:[
      `We assume gentleness is the soft, ineffective option — that to get through to someone, including yourself, you have to be hard, firm, demanding. Proverbs flips it: a gentle tongue can break a bone. Gentleness has a power harshness does not.`,
      `Rak is that gentleness, and it works on you too. The harsh inner taskmaster does not actually make you better — it just stirs up shame and exhaustion. The gentle voice, the patient one, is what actually moves you, softens the hard places, gets through.`,
      `You do not have to be hard on yourself to grow or to get through the day. Gentleness is not letting yourself off the hook — it is the stronger tool. The soft answer to your own failures does more than the harsh one ever could.`
    ],
    carry:`Being gentle with yourself is not weak — it is the stronger tool. The soft answer to your own failures does what harshness never could.`
  },
  {
    id:'e076', section:'voice', title:'A Guard at the Door',
    land:{ ref:'Psalm 141:3', text:`LORD, set up a guard for my mouth; keep watch at the door of my lips.`},
    where:`David, knowing how easily words slip out and do damage, asks God to post a guard at his mouth — a watchman at the door of his lips. He does not trust himself to manage it alone, so he asks for help keeping watch.`,
    word:{ term:'נָצַר', translit:'natsar', gloss:'to guard, to keep watch, to post a sentry',
      note:`The guarding word again — here stationed at the lips. David asks God to do the watching, admitting he cannot police his own words by willpower alone.`},
    reflect:[
      `David does not say "I will try harder to watch my words." He asks God to set up the guard — keep watch at the door of my lips. He knows the harsh, careless words slip out faster than willpower can catch them, so he asks for help at the door.`,
      `Natsar is that guarding, and there is humility in the request. You can pray the same thing about the words you aim at yourself — God, guard my mouth, especially the inner one. Catch the cruel sentence before it lands. Keep watch where I cannot.`,
      `You do not have to win the fight with your own harsh voice by sheer effort. You can ask God to stand guard at the door — to help you catch the unkind word before you say it over yourself, to keep watch on the inner talk when you are too tired to.`
    ],
    carry:`You do not have to police your own harsh voice alone. Ask God to guard the door of your lips — even the inner ones — and he will.`
  },
  {
    id:'e077', section:'voice', title:'Talking to Your Own Soul',
    land:{ ref:'Psalm 42:5', text:`Why, my soul, are you so dejected? Why are you in such turmoil? Put your hope in God, for I will still praise him, my Savior and my God.`},
    where:`David does something striking here — he stops and talks directly to himself. He hears his own despair, names it, and then deliberately redirects it: put your hope in God. The clearest picture in Scripture of someone preaching to their own downcast heart.`,
    word:{ term:'יָחַל', translit:'yachal', gloss:'to wait, to hope, to expect with patience',
      note:`It is hope that waits — not a feeling that shows up on its own, but a choice to set your expectation on God. David commands it of his own soul, steering a tired heart back toward solid ground.`},
    reflect:[
      `Notice what David does. He does not just feel dejected — he talks to the dejection. "Why, my soul, are you so downcast?" He treats his own heart like someone he can address, question, and gently redirect. That is allowed. You can do that.`,
      `Yachal is the redirect — put your hope in God. He does not wait to feel hopeful. He preaches hope to himself, on purpose, the way you would speak calm to a child mid-meltdown. The feeling has not changed yet; he chooses the direction anyway.`,
      `When the heaviness rolls in — the turmoil, the why-is-this-so-hard — you are not stuck just listening to it. You can answer it. Name what you feel, then gently turn your own soul toward hope: he is still my God, I will praise him yet. You get to be the steady voice talking your own heart down.`
    ],
    carry:`You can talk to your own downcast soul, not just listen to it. Name the heaviness, then turn yourself gently toward hope — you get to be the steady voice.`
  },
  {
    id:'e078', section:'voice', title:'What You Turn Over and Over',
    land:{ ref:'Joshua 1:8', text:`This book of instruction must not depart from your mouth; you are to meditate on it day and night so that you may carefully observe everything written in it. For then you will prosper and succeed in whatever you do.`},
    where:`As Joshua takes on a weight too big for him, God tells him the one thing to keep close — his word, turned over in the mind day and night. Not as a burden, but as the steady thing to murmur to himself when the task feels impossible.`,
    word:{ term:'הָגָה', translit:'hagah', gloss:'to murmur, to mutter under the breath, to ponder over and over',
      note:`Not cold study. It is the low, repeated muttering of something to yourself until it sinks in — the way a worry loops, but turned toward truth instead.`},
    reflect:[
      `Your mind already meditates — it just usually loops the wrong things. The replay of what went wrong, the worry turned over and over at 2am, the running tally of what you did not get done. That looping is hagah, pointed at fear.`,
      `God tells Joshua to aim that same muttering-it-over at his word instead — day and night, the steady truth turned over until it becomes the soundtrack underneath. Not more pressure. A better thing to loop.`,
      `You cannot just stop the inner repetition by willpower. But you can change what it chews on. A line of truth — you are held, his mercy is new this morning, he is with you wherever you go — murmured over and over until it wears a groove. Give your looping mind something true to turn over.`
    ],
    carry:`Your mind is going to loop something all day. Give it truth to turn over and over, until the steady thing underneath is his word, not your worry.`
  },
  {
    id:'e079', section:'voice', title:'A Time to Be Silent',
    land:{ ref:'Ecclesiastes 3:7', text:`a time to tear and a time to sew; a time to be silent and a time to speak;`},
    where:`In the famous poem about times and seasons, one line gives a permission we forget: there is a time to be silent. Not every moment needs your words — including the inner ones. Sometimes the wise, kind thing is to let the talking rest.`,
    word:{ term:'חָשָׁה', translit:'chashah', gloss:'to be silent, to hold one’s peace, to keep still',
      note:`Chosen quiet — deciding not to speak. The verse pairs it with "a time to speak," meaning silence is not failure or avoidance. It has its own right time, its own wisdom.`},
    reflect:[
      `The verse gives silence a season of its own — a time to be silent. Which means not every thought needs to be spoken, not every self-criticism needs to be voiced, not every anxious commentary needs the floor. Sometimes the kindest thing is to let the inner voice go quiet.`,
      `Chashah is that chosen quiet, and it is wisdom, not avoidance. The harsh running monologue does not always need to be answered or argued with — sometimes it just needs to be hushed. You are allowed to tell the cruel inner commentary: not now. Be still.`,
      `There is a time to speak truth to yourself, and there is a time to simply let the noise stop. When you are too tired to fight the voice, you can choose silence instead — set the whole inner argument down and rest in the quiet. The talking can wait. Stillness is its own answer.`
    ],
    carry:`Not every anxious thought needs the floor. There is a time to hush the inner noise — to tell it, gently, not now — and rest in the quiet.`
  },
  {
    id:'e080', section:'voice', title:'It Starts in the Heart',
    land:{ ref:'Matthew 12:34', text:`Brood of vipers! How can you speak good things when you are evil? For the mouth speaks from the overflow of the heart.`},
    where:`Jesus says this bluntly, to people putting on a religious front while rotten underneath — and the principle he names cuts to something universal: the mouth simply speaks whatever the heart is full of. The words are a readout of the reservoir, every time.`,
    word:{ term:'περίσσευμα', translit:'perisseuma', gloss:'overflow, surplus, what brims over the top',
      note:`The overflow word — what spills because the container is full. Jesus' point: speech is not the root problem. It is the runoff. Change the heart, and the words change with it.`},
    reflect:[
      `Jesus is blunt here, but the principle underneath is gentle and freeing: the mouth speaks from the overflow of the heart. Your words — including the ones you aim at yourself — are not the root. They are the spillover of whatever has filled the reservoir.`,
      `Perisseuma is that overflow, and it means the fix is upstream. When harsh words about yourself keep spilling out, the answer is not mainly to clamp your mouth — it is to tend what is filling the heart. What goes in is what brims over under pressure.`,
      `So you are not failing every time the cruel words spill. You are reading your reservoir. And you can change what fills it — slowly, day by day, storing up the true and the kind — until what overflows on a hard day is gentler, almost without trying. Tend the heart, and the words follow.`
    ],
    carry:`Your words are the overflow, not the root. Tend what fills your heart, and on the hard days, gentler words are what spill out.`
  }
];
