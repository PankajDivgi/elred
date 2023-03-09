import React from "react";
import "../App.css";
import Logo from "../Images/logo.png";
import { Input, Button } from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  DownOutlined,
  UserOutlined,
} from "@ant-design/icons";

const NavbarTop = () => {
  return (
    <div className="top-navbar">
      <div className="logo-search">
        <img src={Logo} alt="logo" width="80px" height="50px" />
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search..."
          style={{ width: "400px" }}
        />
      </div>
      <div>
        <Button
          icon={<ShoppingCartOutlined />}
          style={{ backgroundColor: "#000", color: "#fff" }}
        >
          Checkout (200)
        </Button>
        <Button style={{ border: "none", marginLeft: "20px" }}>
          <UserOutlined />
          User Admin
          <DownOutlined />
        </Button>
      </div>
    </div>
  );
};

export default NavbarTop;
