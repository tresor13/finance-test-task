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
          </TableRow>
        </TableHead>
        <TableBody>
          {ids.map((id) => (
            <Ticker key={uniqueId("tkr_")} ticker={entities[id]} />
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
export default Tickers;
