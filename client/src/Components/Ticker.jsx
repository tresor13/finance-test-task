import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import ProfitStatus from "./ProfitStatus";
const tickerLabel = {
  display: "inline-block",
  color: "white",
  background: "#0d6efd",
  width: "80px",
  height: "30px",
  lineHeight: "30px",
  borderRadius: "10px",
};
function Ticker({ ticker }) {
  return (
    <TableRow>
      <TableCell align={"center"}>
        <p style={tickerLabel}>{ticker.name}</p>
      </TableCell>
      <TableCell align={"center"}>{ticker.price}</TableCell>
      <TableCell align={"center"}>{ticker.change}</TableCell>
      <TableCell align={"center"}>{ticker.dividend}</TableCell>
      <TableCell align={"center"}>
        <ProfitStatus status={ticker.status} />
      </TableCell>
    </TableRow>
  );
}

export default Ticker;
