import React from "react";
import styles from "./style.css";
import { Filter } from "../../Molecules";
import { FILTER_OPTIONS } from "../../../Utils/consts";

const Filters = ({
  labels,
  prStatuses,
  statusFilter,
  isStatusFilterOpen,
  toggleStatusSelect,
  handleStatusChange,
  labelFilter,
  toggleLabelSelect,
  handleLabelChange,
  isLabelFilterOpen,
}) => {
  return (
    <div className={styles.filters}>
      <Filter
        name={FILTER_OPTIONS.LABEL}
        options={labels}
        filter={labelFilter}
        toggleSelect={toggleLabelSelect}
        handleFilterChange={handleLabelChange}
        isFilterOpen={isLabelFilterOpen}
      />
      <Filter
        name={FILTER_OPTIONS.STATUS}
        options={prStatuses}
        filter={statusFilter}
        toggleSelect={toggleStatusSelect}
        handleFilterChange={handleStatusChange}
        isFilterOpen={isStatusFilterOpen}
      />
    </div>
  );
};

export default Filters;
