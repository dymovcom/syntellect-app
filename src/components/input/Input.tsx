import { HTMLProps } from "react";
import styles from "./input.module.css";

interface InputProps extends HTMLProps<HTMLInputElement> {

}

export const Input = ({ className, ...props }: InputProps): JSX.Element => (
  <input className={`${styles.input} ${className}`} {...props} />
);
