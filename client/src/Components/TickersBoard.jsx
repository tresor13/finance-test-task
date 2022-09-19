import React from "react";
import { useSelector } from "react-redux";
import { uniqueId } from "lodash";
import { Container } from "@mui/material";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

import Ticker from "./Ticker.jsx";

const tickerColors = {
  AAPL: { background: "#eeeeee", text: "black" },
  GOOGL: {
    background:
      "linear-gradient(to right,#4285F4, #4285F4 25%, #DB4437 25%, #DB4437 50%, #F4B400 50%, #F4B400 75%, #0F9D58 75%)",
    text: "white",
  },
  MSFT: { background: "#00a1f1", text: "white" },
  AMZN: { background: "#FF9900", text: "white" },
  FB: { background: "#4267B2", text: "white" },
  TSLA: { background: "black", text: "white" },
};

function Tickers() {
  const { ids, entities } = useSelector((state) => state.tickersReducer);
  return (
    <Container maxWidth="sm">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align={"center"}>Name</TableCell>
            <TableCell align={"center"}>Price</TableCell>
            <TableCell align={"center"}>Change</TableCell>
            <TableCell align={"center"}>Divident</TableCell>
            <TableCell align={"center"}>Yield</TableCell>
            <TableCell align={"center"}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ids.map((id) => (
            <Ticker
              key={uniqueId("tkr_")}
              ticker={entities[id]}
              colors={tickerColors[id]}
              id={id}
            />
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
export default Tickers;
