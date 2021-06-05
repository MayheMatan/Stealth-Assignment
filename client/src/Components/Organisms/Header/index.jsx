import React, { memo } from "react";
import styles from "./style.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { HEADER_TITLE } from "../../../Utils/consts";
import { Text } from "../../Atoms";

const Header = () => (
  <>
    <AppBar position="static">
      <Toolbar className={styles.center}>
        <Text variant="h6">{HEADER_TITLE}</Text>
      </Toolbar>
    </AppBar>
  </>
);

export default memo(Header);
