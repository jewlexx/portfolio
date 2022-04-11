import { type FunctionComponent, useEffect } from 'react';
import confetti from 'canvas-confetti';

/**
 * NOTE: Could have been made a hook, but was done this way to better support static rendering
 * The way it is done means that the confetti will only run in production, and this component will not even be rendered in development
 * Additionally it will not be included in the bundle, so it will not be included in the development build
 */
const Container: FunctionComponent = () => {
  useEffect(() => {
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

    frame();
  }, []);

  return <></>;
};

export default Container;
