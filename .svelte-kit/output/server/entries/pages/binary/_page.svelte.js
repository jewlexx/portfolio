import { c as create_ssr_component, k as add_attribute, j as escape } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let textInput = "";
  const textToBin = (text) => {
    let binary = [];
    for (let i = 0; i < text.length; i++) {
      binary.push(text.charCodeAt(i).toString(2));
    }
    return binary.join(" ");
  };
  return `${$$result.head += `<!-- HEAD_svelte-1ja4hqv_START -->${$$result.title = `<title>Binary converter</title>`, ""}<meta name="description" property="og:description" content="Convert binary to text and text to binary"><!-- HEAD_svelte-1ja4hqv_END -->`, ""}

<div class="flex flex-col pl-8 justify-center items-start w-full h-full absolute overlay"><input type="text"${add_attribute("value", textInput, 0)}>
	<p>${escape(textToBin(textInput))}</p></div>`;
});
export {
  Page as default
};
