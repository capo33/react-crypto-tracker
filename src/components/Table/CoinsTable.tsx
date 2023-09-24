import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
// Material UI Components
import {
  Paper,
  Box,
  Grid,
  Container,
  Avatar,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TextField,
  Pagination,
  Select,
  MenuItem,
  TableContainer,
  LinearProgress,
} from "@mui/material";
// Material UI Styles
import { ThemeProvider, useTheme } from "@mui/material/styles";
// Material UI Icons
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import {
  StyledTableCell,
  StyledTableRow,
  customTheme,
} from "../../styles/TableStyles";
import {
  addFavourite,
  removeFavourite,
} from "../../redux/features/favouritesSlice";
import { numberWithCommas } from "../../utils/Index";
import { ICoin } from "../../interfaces/CoinInterface";
import { CryptoContext } from "../../context/cryptoContext";
import { useAppDispatch, useAppSelector } from "../../redux/app/store";

type CoinsTableProps = {
  coins: ICoin[];
  isLoading: boolean;
};

const CoinsTable = ({ coins, isLoading }: CoinsTableProps) => {
  const { symbol, currency, setCurrency } = useContext(CryptoContext);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const { favourites } = useAppSelector((state) => state.cart);

  const outerTheme = useTheme();
  const dispatch = useAppDispatch();

  // Create data for table
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

  const addToFavourirteHandler = (coin: ICoin) => {
    dispatch(addFavourite(coin));
  };

  const removeFromFavourirteHandler = (coin: ICoin) => {
    dispatch(removeFavourite(coin));
  };

  return (
    <Container sx={{ py: 8 }} maxWidth='xl'>
      <ThemeProvider theme={customTheme(outerTheme)}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label='Serch for a crypto currency'
              focused
              variant='outlined'
              sx={{ mb: 5, width: "100%" }}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Select
                variant='outlined'
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={currency}
                style={{ width: '100%',   marginLeft: 15 }}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"yhjMzLPhuIDl"}>USD</MenuItem>
                <MenuItem value={"5k-_VTxqtCEI"}>EUR</MenuItem>
                <MenuItem value={"Qwsogvtv82FCd"}>BIT</MenuItem>
              </Select>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>

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
                "Keep track",
              ].map((head) => (
                <StyledTableCell
                  sx={{
                    fontWeight: "700",
                    fontSize: "1.2rem",
                    textTransform: "capitalize",
                  }}
                  key={head}
                >
                  {head}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {handleSearch()
              ?.slice((page - 1) * 10, (page - 1) * 10 + 10) // from 0 to 10 and display 10 items
              ?.map((row: ICoin) => {
                const profit = row?.change > 0;

                return (
                  <StyledTableRow
                    key={row?.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell>{row?.rank}</StyledTableCell>
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
                      <Box
                        component={"div"}
                        sx={{ display: "flex", flexDirection: "column" }}
                      >
                        <Box
                          component={"span"}
                          sx={{
                            textTransform: "uppercase",
                            fontSize: 22,
                          }}
                        >
                          {row?.symbol}
                        </Box>
                        <Box component={"span"} sx={{ color: "darkgrey" }}>
                          {row?.name}
                        </Box>
                      </Box>
                    </StyledTableCell>

                    <StyledTableCell>
                      {symbol} {numberWithCommas(Number(row?.price).toFixed(2))}
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

                    {/* Add to favourate */}
                    <StyledTableCell>
                      {favourites?.find(
                        (item: ICoin) => item?.uuid === row?.uuid
                      ) ? (
                        <StarIcon
                          onClick={() =>
                            removeFromFavourirteHandler(row as ICoin)
                          }
                          sx={{ cursor: "pointer" }}
                        />
                      ) : (
                        <StarBorderIcon
                          onClick={() => addToFavourirteHandler(row as ICoin)}
                          sx={{ cursor: "pointer" }}
                        />
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
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
      <Pagination
        style={{
          padding: 20,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        count={(handleSearch()?.length ?? 0) / 10}
        page={page}
        onChange={(_, value: number) => setPage(value)}
        shape='rounded'
      />
    </Container>
  );
};

export default CoinsTable;
