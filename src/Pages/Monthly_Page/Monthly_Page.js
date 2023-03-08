import React from "react";
import Card from "../../Shared_Component/Card/Card";
import styles from "./Monthly_Page.module.css";
const Monthly_Page = () => {
  return (
    <div className={styles.Display_Card}>
      <Card
        className="card"
        packageDetails={{
          packageTitle: "Basic",
          packagePrice: "19.99",
          usageStorage: "500 GB",
          userNumber: "2",
          sendUpMemory: "3 GB",
          middleCard: false,
        }}
      ></Card>
      <Card
        className="card"
        packageDetails={{
          packageTitle: "Professional",
          packagePrice: "24.99",
          usageStorage: "1 TB",
          userNumber: "5",
          sendUpMemory: "10 GB",
          middleCard: true,
        }}
      ></Card>
      <Card
        className="card"
        packageDetails={{
          packageTitle: "Master",
          packagePrice: "39.99",
          usageStorage: "2 TB",
          userNumber: "10",
          sendUpMemory: "20 GB",
          middleCard: false,
        }}
      ></Card>
    </div>
  );
};

export default Monthly_Page;
