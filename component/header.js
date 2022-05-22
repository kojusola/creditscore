/** @jsxImportSource @compiled/react */
import React from "react";
import { useRouter } from "next/router";
import { useAppContext } from "../context/state";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function Header() {
  const router = useRouter();
  const [accountShort, setAccountShort] = React.useState();
  const { connected, account } = useAppContext();
  React.useEffect(() => {
    if (connected && account) {
      const addressShortner = (address, shorter) => {
        if (shorter)
          return `${address.slice(0, 5)}...${address.slice(
            address.length - 15,
            address.length - 12
          )}...${address.slice(address.length - 3, address.length)}`;
        return `${address.slice(0, 12)}.....${address.slice(
          address.length - 10,
          address.length
        )}`;
      };
      setAccountShort(addressShortner(account, true));
    } else {
      router.push("/");
    }
  }, []);
  return (
    <div css={{ width: "100%" }}>
      <ToastContainer />
      <div
        css={{
          fontFamily: "Manrope",
          width: "100%",
          padding: "25px 30px",
          backgroundColor: "rgba(146, 128, 247, 0.14)",
        }}
      >
        <div
          css={{
            maxWidth: "1512px",
            width: "100%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "28px",
            lineHeight: "38px",
            color: "#181350",
            fontWeight: "700",
          }}
        >
          <Link
            href="/"
            css={{ fontSize: "28px", lineHeight: "38px", color: "#181350" }}
          >
            CrediScore
          </Link>
          <div
            css={{
              display: "flex",
              fontSize: "20px",
              lineHeight: "27px",
              color: "rgba(0, 0, 0, 0.5)",
              fontWeight: "800",
            }}
          >
            <button
              onClick={() => {
                router.push("/dashboard");
              }}
              css={{
                padding: "18px 29px",
                marginRight: "30px",
                backgroundColor: "#8772FE",
                color: "#FFFFFF",
                borderRadius: "5px",
                fontSize: "24px",
                lineHeight: "33px",
                fontWeight: "600",
                border: "none",
                ":hover": {
                  backgroundColor: "rgba(135, 114, 254, 0.8)",
                },
              }}
            >
              Generate credit score
            </button>
            <button
              onClick={() => {
                router.push("/details");
              }}
              css={{
                padding: "18px 71px",
                marginRight: "30px",
                backgroundColor: "#8772FE",
                color: "#FFFFFF",
                borderRadius: "5px",
                fontSize: "24px",
                lineHeight: "33px",
                fontWeight: "600",
                border: "none",
                ":hover": {
                  backgroundColor: "rgba(135, 114, 254, 0.8)",
                },
              }}
            >
              Merge
            </button>
            <p>{accountShort}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
