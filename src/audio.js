
/**
 * The length of a single "beat" in seconds.
 * One beat is approximately a 1/8th note.
 * 
 * @const {!number}
 */
var beatLength = 0.015;

/**
 * Array of notes.
 * 
 * Each note is comprised of three values:
 * 
 *   1) The first element is the "midi" value as defined by the MIDI tuning standard:
 *      https://en.wikipedia.org/wiki/MIDI_tuning_standard
 *   2) The second value is the start time delta in "beats" (see beatLength).
 *      The "delta" is the relative time since the previous note start time.
 *   3) The third value is the duration in "beats".
 *   
 * The values are derived from Jagged Alliance "Day" music.
 * MIDI downloaded here: http://www.mirsoft.info/gmb/music_info.php?id_ele=MTkxMg==
 * 
 * The values were generated as follows:
 *   1) Convert the MIDI file to JSON using Tone.js MidiConvert
 *      https://tonejs.github.io/MidiConvert/
 *   2) Values extracted from JSON
 *   3) Strip out percussion and vibraphone
 *   4) Times in seconds converted to "beats", as they compress better.
 * 
 * @const {!Array.<!number>}
 */
var notes = [
	54,4,12,
	54,15,11,
	59,16,10,
	57,29,11,
	56,28,11,
	52,12,27,
	52,31,10,
	52,13,12,
	52,13,10,
	49,15,12,
	52,13,27,
	49,29,12,
	54,14,12,
	54,15,11,
	59,15,11,
	57,29,11,
	56,27,12,
	57,14,27,
	57,30,11,
	57,14,12,
	57,13,10,
	56,15,12,
	57,13,27,
	52,28,12,
	54,13,12,
	54,16,12,
	59,15,10,
	57,28,10,
	56,27,10,
	52,12,27,
	52,31,10,
	52,13,12,
	52,13,10,
	49,15,12,
	52,13,27,
	49,28,12,
	54,13,12,
	54,16,10,
	59,15,10,
	57,28,10,
	56,26,12,
	57,14,27,
	57,30,11,
	57,14,11,
	57,14,11,
	49,15,9,
	37,14,9,
	49,15,9,
	61,14,9,
	54,14,12,
	42,15,12,
	54,15,24,
	49,27,12,
	54,57,12,
	42,14,12,
	54,14,27,
	57,29,11,
	54,57,11,
	42,14,11,
	54,15,24,
	49,27,11,
	54,55,12,
	42,15,11,
	54,15,11,
	50,14,11,
	38,15,11,
	50,14,11,
	52,13,27,
	54,29,27,
	61,0,11,
	66,15,12,
	42,14,12,
	71,0,12,
	54,14,27,
	69,0,12,
	71,15,12,
	42,14,12,
	69,1,11,
	54,14,24,
	68,0,11,
	64,15,11,
	52,12,27,
	61,0,12,
	66,15,11,
	40,15,12,
	71,0,12,
	52,13,27,
	69,0,10,
	71,15,12,
	40,13,12,
	73,0,12,
	52,16,25,
	69,0,10,
	68,13,10,
	61,12,12,
	57,0,27,
	66,15,10,
	71,15,12,
	45,0,12,
	69,13,10,
	57,0,27,
	71,13,12,
	69,15,12,
	45,0,12,
	68,13,12,
	57,0,25,
	64,14,10,
	61,13,12,
	49,0,27,
	66,15,10,
	71,13,10,
	37,0,10,
	69,14,10,
	49,0,25,
	71,13,10,
	74,15,12,
	37,0,12,
	73,13,12,
	49,0,25,
	71,13,10,
	71,15,12,
	54,0,27,
	69,15,10,
	68,13,10,
	42,0,10,
	71,14,10,
	54,0,25,
	69,13,10,
	68,13,10,
	42,0,10,
	71,14,12,
	54,0,25,
	69,13,10,
	68,15,12,
	57,0,27,
	69,13,12,
	45,14,12,
	68,1,10,
	66,13,10,
	57,0,25,
	69,12,12,
	68,16,10,
	45,0,10,
	66,14,10,
	57,0,25,
	69,13,10,
	68,13,10,
	52,0,27,
	66,14,12,
	69,13,12,
	40,0,12,
	68,14,12,
	52,0,27,
	66,13,12,
	71,13,12,
	40,0,12,
	69,15,10,
	52,0,25,
	68,14,10,
	66,12,12,
	49,0,27,
	61,15,10,
	64,13,12,
	37,0,12,
	66,13,12,
	49,0,27,
	64,14,12,
	61,16,10,
	37,0,10,
	59,13,10,
	49,0,25,
	57,14,10,
	49,13,12,
	50,0,27,
	54,15,10,
	56,13,10,
	38,0,10,
	57,14,10,
	50,0,25,
	59,13,10,
	57,15,12,
	38,0,12,
	56,13,12,
	50,0,25,
	54,13,10,
	59,15,12,
	49,0,27,
	57,15,10,
	61,13,10,
	37,0,10,
	59,14,10,
	49,0,25,
	62,13,10,
	66,13,12,
	37,0,12,
	69,14,12,
	49,0,25,
	61,13,10,
	69,15,12,
	50,0,27,
	68,15,10,
	71,13,10,
	38,0,10,
	69,13,10,
	50,0,25,
	68,14,10,
	71,13,12,
	38,0,12,
	69,14,12,
	50,0,25,
	68,13,10,
	66,13,12,
	49,0,27,
	64,14,12,
	61,16,10,
	37,0,10,
	62,13,10,
	49,0,25,
	59,14,10,
	62,13,12,
	37,0,12,
	61,13,12,
	49,0,25,
	59,14,10,
	54,13,12,
	54,0,27,
	49,15,10,
	57,15,10,
	42,0,10,
	59,13,10,
	54,0,25,
	57,13,10,
	56,15,10,
	42,0,10,
	54,13,12,
	54,0,25,
	50,14,10,
	49,13,12,
	49,0,27,
	47,13,12,
	37,15,12,
	49,0,10,
	57,15,10,
	49,0,25,
	56,12,12,
	54,16,10,
	37,0,10,
	52,13,10,
	49,0,25,
	50,13,10,
	56,15,12,
	50,0,27,
	50,13,12,
	54,15,12,
	38,0,12,
	56,13,12,
	50,0,27,
	57,13,12,
	59,15,12,
	38,0,12,
	57,15,11,
	50,0,24,
	59,13,11,
	57,13,12,
	49,0,27,
	54,15,11,
	56,14,12,
	37,0,12,
	49,14,11,
	50,0,27,
	54,13,12,
	56,15,12,
	38,0,12,
	54,13,12,
	52,0,27,
	57,15,12,
	54,14,12,
	42,15,12,
	54,15,24,
	49,28,11,
	54,56,12,
	42,14,12,
	54,14,24,
	57,28,11,
	54,55,12,
	42,15,11,
	54,15,24,
	49,27,12,
	54,56,12,
	42,15,11,
	54,14,11,
	50,15,11,
	38,12,12,
	50,15,11,
	52,14,24,
	54,27,12,
	42,15,11,
	54,15,24,
	49,27,12,
	54,57,11,
	42,14,12,
	54,14,24,
	57,27,12,
	54,57,12,
	42,15,12,
	54,15,24,
	49,27,11,
	54,56,12,
	42,15,11,
	54,14,11,
	50,15,11,
	38,12,11,
	50,15,11,
	52,14,24,
	59,27,12,
	71,1,11,
	69,14,12,
	68,15,11,
	47,0,11,
	66,14,11,
	59,0,27,
	69,13,12,
	68,15,12,
	57,0,12,
	66,13,12,
	59,0,12,
	64,13,12,
	61,0,11,
	68,14,12,
	59,0,27,
	66,15,11,
	64,14,11,
	47,0,11,
	62,14,11,
	59,0,24,
	66,13,11,
	64,14,12,
	59,0,12,
	62,14,12,
	57,0,12,
	61,13,12,
	56,0,12,
	71,14,12,
	57,0,12,
	69,15,11,
	68,14,11,
	45,0,11,
	66,13,11,
	57,0,27,
	73,14,12,
	71,14,12,
	57,0,12,
	69,14,12,
	59,0,12,
	68,13,12,
	61,0,12,
	69,13,12,
	57,0,27,
	71,15,11,
	68,15,11,
	56,0,11,
	69,13,11,
	66,15,11,
	54,0,11,
	68,13,11,
	66,14,12,
	52,0,12,
	64,14,11,
	71,14,12,
	59,0,12,
	69,15,11,
	68,15,12,
	47,0,12,
	66,13,12,
	59,0,27,
	69,13,12,
	57,15,12,
	68,0,11,
	66,15,11,
	59,0,11,
	64,13,11,
	61,0,11,
	59,13,27,
	68,1,11,
	66,14,11,
	64,14,12,
	47,0,12,
	62,14,11,
	59,0,27,
	66,13,12,
	64,15,12,
	59,0,12,
	57,14,12,
	62,1,11,
	56,12,12,
	61,1,11,
	57,13,12,
	71,0,11,
	69,15,11,
	68,14,12,
	45,0,12,
	66,14,11,
	57,0,27,
	73,13,12,
	71,14,12,
	57,0,12,
	69,15,11,
	59,0,11,
	68,14,11,
	61,0,11,
	57,13,27,
	69,0,11,
	71,15,11,
	68,14,12,
	56,0,12,
	69,13,12,
	66,15,12,
	57,0,12,
	68,13,12,
	66,15,11,
	61,0,11,
	64,14,11,
	71,14,12,
	59,0,12,
	69,13,12,
	68,15,11,
	47,0,11,
	66,14,11,
	59,0,27,
	69,13,12,
	68,15,12,
	57,0,12,
	66,13,12,
	59,0,12,
	64,13,11,
	61,0,11,
	68,14,12,
	59,0,27,
	66,15,11,
	64,14,11,
	47,0,11,
	62,14,11,
	59,0,24,
	66,13,11,
	64,14,12,
	59,0,12,
	62,14,12,
	57,0,12,
	61,13,12,
	56,0,12,
	71,14,12,
	57,0,12,
	69,15,11,
	68,14,11,
	45,0,11,
	66,13,11,
	57,0,27,
	73,14,12,
	71,14,12,
	57,0,12,
	69,14,12,
	59,0,12,
	68,13,12,
	61,0,12,
	69,13,12,
	57,0,27,
	71,15,11,
	68,15,11,
	56,0,11,
	69,13,11,
	66,15,11,
	54,0,11,
	68,13,11,
	66,14,12,
	52,0,12,
	64,14,11,
	71,14,12,
	59,0,12,
	69,15,11,
	68,15,12,
	47,0,12,
	66,13,12,
	59,0,27,
	69,13,12,
	57,15,12,
	68,0,11,
	66,15,11,
	59,0,11,
	64,13,11,
	61,0,11,
	59,13,27,
	68,1,11,
	66,14,11,
	64,14,12,
	47,0,12,
	62,14,11,
	59,0,27,
	66,13,12,
	64,15,12,
	59,0,12,
	62,15,11,
	57,0,11,
	61,13,11,
	56,0,11,
	71,13,11,
	57,0,11,
	69,14,12,
	68,14,12,
	45,0,12,
	66,14,12,
	57,0,27,
	73,13,12,
	71,15,11,
	57,0,11,
	69,13,12,
	59,0,12,
	68,14,11,
	61,0,11,
	69,13,12,
	57,0,27,
	71,15,11,
	68,15,12,
	56,0,12,
	69,13,11,
	66,14,12,
	57,0,12,
	68,14,12,
	66,14,12,
	52,0,12,
	64,14,12,
	54,14,14,
	54,16,12,
	59,15,11,
	57,27,12,
	56,29,10,
	52,13,27,
	52,28,12,
	52,15,12,
	52,13,10,
	49,13,10,
	52,15,25,
	49,27,10,
	54,13,12,
	54,16,10,
	59,15,10,
	57,27,12,
	56,28,12,
	57,13,27,
	57,28,12,
	57,16,10,
	57,12,10,
	56,13,10,
	57,15,25,
	52,28,10,
	54,12,12,
	54,16,10,
	59,15,10,
	57,27,10,
	56,27,12,
	52,13,27,
	52,30,10,
	52,15,10,
	52,13,10,
	49,12,12,
	52,13,25,
	49,29,10,
	54,15,10,
	54,13,12,
	59,13,10,
	57,28,10,
	56,28,10,
	57,12,27,
	57,30,10,
	57,15,10,
	57,13,10,
	49,12,10,
	37,15,9,
];

// Convert "deltas" to "start times"
// The initial value in the array is relative to the previous note.
// Here we convert the relative value to an absolute value.
// Absolute values are 4 digits
// Relative values are 2 digits
// This saves about 1k.
var songEnd = 0;
for (var i = 4; i < notes.length; i += 3) {
	notes[i] += notes[i - 3];
	songEnd = Math.max(songEnd, notes[i] + notes[i + 1]);
}

/**
 * The Web Audio Context.
 * 
 * @const {!AudioContext}
 */
var context = new AudioContext();

/**
 * The gain node.
 * 
 * It is extremely important that gain be somewhat low.
 * When playing multiple notes simultaneously, the audio buffer
 * can get overloaded if the sum of the notes*gain is too high.
 * 
 * @const {!GainNode}
 */
var gainNode = context.createGain();
gainNode.connect(context.destination);
gainNode.gain.setTargetAtTime(0.05, 0, 0);

/**
 * The current index into the notes array.
 * 
 * @type {!number}
 */
var noteIndex = 0;

/**
 * The current loop offset in seconds.
 * 
 * When the song loops, this value is incremented by length of the entire song.
 * 
 * @type {!number}
 */
var loopOffset = 0.0;

/**
 * The scheduler "look ahead time".
 * 
 * Notes must not be scheduled too far in advance.
 * 
 * Read Chris Wilson's excellent explanation of Web Audio scheduling:
 * https://www.html5rocks.com/en/tutorials/audio/scheduling/
 * 
 * There are effectively 2 schedulers working in tandem:
 *   1) A plain old JavaScript scheduler using window.setInterval().
 *   2) A high precision audio scheduler using the Web Audio API.
 *
 * The high precision audio scheduler is the only way to get sufficient accuracy for music.
 * 
 * Unfortunately, notes cannot be scheduled in the buffer too far in advance.
 * 
 * So we use a plain old JavaScript scheduler
 * 
 * @const {!number}
 */
var scheduleAheadTime = 0.1;

var musicPaused = false;

/**
 * Schedules a note.
 * 
 * Converts the note array triplet (midi, start, duration) into a Web Audio Oscillator.
 * 
 * @param {!number} noteIndex The offset in the notes array.
 */
function scheduleNote(noteIndex) {
    var freq = 440 * Math.pow(2, (notes[noteIndex] - 69) / 12);
    var startTime = loopOffset + notes[noteIndex + 1] * beatLength;
    var duration = notes[noteIndex + 2] * beatLength;
    createOscillator(freq, startTime, duration, 0);
}

function playExplosionSound() {
    createOscillator(80, context.currentTime, 0.2, 0.1);
}

function createOscillator(freq, startTime, duration, timeConstant) {
	var osc = context.createOscillator();
    osc.connect(gainNode);
    osc.type = 'square';
    osc.frequency.setTargetAtTime(freq, startTime, timeConstant);
    osc.start(startTime);
    osc.stop(startTime + duration);
}

/**
 * Executes one tick of the JavaScript scheduler.
 */
function scheduler() {
	if (!musicPaused) {
		while ((notes[noteIndex + 1] * beatLength + loopOffset) < (context.currentTime + scheduleAheadTime)) {
		    scheduleNote(noteIndex);
		    noteIndex += 3;
		    if (noteIndex >= notes.length) {
		    	loopOffset += songEnd * beatLength;
		    	noteIndex = 0;
		    }
		}
	}
}

/**
 * Toggles music.
 */
function toggleMusic() {
	musicPaused = !musicPaused;
}
 
// Start the scheduler
window.setInterval(scheduler, 1000 * scheduleAheadTime);

window['toggleMusic'] = toggleMusic;
