import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import ProfitStatus from "./ProfitStatus";

const tickerLabel = {
  display: "inline-block",
  width: "80px",
  height: "30px",
  lineHeight: "30px",
  borderRadius: "10px",
};
function Ticker({ ticker, colors }) {
  const { background, text } = colors;
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
    </TableRow>
  );
}

export default Ticker;
