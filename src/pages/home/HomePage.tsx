import React from "react";
import { Autocomplete } from "../../components/autocomplete";
import { FirstControl } from "../../components/firstControl";
import { SecondControl } from "../../components/secondControl";
import styles from "./homePage.module.css";

export const HomePage = (): JSX.Element => (
  <div className={styles.wrapper}>
    <div>
      <div className={styles.box}>
        <h3>Задание №1</h3>
        <FirstControl />
        <SecondControl />
      </div>
      <div className={styles.box}>
        <h3>Задание №2</h3>
        <Autocomplete placeholder="Лимит = 10" />
        <Autocomplete limit={2} placeholder="Лимит = 2" />
      </div>
    </div>
  </div>
);
