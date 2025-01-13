import { useGetLatestNewQuery } from "../../store/services/newsAoi";
import BannersList from "../BannersList/BannersList";
import styles from "./styles.module.css";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewQuery(null);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
