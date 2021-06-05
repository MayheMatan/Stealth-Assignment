import React from "react";
import styles from "./style.css";
import {
  Header,
  Filters,
  PullRequestsList,
  SortOptions,
} from "../../Organisms";

const MainScreenTemplate = ({
  labels,
  prStatuses,
  prList,
  handleStatusChange,
  handleLabelChange,
  toggleStatusSelect,
  toggleLabelSelect,
  statusFilter,
  labelFilter,
  isStatusFilterOpen,
  isLabelFilterOpen,
  handleSortChange,
  isNumberSortChecked,
  isTitleSortChecked,
}) => (
  <>
    <Header />
    <div className={styles.filtersAndSorts}>
      <Filters
        handleStatusChange={handleStatusChange}
        toggleStatusSelect={toggleStatusSelect}
        handleLabelChange={handleLabelChange}
        toggleLabelSelect={toggleLabelSelect}
        statusFilter={statusFilter}
        labelFilter={labelFilter}
        labels={labels}
        prStatuses={prStatuses}
        isStatusFilterOpen={isStatusFilterOpen}
        isLabelFilterOpen={isLabelFilterOpen}
      />
      <SortOptions
        handleSortChange={handleSortChange}
        isTitleSortChecked={isTitleSortChecked}
        isNumberSortChecked={isNumberSortChecked}
      />
    </div>
    <PullRequestsList prList={prList} />
  </>
);

export default MainScreenTemplate;
