import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import styles from "./styles.module.css";
import Image from "../Image/Image";
import { INews } from "../../interfaces";

interface Props {
  item: INews;
}

const NewsBanner = ({ item }: Props) => {
  return (
    <div className={styles?.banner}>
      <Image image={item?.image} />
      <h1 className={styles.title}>{item.title}</h1>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};

export default NewsBanner;
