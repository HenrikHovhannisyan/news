import React from "react";
import styles from "./styles.module.css";
import { getCategories } from "../../api/apiNews";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { useFetch } from "../../helpers/hooks/useFetch";
import Slider from "../Slider/Slider";

const NewsFilters = ({ filters, changeFilter }) => {
  const { data: dataCategories } = useFetch(getCategories);
  return (
    <div className={styles.filters}>
      {dataCategories ? (
        <Slider>
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
