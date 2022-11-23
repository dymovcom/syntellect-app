import { ChangeEvent } from "react";
import { IControlButton } from "../../types/IControlButton";
import { ControlButton } from "../controlButton";
import { Input } from "../input";
import styles from "./control.module.css";

interface ControlProps {
  startButtons?: IControlButton[];
  endButtons?: IControlButton[];
  value: string;
  setValue: (newValue: string) => void;
}

export const Control = ({
  value, setValue, startButtons, endButtons,
}: ControlProps): JSX.Element => {
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.control}>
      {startButtons?.length && (
        <div className={`${styles.buttons} ${styles.buttons_start}`}>
          {startButtons.map((button, index) => (
            <ControlButton
              key={index}
              text={button.text}
              callback={button.callback}
            />
          ))}
        </div>
      )}
      <Input className={styles.input} value={value} onChange={onInputChange} />
      {endButtons?.length
        && (
        <div className={`${styles.buttons} ${styles.buttons_end}`}>
          {endButtons.map((button, index) => (
            <ControlButton
              key={index}
              text={button.text}
              callback={button.callback}
            />
          ))}
        </div>
        )}
    </div>
  );
};
