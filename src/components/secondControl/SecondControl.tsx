import { useState } from "react";
import { IControlButton } from "../../types/IControlButton";
import { Control } from "../control";

export const SecondControl = (): JSX.Element => {
  const [value, setValue] = useState<string>("");

  const startButtons: IControlButton[] = [
    { text: "Показать alert", callback: () => alert(value) },
  ];

  const endButtons: IControlButton[] = [
    {
      text: "Проверка на число",
      callback: () => (value && !Number.isNaN(Number(value))
        ? alert(value)
        : console.log("Введено не число!")),
    },
  ];

  return (
    <Control
      value={value}
      setValue={setValue}
      startButtons={startButtons}
      endButtons={endButtons}
    />
  );
};
