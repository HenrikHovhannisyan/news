import styles from "./styles.module.css";

interface Props {
  image: string;
}

const Image = ({ image }: Props) => {
  return (
    <div className={styles.wrapper}>
      {image ? (
        <img src={image} alt="News" className={styles.image} />
      ) : (
        "No image"
      )}
    </div>
  );
};

export default Image;
