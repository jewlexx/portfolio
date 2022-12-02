import { FunctionComponent } from 'react';

interface SpringyTextProps {
  children: string;
  className: string;
}

const SpringyText: FunctionComponent<SpringyTextProps> = (props) => {
  return (
    <span>
      {props.children.split('').map((letter) => {
        // Cannot feasibly have a unique key
        // eslint-disable-next-line react/jsx-key
        return <span className={props.className}>{letter}</span>;
      })}
    </span>
  );
};

export default SpringyText;
