import React from "react";
import styles from "./styles.module.css";
import BannersList from "../BannersList/BannersList";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getLatestNewa } from "../../api/apiNews";

const LatesNews = () => {
  const { data, isLoading } = useFetch(getLatestNewa);
  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatesNews;
