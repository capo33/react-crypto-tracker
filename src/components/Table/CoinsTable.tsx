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
  tableCellClasses,
  Box,
  LinearProgress,
  Pagination,
  outlinedInputClasses,
} from "@mui/material";
import {
  styled,
  createTheme,
  ThemeProvider,
  Theme,
  useTheme,
} from "@mui/material/styles";

import { numberWithCommas } from "../../utils/Index";
import { ICoin } from "../../interfaces/CoinInterface";
import { CryptoContext } from "../../context/cryptoContext";

type CoinsTableProps = {
  coins: ICoin[];
  isLoading: boolean;
};

const customTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#E0E3E7",
            "--TextField-brandBorderHoverColor": "#B2BAC2",
            "--TextField-brandBorderFocusedColor": "#6F7E8C",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&:before, &:after": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&:before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

const CoinsTable = ({ coins, isLoading }: CoinsTableProps) => {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const { symbol } = useContext(CryptoContext);
  const outerTheme = useTheme();

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
      coin.change,
      coin.price,
      coin.rank,
      coin["24hVolume"]
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
      <ThemeProvider theme={customTheme(outerTheme)}>
        <TextField
          label='Serch for a crypto currency'
          variant='outlined'
          sx={{ mb: 5, width: "100%" }}
          onChange={(e) => setSearch(e.target.value)}
        />
      </ThemeProvider>

      {isLoading && (
        <Box
          sx={{
            width: "100%",
            mb: 5,
            borderBottomColor: "#B2BAC2",
            borderColor: "#E0E3E7",
          }}
        >
          <LinearProgress />
        </Box>
      )}

      <TableContainer component={Paper}>
        <Table sx={{}} aria-label='customized table'>
          <TableHead>
            <TableRow>
              {[
                "#Rank",
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
                  // align={head === "#Rank"  ? "center" : "right"}
                >
                  {head}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {handleSearch()
              ?.slice((page - 1) * 10, (page - 1) * 10 + 10) // means from 0 to 10 and display 10 items
              ?.map((row: ICoin) => {
                const profit = row?.change > 0;
                const updatedPrice = row?.price;
                console.log("updatedPrice", updatedPrice);

                return (
                  <StyledTableRow
                    key={row?.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell>{row?.marketCap}</StyledTableCell>
                    <StyledTableCell
                      component='th'
                      scope='row'
                      sx={{
                        display: "flex",
                        gap: 2,
                        alignItems: "center",
                      }}
                    >
                      <Link to={`/coin/${row?.uuid}`}>
                        <Avatar src={row?.iconUrl} alt={row?.name} />
                      </Link>
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

                    <StyledTableCell>
                      {symbol}{" "}
                      {numberWithCommas(Number(updatedPrice).toFixed(2))}
                    </StyledTableCell>
                    <StyledTableCell
                      style={{
                        color: Number(profit) > 0 ? "rgb(14, 203, 129)" : "red",
                        fontWeight: 500,
                      }}
                    >
                      {profit && "+"}
                      {row?.change}%
                    </StyledTableCell>
                    <StyledTableCell
                      style={{
                        color: Number(profit) > 0 ? "rgb(14, 203, 129)" : "red",
                        fontWeight: 500,
                      }}
                    >
                      {row?.["24hVolume"]}%
                    </StyledTableCell>
                    <StyledTableCell>
                      {numberWithCommas(row?.marketCap)}M
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        style={{
          padding: 20,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        count={(handleSearch()?.length ?? 0) / 10}
        page={page}
        onChange={(event, value) => setPage(value)}
        shape='rounded'
      />
    </Container>
  );
};

export default CoinsTable;
