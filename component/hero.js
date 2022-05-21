/** @jsxImportSource @compiled/react */

import Link from "next/link";
import Image from "next/image";
import HeroImage from "../images/hero-image.png";

export default function Hero() {
  return (
    <div
      css={{
        width: "100%",
        position: "relative",
        height: "481px",
      }}
    >
      <Image src={HeroImage} alt="Hero Image" layout="fill" />
      <div
        css={{
          maxWidth: "1512px",
          width: "100%",
          padding: "0 30px",
          margin: "auto",
          position: "absolute",
          top: "0px",
          left: "0px",
        }}
      >
        <div
          css={{
            maxWidth: "649px",
            width: "100%",
            fontSize: "32px",
            lineHeight: "43px",
            fontWeight: "600",
            fontFamily: "Manrope",
            zIndex: "9",
            color: "#000000",
            // position: "absolute",
            paddingTop: "108px",
            // left: "0px",
          }}
        >
          <p css={{ marginBottom: "94px" }}>
            Get access to undercollaterized loans and use credit score both on
            and off crypto sector to enjoy diverse benefits
          </p>
          <button
            css={{
              padding: "18px 44px",
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
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
}
