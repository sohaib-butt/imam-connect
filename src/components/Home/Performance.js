import React from "react";
import styles from "../../styles/homepage.module.scss";

const Performance = () => {
  const statsData = [
    { count: "10k+", text: "Service Providers" },
    { count: "931k+", text: "Services searched per day" },
    { count: "10k+", text: "Customers present day" },
    { count: "100+", text: "Categories" },
  ];

  return (
    <section className={styles.performance}>
      <span className={styles.performance_heading}>Our Performance to Handle You.</span>
      <span className={styles.performance_desc}>
        Our metrics component gives you the inside scoop on your success and
        helps you.
      </span>
      <div className={styles.stats_container}>
        {statsData?.map((s, index) => (
          <div key={index} className={styles.stat_div}>
            <span className={styles.stat_count}>{s?.count}</span>
            <span className={styles.stat_txt}>{s?.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Performance;
