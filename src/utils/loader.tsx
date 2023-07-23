import React from "react";
import { LoaderProps } from "../countries/interface";

export const Loader = (props: LoaderProps) => {
  return (
    <div
      className="ag-custom-loading-cell"
      style={{ paddingLeft: "10px", lineHeight: "25px" }}
    >
      <i className="fas fa-spinner fa-pulse"></i>{" "}
      <span> {props.loaderMessage}</span>
    </div>
  );
};
