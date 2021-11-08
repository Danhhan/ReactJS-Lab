import React from "react";

export default function BindingDataRFC() {
  const name = "Danh Han";
  return (
    <div>
      <h1>React functional componet</h1>
      <hr />
      <h1 className="text-danger">{name}</h1>
    </div>
  );
}
