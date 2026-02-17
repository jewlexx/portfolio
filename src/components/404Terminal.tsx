import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "$/components/ui/terminal";
import { number } from "astro:schema";

export default function ErrorTerminal({
  errorMessage,
  cowError,
  requestUrl,
}: {
  errorMessage: string;
  cowError: string;
  requestUrl: URL;
}) {
  let curlErrorMessage = `\
HTTP/2 404
cache-control: public, max-age=0, must-revalidate
content-type: text/plain; charset=utf-8 date: Tue, 17 Feb 2026 06:38:47 GMT
server: Vercel
strict-transport-security: max-age=63072000
x-vercel-error: NOT_FOUND
x-cordor-why: I haven't finished working on that yet.. or it's not real.
content-length: `;
  let contentLength = curlErrorMessage.length;

  const numberLength = contentLength.toString().length;
  contentLength += numberLength;

  if (contentLength.toString().length > numberLength) {
    // LOOK. there is an edge case probably where this is wrong
    // and i could write a recursive function to figure it out
    // BUT the odds that this is wrong and we haven't encountered a condition
    // that would crash if a recursive function was called are slim to none
    contentLength += 1;
  }

  curlErrorMessage += contentLength.toString();

  return (
    <Terminal className="max-h-none! max-w-2xl!">
      <TypingAnimation>{`$ curl -I ${requestUrl}`}</TypingAnimation>
      {curlErrorMessage.split("\n").map((line) => (
        <AnimatedSpan>{line}</AnimatedSpan>
      ))}
      <TypingAnimation>{`$ cowsay '${errorMessage}'`}</TypingAnimation>
      <AnimatedSpan>{cowError}</AnimatedSpan>
    </Terminal>
  );
}
