import axios from "axios";
import { useEffect, useState } from "react";
import { API_PATH } from "./consts";

export const useFetchPullRequests = () => {
  const [prList, setPrList] = useState(null);

  const fetchPullRequests = async () => {
    try {
      const { data = [] } = await axios.get(API_PATH);
      setPrList(data);
    } catch (error) {
      alert(
        `Opsss, maybe you forgot to turn on the server. The Error is: ${error.message}`
      );
    }
  };

  useEffect(() => {
    fetchPullRequests();
  }, []);

  return [prList, setPrList];
};
