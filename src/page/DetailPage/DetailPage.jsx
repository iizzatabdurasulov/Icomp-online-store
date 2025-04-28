import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { saleProduct } from "../../constants/Device";
import DetailItem from "../../components/DetailItem/DetailItem";
export default function DetailPage() {
  const { id } = useParams();
  const [singleData, setSingleData] = useState({});
  useEffect(() => {
    const singleProduct = saleProduct.find((element) => element.id == id);
    setSingleData(singleProduct);
  }, [id]);
  
  return (
    <div>
      <DetailItem basketDbData={singleData} />
    </div>
  );
}
