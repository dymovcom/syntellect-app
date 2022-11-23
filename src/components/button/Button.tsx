import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export const Button = ({ children, className, ...props }: ButtonProps): JSX.Element => (
  <button type="button" className={`${styles.button} ${className}`} {...props}>
    {children}
  </button>
);
