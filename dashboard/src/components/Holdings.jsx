import React, { useState, useEffect } from "react";
import { VerticalGraph } from "./VerticalGraph";
import axios from "axios";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(124, 58, 237, 0.6)",
      },
    ],
  };

  return (
    <>
      <h2 className="page-title">Holdings ({allHoldings.length})</h2>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="stat-grid" style={{ marginTop: "1.5rem" }}>
        <div className="stat-card">
          <div className="stat-card-label">Total investment</div>
          <div className="stat-card-value">₹29,875</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-label">Current value</div>
          <div className="stat-card-value">₹31,428</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-label">P&L</div>
          <div className="stat-card-value" style={{ color: "var(--pt-success)" }}>
            +₹1,553
          </div>
          <div className="stat-card-change up">+5.20%</div>
        </div>
      </div>

      <div style={{ marginTop: "1.5rem", maxWidth: "600px" }}>
        <VerticalGraph data={data} />
      </div>
    </>
  );
};

export default Holdings;
