import { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import moment from "moment/moment";
import { Line } from "react-chartjs-2";

import { ICoin } from "../../interfaces/CoinInterface";
import { getCoinMarketChart } from "../../redux/features/coinSlice";
import { useAppSelector, useAppDispatch } from "../../redux/app/store";

ChartJS.register(
  Title,
  Legend,
  Filler,
  Tooltip,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale
);

type ChartPros = {
  coin: ICoin | null;
};

const Chart = ({ coin }: ChartPros) => {
  const { marketChart } = useAppSelector((state) => state.coins);

  const dispatch = useAppDispatch();

  const id = coin?.uuid;
  const coinName = coin?.name;
  const newMoment = moment().format("MMMM Do YYYY, h:mm:ss a");

  useEffect(() => {
    dispatch(getCoinMarketChart(id as string));
  }, [dispatch, id]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `Chart of ${coinName} in ${newMoment}`,
        font: {
          size: 20,
        },
      },
    },
  };
  const data = {
    labels: marketChart?.map((value: any) =>
      moment(value.price[0]).format("MMM Do")
    ),
    datasets: [
      {
        label: coinName,
        data: marketChart?.map((value: any) => value.price),
        fill: true,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default Chart;
