import React from "react";
import styles from "./style.css";
import { PullRequest } from "../../Molecules";

const PullRequestsList = ({ prList }) => (
  <div className={styles.container}>
    {prList.map((pullRequest) => (
      <PullRequest key={pullRequest.id} pullRequest={pullRequest} />
    ))}
  </div>
);

export default PullRequestsList;
