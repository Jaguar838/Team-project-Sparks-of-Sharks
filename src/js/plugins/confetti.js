import confetti from 'canvas-confetti';

export default function showConfetti() {
  confetti.create(document.getElementById('canvas'), {
   resize: true,
   useWorker: true,
  })({ particleCount: 200, spread: 150, zIndex: 1000 });
}