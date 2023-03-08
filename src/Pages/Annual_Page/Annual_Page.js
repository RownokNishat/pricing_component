import React from "react";
import Card from "../../Shared_Component/Card/Card";
import styles from "./Annual_Page.module.css";

const Annual_Page = () => {
  return (
    <div className={styles.Display_Card2}>
      <Card
        className="card"
        packageDetails={{
          packageTitle: "Basic",
          packagePrice: "199.99",
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
          packagePrice: "249.99",
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
          packagePrice: "399.99",
          usageStorage: "2 TB",
          userNumber: "10",
          sendUpMemory: "20 GB",
          middleCard: false,
        }}
      ></Card>
    </div>
  );
};

export default Annual_Page;
