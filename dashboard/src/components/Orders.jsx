import React from "react";
import { Link } from "react-router-dom";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

const Orders = () => {
  return (
    <>
      <h2 className="page-title">Orders</h2>
      <div className="empty-state">
        <ReceiptLongIcon className="icon" />
        <p>No orders placed today</p>
        <Link to="/" className="btn-pt btn-pt-primary" style={{ marginTop: "1rem" }}>
          Start trading
        </Link>
      </div>
    </>
  );
};

export default Orders;
