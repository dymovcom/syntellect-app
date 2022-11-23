import {
  ChangeEvent, useEffect, useRef, useState,
} from "react";
import { CountryInfo, getCountryByName } from "../../api/apiService";
import { useDebounce } from "../../hooks/useDebounce";
import { CountryItem } from "../countryItem";
import { Input } from "../input";
import styles from "./autocomlete.module.css";

interface AutocompleteProps {
  limit?: number;
  placeholder?: string;
}

export const Autocomplete = ({ limit = 10, placeholder }: AutocompleteProps): JSX.Element => {
  const [searchString, setSearchString] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [countries, setCountries] = useState<CountryInfo[]>([]);

  const debouncedSearchString = useDebounce(searchString);

  const autocompleteRef = useRef<HTMLDivElement>(null);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setSearchString(event.target.value);
  };

  const onCountryClick = (fullName: string) => {
    setValue(fullName);
    setSearchString("");
    setCountries([]);
  };

  useEffect(() => {
    if (debouncedSearchString) {
      getCountryByName(debouncedSearchString).then((result) => {
        setCountries(result);
      });
    } else {
      setCountries([]);
    }
  }, [debouncedSearchString]);

  return (
    <div className={styles.wrapper} ref={autocompleteRef}>
      <Input value={value} onChange={onInputChange} placeholder={placeholder} />
      {!!countries.length && (
      <ul className={styles.list}>
        {countries.map((country, index) => (
          index < limit
          && (
          <li
            key={country.name}
            className={styles.item}
            role="presentation"
            tabIndex={index}
            onClick={() => onCountryClick(country.fullName)}
          >
            <CountryItem name={country.name} fullName={country.fullName} flag={country.flag} />
          </li>
          )
        ))}
      </ul>
      )}
    </div>
  );
};
