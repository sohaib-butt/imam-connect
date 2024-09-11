import React from "react";
import PurchaseCard from "./PurchaseCard";

const index = ({setTrackModal}) => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
      {[1, 2, 3, 4]?.map((i, index) => (
        <PurchaseCard setTrackModal={setTrackModal}/>
      ))}
    </div>
  );
};

export default index;
