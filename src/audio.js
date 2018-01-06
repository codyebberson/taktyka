
/**
 * The length of a single "beat" in seconds.
 * One beat is approximately a 1/8th note.
 * 
 * @const {!number}
 */
var beatLength = 0.005;

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
 * The song itself is:
 *
 *     "Peer Gynt Suite No.3, Opus. 46"
 *     "Anitra's Dance"
 *     Edvard Grieg (1843 - 1907)
 *
 * Listen to the real performance here: https://www.youtube.com/watch?v=gcEnSITNaGM
 * 
 * The numeric values were loosely derived from a MIDI file as follows:
 *   1) Convert the MIDI file to JSON using Tone.js MidiConvert
 *      https://tonejs.github.io/MidiConvert/
 *   2) Values extracted from JSON
 *   3) Strip out percussion and "string ensemble"
 *   4) Times in seconds converted to "beats", as they compress better.
 *
 * Plus manual touch-up for clean loop.
 *
 * @const {!Array.<!number>}
 */
var notes = [
	45,0,24,
	33,0,24,
	60,96,24,
	57,0,24,
	52,0,24,
	62,96,24,
	59,0,24,
	52,0,24,
	45,96,24,
	33,0,24,
	60,96,24,
	64,0,24,
	52,0,24,
	62,96,24,
	65,0,24,
	52,0,24,
	45,96,24,
	33,0,24,
	60,96,24,
	64,0,24,
	52,0,24,
	62,96,24,
	59,0,24,
	52,0,24,
	45,96,24,
	33,0,24,
	60,96,24,
	57,0,24,
	52,0,24,
	64,96,43,
	59,0,24,
	56,0,24,
	52,0,24,
	69,96,13,
	45,0,24,
	33,0,24,
	71,12,13,
	69,13,18,
	68,22,18,
	69,48,18,
	60,0,24,
	57,0,24,
	52,0,24,
	71,48,18,
	72,48,18,
	62,0,24,
	59,0,24,
	52,0,24,
	74,48,18,
	76,48,49,
	45,0,24,
	33,0,24,
	81,48,49,
	76,48,56,
	60,0,24,
	64,0,24,
	52,0,24,
	62,96,24,
	65,0,24,
	52,0,24,
	74,0,16,
	76,15,16,
	74,16,64,
	45,64,24,
	33,0,24,
	72,0,49,
	81,48,49,
	60,47,24,
	64,0,24,
	52,0,24,
	72,0,56,
	62,95,24,
	59,0,24,
	52,0,24,
	71,0,16,
	72,15,16,
	71,16,64,
	45,64,24,
	33,0,24,
	60,96,24,
	57,0,24,
	52,0,24,
	64,96,24,
	60,0,24,
	57,0,24,
	45,96,24,
	33,0,24,
	69,0,48,
	72,48,48,
	60,47,24,
	65,0,24,
	57,0,24,
	69,0,55,
	64,95,24,
	60,0,24,
	55,0,24,
	67,0,15,
	69,15,15,
	67,15,63,
	66,64,48,
	45,0,24,
	33,0,24,
	72,48,48,
	61,48,24,
	62,0,24,
	54,0,24,
	61,96,24,
	62,0,24,
	54,0,24,
	65,95,48,
	45,0,24,
	33,0,24,
	72,47,48,
	65,48,55,
	60,0,24,
	65,0,24,
	57,0,24,
	64,95,15,
	64,0,24,
	60,0,24,
	55,0,24,
	65,14,15,
	64,15,63,
	63,64,48,
	47,0,24,
	35,0,24,
	71,47,48,
	59,48,24,
	63,0,24,
	54,0,24,
	63,96,24,
	59,0,24,
	54,0,24,
	71,95,18,
	59,0,24,
	71,0,24,
	59,0,24,
	47,0,24,
	35,0,24,
	70,47,18,
	66,48,18,
	71,48,18,
	69,48,18,
	83,0,24,
	71,0,24,
	69,0,24,
	65,0,24,
	59,0,24,
	65,47,18,
	71,48,18,
	59,0,24,
	71,0,24,
	68,0,24,
	64,0,24,
	47,0,24,
	35,0,24,
	68,47,18,
	64,48,18,
	71,48,18,
	67,48,18,
	83,0,24,
	71,0,24,
	67,0,24,
	63,0,24,
	59,0,24,
	63,47,18,
	71,48,18,
	59,0,24,
	71,0,24,
	66,0,24,
	62,0,24,
	47,0,24,
	35,0,24,
	66,47,18,
	62,48,18,
	71,48,18,
	65,48,18,
	83,0,24,
	71,0,24,
	65,0,24,
	61,0,24,
	59,0,24,
	61,47,18,
	71,48,18,
	59,0,24,
	71,0,24,
	64,0,24,
	60,0,24,
	47,0,24,
	35,0,24,
	64,47,18,
	60,48,18,
	71,48,18,
	63,48,18,
	83,0,24,
	71,0,24,
	63,0,24,
	59,0,24,
	59,0,24,
	59,47,18,
	64,48,15,
	65,0,24,
	53,0,24,
	52,0,24,
	40,0,24,
	66,14,15,
	64,9,19,
	63,24,24,
	51,0,24,
	64,48,24,
	52,0,24,
	66,48,24,
	54,0,24,
	67,48,24,
	55,0,24,
	69,48,24,
	57,0,24,
	71,48,24,
	59,0,24,
	76,48,24,
	64,0,24,
	71,48,24,
	59,0,24,
	69,48,24,
	57,0,24,
	67,48,24,
	55,0,24,
	66,48,24,
	54,0,24,
	64,48,24,
	52,0,24,
	64,0,24,
	66,47,24,
	66,0,24,
	54,0,24,
	67,47,24,
	67,0,24,
	55,0,24,
	69,47,24,
	69,0,24,
	57,0,24,
	71,47,24,
	71,0,24,
	59,0,24,
	59,0,24,
	47,0,24,
	76,95,24,
	76,0,24,
	64,0,24,
	64,0,24,
	52,0,24,
	64,191,43,
	69,96,13,
	45,0,24,
	33,0,24,
	71,11,13,
	69,13,18,
	68,22,18,
	69,48,18,
	60,0,24,
	57,0,24,
	52,0,24,
	71,47,18,
	72,48,18,
	62,0,24,
	59,0,24,
	52,0,24,
	74,47,18,
	76,48,49,
	45,0,24,
	33,0,24,
	81,47,49,
	76,48,56,
	60,0,24,
	64,0,24,
	52,0,24,
	74,95,16,
	62,0,24,
	65,0,24,
	52,0,24,
	76,14,16,
	74,16,64,
	72,65,49,
	45,0,24,
	33,0,24,
	81,48,49,
	72,48,56,
	60,0,24,
	64,0,24,
	52,0,24,
	62,96,24,
	59,0,24,
	52,0,24,
	71,0,16,
	72,15,16,
	71,16,64,
	45,64,24,
	33,0,24,
	60,96,24,
	57,0,24,
	52,0,24,
	64,96,24,
	60,0,24,
	57,0,24,
	45,96,24,
	33,0,24,
	69,0,49,
	72,48,49,
	60,47,24,
	65,0,24,
	57,0,24,
	69,0,56,
	64,95,24,
	60,0,24,
	55,0,24,
	67,0,16,
	69,15,16,
	67,16,64,
	45,64,24,
	33,0,24,
	66,0,49,
	72,48,49,
	61,47,24,
	62,0,24,
	54,0,24,
	61,96,24,
	62,0,24,
	54,0,24,
	45,96,24,
	33,0,24,
	65,0,49,
	72,48,49,
	60,47,24,
	65,0,24,
	57,0,24,
	65,0,56,
	64,95,24,
	60,0,24,
	55,0,24,
	64,0,16,
	65,15,16,
	64,16,64,
	47,64,24,
	35,0,24,
	63,0,49,
	71,48,49,
	59,47,24,
	63,0,24,
	54,0,24,
	63,96,24,
	59,0,24,
	54,0,24,
	59,96,24,
	71,0,24,
	59,0,24,
	47,0,24,
	35,0,24,
	71,0,18,
	70,48,18,
	66,48,18,
	71,48,18,
	83,47,24,
	71,0,24,
	69,0,24,
	65,0,24,
	59,0,24,
	69,0,18,
	65,48,18,
	59,47,24,
	71,0,24,
	68,0,24,
	64,0,24,
	47,0,24,
	35,0,24,
	71,0,18,
	68,48,18,
	64,48,18,
	71,48,18,
	83,47,24,
	71,0,24,
	67,0,24,
	63,0,24,
	59,0,24,
	67,0,18,
	63,48,18,
	59,47,24,
	71,0,24,
	66,0,24,
	62,0,24,
	47,0,24,
	35,0,24,
	71,0,18,
	66,48,18,
	62,48,18,
	71,48,18,
	83,47,24,
	71,0,24,
	65,0,24,
	61,0,24,
	59,0,24,
	65,0,18,
	61,48,18,
	59,47,24,
	71,0,24,
	64,0,24,
	60,0,24,
	47,0,24,
	35,0,24,
	71,0,18,
	64,48,18,
	60,48,18,
	71,48,18,
	83,47,24,
	71,0,24,
	63,0,24,
	59,0,24,
	59,0,24,
	63,0,18,
	59,48,18,
	65,47,24,
	53,0,24,
	52,0,24,
	40,0,24,
	64,0,16,
	66,15,16,
	64,16,19,
	63,16,24,
	51,0,24,
	64,48,24,
	52,0,24,
	66,48,24,
	54,0,24,
	67,48,24,
	55,0,24,
	69,48,24,
	57,0,24,
	71,48,24,
	59,0,24,
	76,48,24,
	64,0,24,
	71,48,24,
	59,0,24,
	69,48,24,
	57,0,24,
	67,48,24,
	55,0,24,
	66,48,24,
	54,0,24,
	64,48,24,
	52,0,24,
	64,1,24,
	66,46,24,
	54,0,24,
	66,0,24,
	67,47,24,
	55,0,24,
	67,0,24,
	69,47,24,
	57,0,24,
	69,0,24,
	71,47,24,
	59,0,24,
	59,0,24,
	47,0,24,
	71,0,24,
	76,95,24,
	64,0,24,
	64,0,24,
	52,0,24,
	76,0,24,
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
songEnd += 240;

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
gainNode.gain.setTargetAtTime(0.04, 0, 0);

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
 * So we use a plain old JavaScript scheduler to throttle notes and prevent overflow.
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
