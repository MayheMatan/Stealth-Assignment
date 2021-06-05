import React from "react";
import styles from "./style.css";
import { SORT_OPTIONS } from "../../../Utils/consts";
import { SortOption } from "../../Molecules";

const SortOptions = ({
  handleSortChange,
  isTitleSortChecked,
  isNumberSortChecked,
}) => {
  return (
    <div className={styles.sortOptions}>
      <SortOption
        isChecked={isTitleSortChecked}
        handleChange={handleSortChange}
        name={SORT_OPTIONS.TITLE}
      />
      <SortOption
        isChecked={isNumberSortChecked}
        handleChange={handleSortChange}
        name={SORT_OPTIONS.PR_NUMBER}
      />
    </div>
  );
};

export default SortOptions;
