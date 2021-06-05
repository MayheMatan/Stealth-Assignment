import moment from "moment";
import { PR_STATUSES } from "./consts";

export const getFilteredList = (list, labelFilter, statusFilter) => {
  let filteredList = list;
  if (labelFilter) {
    filteredList = filteredList.filter((pr) =>
      pr.labels.find((label) => label.name === labelFilter)
    );
  }
  if (statusFilter) {
    filteredList = filteredList.filter((pr) => pr.state === statusFilter);
  }
  return filteredList;
};

export const getPrettifiedTime = (time) =>
  moment(time).format("MMMM Do YYYY, h:mm:ss a");

export const getStatusColor = (status) => {
  switch (status) {
    case PR_STATUSES.OPEN:
      return "green";
    case PR_STATUSES.CLOSED:
      return "red";
    case PR_STATUSES.DRAFT:
      return "grey";
  }
};

export const extractLabelsFromPrList = (prList) => {
  if (!prList) return [];
  const labels = prList.map((pr) => {
    return pr.labels.map((label) => {
      return label.name;
    });
  });
  return [...new Set(labels.flat(1))];
};
