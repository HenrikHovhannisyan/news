import styles from "./styles.module.css";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import Slider from "../Slider/Slider";
import {  IFilters } from "../../interfaces";
import { useTheme } from "../../context/ThemeContext";
import { useGetCategoriesQuery } from "../../store/services/newsAoi";

interface Props {
  filters: IFilters;
  changeFilter: (key: string, value: string | number | null) => void;
}

const NewsFilters = ({ filters, changeFilter }: Props) => {
  const { isDark } = useTheme();
  const { data } = useGetCategoriesQuery(null);

  return (
    <div className={styles.filters}>
      {data ? (
        <Slider isDark={isDark}>
          <Categories
            categories={data.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              changeFilter("category", category)
            }
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />
    </div>
  );
};

export default NewsFilters;
