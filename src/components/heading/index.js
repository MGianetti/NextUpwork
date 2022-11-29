import styles from "./styles.module.scss";
import { TEST_TITLE } from "../../resources/constants";

export const Heading = () => {
  const [darkBlueTitle, brandTitle] = TEST_TITLE;

  return (
    <h1 className={styles.heading}>
      <span>{darkBlueTitle}</span>
      <span className={styles.heading__brand}>{brandTitle}</span>
    </h1>
  );
};
