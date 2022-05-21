/** @jsxImportSource @compiled/react */
import Link from "next/link";

export default function Header() {
  return (
    <div css={{ width: "100%" }}>
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
              }}
            >
              Generate credit score
            </button>
            <button
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
              }}
            >
              Merge
            </button>
            <p>0x234***212***232</p>
          </div>
        </div>
      </div>
    </div>
  );
}
