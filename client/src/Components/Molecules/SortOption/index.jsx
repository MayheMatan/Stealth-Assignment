import React from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const SortOption = ({ name, isChecked, handleChange }) => {
  return (
    <FormControl component="fieldset">
      <FormControlLabel
        control={
          <Switch checked={isChecked} onChange={handleChange} color="primary" />
        }
        label={`${name} ${isChecked ? 'asc' : 'desc'}`}
        value={name}
        labelPlacement="top"
      />
    </FormControl>
  );
};

export default SortOption;
