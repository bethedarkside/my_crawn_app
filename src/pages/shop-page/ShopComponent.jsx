import React, { useState } from "react";
import CollectionPreview from "../../components/collection-preview/PreviewComponent";
import SHOP_DATA from "./shop-data/shop.data";

const ShopComponent = () => {
  const [shopData, setshopData] = useState({
    collection: SHOP_DATA,
  });

  return (
    <div className="shop-page">
      {shopData.collection.map(({ id, ...otherCollectopnProps }) => {
        return <CollectionPreview key={id} {...otherCollectopnProps} />;
      })}
    </div>
  );
};

export default ShopComponent;
