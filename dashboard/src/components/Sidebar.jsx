import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PaymentsIcon from "@mui/icons-material/Payments";
import AppsIcon from "@mui/icons-material/Apps";

const navItems = [
  { path: "/", label: "Overview", icon: DashboardIcon },
  { path: "/orders", label: "Orders", icon: ReceiptLongIcon },
  { path: "/holdings", label: "Holdings", icon: AccountBalanceWalletIcon },
  { path: "/positions", label: "Positions", icon: TrendingUpIcon },
  { path: "/funds", label: "Funds", icon: PaymentsIcon },
  { path: "/apps", label: "Apps", icon: AppsIcon },
];

const Sidebar = () => {
  const location = useLocation();
  const [, removeCookie] = useCookies(["token"]);

  const handleLogout = () => {
    removeCookie("token", { path: "/" });
    window.location.href = "http://localhost:5175/login";
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <img src="/src/assets/logo.svg" alt="PulseTrade" />
      </div>

      <nav className="sidebar-nav">
        <ul>
          {navItems.map(({ path, label, icon: Icon }) => (
            <li key={path}>
              <Link
                to={path}
                className={`sidebar-link ${location.pathname === path ? "active" : ""}`}
              >
                <Icon fontSize="small" />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-profile">
          <div className="avatar">PT</div>
          <div>
            <p className="username">Trader</p>
            <small>Pro account</small>
          </div>
        </div>
        <button className="sidebar-logout" onClick={handleLogout}>
          Sign out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
