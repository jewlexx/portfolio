import { c as create_ssr_component, b as compute_rest_props, d as spread, e as escape_object, f as escape_attribute_value, g as each, i as is_void, v as validate_component, h as createEventDispatcher, j as escape, k as add_attribute } from "../../chunks/index.js";
const index$1 = "";
const index = "";
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name", "color", "size", "stroke", "iconNode"]);
  let { name } = $$props;
  let { color = "currentColor" } = $$props;
  let { size = 24 } = $$props;
  let { stroke = 2 } = $$props;
  let { iconNode } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.stroke === void 0 && $$bindings.stroke && stroke !== void 0)
    $$bindings.stroke(stroke);
  if ($$props.iconNode === void 0 && $$bindings.iconNode && iconNode !== void 0)
    $$bindings.iconNode(iconNode);
  return `<svg${spread(
    [
      escape_object(defaultAttributes),
      escape_object($$restProps),
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { stroke: escape_attribute_value(color) },
      {
        "stroke-width": escape_attribute_value(stroke)
      },
      {
        class: escape_attribute_value(`tabler-icon tabler-icon-${name} ${$$props.class ?? ""}`)
      }
    ],
    {}
  )}>${each(iconNode, ([tag, attrs]) => {
    return `${((tag$1) => {
      return tag$1 ? `<${tag}${spread([escape_object(attrs)], {})}>${is_void(tag$1) ? "" : ``}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
    })(tag)}`;
  })}${slots.default ? slots.default({}) : ``}</svg>`;
});
const Icon$1 = Icon;
const IconBrandGithub = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
      }
    ]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "brand-github" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconBrandGithub$1 = IconBrandGithub;
const IconBrandLinktree = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M9 3l-7 12h3v5h5v-5h-2l4 -7z" }],
    ["path", { "d": "M15 3l7 12h-3v5h-5v-5h2l-4 -7z" }]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "brand-linktree" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconBrandLinktree$1 = IconBrandLinktree;
const IconBrandMastodon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M18.648 15.254c-1.816 1.763 -6.648 1.626 -6.648 1.626a18.262 18.262 0 0 1 -3.288 -.256c1.127 1.985 4.12 2.81 8.982 2.475c-1.945 2.013 -13.598 5.257 -13.668 -7.636l-.026 -1.154c0 -3.036 .023 -4.115 1.352 -5.633c1.671 -1.91 6.648 -1.666 6.648 -1.666s4.977 -.243 6.648 1.667c1.329 1.518 1.352 2.597 1.352 5.633s-.456 4.074 -1.352 4.944z"
      }
    ],
    [
      "path",
      {
        "d": "M12 11.204v-2.926c0 -1.258 -.895 -2.278 -2 -2.278s-2 1.02 -2 2.278v4.722m4 -4.722c0 -1.258 .895 -2.278 2 -2.278s2 1.02 2 2.278v4.722"
      }
    ]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "brand-mastodon" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconBrandMastodon$1 = IconBrandMastodon;
const IconBrandTwitch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M4 5v11a1 1 0 0 0 1 1h2v4l4 -4h5.584c.266 0 .52 -.105 .707 -.293l2.415 -2.414c.187 -.188 .293 -.442 .293 -.708v-8.585a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1z"
      }
    ],
    ["path", { "d": "M16 8l0 4" }],
    ["path", { "d": "M12 8l0 4" }]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "brand-twitch" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconBrandTwitch$1 = IconBrandTwitch;
const IconBrandTwitter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"
      }
    ]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "brand-twitter" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconBrandTwitter$1 = IconBrandTwitter;
const IconClock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"
      }
    ],
    ["path", { "d": "M12 7v5l3 3" }]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "clock" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconClock$1 = IconClock;
const Waypoint_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".wrapper.svelte-142y8oi{display:inline-block}",
  map: null
};
const Waypoint = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { offset = 0 } = $$props;
  let { throttle = 250 } = $$props;
  let { c = "" } = $$props;
  let { style = "" } = $$props;
  let { once = true } = $$props;
  let { threshold = 1 } = $$props;
  let { disabled = false } = $$props;
  let { class: className = "" } = $$props;
  let visible = disabled;
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.throttle === void 0 && $$bindings.throttle && throttle !== void 0)
    $$bindings.throttle(throttle);
  if ($$props.c === void 0 && $$bindings.c && c !== void 0)
    $$bindings.c(c);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.once === void 0 && $$bindings.once && once !== void 0)
    $$bindings.once(once);
  if ($$props.threshold === void 0 && $$bindings.threshold && threshold !== void 0)
    $$bindings.threshold(threshold);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  $$result.css.add(css$2);
  return `<div class="${"wrapper " + escape(className, true) + " " + escape(c, true) + " svelte-142y8oi"}"${add_attribute("style", style, 0)}>${visible ? `${slots.default ? slots.default({}) : ``}` : ``}</div>`;
});
const Image_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "img.svelte-1p2kv33.svelte-1p2kv33,canvas.svelte-1p2kv33.svelte-1p2kv33{object-position:center;position:absolute;top:0;left:0;width:100%;will-change:opacity}.blur.svelte-1p2kv33.svelte-1p2kv33{filter:blur(15px);transition:opacity 1200ms}.placeholder.svelte-1p2kv33.svelte-1p2kv33{opacity:1;width:100%;height:100%;transition:opacity 1200ms ease-out;transition-delay:0.4s}.main.svelte-1p2kv33.svelte-1p2kv33{opacity:0;transition:opacity 1200ms ease-out;transition-delay:0.4s}.loaded.svelte-1p2kv33 .placeholder.svelte-1p2kv33{opacity:0}.loaded.svelte-1p2kv33 .main.svelte-1p2kv33{opacity:1}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { c = "" } = $$props;
  let { alt = "" } = $$props;
  let { width } = $$props;
  let { height } = $$props;
  let { usemap = "" } = $$props;
  let { src = "" } = $$props;
  let { srcset = "" } = $$props;
  let { srcsetWebp = "" } = $$props;
  let { ratio = "100%" } = $$props;
  let { blur = true } = $$props;
  let { sizes = "(max-width: 1000px) 100vw, 1000px" } = $$props;
  let { offset = 0 } = $$props;
  let { threshold = 1 } = $$props;
  let { lazy = true } = $$props;
  let { wrapperClass = "" } = $$props;
  let { placeholderClass = "" } = $$props;
  let { blurhash = null } = $$props;
  let { blurhashSize = null } = $$props;
  let { class: className = "" } = $$props;
  let loaded = !lazy;
  if ($$props.c === void 0 && $$bindings.c && c !== void 0)
    $$bindings.c(c);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.usemap === void 0 && $$bindings.usemap && usemap !== void 0)
    $$bindings.usemap(usemap);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.srcset === void 0 && $$bindings.srcset && srcset !== void 0)
    $$bindings.srcset(srcset);
  if ($$props.srcsetWebp === void 0 && $$bindings.srcsetWebp && srcsetWebp !== void 0)
    $$bindings.srcsetWebp(srcsetWebp);
  if ($$props.ratio === void 0 && $$bindings.ratio && ratio !== void 0)
    $$bindings.ratio(ratio);
  if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0)
    $$bindings.blur(blur);
  if ($$props.sizes === void 0 && $$bindings.sizes && sizes !== void 0)
    $$bindings.sizes(sizes);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.threshold === void 0 && $$bindings.threshold && threshold !== void 0)
    $$bindings.threshold(threshold);
  if ($$props.lazy === void 0 && $$bindings.lazy && lazy !== void 0)
    $$bindings.lazy(lazy);
  if ($$props.wrapperClass === void 0 && $$bindings.wrapperClass && wrapperClass !== void 0)
    $$bindings.wrapperClass(wrapperClass);
  if ($$props.placeholderClass === void 0 && $$bindings.placeholderClass && placeholderClass !== void 0)
    $$bindings.placeholderClass(placeholderClass);
  if ($$props.blurhash === void 0 && $$bindings.blurhash && blurhash !== void 0)
    $$bindings.blurhash(blurhash);
  if ($$props.blurhashSize === void 0 && $$bindings.blurhashSize && blurhashSize !== void 0)
    $$bindings.blurhashSize(blurhashSize);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  $$result.css.add(css$1);
  return `${validate_component(Waypoint, "Waypoint").$$render(
    $$result,
    {
      class: wrapperClass,
      style: "min-height: 100px; width: 100%;",
      once: true,
      threshold,
      offset,
      disabled: !lazy
    },
    {},
    {
      default: () => {
        return `<div style="position: relative; width: 100%;" class="${["svelte-1p2kv33", loaded ? "loaded" : ""].join(" ").trim()}"><div style="position: relative; overflow: hidden;"><div style="${"width:100%;padding-bottom:" + escape(ratio, true) + ";"}"></div>
      ${blurhash ? `<canvas class="placeholder svelte-1p2kv33"${add_attribute("width", blurhashSize.width, 0)}${add_attribute("height", blurhashSize.height, 0)}></canvas>` : `<img class="${[
          "placeholder " + escape(placeholderClass, true) + " svelte-1p2kv33",
          blur ? "blur" : ""
        ].join(" ").trim()}"${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)}>`}
      <picture><source type="image/webp"${add_attribute("srcset", srcsetWebp, 0)}${add_attribute("sizes", sizes, 0)}>
        <source${add_attribute("srcset", srcset, 0)}${add_attribute("sizes", sizes, 0)}>
        <img${add_attribute("src", src, 0)} class="${"main " + escape(c, true) + " " + escape(className, true) + " svelte-1p2kv33"}"${add_attribute("alt", alt, 0)}${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("usemap", usemap, 0)}></picture></div></div>`;
      }
    }
  )}`;
});
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: ".nav.svelte-3n21hq.svelte-3n21hq{background-color:#25282a;display:flex;align-items:center;padding-top:1rem;padding-right:2rem;padding-bottom:1rem;padding-left:2rem}.logolink.svelte-3n21hq.svelte-3n21hq{display:block;color:#fff;text-decoration:none}.social.svelte-3n21hq.svelte-3n21hq{display:block;margin-left:auto}@media(prefers-reduced-motion: no-preference){.social.svelte-3n21hq.svelte-3n21hq{transition:transform 100ms ease-in-out}}.social.svelte-3n21hq.svelte-3n21hq:hover{transform:scale(1.5)}.social.svelte-3n21hq+.social.svelte-3n21hq{margin-left:0.75rem}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const links = [
    {
      emoji: IconBrandGithub$1,
      name: "Github",
      href: "https://github.com/jewlexx"
    },
    {
      emoji: IconBrandTwitch$1,
      name: "Twitch",
      href: "https://twitch.tv/sapphicjewl"
    },
    {
      emoji: IconBrandTwitter$1,
      name: "Twitter",
      href: "https://twitter.com/jewelexx"
    },
    {
      emoji: IconBrandMastodon$1,
      name: "Mastodon",
      href: "https://tech.lgbt/@jewelexx",
      rel: "me"
    },
    {
      emoji: IconBrandLinktree$1,
      name: "Linktree",
      href: "https://linktr.ee/jewelexx"
    }
  ];
  $$result.css.add(css);
  return `<header><nav class="nav svelte-3n21hq"><a class="logolink svelte-3n21hq" href="/" rel="prefetch">${validate_component(Image, "Image").$$render(
    $$result,
    {
      alt: "Profile",
      class: "monogram",
      src: "/images/pfp-32x.jpg",
      width: 32,
      height: 32
    },
    {},
    {}
  )}</a>

		

		${each(links, ({ href, name, rel, emoji: Emoji }) => {
    return `<a class="social svelte-3n21hq"${add_attribute("title", `${name} Link`, 0)}${add_attribute("href", href, 0)}${add_attribute("rel", rel, 0)}>${validate_component(Emoji, "Emoji").$$render($$result, {}, {}, {})}
			</a>`;
  })}

		<a class="social svelte-3n21hq" title="The time in seconds" href="/now">${validate_component(IconClock$1, "IconClock").$$render($$result, {}, {}, {})}</a></nav>
</header>`;
});
const global = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col min-h-full">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main class="flex flex-col box-border mx-0 my-auto w-screen h-[90vh]">${slots.default ? slots.default({}) : ``}</main></div>`;
});
export {
  Layout as default
};
