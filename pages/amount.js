/** @jsxImportSource @compiled/react */
import Header from "../component/header";

export default function Amount() {
  return (
    <div>
      <Header />
      <div
        css={{
          fontFamily: "Manrope",
          width: "100%",
          padding: "83px 30px 32px",
          backgroundColor: "#F4F6FE",
          minHeight: "100vh",
        }}
      >
        <div
          css={{
            maxWidth: "1100px",
            width: "100%",
            margin: "auto",
            fontSize: "36px",
            lineHeight: "49px",
            backgroundColor: "rgba(224, 227, 237, 0.5)",
            padding: "75px 30px 51px",
            fontWeight: "700",
            borderRadius: "10px",
          }}
        >
          <select
            placeholder="Choose currency"
            css={{
              borderRadius: "10px",
              backgroundColor: "#FFFFFF",
              //               backgroundImage: `url("data:image/svg+xml;utf8,<svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              // <path d="M9.17586 14.569C9.2676 14.7022 9.39036 14.8112 9.53355 14.8864C9.67675 14.9617 9.83609 15.001 9.99786 15.001C10.1596 15.001 10.319 14.9617 10.4622 14.8864C10.6054 14.8112 10.7281 14.7022 10.8199 14.569L19.8199 1.569C19.924 1.41906 19.9851 1.24343 19.9965 1.06121C20.0079 0.87898 19.9691 0.697123 19.8843 0.535394C19.7996 0.373665 19.6722 0.238248 19.5159 0.143858C19.3596 0.049468 19.1804 -0.000286344 18.9979 1.23965e-06H0.997861C0.815705 0.000753649 0.6372 0.0511479 0.481542 0.145764C0.325885 0.24038 0.198964 0.375639 0.11443 0.536994C0.0298962 0.698349 -0.00905316 0.879696 0.0017708 1.06153C0.0125948 1.24337 0.0727825 1.41881 0.175861 1.569L9.17586 14.569Z" fill="black" fill-opacity="0.5"/>
              // </svg>")`,
              //               backgroundRepeat: "no-repeat",
              //               backgroundPositionX: "100%",
              //               backgroundPositionY: "5px",
              width: "405px",
              height: "76px",
              border: "none",
              padding: "0 30px",
              color: "rgba(0, 0, 0, 0.5)",
              fontSize: "16px",
              lineHeight: "22px",
              marginBottom: "30px",
              "&:focus": {
                border: "none",
              },
            }}
          >
            <option value="" disabled selected hidden>
              Choose currency
            </option>
            <option value="1">1</option>
          </select>
          <div
            css={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#F4F6FE",
              paddingLeft: "30px",
              paddingRight: "15px",
              alignItems: "center",
            }}
          >
            <p
              css={{
                fontSize: "16px",
                lineHeight: "22px",
                fontWeight: "600",
                color: "rgba(0, 0, 0, 0.5)",
              }}
            >
              Amount deposited
            </p>
            <div
              css={{
                display: "flex",
                alignItems: "center",
                maxWidth: "265px",
                width: "100%",
                height: "76px",
                marginTop: "12px",
                marginBottom: "12px",
                backgroundColor: "#E9EBF4",
                paddingRight: "20px",
                justifyContent: "space-between",
              }}
            >
              <input
                css={{
                  backgroundColor: "transparent",
                  border: "none",
                  height: "100%",
                  maxWidth: "220px",
                  width: "100%",
                }}
              ></input>
              <p
                css={{
                  fontSize: "16px",
                  lineHeight: "21px",
                  fontWeight: "600",
                  color: "rgba(0, 0, 0, 0.5)",
                }}
              >
                Max
              </p>
            </div>
          </div>
          <div
            css={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#F4F6FE",
              paddingLeft: "30px",
              paddingRight: "15px",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <p
              css={{
                fontSize: "16px",
                lineHeight: "22px",
                fontWeight: "600",
                color: "rgba(0, 0, 0, 0.5)",
              }}
            >
              Amount to receive
            </p>
            <div
              css={{
                display: "flex",
                alignItems: "center",
                maxWidth: "265px",
                width: "100%",
                height: "76px",
                marginTop: "12px",
                marginBottom: "12px",
                backgroundColor: "#E9EBF4",
                justifyContent: "space-between",
              }}
            >
              <input
                css={{
                  backgroundColor: "transparent",
                  border: "none",
                  height: "100%",
                  width: "100%",
                }}
              ></input>
            </div>
          </div>
          <div
            css={{
              display: "flex",
              marginTop: "50px",
              justifyContent: "flex-end",
            }}
          >
            <button
              css={{
                padding: "18px 85px",
                marginRight: "30px",
                backgroundColor: "#181350",
                color: "#FFFFFF",
                borderRadius: "5px",
                fontSize: "24px",
                lineHeight: "33px",
                fontWeight: "600",
                border: "none",
              }}
            >
              Approve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
