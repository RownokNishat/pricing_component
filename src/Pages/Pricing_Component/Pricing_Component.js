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
      <div className="form-control w-52  mx-auto mb-16 ">
        <label className="cursor-pointer label">
          <span className="label-text toggle_text">Annually</span>
          {/* <input
            type="checkbox"
            className="toggle toggle-primary"
            onChange={(e) => {
              setChange(!change);
            }}
            checked={change}
          /> */}

          <label class="switch">
            <input
              type="checkbox"
              onChange={(e) => {
                setChange(!change);
              }}
              checked={change}
            />
            <span class="slider round"></span>
          </label>
          <span className="label-text toggle_text">Monthly</span>
        </label>
      </div>
      {change ? <Monthly_Page></Monthly_Page> : <Annual_Page></Annual_Page>}
    </div>
  );
};

export default Pricing_Component;
