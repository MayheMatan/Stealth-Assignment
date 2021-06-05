import React, { useState } from "react";
import { PR_STATUSES, SORT_OPTIONS } from "../../../Utils/consts";
import { useFetchPullRequests } from "../../../Utils/hooks";
import {
  extractLabelsFromPrList,
  getFilteredList,
} from "../../../Utils/helpers";
import { MainScreenTemplate } from "../../Templates";
import { Loader } from "../../Atoms";

const MainScreen = () => {
  const [prList, setPrList] = useFetchPullRequests();
  const labels = extractLabelsFromPrList(prList);
  const [statusFilter, setStatusFilter] = useState("");
  const [labelFilter, setLabelFilter] = useState("");
  const [isStatusFilterOpen, setIsStatusFilterOpen] = useState(false);
  const [isLabelFilterOpen, setIsLabelFilterOpen] = useState(false);
  const [isNumberSortChecked, setIsNumberSortChecked] = useState(false);
  const [isTitleSortChecked, setIsTitleSortChecked] = useState(false);

  const handleSortChange = (event) => {
    switch (event.target.value) {
      case SORT_OPTIONS.TITLE: {
        setIsNumberSortChecked(false);
        setIsTitleSortChecked(!isTitleSortChecked);
        if (isTitleSortChecked) {
          setPrList(prList.sort((a, b) => b.title.localeCompare(a.title)));
        } else {
          setPrList(prList.sort((a, b) => a.title.localeCompare(b.title)));
        }
        break;
      }
      case SORT_OPTIONS.PR_NUMBER: {
        setIsTitleSortChecked(false);
        setIsNumberSortChecked(!isNumberSortChecked);
        if (isNumberSortChecked) {
          setPrList(prList.sort((a, b) => b.number - a.number));
        } else {
          setPrList(prList.sort((a, b) => a.number - b.number));
        }
        break;
      }
    }
  };

  const handleStatusChange = (event) => {
    setStatusFilter(event.target.value);
    setIsStatusFilterOpen(false);
  };

  const handleLabelChange = (event) => {
    setLabelFilter(event.target.value);
    setIsLabelFilterOpen(false);
  };

  const toggleStatusSelect = () => {
    setIsStatusFilterOpen(!isStatusFilterOpen);
  };

  const toggleLabelSelect = () => {
    setIsLabelFilterOpen(!isStatusFilterOpen);
  };

  return prList ? (
    <MainScreenTemplate
      labels={labels}
      handleSortChange={handleSortChange}
      isNumberSortChecked={isNumberSortChecked}
      isTitleSortChecked={isTitleSortChecked}
      prStatuses={Object.values(PR_STATUSES)}
      prList={getFilteredList(prList, labelFilter, statusFilter)}
      handleStatusChange={handleStatusChange}
      handleLabelChange={handleLabelChange}
      toggleStatusSelect={toggleStatusSelect}
      toggleLabelSelect={toggleLabelSelect}
      statusFilter={statusFilter}
      labelFilter={labelFilter}
      isStatusFilterOpen={isStatusFilterOpen}
      isLabelFilterOpen={isLabelFilterOpen}
    />
  ) : (
    <Loader />
  );
};

export default MainScreen;
