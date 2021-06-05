import axios from "axios";
import { useEffect, useState } from "react";
import { API_PATH } from "./consts";

export const useFetchPullRequests = () => {
  const [prList, setPrList] = useState(null);

  const fetchPullRequests = async () => {
    const { data = [] } = await axios.get(API_PATH);
    setPrList(data);
  };

  useEffect(() => {
    fetchPullRequests();
  }, []);

  return [prList, setPrList];
};
