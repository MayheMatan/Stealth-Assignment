import React from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { SORT_ORDERS } from "../../../Utils/consts";

const SortOption = ({ name, isChecked, handleChange }) => {
  return (
    <FormControl component="fieldset">
      <FormControlLabel
        control={
          <Switch checked={isChecked} onChange={handleChange} color="primary" />
        }
        label={`${name} ${isChecked ? SORT_ORDERS.ASC : SORT_ORDERS.DESC}`}
        value={name}
        labelPlacement="top"
      />
    </FormControl>
  );
};

export default SortOption;
