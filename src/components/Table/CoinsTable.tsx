import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
// Material UI
import {
  Paper,
  Container,
  Avatar,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  CircularProgress,
  tableCellClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { numberWithCommas } from "../../utils/Index";
import { ICoin } from "../../interfaces/CoinInterface";
import { CryptoContext } from "../../context/cryptoContext";

type CoinsTableProps = {
  coins: ICoin[];
  isLoading: boolean;
};

const CoinsTable = ({ coins, isLoading }: CoinsTableProps) => {
  const [search, setSearch] = useState<string>("");

  const { symbol } = useContext(CryptoContext);

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = coins?.filter((coin: ICoin) => coin?.name?.includes(search));

  rows?.map((coin: ICoin) => {
    return createData(
      coin.name,
      coin.current_price,
      coin.total_volume,
      coin.price_change_percentage_24h,
      coin.market_cap
    );
  });

  const handleSearch = () => {
    return coins?.filter((coin: ICoin) =>
      coin?.name?.toLowerCase()?.includes(search.toLowerCase()) ||
      coin?.symbol?.toLowerCase()?.includes(search.toLowerCase())
        ? coin
        : null
    );
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#E5D283",
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <Container sx={{ py: 8 }} maxWidth='xl'>
      <TextField
        id='outlined-basic'
        label='Serch for a crypto currency'
        variant='outlined'
        sx={{ mb: 5, width: "100%" }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <TableContainer component={Paper}>
        {isLoading && <CircularProgress />}
        <Table sx={{}} aria-label='customized table'>
          <TableHead>
            <TableRow>
              {[
                "Coin",
                "Price",
                "24h Change",
                "Total volume",
                "Market Cap",
              ].map((head) => (
                <StyledTableCell
                  sx={{
                    fontWeight: "700",
                  }}
                  key={head}
                  align={head === "Coin" ? "left" : "right"}
                >
                  {head}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {handleSearch()?.map((row: ICoin) => {
              const profit = row?.price_change_percentage_24h > 0;
              return (
                <StyledTableRow
                  key={row?.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <Link to={`/coin/${row?.id}`}>
                    <StyledTableCell
                      component='th'
                      scope='row'
                      sx={{
                        display: "flex",
                        gap: 2,
                        alignItems: "center",
                      }}
                    >
                      <Avatar src={row?.image} alt={row?.name} />

                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span
                          style={{
                            textTransform: "uppercase",
                            fontSize: 22,
                          }}
                        >
                          {row?.symbol}
                        </span>
                        <span style={{ color: "darkgrey" }}>{row?.name}</span>
                      </div>
                    </StyledTableCell>
                  </Link>
                  <StyledTableCell align='right'>
                    {symbol} {numberWithCommas(row?.current_price.toFixed(2))}
                  </StyledTableCell>
                  <StyledTableCell
                    align='right'
                    style={{
                      color: Number(profit) > 0 ? "rgb(14, 203, 129)" : "red",
                      fontWeight: 500,
                    }}
                  >
                    {profit && "+"}
                    {row?.price_change_percentage_24h.toFixed(2)}%
                  </StyledTableCell>
                  <StyledTableCell
                    align='right'
                    style={{
                      color: Number(profit) > 0 ? "rgb(14, 203, 129)" : "red",
                      fontWeight: 500,
                    }}
                  >
                    {row?.total_volume}%
                  </StyledTableCell>
                  <StyledTableCell align='right'>
                    {numberWithCommas(row?.market_cap.toString()?.slice(0, -5))}
                    M
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default CoinsTable;
