import { useState } from "react";
import { IControlButton } from "../../types/IControlButton";
import { Control } from "../control";

export const FirstControl = (): JSX.Element => {
  const [value, setValue] = useState<string>("");

  const endButtons: IControlButton[] = [
    { text: "Очистить содержимое", callback: () => setValue("") },
    { text: "Hello world!", callback: () => setValue("Hello world!") },
  ];

  return (
    <Control value={value} setValue={setValue} endButtons={endButtons} />
  );
};
