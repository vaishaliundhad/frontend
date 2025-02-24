import React from "react";

export const Card = ({ children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">{children}</div>
  );
};

export const CardContent = ({ children }) => {
  return <div className="p-2">{children}</div>;
};
