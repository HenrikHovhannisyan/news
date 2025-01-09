import styles from "./styles.module.css";
import { getCategories } from "../../api/apiNews";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { useFetch } from "../../helpers/hooks/useFetch";
import Slider from "../Slider/Slider";
import { CategoriesApiResponse, IFilters } from "../../interfaces";
import { useTheme } from "../../context/ThemeContext";

interface Props {
  filters: IFilters;
  changeFilter: (key: string, value: string | number | null) => void;
}

const NewsFilters = ({ filters, changeFilter }: Props) => {
  const { isDark } = useTheme();
  const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(
    getCategories
  );
  return (
    <div className={styles.filters}>
      {dataCategories ? (
        <Slider isDark={isDark}>
          <Categories
            categories={dataCategories.categories}
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
