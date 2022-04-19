import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const useConfetti = (enabled: boolean): void => {
  useEffect(() => {
    if (!enabled) {
      return;
    }
    const colors = [
      '#26ccff',
      '#a25afd',
      '#ff5e7e',
      '#88ff5a',
      '#fcff42',
      '#ffa62d',
      '#ff36ff',
    ];
    const baseOptions = {
      particleCount: colors.length,
      colors,
    };

    const end = Date.now() + 5 * 1000;

    const frame = () => {
      confetti({
        ...baseOptions,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
      });
      confetti({
        ...baseOptions,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
      });
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    setTimeout(frame, 1000);
  }, [enabled]);
};

export default useConfetti;
