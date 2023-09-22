import React from "react";
import { Paper, Button } from "@mui/material";
const Item = (props) => {
  console.log(props.item);
  return (
    <Paper sx={{ backgroundColor: "inherit" }}>
      <img src={props.item.Image} alt="" width="100%" height="480rem" />
      {/* <h2>{props.item.name}</h2>
      <p>{props.item.description}</p> */}
    </Paper>
  );
};

export default Item;
