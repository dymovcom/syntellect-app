import { memo } from "react";
import { IControlButton } from "../../types/IControlButton";
import { Button } from "../button";
import styles from "./contolButton.module.css";

interface ControlButtonProps extends IControlButton {

}

export const ControlButton = memo(({
  text,
  callback,
}: ControlButtonProps): JSX.Element => (
  <Button className={styles.button} onClick={callback}>
    {text}
  </Button>
), (prevProps, nextProps) => prevProps.text === nextProps.text);
