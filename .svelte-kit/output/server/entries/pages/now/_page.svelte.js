import { c as create_ssr_component, j as escape } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const getTime = () => Math.floor(Date.now() / 1e3);
  let time = getTime();
  let interval;
  {
    {
      clearInterval(interval);
      interval = setInterval(
        () => {
          time = getTime();
        },
        1e3
      );
    }
  }
  return `<div class="flex flex-col items-center justify-center min-h-full min-w-full"><h1 class="font-bold text-5xl sm:text-8xl text-green-500 dark:text-green-400">${escape(time)}</h1>
	<p class="text-2xl">seconds since 01/01/1970 (UTC)</p></div>`;
});
export {
  Page as default
};
