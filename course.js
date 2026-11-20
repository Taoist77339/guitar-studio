// Course content. Block types: p, h, list, steps, tip, chords, play, tab, fret, changes, quiz, tuner.
// Tab tokens: "string.fret" (string 1 = high e), ":n" = length in units, "+" = notes together, "-" = rest, "|" = bar line.
// unit = tab tokens per beat (2 = eighth notes, 1 = quarter notes). Strum tokens: D down, U up, X muted chunk, . rest,
// B = bass note of the chord (thumb), b = alternate bass, 1-6 = that string of the chord.

window.PATTERNS = {
  "Quarter downs": { p: "D . D . D . D ." },
  "Down-up eighths": { p: "D U D U D U D U" },
  "Folk strum": { p: "D . D U . U D U" },
  "Chunk groove": { p: "D . X U . U X U" },
  "Waltz (3/4)": { p: "D . D U D U" },
  "Blues shuffle": { p: "D U D U D U D U", swing: true },
  "Travis picking": { p: "B 2 b 1 B 2 b 1" },
  "Arpeggio": { p: "B 3 2 3 1 3 2 3" },
  "6/8 arpeggio": { p: "B 3 2 1 2 3", sub: 3 },
};

window.COURSE = {
  intro: "A complete beginner course for acoustic guitar. Eight units take you from holding the guitar to barre chords, fingerpicking and the blues. Every lesson has something to play: chord diagrams you can hear, play-along tracks, tabs and ear-training quizzes.",
  routine: [
    ["2 min", "Tune every string"],
    ["5 min", "Warm-up: spider exercise or a scale"],
    ["8 min", "Today's lesson"],
    ["5 min", "Play something you enjoy"],
  ],
  units: [
    // ------------------------------------------------------------------ UNIT 1
    {
      title: "Getting started",
      blurb: "Your guitar, your posture, tuning, and reading chord charts and tab.",
      lessons: [
        {
          id: "meet-your-guitar", title: "Meet your guitar", mins: 10,
          goal: "Know the parts of the guitar and the names and numbers of the six strings.",
          body: [
            { p: "The **headstock** holds the tuning pegs. The **neck** carries the **frets**, the metal bars that divide it into half-step notes. The **body** amplifies the sound through the **soundhole**, and the strings anchor at the **bridge**." },
            { p: "Strings are numbered from the thinnest (**1**) to the thickest (**6**). Holding the guitar, string 6 is the one nearest your face. In standard tuning, from thickest to thinnest, they are **E A D G B E**." },
            { tip: "**Memory trick:** *Eddie Ate Dynamite, Good Bye Eddie.* The two E strings are two octaves apart. Call them *low E* and *high e*." },
            { fret: { title: "The open strings", from: 0, to: 4, marks: ["6.0", "5.0", "4.0", "3.0", "2.0", "1.0"] } },
            { h: "Steel or nylon?" },
            { p: "Steel-string acoustics are bright and loud, with thinner necks; they are the sound of folk, pop and country. Nylon-string (classical) guitars are softer on the fingers and have wider necks. Everything in this course works on both." },
            { list: ["Tap each open string above and say its name out loud.", "Pluck each string on your guitar from 6 to 1, naming it as you go.", "Then go backwards from 1 to 6."] },
          ],
          ready: ["I can name all six strings without looking.", "I know which string is number 1 and which is number 6."],
        },
        {
          id: "posture-and-pick", title: "Posture and holding the pick", mins: 10,
          goal: "Hold the guitar and the pick in a relaxed way that won't cause tension or pain.",
          body: [
            { h: "Sitting" },
            { steps: [
              "Sit on a chair without arms, feet flat on the floor.",
              "Rest the guitar's waist (the inward curve) on your right thigh. The back of the body touches your stomach.",
              "Keep the neck angled slightly upward, about 10–15°. A drooping neck makes chords harder.",
              "Your right forearm rests on the top edge of the body, so your hand hangs over the soundhole.",
            ] },
            { h: "Fretting hand" },
            { list: [
              "Put your thumb behind the neck, roughly behind your middle finger. Don't clamp the neck in your palm.",
              "Press with the **tips** of your fingers, just behind the fret (on the headstock side), not on top of it.",
              "Keep your knuckles curved so your fingertips land vertically and don't touch neighbouring strings.",
            ] },
            { h: "The pick" },
            { p: "Curl your index finger and lay the pick on the side of its last joint, point facing the strings. Press with the pad of your thumb. Only **2–3 mm** of pick should show. A medium pick (about 0.6–0.73 mm) is a good start." },
            { tip: "**No pick?** Strum with the nail side of your index finger on the way down and the fingertip on the way up. You can switch to a pick later." },
          ],
          ready: ["The guitar stays in place even when I let go of the neck.", "My shoulders and wrists feel relaxed.", "The pick doesn't spin or fall out when I strum lightly."],
        },
        {
          id: "tuning", title: "Tuning your guitar", mins: 10,
          goal: "Tune all six strings with the tuner, and check them by ear.",
          body: [
            { p: "An out-of-tune guitar makes even perfect fingering sound wrong, so tune at the start of every session. New strings stretch and drift for the first few days." },
            { steps: [
              "Press **Start tuner** and allow the microphone.",
              "Pluck one string firmly and let it ring.",
              "If the needle is left of centre (flat), tighten the peg. If it's right (sharp), loosen it.",
              "Always finish by tuning **up** to the note. If you overshoot, go below it and come back up. This keeps the string from slipping.",
            ] },
            { tuner: true },
            { h: "Check by ear: the 5th-fret method" },
            { p: "Press string 6 at the 5th fret: that's an A, the same note as open string 5. Play both and listen for one smooth tone with no wobble. Repeat across the neck: 5th fret of A = open D, 5th fret of D = open G, **4th** fret of G = open B, 5th fret of B = open e." },
            { tip: "**Hearing a wobble?** That pulsing \"wah-wah\" is called beating. The slower it gets, the closer you are. When it disappears, the strings match." },
          ],
          ready: ["All six strings show green on the tuner.", "I can hear the beating when two strings are slightly out of tune."],
        },
        {
          id: "reading-charts", title: "Reading chord diagrams and tab", mins: 12,
          goal: "Read the two ways guitar music is written in this course.",
          body: [
            { h: "Chord diagrams" },
            { p: "A chord diagram is a picture of the neck standing upright. The vertical lines are the strings (low E on the left), the horizontal lines are frets, and the thick bar at the top is the nut." },
            { list: ["A **numbered dot** means press there with that finger: 1 index, 2 middle, 3 ring, 4 pinky.", "**○** above a string means play it open.", "**✕** means don't play that string."] },
            { chords: ["Em", "C"] },
            { p: "Tap a diagram to hear the chord picked one string at a time, then strummed." },
            { h: "Tab" },
            { p: "Tab shows six lines, one per string, with the **high e on top**, as if you looked down at the guitar from above. The numbers are frets; 0 means open. Read left to right; stacked numbers are played together." },
            { tab: { title: "Example: read it, then press Start", notes: "3.0 2.1 1.0 2.1 | 3.0 2.1 1.0:2", unit: 1, bpm: 70 } },
            { p: "This tab says: open G string, B string at the 1st fret, open high e, and back. Every play-along starts with **one bar of clicks** to count you in." },
          ],
          ready: ["I can tell which finger goes where from a chord diagram.", "I can play the example tab by reading it."],
        },
        {
          id: "first-notes", title: "First notes and finger strength", mins: 15, bpm: 60,
          goal: "Pick single strings cleanly and press notes without buzzing.",
          body: [
            { p: "Before chords, get used to picking one string at a time. Rest your picking hand lightly and move from the wrist, keeping the motion small." },
            { tab: { title: "Open strings, four beats each", notes: "6.0 6.0 6.0 6.0 | 5.0 5.0 5.0 5.0 | 4.0 4.0 4.0 4.0 | 3.0 3.0 3.0 3.0 | 2.0 2.0 2.0 2.0 | 1.0 1.0 1.0 1.0", unit: 1, bpm: 60 } },
            { h: "One finger per fret" },
            { p: "Now fret notes: finger 1 at fret 1, finger 2 at fret 2, and so on. Keep each finger down until you need it elsewhere." },
            { tab: { title: "1-2-3-4 on four strings", notes: "6.1 6.2 6.3 6.4 | 5.1 5.2 5.3 5.4 | 4.1 4.2 4.3 4.4 | 3.1 3.2 3.3 3.4", unit: 1, bpm: 50 } },
            { tip: "**Buzzing?** Move your fingertip closer to the fret and press a little harder. If it still buzzes, check that no other part of your hand touches the string." },
            { p: "Your fingertips will feel sore for the first week or two. That's normal; calluses build quickly if you play a little every day. Stop if anything feels sharp rather than tender." },
          ],
          ready: ["Every fretted note rings without buzzing at 50 BPM.", "I can play the open-string exercise in time with the click."],
        },
      ],
    },
    // ------------------------------------------------------------------ UNIT 2
    {
      title: "Your first chords",
      blurb: "Ten essential open chords and the skill that matters most: changing between them.",
      lessons: [
        {
          id: "em-asus2", title: "Em and Asus2", mins: 15, bpm: 60,
          goal: "Play two easy chords cleanly, each string ringing clearly.",
          body: [
            { p: "**E minor** uses just two fingers and all six strings. **Asus2** is also two fingers, but string 6 is not played." },
            { chords: ["Em", "Asus2"] },
            { h: "The string-by-string check" },
            { steps: ["Make the chord shape.", "Pick each string from low to high, one at a time.", "Any string that buzzes or sounds dead? Adjust that finger (closer to the fret, more arched) and pick again.", "Strum the whole chord."] },
            { p: "Do the check every time you learn a new chord. It's the fastest way to clean chords." },
            { play: { title: "Em and Asus2, four downstrums each", prog: ["Em", "Asus2"], pattern: "D . D . D . D .", bpm: 60 } },
            { tip: "**Notice something?** Fingers 2 and 3 stay on the 2nd fret in both chords; they just move one string over. Look for shared fingers in every chord change." },
          ],
          ready: ["Each string rings clearly in both chords.", "I can strum along with the track without stopping."],
        },
        {
          id: "chord-changes", title: "Changing chords smoothly", mins: 15,
          goal: "Learn the practice method that makes chord changes fast.",
          body: [
            { p: "Knowing chord shapes is easy. Switching between them in time is what makes you a guitarist. Three habits help:" },
            { list: [
              "**Move all fingers as one unit.** Don't place them one by one. Picture the shape and land it.",
              "**Keep shared fingers down**, or slide them, instead of lifting them.",
              "**Look ahead.** Visualise the next chord while you're still playing the current one.",
            ] },
            { h: "The one-minute change" },
            { p: "Set a timer for 60 seconds. Change between two chords as many times as you can, keeping each one clean. Write down your score. Do this daily: 30 changes a minute is a great goal." },
            { changes: ["Em", "Asus2"] },
            { tip: "**Strum once per change** if you like: make the shape, strum, switch. Speed comes from accuracy, not from rushing." },
          ],
          ready: ["I can make 20 or more clean Em ↔ Asus2 changes in one minute."],
        },
        {
          id: "am-and-e", title: "Am and E", mins: 15, bpm: 60,
          goal: "Learn a matching pair of chords that share one shape.",
          body: [
            { p: "Look closely: **E major** and **A minor** are the same finger shape, moved across by one string. Learn one and you get the other for free." },
            { chords: ["Am", "E"] },
            { p: "Am skips string 6. E uses all six strings, so it sounds big and full. Compare: E sounds bright, Am sounds sad. That's the difference between major and minor." },
            { changes: ["Am", "E"] },
            { play: { title: "Am and E", prog: ["Am", "E"], pattern: "D . D . D . D .", bpm: 60 } },
            { play: { title: "All four chords so far", prog: ["Em", "Am", "E", "Asus2"], pattern: "D . D . D . D .", bpm: 60 } },
          ],
          ready: ["I can play Am and E cleanly.", "I can move the shape between them while keeping the finger spacing."],
        },
        {
          id: "d-and-a", title: "D and A", mins: 15, bpm: 60,
          goal: "Play the D and A major chords, strumming only the right strings.",
          body: [
            { p: "**D** is a triangle shape on the top three strings. Strum only four strings (from D, string 4). **A** packs three fingers onto the 2nd fret; strum five strings." },
            { chords: ["D", "A"] },
            { tip: "**A crowded?** Angle your fingers so they fit side by side. Some players use fingers 2, 3, 4 instead of 1, 2, 3 to leave the index free." },
            { p: "**Aim your strum:** start the downstrum from the right string instead of the top string. Strumming open strings that aren't in the chord makes it sound muddy." },
            { changes: ["D", "A"] },
            { play: { title: "D and A", prog: ["D", "A"], pattern: "D . D . D . D .", bpm: 60 } },
          ],
          ready: ["My D chord rings with no muffled high e.", "I can start my strum on the correct string."],
        },
        {
          id: "c-and-g", title: "C and G", mins: 20, bpm: 60,
          goal: "Play the two most common chords in popular music.",
          body: [
            { p: "**C** needs a stretch across three frets; keep your wrist low and thumb behind the neck. **G** uses all six strings. Play it with fingers 2, 1, 3 shown below, or 3, 2, 4 if that frees your hand for later chords." },
            { chords: ["C", "G"] },
            { p: "The most common problem with C is the open high e being muted by finger 1 on the B string. Arch that finger more." },
            { changes: ["C", "G"] },
            { changes: ["G", "D"] },
            { play: { title: "C, G and D", prog: ["C", "G", "D", "G"], pattern: "D . D . D . D .", bpm: 60 } },
          ],
          ready: ["All my open strings in C ring clearly.", "I can make 15 or more clean C ↔ G changes per minute."],
        },
        {
          id: "first-song", title: "Your first song: three chords", mins: 20, bpm: 70,
          goal: "Play a full three-chord progression, the backbone of thousands of songs.",
          body: [
            { p: "G, C and D are the **I, IV and V** chords in the key of G, the most common chord family in music. Songs such as *Knockin' on Heaven's Door*, *Bad Moon Rising* and *Leaving on a Jet Plane* use little more than these three, plus Em or Am." },
            { chords: ["G", "C", "D", "Em"] },
            { play: { title: "Verse: G – C – G – D", prog: ["G", "C", "G", "D"], pattern: "D . D . D . D .", bpm: 70 } },
            { play: { title: "Chorus: C – G – D – Em", prog: ["C", "G", "D", "Em"], pattern: "D . D . D . D .", bpm: 70 } },
            { h: "How songs are built" },
            { p: "Most songs are made of a few sections that repeat: an **intro**, a **verse** (the story), a **chorus** (the hook) and sometimes a **bridge**. Play the verse twice, the chorus twice, and repeat. That's a song." },
            { tip: "**Keep going.** If you miss a chord, keep strumming and catch the next one. Stopping is the habit to break, not the wrong notes." },
          ],
          ready: ["I can play the verse and chorus four times without stopping.", "I can sing or hum something over it, even a little."],
        },
      ],
    },
    // ------------------------------------------------------------------ UNIT 3
    {
      title: "Rhythm and strumming",
      blurb: "Keep steady time and learn the strum patterns that carry most songs.",
      lessons: [
        {
          id: "counting", title: "Counting and the pulse", mins: 12, bpm: 70,
          goal: "Strum steadily with the beat while counting out loud.",
          body: [
            { p: "Rhythm matters more than fancy chords. Listeners forgive a wrong note; they notice a wobbly beat straight away." },
            { list: [
              "Count **1, 2, 3, 4** out loud with the click and tap your foot.",
              "Strum from the **elbow and wrist together**, like shaking water off your hand. Keep the wrist loose.",
              "Hold the pick firmly enough not to drop it but loosely enough that it gives a little on the strings.",
            ] },
            { play: { title: "Downstrums on every beat", prog: ["G", "C", "D", "G"], pattern: "D . D . D . D .", bpm: 70 } },
            { tip: "**Try this:** switch the guitar sound off (\"Click only\") and strum with just the metronome. Can you stay locked to it for a whole minute?" },
          ],
          ready: ["I can strum four even beats per bar while counting aloud.", "My strums land right on the click."],
        },
        {
          id: "down-up", title: "Down-up eighth notes", mins: 15, bpm: 70,
          goal: "Strum continuous eighth notes with a pendulum motion.",
          body: [
            { p: "Split each beat in two: count **1 & 2 & 3 & 4 &**. Downstrums land on the numbers, upstrums on the \"&\"s. The hand moves down on every number and up on every \"&\", like a pendulum." },
            { p: "Upstrums only need to catch the top three or four strings. Keep them lighter than the downstrums." },
            { play: { title: "Eighth notes", prog: ["G", "Em", "C", "D"], pattern: "D U D U D U D U", bpm: 70 } },
            { tip: "**The golden rule:** your hand never stops moving. Later, when you skip strums, the hand still moves; it just misses the strings." },
          ],
          ready: ["I can strum down-up eighths through four chords at 70 BPM.", "My upstrums are lighter than my downstrums."],
        },
        {
          id: "folk-strum", title: "The folk strum", mins: 20, bpm: 75,
          goal: "Play the most-used strum pattern in acoustic music.",
          body: [
            { p: "Pattern: **D · D U · U D U**. Count it: **1, 2 &, (3) & 4 &**. On beat 3 the hand moves down but misses the strings. That missed downstrum is what gives the pattern its swing." },
            { steps: [
              "Play continuous eighths: D U D U D U D U.",
              "Now miss the strings on the **up** after beat 1 and on the **down** of beat 3.",
              "Say it while you play: *down, down-up, up-down-up*.",
            ] },
            { play: { title: "Folk strum", prog: ["G", "Em", "C", "D"], pattern: "D . D U . U D U", bpm: 75 } },
            { play: { title: "Same pattern, new chords", prog: ["Am", "C", "G", "D"], pattern: "D . D U . U D U", bpm: 75 } },
          ],
          ready: ["I can play the folk strum over one chord without thinking.", "I can keep it going through the chord changes."],
        },
        {
          id: "chunk", title: "Accents and the percussive chunk", mins: 15, bpm: 80,
          goal: "Add groove with accents and a muted backbeat.",
          body: [
            { p: "A **chunk** (✕) is a percussive strum. As the pick hits the strings, let the side of your picking hand land on them to mute them. It works like a snare drum on beats 2 and 4." },
            { p: "Practise the movement on its own first: strum down, and let your palm drop onto the strings at the same moment." },
            { play: { title: "Chunk groove", prog: ["Em", "C", "G", "D"], pattern: "D . X U . U X U", bpm: 80 } },
            { h: "Accents" },
            { p: "Even without chunks, you can make a rhythm groove by playing beats 2 and 4 slightly louder. Go back to the folk strum and try accenting the downstrums on 2 and 4." },
          ],
          ready: ["My chunks sound percussive, without ringing notes.", "I can play the chunk groove over a chord progression."],
        },
        {
          id: "waltz", title: "3/4 time: the waltz", mins: 15, bpm: 90,
          goal: "Play in three, the rhythm of waltzes and many folk ballads.",
          body: [
            { p: "Not everything is in four. In **3/4** you count **1, 2, 3** with the accent on 1. Many folk songs and hymns, including *Amazing Grace* (a traditional melody), are in three." },
            { play: { title: "Waltz strum: Amazing Grace chords", prog: ["G", "G", "C", "G", "G", "G", "D", "D", "G", "G", "C", "G", "G", "D", "G", "G"], pattern: "D . D U D U", bpm: 90 } },
            { p: "For a more traditional sound, play only the bass note on beat 1, then strum on 2 and 3:" },
            { play: { title: "Bass, strum, strum", prog: ["G", "C", "G", "D"], pattern: "B . D . D .", bpm: 90 } },
          ],
          ready: ["I can feel and count in three.", "I can play the whole 16-bar progression without losing my place."],
        },
        {
          id: "smooth-changes", title: "Changing chords in rhythm", mins: 15, bpm: 75,
          goal: "Change chords without breaking the strum, including two chords in one bar.",
          body: [
            { p: "A trick used by every working guitarist: on the last upstrum before a change, lift your fingers early and strum the **open strings**. That buys you the time to land the next chord right on beat 1. Nobody hears the open strings." },
            { play: { title: "Change on beat 1", prog: ["G", "C", "Em", "D"], pattern: "D . D U . U D U", bpm: 75 } },
            { h: "Two chords per bar" },
            { p: "Many songs change chords halfway through a bar, on beat 3. Here, bars 2 and 4 hold two chords each." },
            { play: { title: "G | C D | Em | C D", prog: ["G", "G", "C", "D", "Em", "Em", "C", "D"], perBar: 2, pattern: "D . D U D . D U", bpm: 70 } },
          ],
          ready: ["The strum doesn't stop or slow down when I change chords.", "I can play two chords in one bar."],
        },
      ],
    },
    // ------------------------------------------------------------------ UNIT 4
    {
      title: "Melody and picking",
      blurb: "Single notes, your first tunes, the C major scale and hammer-ons.",
      lessons: [
        {
          id: "first-melodies", title: "Your first melodies", mins: 15, bpm: 80,
          goal: "Read and play a complete melody from tab.",
          body: [
            { p: "This melody lives on the top two strings. Use finger 1 for fret 1, finger 3 for fret 3. Pick with downstrokes for now." },
            { tab: { title: "Ode to Joy (Beethoven)", notes: "1.0 1.0 1.1 1.3 | 1.3 1.1 1.0 2.3 | 2.1 2.1 2.3 1.0 | 1.0:1.5 2.3:0.5 2.3:2 | 1.0 1.0 1.1 1.3 | 1.3 1.1 1.0 2.3 | 2.1 2.1 2.3 1.0 | 2.3:1.5 2.1:0.5 2.1:2", unit: 1, bpm: 80, wide: 1.4 } },
            { tab: { title: "Twinkle, Twinkle, Little Star", notes: "2.1 2.1 1.3 1.3 | 1.5 1.5 1.3:2 | 1.1 1.1 1.0 1.0 | 2.3 2.3 2.1:2 | 1.3 1.3 1.1 1.1 | 1.0 1.0 2.3:2 | 1.3 1.3 1.1 1.1 | 1.0 1.0 2.3:2 | 2.1 2.1 1.3 1.3 | 1.5 1.5 1.3:2 | 1.1 1.1 1.0 1.0 | 2.3 2.3 2.1:2", unit: 1, bpm: 90 } },
            { tip: "**Ear challenge:** *Mary Had a Little Lamb* starts on the open high e (`1.0`) and uses only `1.0`, `2.3` and `2.1`, plus `1.3` once. Can you work it out without tab?" },
          ],
          ready: ["I can play Ode to Joy at 80 BPM.", "I worked out at least part of a melody by ear."],
        },
        {
          id: "alternate-picking", title: "Alternate picking: the spider", mins: 15, bpm: 60,
          goal: "Pick down-up evenly and build finger independence.",
          body: [
            { p: "**Alternate picking** means strictly down, up, down, up. It's twice as efficient as all downstrokes, and the basis of fast playing." },
            { p: "The **spider** exercise uses one finger per fret: 1-2-3-4 on each string, up to the high e and back. Leave each finger down until the next string." },
            { tab: { title: "The spider", notes: "6.1 6.2 6.3 6.4 5.1 5.2 5.3 5.4 | 4.1 4.2 4.3 4.4 3.1 3.2 3.3 3.4 | 2.1 2.2 2.3 2.4 1.1 1.2 1.3 1.4 | 1.4 1.3 1.2 1.1 2.4 2.3 2.2 2.1 | 3.4 3.3 3.2 3.1 4.4 4.3 4.2 4.1 | 5.4 5.3 5.2 5.1 6.4 6.3 6.2 6.1", unit: 2, bpm: 50 } },
            { tip: "**Make it your daily warm-up.** Start at 50 BPM. When it's clean three times in a row, add 5 BPM. Write down your tempo." },
          ],
          ready: ["I can play the spider with alternate picking at 60 BPM.", "My fingers stay close to the frets."],
        },
        {
          id: "c-major-scale", title: "The C major scale", mins: 15, bpm: 70,
          goal: "Play the C major scale in open position and know its notes.",
          body: [
            { p: "A **scale** is a set of notes in order. The C major scale has no sharps or flats: **C D E F G A B C**. It's the do-re-mi sound." },
            { fret: { title: "C major in open position", from: 0, to: 3, pcs: ["C", "D", "E", "F", "G", "A", "B"], root: "C" } },
            { p: "The brass dots are C, the root note. Play from the C on string 5 (3rd fret) up to the C on string 2 (1st fret), and back down." },
            { tab: { title: "C major scale, up and down", notes: "5.3 4.0 4.2 4.3 | 3.0 3.2 2.0 2.1 | 2.1 2.0 3.2 3.0 | 4.3 4.2 4.0 5.3", unit: 1, bpm: 70 } },
            { p: "Use fingers by fret: fret 1 = finger 1, fret 2 = finger 2, fret 3 = finger 3. Say the note names as you play." },
          ],
          ready: ["I can play the scale up and down from memory.", "I can name each note as I play it."],
        },
        {
          id: "hammer-pull", title: "Hammer-ons and pull-offs", mins: 15, bpm: 60,
          goal: "Sound notes with the fretting hand alone.",
          body: [
            { p: "A **hammer-on** (h) sounds a note by slamming a finger onto the string without picking. A **pull-off** (p) is the reverse: pick a fretted note, then flick the finger off sideways so the lower note sounds." },
            { list: ["Hammer with the fingertip, quickly and close to the fret.", "Pull off slightly downward (toward the floor) to pluck the string as you leave it.", "Both notes should be equally loud. That's the goal."] },
            { tab: { title: "Hammer-ons up, pull-offs down", notes: "6.0 6.2h 5.0 5.2h 4.0 4.2h 4.0 - | 3.2 3.0p 4.2 4.0p 5.2 5.0p 6.0:2", unit: 2, bpm: 60 } },
            { tip: "**Where you'll hear them:** almost every folk and rock guitar part decorates chords with hammer-ons. Next unit you'll use them inside chord shapes." },
          ],
          ready: ["My hammered notes are almost as loud as picked ones.", "My pull-offs sound the open string clearly."],
        },
      ],
    },
    // ------------------------------------------------------------------ UNIT 5
    {
      title: "More chords",
      blurb: "Minor and seventh chords, the G family, embellishments and walking bass lines.",
      lessons: [
        {
          id: "dm-fmaj7", title: "Dm and Fmaj7", mins: 15, bpm: 70,
          goal: "Add a sad minor chord and a dreamy one, your stepping stone to F.",
          body: [
            { p: "**Dm** is the D shape with finger 1 moved to the 1st fret of the high e. **Fmaj7** has a soft, open sound and teaches your fingers the layout of the F chord you'll learn later." },
            { chords: ["Dm", "Fmaj7"] },
            { changes: ["C", "Fmaj7"] },
            { play: { title: "Am – Dm – E – Am", prog: ["Am", "Dm", "E", "Am"], pattern: "D . D U . U D U", bpm: 70 } },
            { play: { title: "C – Fmaj7 (very common)", prog: ["C", "Fmaj7", "C", "Fmaj7"], pattern: "D . D U . U D U", bpm: 75 } },
          ],
          ready: ["My Dm rings without the high e muted.", "I can change C ↔ Fmaj7 smoothly."],
        },
        {
          id: "sevenths", title: "Seventh chords", mins: 20, bpm: 75,
          goal: "Learn the dominant 7th chords that drive blues, country and rock 'n' roll.",
          body: [
            { p: "A **7 chord** adds a fourth note to a major chord. It sounds restless and wants to move on, which is why it's everywhere in blues." },
            { chords: ["E7", "A7", "D7", "B7", "G7", "C7"] },
            { p: "**B7** is the hardest; it uses all four fingers. Take it slowly. It's worth it: E, A and B7 together make the key of E." },
            { changes: ["E7", "B7"] },
            { play: { title: "Key of E: E – A – B7 – E", prog: ["E", "A", "B7", "E"], pattern: "D . D U . U D U", bpm: 75 } },
            { play: { title: "Seventh workout", prog: ["G7", "C", "D7", "G"], pattern: "D . D U . U D U", bpm: 75 } },
          ],
          ready: ["I can play B7 with every string ringing.", "I can hear how a 7 chord wants to resolve."],
        },
        {
          id: "g-family", title: "The G family: anchor fingers", mins: 15, bpm: 80,
          goal: "Play four related chords with fingers 3 and 4 anchored.",
          body: [
            { p: "Play **G** with fingers 2 and 1 on the bass strings, and fingers 3 and 4 on the 3rd fret of the B and high e strings. Now fingers 3 and 4 can **stay put** while the others move: G, Cadd9, Dsus4 and Em7 all share them. This is the modern acoustic sound." },
            { chords: ["Grock", "Cadd9", "Dsus4", "Em7"] },
            { play: { title: "G – Cadd9 – Em7 – Dsus4", prog: ["Grock", "Cadd9", "Em7", "Dsus4"], pattern: "D . D U . U D U", bpm: 80 } },
            { tip: "**Feel the anchor.** If the change feels harder than G to C, your anchored fingers are lifting. Keep them pressed down the whole time." },
          ],
          ready: ["Fingers 3 and 4 stay down through all four chords.", "I can play the progression at 80 BPM."],
        },
        {
          id: "embellish", title: "Sus chords and embellishments", mins: 15, bpm: 70,
          goal: "Decorate open chords by adding and removing a finger.",
          body: [
            { p: "Hold a D chord and lift finger 2 off the high e: that's **Dsus2**. Add finger 4 at the 3rd fret instead: that's **Dsus4**. Moving between them while strumming makes a chord move like a melody." },
            { chords: ["D", "Dsus2", "Dsus4", "A", "Asus2", "Asus4"] },
            { tab: { title: "D with sus4 and sus2 moves", notes: "4.0 3.2 2.3 1.2 1.3 1.2 2.3 3.2 | 4.0 3.2 2.3 1.2 1.0 1.2 2.3 3.2 | 4.0+3.2+2.3+1.2:2 1.3h:2 1.2:2 1.0:2 | 4.0+3.2+2.3+1.2:8", unit: 2, bpm: 70 } },
            { play: { title: "Strum: D – Dsus4 – D – Dsus2", prog: ["D", "Dsus4", "D", "Dsus2"], pattern: "D . D U . U D U", bpm: 80 } },
          ],
          ready: ["I can add and remove the sus notes without breaking the strum.", "I can do the same with A, Asus2 and Asus4."],
        },
        {
          id: "walking-bass", title: "Small F and walking bass lines", mins: 15, bpm: 75,
          goal: "Play a small F chord and connect chords with moving bass notes.",
          body: [
            { p: "The **small F** uses finger 1 to press two strings (B and high e) at the 1st fret. It's a mini barre and great preparation for the full F." },
            { chords: ["Fsmall", "G/B", "C", "Am"] },
            { p: "**G/B** means \"G chord with B in the bass\". Playing C, G/B, Am makes the bass walk down **C – B – A**, a sound heard in countless ballads." },
            { play: { title: "C – G/B – Am – F", prog: ["C", "G/B", "Am", "Fsmall"], pattern: "B . D U . U D U", bpm: 75 } },
            { tip: "**Small F buzzing?** Roll finger 1 slightly onto its bony side, and bring your elbow a little closer to your body." },
          ],
          ready: ["Both strings under my index finger ring in the small F.", "I can hear the bass line walk down."],
        },
      ],
    },
    // ------------------------------------------------------------------ UNIT 6
    {
      title: "Fingerstyle",
      blurb: "Put the pick down: arpeggios, Travis picking and 6/8 ballads.",
      lessons: [
        {
          id: "pima", title: "Thumb and fingers", mins: 15, bpm: 70,
          goal: "Assign each finger of your picking hand to its strings.",
          body: [
            { p: "In fingerstyle, the **thumb** plays the bass strings (6, 5, 4) and the fingers each own one string: **index → G (3)**, **middle → B (2)**, **ring → high e (1)**. Rest your fingers lightly on their strings before you start." },
            { list: ["**T** in the pattern = thumb on the chord's bass note.", "**3, 2, 1** = index, middle, ring on that string.", "Pluck with the fingertips, moving from the knuckle and pulling slightly up and into your palm."] },
            { play: { title: "Arpeggio: T 3 2 3 1 3 2 3", prog: ["C", "Am", "Fsmall", "G"], pattern: "B 3 2 3 1 3 2 3", bpm: 70 } },
            { tip: "**Find the bass note.** For each chord, the thumb plays its root: C = string 5, Am = string 5, F = string 4, G = string 6." },
          ],
          ready: ["Each finger stays on its own string.", "My thumb finds the right bass string for each chord."],
        },
        {
          id: "travis", title: "Travis picking", mins: 20, bpm: 70,
          goal: "Keep an alternating thumb bass going while the fingers play on top.",
          body: [
            { p: "Travis picking is the country-folk style where the thumb keeps a steady **boom-chick** between two bass strings, like a pianist's left hand, while the fingers add notes in between." },
            { h: "Step 1: thumb only" },
            { play: { title: "Alternating bass (T = root, t = next string)", prog: ["C", "Am", "G", "C"], pattern: "B . b . B . b .", bpm: 70 } },
            { h: "Step 2: add the fingers on the \"&\"s" },
            { play: { title: "Travis pattern", prog: ["C", "Am", "G", "C"], pattern: "B 2 b 1 B 2 b 1", bpm: 65 } },
            { tip: "**The thumb is the boss.** If the pattern falls apart, drop the fingers and get the thumb steady again. It must become automatic, so practise it while watching TV." },
          ],
          ready: ["My thumb alternates steadily without me thinking about it.", "I can keep the Travis pattern going through a chord change."],
        },
        {
          id: "six-eight", title: "6/8 arpeggios", mins: 15, bpm: 60,
          goal: "Play the rolling 6/8 feel used in folk ballads.",
          body: [
            { p: "In **6/8** you count six quick notes per bar, felt as two big beats: **1** 2 3 **4** 5 6. Picked as thumb-3-2-1-2-3, it creates a rolling, rocking sound." },
            { p: "This progression is from the traditional folk song *House of the Rising Sun*. It also uses the E major chord as a dramatic turnaround." },
            { play: { title: "Am – C – D – F – Am – C – E – E", prog: ["Am", "C", "D", "Fsmall", "Am", "C", "E", "E"], pattern: "B 3 2 1 2 3", sub: 3, bpm: 60 } },
          ],
          ready: ["I can feel two big beats in each bar.", "I can play the eight-chord sequence smoothly."],
        },
        {
          id: "pinch", title: "Pinches and melody on top", mins: 15, bpm: 70,
          goal: "Play bass and melody together with a pinch.",
          body: [
            { p: "A **pinch** is the thumb and a finger plucking at the same time, the bass and the top note together. It accents the start of each bar and makes fingerstyle sound full." },
            { play: { title: "Pinch pattern: T+1 3 2 3 t 3 2 3", prog: ["G", "Em", "C", "D"], pattern: "B1 3 2 3 b 3 2 3", bpm: 70 } },
            { p: "Fingerstyle arrangements put the melody on the top strings and fill in the bass with the thumb. Here's Ode to Joy with bass notes underneath:" },
            { tab: { title: "Ode to Joy with bass", notes: "5.3+1.0 1.0 1.1 1.3 | 3.0+1.3 1.1 1.0 2.3 | 5.3+2.1 2.1 2.3 1.0 | 3.0+1.0:1.5 2.3:0.5 2.3:2", unit: 1, bpm: 70, wide: 1.4 } },
          ],
          ready: ["My pinches sound as one note, not two.", "I can play the melody with bass notes."],
        },
      ],
    },
    // ------------------------------------------------------------------ UNIT 7
    {
      title: "Barre chords and beyond",
      blurb: "Power chords, the F barre, movable shapes and the capo.",
      lessons: [
        {
          id: "power-chords", title: "Power chords", mins: 15, bpm: 90,
          goal: "Play the movable two- and three-note chords of rock music.",
          body: [
            { p: "A **power chord** (written 5, as in G5) is just the root and fifth. It's neither major nor minor. The same shape slides anywhere: wherever finger 1 sits on string 6 or 5 names the chord." },
            { chords: ["E5", "A5", "D5", "G5", "C5"] },
            { fret: { title: "Root notes on string 6", from: 0, to: 12, strings: [6], pcs: ["C", "D", "E", "F", "G", "A", "B"] } },
            { list: ["Mute the strings you aren't playing by letting your fingers touch them lightly.", "**Palm mute:** rest the edge of your picking hand on the strings right at the bridge for a chunky, tight sound."] },
            { play: { title: "G5 – C5 – D5 – C5, eighth-note downs", prog: ["G5", "C5", "D5", "C5"], pattern: "D D D D D D D D", bpm: 90 } },
          ],
          ready: ["I can play power chords without extra strings ringing.", "I can slide the shape to a new root."],
        },
        {
          id: "f-barre", title: "The F barre chord", mins: 20, bpm: 60,
          goal: "Play a full six-string F chord. It takes weeks; that's normal.",
          body: [
            { p: "The F barre is the famous wall for guitarists. Everyone struggles with it for a few weeks, then suddenly it works. Patience, and a little every day." },
            { chords: ["Fsmall", "F"] },
            { steps: [
              "Lay finger 1 flat across all six strings at the 1st fret, right behind the fret wire.",
              "Roll it slightly onto its bony outer edge; the soft centre of the finger mutes strings.",
              "Lower your thumb to the middle of the back of the neck.",
              "Pull back gently with your arm instead of squeezing with your thumb. The weight of your arm does the work.",
              "Add fingers 2, 3, 4 (this is the E shape, moved up one fret).",
            ] },
            { tip: "**Build up to it:** small F (2 strings) → 4-string F (barre the top four, fingers 2 and 3 on G and D) → full F. Check each string one by one." },
            { changes: ["C", "F"] },
            { play: { title: "Am – F – C – G", prog: ["Am", "F", "C", "G"], pattern: "D . D U . U D U", bpm: 65 } },
          ],
          ready: ["At least five of six strings ring in my F.", "I can hold it for a full bar without pain."],
        },
        {
          id: "e-shape", title: "Movable E-shape barre chords", mins: 15, bpm: 70,
          goal: "Use one barre shape to play any major or minor chord.",
          body: [
            { p: "The F barre is an **E chord** with your index finger acting as a new nut. Slide it up two frets and it becomes **G**; at the 5th fret it's **A**. The root is the note under your index finger on string 6." },
            { p: "Lift finger 2 off and you get the **minor** version: F becomes **Fm**, and at the 5th fret you get **Am**." },
            { chords: ["F", "Fm", "Gbarre", "Ambarre"] },
            { fret: { title: "Notes on string 6: your barre roots", from: 0, to: 12, strings: [6], pcs: ["C", "D", "E", "F", "G", "A", "B"] } },
            { play: { title: "F – G – Am (all barre)", prog: ["F", "Gbarre", "Ambarre", "Gbarre"], pattern: "D . D U . U D U", bpm: 70 } },
          ],
          ready: ["I can find G, A and C barre chords using string-6 roots.", "I can switch between major and minor barre shapes."],
        },
        {
          id: "a-shape", title: "A-shape barre chords and Bm", mins: 20, bpm: 70,
          goal: "Play barre chords with the root on string 5, including the essential Bm.",
          body: [
            { p: "The second barre family is based on the **A shape** (major) and **Am shape** (minor), with the root on **string 5**. **Bm** at the 2nd fret is the one you need most; it appears in the keys of D and G." },
            { chords: ["Bm", "Bb", "C#m"] },
            { fret: { title: "Notes on string 5: A-shape roots", from: 0, to: 12, strings: [5], pcs: ["C", "D", "E", "F", "G", "A", "B"] } },
            { p: "The major A-shape barre is tricky: many players flatten finger 3 across strings 4, 3 and 2 (that's what the Bb diagram shows)." },
            { play: { title: "D – A – Bm – G (I–V–vi–IV)", prog: ["D", "A", "Bm", "G"], pattern: "D . D U . U D U", bpm: 70 } },
          ],
          ready: ["I can play Bm cleanly in a progression.", "I can find any chord using string-5 roots."],
        },
        {
          id: "capo", title: "Using a capo", mins: 10, bpm: 80,
          goal: "Change key without learning new shapes.",
          body: [
            { p: "A **capo** clamps across all strings and acts as a movable nut. Every fret it moves up raises the pitch by a half step, so the chord shapes you know play in a new key." },
            { list: [
              "Place the capo just behind the fret, straight across, and check the tuning afterwards.",
              "Shapes stay the same; names change. **G shape with capo 2 sounds as A.**",
              "Singers use capos to fit songs to their voice. Many famous recordings use a capo with the G, C, D and Em shapes.",
            ] },
            { tip: "**Quick maths:** each capo fret moves every chord up one step through C, C#, D, D#, E, F, F#, G, G#, A, A#, B. So G shape + capo 4 = B." },
            { play: { title: "Same shapes, any capo position: G – D – Em – C", prog: ["G", "D", "Em", "C"], pattern: "D . D U . U D U", bpm: 80 } },
          ],
          ready: ["I can say what key a capo turns my shapes into.", "I can retune quickly after putting the capo on."],
        },
      ],
    },
    // ------------------------------------------------------------------ UNIT 8
    {
      title: "Musicianship",
      blurb: "The fretboard, keys, the pentatonic scale, the blues and playing by ear.",
      lessons: [
        {
          id: "fretboard-notes", title: "Notes on the fretboard", mins: 15,
          goal: "Find any natural note on strings 6 and 5.",
          body: [
            { p: "The musical alphabet is **A B C D E F G**, then it repeats. Between most notes there's a sharp (#) one fret apart, **except B–C and E–F**, which are only one fret apart." },
            { fret: { title: "Natural notes on strings 6 and 5", from: 0, to: 12, strings: [6, 5], pcs: ["C", "D", "E", "F", "G", "A", "B"] } },
            { list: ["The 12th fret is the same note as the open string, an octave higher.", "**Octave shape:** from any note on string 6, the same note is two frets higher on string 4.", "Learn these landmarks first: string 6 → G at 3, A at 5, C at 8. String 5 → C at 3, D at 5, F at 8."] },
            { quiz: { type: "fretnotes", strings: [6, 5], to: 12 } },
          ],
          ready: ["I score 8 out of 10 on the note quiz.", "I can find the root of any barre chord quickly."],
        },
        {
          id: "keys", title: "Keys and the number system", mins: 20, bpm: 80,
          goal: "Understand which chords belong together and why.",
          body: [
            { p: "Build a chord on every note of a major scale and you get the chords of that **key**. They follow the same pattern in every key:" },
            { p: "**I** major · **ii** minor · **iii** minor · **IV** major · **V** major · **vi** minor" },
            { list: ["Key of **G**: G · Am · Bm · C · D · Em", "Key of **C**: C · Dm · Em · F · G · Am", "Key of **D**: D · Em · F#m · G · A · Bm"] },
            { p: "Musicians talk in numbers so they can play in any key. The **I–V–vi–IV** progression has carried countless hits. Here it is in C:" },
            { play: { title: "I–V–vi–IV in C", prog: ["C", "G", "Am", "Fsmall"], pattern: "D . D U . U D U", bpm: 80 } },
            { p: "Major chords sound bright, minor chords sound sad. Train your ear to tell them apart:" },
            { quiz: { type: "majmin" } },
          ],
          ready: ["I can list the chords in the keys of G and C.", "I can tell major from minor by ear most of the time."],
        },
        {
          id: "pentatonic", title: "The minor pentatonic scale", mins: 20, bpm: 70,
          goal: "Learn the scale behind almost every rock and blues solo.",
          body: [
            { p: "The **minor pentatonic** has five notes. In A: **A C D E G**. It's hard to play a wrong note with it, which makes it the best scale for improvising." },
            { fret: { title: "A minor pentatonic, box 1 (5th fret)", from: 4, to: 9, pcs: ["A", "C", "D", "E", "G"], root: "A", label: "degree" } },
            { p: "Use finger 1 for the 5th fret and finger 3 or 4 for the 7th and 8th. The brass notes are A, home base. Licks sound finished when they end on one." },
            { tab: { title: "Box 1 up and down", notes: "6.5 6.8 5.5 5.7 4.5 4.7 3.5 3.7 | 2.5 2.8 1.5 1.8 1.8 1.5 2.8 2.5 | 3.7 3.5 4.7 4.5 5.7 5.5 6.8 6.5", unit: 2, bpm: 60 } },
            { tab: { title: "A first lick", notes: "2.8 1.5 2.8 2.5 3.7 3.5:3 | 2.5 3.7 3.5 4.7 4.5:4", unit: 2, bpm: 70 } },
            { tip: "**Improvise:** start the Am – G backing below and play any notes from the box. Begin with just two or three notes and leave space between phrases." },
            { play: { title: "Backing: Am – G", prog: ["Am", "Am", "G", "G"], pattern: "D . D U . U D U", bpm: 80 } },
          ],
          ready: ["I can play box 1 from memory.", "I improvised over the backing for one minute."],
        },
        {
          id: "blues", title: "The 12-bar blues", mins: 20, bpm: 90,
          goal: "Play the 12-bar blues with a shuffle feel.",
          body: [
            { p: "The 12-bar blues is the foundation of blues, rock 'n' roll and much of jazz. In A it uses three chords: **A7 (I), D7 (IV), E7 (V)**." },
            { p: "| A7 | A7 | A7 | A7 | D7 | D7 | A7 | A7 | E7 | D7 | A7 | E7 |" },
            { p: "The **shuffle** feel makes each beat long-short (*daa-da daa-da*), not even. The play-along swings the upstrums for you." },
            { play: { title: "12-bar blues in A, shuffle", prog: ["A7", "A7", "A7", "A7", "D7", "D7", "A7", "A7", "E7", "D7", "A7", "E7"], pattern: "D U D U D U D U", swing: true, bpm: 90 } },
            { h: "The boogie riff" },
            { p: "The classic blues riff alternates a power chord with a stretched note. Each bar below is A, D and E. Swing it like the play-along." },
            { tab: { title: "Boogie riff on A, D and E", notes: "5.0+4.2 5.0+4.2 5.0+4.4 5.0+4.4 5.0+4.2 5.0+4.2 5.0+4.4 5.0+4.4 | 4.0+3.2 4.0+3.2 4.0+3.4 4.0+3.4 4.0+3.2 4.0+3.2 4.0+3.4 4.0+3.4 | 6.0+5.2 6.0+5.2 6.0+5.4 6.0+5.4 6.0+5.2 6.0+5.2 6.0+5.4 6.0+5.4", unit: 2, bpm: 90 } },
          ],
          ready: ["I can play all 12 bars without losing my place.", "I can play the boogie riff with a swing feel."],
        },
        {
          id: "by-ear", title: "Playing by ear and what's next", mins: 20,
          goal: "Recognise chords by ear and learn songs on your own.",
          body: [
            { p: "Most songs use the chords of one key. Once you can hear the difference between I, IV, V and vi, you can figure out songs yourself." },
            { quiz: { type: "chords", set: ["G", "C", "D", "Em"] } },
            { h: "How to learn any song" },
            { steps: [
              "Find the key: the chord the song feels \"at home\" on is usually the I.",
              "Guess the chords from that key and test them against the recording.",
              "Learn the song section by section: verse, then chorus.",
              "Play along with the recording; use a capo if the shapes are right but the pitch is off.",
              "Sing, even quietly. It locks your strumming to the song.",
            ] },
            { h: "Where to go from here" },
            { list: [
              "Learn ten songs you love, at least one per week.",
              "Keep the spider and pentatonic box in your warm-up and push the tempo.",
              "Explore more pentatonic boxes, the major scale across the neck, and fingerstyle arrangements.",
              "Play with other people. Nothing improves your timing faster.",
            ] },
            { tip: "**You finished the course.** Go back to any lesson whose checklist isn't fully ticked. Real progress comes from revisiting, not from racing ahead." },
          ],
          ready: ["I can tell G, C, D and Em apart by ear most of the time.", "I've learned at least one song on my own."],
        },
      ],
    },
  ],
};
