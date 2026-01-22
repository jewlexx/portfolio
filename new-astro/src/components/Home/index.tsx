import type { ComponentProps, ReactElement } from "react";
import type { IconType } from "react-icons/lib";
import CollapsibleIcon from "../CollapsibleIcon";
import {
  SiC,
  SiRust,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiSvelte,
  SiTauri,
} from "react-icons/si";
import { FaJava, FaDiscord } from "react-icons/fa";
import { FiCpu, FiPackage } from "react-icons/fi";
import {
  IoSpeedometerOutline,
  IoLibraryOutline,
  IoDesktopOutline,
  IoGlobeOutline,
} from "react-icons/io5";
import { HiOutlineCommandLine } from "react-icons/hi2";
import Collapsible from "../Collapsible";


type IconElement = ReactElement<ComponentProps<IconType>>;


export function ItemList() {
  return <><ul className="list">
          <CollapsibleIcon
            title="Desktop Applications"
            icon={<IoDesktopOutline />}
          >
            <SubListItem href="https://github.com/jewlexx/fauxchat">
              <SiTauri />
              Tauri
            </SubListItem>
          </CollapsibleIcon>
          <CollapsibleIcon title="Web Applications" icon={<IoGlobeOutline />}>
            <SubListItem href="/#who-am-i">
              <SiNextdotjs />
              Next.js
            </SubListItem>
            <SubListItem href="https://winpax.cordor.dev">
              <SiReact />
              React
            </SubListItem>
          </CollapsibleIcon>
          <CollapsibleIcon
            title="CLI Applications"
            icon={<HiOutlineCommandLine />}
          >
            <SubListItem href="https://github.com/winpax/sfsu">
              <FiPackage />
              Package Manager
            </SubListItem>
          </CollapsibleIcon>
          <CollapsibleIcon title="API Libraries" icon={<IoLibraryOutline />}>
            <SubListItem href="https://github.com/jewlexx/discord-presence">
              <FaDiscord />
              Discord Presence
            </SubListItem>
          </CollapsibleIcon>
        </ul>

        <p className="m-0!">As well as:</p>
        <ul className="list mt-0!">
          <Collapsible title="Low level code">
            <SubListItem href="https://github.com/jewlexx/do-not-enter">
              <FiCpu />
              Kernel/OS Implementation
            </SubListItem>
            <SubListItem href="https://github.com/winpax/miniature">
              <IoSpeedometerOutline />
              Low level optimisations
            </SubListItem>
          </Collapsible>

          <Collapsible title="Various Languages">
            <SubListItem langCode="rust">
              <SiRust />
              Rust
            </SubListItem>
            <SubListItem langCode="c">
              <SiC />C
            </SubListItem>
            <SubListItem langCode="java">
              <FaJava />
              Java
            </SubListItem>
            <SubListItem langCode="typescript">
              <SiTypescript />
              TypeScript
            </SubListItem>
          </Collapsible>

          <Collapsible title="Various web frameworks">
            <SubListItem>
              <SiReact />
              React
            </SubListItem>
            <SubListItem>
              <SiNextdotjs />
              Next.js
            </SubListItem>
            <SubListItem>
              <SiSvelte />
              Svelte
            </SubListItem>
          </Collapsible>
        </ul></>;
}

export function InnerContent({
  Icon,
  name,
}: {
  Icon: IconElement;
  name: string;
}) {
  return (
    <li className="list-row">
      <div className="[&>svg]:size-5">{Icon}</div>
      <div>{name}</div>
    </li>
  );
}

export function SubListItem({
  langCode,
    href,
  // icon,name,
children,
}: {
  langCode?: string;
        href?: string;
  //       icon: IconType,
    // name: string,
          children: [IconElement, string, ...ReactElement[]];

    }) {

  const [icon, name] = children;

  const link =
    href ??
    (langCode &&
      `https://github.com/jewlexx?tab=repositories&q=&type=&language=${langCode}&sort=stargazers`);

  if (link) {
    return (
      <a href={link} rel="noreferrer" target="_blank">
        <InnerContent
          Icon={icon}
          name={name}
        />
      </a>
    );
  } else {
    return (
      <InnerContent
        Icon={icon}
            name={name}
      />
    );
  }
}
