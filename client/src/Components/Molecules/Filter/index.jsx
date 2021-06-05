import React, { memo } from "react";
import styles from "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Filter = ({
  options,
  filter,
  toggleSelect,
  handleFilterChange,
  isFilterOpen,
  name,
}) => {
  const classes = useStyles();
  return (
    <div className={styles.filter}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">{name}</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={isFilterOpen}
          onClose={toggleSelect}
          onOpen={toggleSelect}
          value={filter}
          onChange={handleFilterChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {options?.map((option, key) => (
            <MenuItem key={key} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default memo(Filter);
