import React from "react";
import PurchaseCard from "./PurchaseCard";

const index = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
      {[1, 2, 3, 4]?.map((i, index) => (
        <PurchaseCard />
      ))}
    </div>
  );
};

export default index;
