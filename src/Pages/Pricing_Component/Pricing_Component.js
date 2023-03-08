import React, { useState } from "react";
import Annual_Page from "../Annual_Page/Annual_Page";
import Monthly_Page from "../Monthly_Page/Monthly_Page";
import "./Pricing_Component.css";

const Pricing_Component = () => {
  const [change, setChange] = useState(true);
  console.log(change);
  return (
    <div className="priceComponent_div">
      <h3 className="pricing_header">Our Pricing</h3>
      <div className="form-control w-52">
        <label className="cursor-pointer label">
          <span className="label-text">Remember me</span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            onChange={(e) => {
              setChange(!change);
            }}
            checked={change}
          />
        </label>
      </div>
      {change ? <Monthly_Page></Monthly_Page> : <Annual_Page></Annual_Page>}
    </div>
  );
};

export default Pricing_Component;
