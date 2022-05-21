/** @jsxImportSource @compiled/react */
import Header from "../component/header";
import Link from "next/link";
import {
  Chart,
  LineElement,
  PointElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Filler,
  Legend,
  Title,
  Tooltip,
} from "chart.js";
import { Line, Bubble, Doughnut } from "react-chartjs-2";

Chart.register(
  LineElement,
  PointElement,
  ArcElement,
  Filler,
  Legend,
  Title,
  Tooltip,
  CategoryScale,
  LinearScale
);

export default function Dashboard() {
  const data = {
    backgroundColor: ["rgba(135, 114, 254, 0.8)", "#F4F6FE"],
    labels: ["percentage", "empty"],
    datasets: [
      {
        label: "My First dataset",
        data: ["70", "30"],
        backgroundColor: ["rgba(135, 114, 254, 0.8)", "#F4F6FE"],
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    elements: {
      arc: {
        borderWidth: 0,
        width: 0.5,
      },
    },
    cutout: 100,
  };
  const data2 = {
    labels: ["1", "5", "10", "15", "20", "25", "30"],
    datasets: [
      {
        data: ["70", "30", "40", "50", "60", "70", "30"],
      },
    ],
  };
  const options2 = {
    elements: {
      arc: {
        borderWidth: 0,
        width: 0.5,
      },
    },
    cutout: 100,
  };
  return (
    <div>
      {/* <Header /> */}
      <div
        css={{
          fontFamily: "Manrope",
          width: "100%",
          padding: "34px 30px 46px",
          backgroundColor: "#F4F6FE",
          minHeight: "100vh",
        }}
      >
        <div
          css={{
            maxWidth: "1452px",
            width: "100%",
            margin: "auto",
            fontSize: "36px",
            lineHeight: "49px",
            backgroundColor: "rgba(224, 227, 237, 0.5)",
            padding: "36px 60px 37px",
            fontWeight: "700",
            borderRadius: "10px",
          }}
        >
          <div
            css={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div css={{ maxWidth: "553px", width: "100%" }}>
              <p
                css={{
                  fontSize: "20px",
                  lineHeight: "28px",
                  fontWeight: "600",
                  color: "rgba(0, 0, 0, 0.4)",
                  marginLeft: "22px",
                }}
              >
                Percentage Rating{" "}
              </p>
              <div>
                <div
                  css={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "10px",
                    width: "100%",
                    padding: "19px 30px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div css={{ width: "400px" }}>
                    <Doughnut
                      data={data}
                      options={options}
                      width={25}
                      height={25}
                    />
                  </div>
                  <select
                    name="platform"
                    css={{
                      backgroundColor: "#F4F6FE",
                      width: "146px",
                      height: "68px",
                      border: "none",
                      padding: "0 30px",
                      color: "rgba(0, 0, 0, 0.5)",
                      fontSize: "16px",
                      lineHeight: "22px",
                      marginBottom: "30px",
                      marginLeft: "20px",
                      borderRadius: "5px",
                      "&:focus": {
                        border: "none",
                      },
                    }}
                    required
                  >
                    <option value="KUCOIN" css={{ height: "60px" }}>
                      30 days
                    </option>
                    <option value="KUCOIN2" css={{ height: "60px" }}>
                      50 days
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div css={{ maxWidth: "553px", width: "100%" }}>
              <p
                css={{
                  fontSize: "20px",
                  lineHeight: "28px",
                  fontWeight: "600",
                  color: "rgba(0, 0, 0, 0.4)",
                  marginLeft: "22px",
                }}
              >
                Transaction
              </p>
              <div>
                <div
                  css={{
                    backgroundColor: "#F4F6FE",
                    borderRadius: "10px",
                    width: "100%",
                    padding: "11px 30px 33px",
                    // display: "flex",
                    // alignItems: "center",
                  }}
                >
                  <div
                    css={{
                      fontSize: "20px",
                      lineHeight: "27px",
                      fontWeight: "60",
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                      marginTop: "22px",
                    }}
                  >
                    <div css={{ color: " rgba(0, 0, 0, 0.4)" }}>
                      <p css={{ margin: 0 }}>Loans Taken</p>
                    </div>
                    <div css={{ color: "#8772FE" }}>
                      <p css={{ margin: 0 }}>205</p>
                    </div>
                  </div>
                  <div
                    css={{
                      fontSize: "20px",
                      lineHeight: "27px",
                      fontWeight: "60",
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                      marginTop: "22px",
                    }}
                  >
                    <div css={{ color: " rgba(0, 0, 0, 0.4)" }}>
                      <p css={{ margin: 0 }}>Times Defaulted</p>
                    </div>
                    <div css={{ color: "#8772FE" }}>
                      <p css={{ margin: 0 }}>0</p>
                    </div>
                  </div>
                  <div
                    css={{
                      fontSize: "20px",
                      lineHeight: "27px",
                      fontWeight: "60",
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                      marginTop: "22px",
                    }}
                  >
                    <div css={{ color: " rgba(0, 0, 0, 0.4)" }}>
                      <p css={{ margin: 0 }}>Length</p>
                    </div>
                    <div css={{ color: "#8772FE" }}>
                      <p css={{ margin: 0 }}>598 days</p>
                    </div>
                  </div>
                  <div
                    css={{
                      fontSize: "20px",
                      lineHeight: "27px",
                      fontWeight: "60",
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                      marginTop: "22px",
                    }}
                  >
                    <div css={{ color: " rgba(0, 0, 0, 0.4)" }}>
                      <p css={{ margin: 0 }}>Total debt owed</p>
                    </div>
                    <div css={{ color: "#8772FE" }}>
                      <p css={{ margin: 0 }}>$0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div css={{ width: "100%" }}>
            <p
              css={{
                fontSize: "20px",
                lineHeight: "28px",
                fontWeight: "600",
                color: "rgba(0, 0, 0, 0.4)",
                marginLeft: "22px",
              }}
            >
              Chart
            </p>
            <div css={{ backgroundColor: "#F4F6FE", padding: "17px 75px" }}>
              <Line data={data2} width={100} height={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
