/* Lossless stereo PCM; no input is routed to the speakers. */
class RecordingProcessor extends AudioWorkletProcessor {
  constructor() {
    super(); this.position = 0; this.buffers = [new Float32Array(4096), new Float32Array(4096)]; this.done = false;
    this.origin = null; this.endFrame = 0; this.startFrame = 0;
    this.port.onmessage = event => {
      if (event.data === 'stop') { this.flush(); this.done = true; this.port.postMessage({ type: 'stopped', endFrame: this.endFrame }); }
    };
  }
  flush() {
    if (!this.position) return;
    const channels = this.position === 4096 ? this.buffers : this.buffers.map(c => c.slice(0, this.position));
    this.port.postMessage({ type: 'pcm', startFrame: this.startFrame, channels }, channels.map(c => c.buffer));
    this.buffers = [new Float32Array(4096), new Float32Array(4096)]; this.position = 0;
  }
  process(inputs, outputs) {
    if (this.done) return false;
    const input = inputs[0], count = outputs[0]?.[0]?.length ?? 128;
    if (this.origin === null) this.origin = currentFrame;
    const frame = currentFrame - this.origin;
    // A skipped render quantum must remain a gap, never shorten the recorded song.
    if (frame !== this.endFrame) this.flush();
    for (let i = 0; i < count; i++) {
      if (!this.position) this.startFrame = frame + i;
      this.buffers[0][this.position] = input?.[0]?.[i] ?? 0;
      this.buffers[1][this.position] = input?.[1]?.[i] ?? input?.[0]?.[i] ?? 0;
      if (++this.position === 4096) this.flush();
    }
    this.endFrame = frame + count;
    return true;
  }
}
registerProcessor('system-audio-recording', RecordingProcessor);
