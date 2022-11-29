import { Heading } from "../heading";
import { Card } from "../card";
import { CARDS } from "../../resources/constants";
import styles from "./styles.module.scss";
import { Button } from "../button";

export const HomePage = (props) => {
  return (
    <div className={styles.homeContainer}>
      <Heading>Head</Heading>
      <div className={styles.homeContainer__cards}>
        {CARDS.map((card) => (
          <Card key={card.title} data={card} />
        ))}
      </div>
      <Button>get started</Button>
    </div>
  );
};
