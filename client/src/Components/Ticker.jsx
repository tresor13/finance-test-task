import React from "react";
import { useDispatch } from "react-redux";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import ProfitStatus from "./ProfitStatus";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { actions } from "../slices/tickersSlice";

const tickerLabel = {
  display: "inline-block",
  width: "80px",
  height: "30px",
  lineHeight: "30px",
  borderRadius: "10px",
};
function Ticker({ ticker, colors, id }) {
  const { background, text } = colors;
  const dispatch = useDispatch();
  const removeOne = () => {
    dispatch(actions.removeTicker(id));
  };
  return (
    <TableRow>
      <TableCell align={"center"}>
        <p style={{ ...tickerLabel, background, color: text }}>{ticker.name}</p>
      </TableCell>
      <TableCell align={"center"}>{ticker.price}</TableCell>
      <TableCell align={"center"}>{ticker.change}</TableCell>
      <TableCell align={"center"}>{ticker.dividend}</TableCell>
      <TableCell align={"center"}>
        <ProfitStatus status={ticker.status} />
      </TableCell>
      <TableCell align={"center"}>
        <IconButton aria-label="delete" onClick={removeOne}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default Ticker;
