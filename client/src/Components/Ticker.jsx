import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

function Ticker({ ticker }) {
  return (
    <TableRow>
      <TableCell>{ticker.ticker}</TableCell>
      <TableCell>{ticker.price}</TableCell>
      <TableCell>{ticker.change}</TableCell>
      <TableCell>{ticker.dividend}</TableCell>
    </TableRow>
  );
}

export default Ticker;
