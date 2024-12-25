import styles from "./styles.module.css";
import LatesNews from "../../components/LatesNews/LatesNews";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters";

const Main = () => {
  return (
    <main className={styles.main}>
      <LatesNews />
      <NewsByFilters />
    </main>
  );
};

export default Main;
