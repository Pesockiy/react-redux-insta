import React from "react";

export default function (props) {
  const { isLoading } = props;
  return (
    isLoading && (
      <div is className="loader">
        <span></span>
      </div>
    )
  );
}
