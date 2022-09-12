import React from "react";
import { useSelector } from "react-redux";
import { uniqueId } from "lodash";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

import Ticker from "./Ticker.jsx";

function Tickers() {
  const { tickers } = useSelector((state) => state.tickersReducer);
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Change</TableCell>
          <TableCell>Divident</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tickers.map((ticker) => (
          <Ticker key={uniqueId("tkr_")} ticker={ticker} />
        ))}
      </TableBody>
    </Table>
  );
}
export default Tickers;
