import type { FunctionComponent } from 'preact';
import Styles from './styles.module.scss';

const Button: FunctionComponent = ({ children }) => {
  return <span className={Styles.button}>{children}</span>;
};

export default Button;
