"use client";
import React from "react";
import AdminBatchInfo from "./v1/V1BatchInfo";

type BatchInfoProps = {
  batch: any;
};

function BatchInfo({ batch }: BatchInfoProps) {
  return (
    <div>
      <AdminBatchInfo batch={batch} />
    </div>
  );
}

export default BatchInfo;
