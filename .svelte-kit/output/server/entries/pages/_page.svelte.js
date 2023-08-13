import { c as create_ssr_component, d as each, b as add_attribute, e as escape, h as null_to_empty, v as validate_component } from "../../chunks/ssr.js";
import { l as links } from "../../chunks/links.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".pronouns.svelte-19pjnu4.svelte-19pjnu4{color:rgb(146, 191, 177);display:block;font-weight:400;font-size:0.4444444444em;letter-spacing:-0.0625em}.hero.svelte-19pjnu4.svelte-19pjnu4{position:relative;overflow:hidden}@media(min-width: 750px){.hero.svelte-19pjnu4.svelte-19pjnu4{height:45vw}}.overlay.svelte-19pjnu4.svelte-19pjnu4{position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding-left:2rem}@media(min-width: 750px){.overlay.svelte-19pjnu4.svelte-19pjnu4{padding-left:4rem}}.title.svelte-19pjnu4.svelte-19pjnu4{font-weight:900;font-size:2.9483340685em;margin-bottom:1rem;margin-top:0}@media(min-width: 1024px){.title.svelte-19pjnu4.svelte-19pjnu4{font-size:5.0625em}}.links-container.svelte-19pjnu4.svelte-19pjnu4{display:flex}.role.svelte-19pjnu4.svelte-19pjnu4{text-decoration:none;position:relative;font-weight:900;color:#000000;background-color:#fff;padding:0.25em 0.5em;z-index:2;border-radius:0.25rem;display:flex;align-items:center;justify-content:center}@media(min-width: 750px){.role.svelte-19pjnu4.svelte-19pjnu4{font-size:1.5em}}.role.svelte-19pjnu4+.role.svelte-19pjnu4{margin-left:0.5em}@media(prefers-reduced-motion: no-preference){.role.svelte-19pjnu4.svelte-19pjnu4{transition:color 0.2s ease-in-out;transition:background-color 0.2s ease-in-out}}.role.svelte-19pjnu4.svelte-19pjnu4:hover{color:#fff}.role.svelte-19pjnu4.svelte-19pjnu4:hover:nth-of-type(1){background-color:#000000}.role.svelte-19pjnu4.svelte-19pjnu4:hover:nth-of-type(2){background-color:#ca6fff}.role.svelte-19pjnu4.svelte-19pjnu4:hover:nth-of-type(3){background-color:#46b4ff}.role.svelte-19pjnu4.svelte-19pjnu4:hover:nth-of-type(4){background-color:#537e49}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1wz2c9j_START -->${$$result.title = `<title>Juliette Cordor</title>`, ""}<meta name="description" property="og:description" content="Juliette Cordor, developer and other things also"><!-- HEAD_svelte-1wz2c9j_END -->`, ""} <header class="hero svelte-19pjnu4"><div class="overlay svelte-19pjnu4"><h1 class="title svelte-19pjnu4" data-svelte-h="svelte-xu60kf">Juliette Cordor
			<small class="pronouns svelte-19pjnu4">(She/Her)</small></h1> <div class="links-container svelte-19pjnu4">${each(links, ({ emoji: Emoji, url }) => {
    return `<a${add_attribute("href", `https://${url}`, 0)} target="_blank" rel="noopener noreferrer" class="${escape(null_to_empty(`role ${"motion"}`), true) + " svelte-19pjnu4"}">${validate_component(Emoji, "Emoji").$$render($$result, {}, {}, {})} </a>`;
  })}</div></div> </header>`;
});
export {
  Page as default
};
