import type { ComponentProps, ReactElement } from "react";
import type { IconType } from "react-icons/lib";

type IconElement = ReactElement<ComponentProps<IconType>>;

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
        <InnerContent Icon={icon} name={name} />
      </a>
    );
  } else {
    return <InnerContent Icon={icon} name={name} />;
  }
}
