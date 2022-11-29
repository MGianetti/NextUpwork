import NextImage from "next/image";
import styles from "./styles.module.scss";

export const Card = ({ data }) => {
  const { title, list, paragraphs, images } = data;
  return (
    <div className={styles.card}>
      <div className={styles.card__mediaContainer}>
        {images.map((src) => (
          <div key={`img-${src}`} className={styles.card__imgWrapper}>
            <NextImage layout="fill" src={src} objectFit="cover" />
          </div>
        ))}
      </div>
      <div className={styles.card__textContainer}>
        <h2 className={styles.card__title}>{title}</h2>
        {list.length > 0 ? (
          <ul>
            {list.map((listItem) => (
              <li className={styles.listItem} key={`li-item-${listItem}`}>
                {listItem}
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
        {paragraphs.map((text, index) => (
          <p key={`p-${title}-${index}`}>{text}</p>
        ))}
      </div>
    </div>
  );
};
