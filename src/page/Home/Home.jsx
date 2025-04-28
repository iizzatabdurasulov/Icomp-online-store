import React from "react";
import HeaderBanner from "../../components/HeaderBanner/HeaderBanner";
import SaleProduct from "../../components/SaleProduct/SaleProduct";
import GameZone from "../../components/GameZone/GameZone";
import Partner from "../../components/Partner/Partner";
import NewsHome from "../../components/NewsHome/NewsHome";
import InfoSayt from "../../components/InfoSayt/InfoSayt";
import Comments from "../../components/Comments/Comments";

export default function Home() {
  return (
    <div>
      <HeaderBanner />
      <SaleProduct />
      <GameZone />
      <Comments />
      <Partner />
      <NewsHome />
      <InfoSayt />
    </div>
  );
}
