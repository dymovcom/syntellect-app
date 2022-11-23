import { CountryInfo } from "../../api/apiService";
import styles from "./countryItem.module.css";

interface CountyItemProps extends CountryInfo {

}

export const CountryItem = ({ name, fullName, flag }: CountyItemProps): JSX.Element => (
  <div className={styles.wrapper}>
    <img className={styles.flag} src={flag} alt={name} />
    <div>
      <h6 className={styles.fullname}>{fullName}</h6>
      <span className={styles.name}>{name}</span>
    </div>
  </div>
);
