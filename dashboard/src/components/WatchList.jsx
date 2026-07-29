import React, { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";
import { Tooltip, Grow } from "@mui/material";
import { DoughnutChart } from "./DoughnoutChart";
import {
  BarChartOutlined,
  MoreHoriz,
} from "@mui/icons-material";
import { watchlist } from "../data/data";

const labels = watchlist.map((subArray) => subArray["name"]);

const chartColors = [
  "rgba(124, 58, 237, 0.7)",
  "rgba(6, 182, 212, 0.7)",
  "rgba(52, 211, 153, 0.7)",
  "rgba(251, 191, 36, 0.7)",
  "rgba(248, 113, 113, 0.7)",
  "rgba(167, 139, 250, 0.7)",
];

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Allocation",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: chartColors,
        borderColor: chartColors.map((c) => c.replace("0.7", "1")),
        borderWidth: 1,
      },
    ],
  };

  return (
    <aside className="watchlist-panel">
      <div className="watchlist-header">
        <h3>Watchlist</h3>
        <input
          type="text"
          placeholder="Search symbols..."
          className="watchlist-search"
        />
        <div className="watchlist-count">
          {watchlist.length} / 50 symbols
        </div>
      </div>

      <ul className="watchlist-list">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>

      <div className="watchlist-chart">
        <DoughnutChart data={data} />
      </div>
    </aside>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="watchlist-item">
        <span className={`symbol ${stock.isDown ? "down" : "up"}`}>
          {stock.name}
        </span>
        <div className="price-info">
          <div className="price">{stock.price}</div>
          <div className={`percent ${stock.isDown ? "down" : "up"}`}>
            {stock.percent}
          </div>
        </div>
      </div>
      {showActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <div className="watchlist-actions">
      <Tooltip title="Buy" placement="top" arrow TransitionComponent={Grow}>
        <button className="buy-btn" onClick={handleBuyClick}>
          Buy
        </button>
      </Tooltip>
      <Tooltip title="Sell" placement="top" arrow TransitionComponent={Grow}>
        <button className="sell-btn">Sell</button>
      </Tooltip>
      <Tooltip title="Chart" placement="top" arrow TransitionComponent={Grow}>
        <button className="icon-btn">
          <BarChartOutlined fontSize="small" />
        </button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="icon-btn">
          <MoreHoriz fontSize="small" />
        </button>
      </Tooltip>
    </div>
  );
};
