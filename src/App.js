import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Avatar, Button, Dropdown, Layout, Menu, Select, Spin } from "antd";

import './App.css';
import { Home } from "./components/Home";
import {
  ScanOutlined,
  QuestionCircleOutlined,
  FormOutlined,
  SearchOutlined,
} from "@ant-design/icons";

import { About } from "./components/About";

import 'antd/dist/antd.css';
import logo from "./assets/logo_trans.png";
import "@ant-design/flowchart/dist/index.css";
import { APP_DESC, APP_NAME } from "./constants/constants";

const { Header, Footer, Sider, Content } = Layout;
const { Option } = Select;

function App() {
  const navigate = useNavigate()

  // const height = window.innerHeight - 120;

  
  return (
    <div className="App">
      {/* TODO: header bar */}

      <Layout>
        <Header>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['/discover']}
            selectedKeys={[window.location.pathname]}
          >
            <Menu.Item key={0}>
              <img
                src={logo}
                className="header-logo pointer"
                onClick={() => navigate("/")}
              />
               
            </Menu.Item>


            <Menu.Item key={'/discover'} onClick={() => navigate("/discover")}>
            <SearchOutlined /> Discover
            </Menu.Item>

            <Menu.Item key={'/create-ballot'} onClick={() => navigate("/create-ballot")}>
            <FormOutlined /> Create Ballot
            </Menu.Item>

            <Menu.Item key={'/about'} onClick={() => navigate("/about")}>
              <QuestionCircleOutlined /> About
            </Menu.Item>

            </Menu>
            </Header>
          <Content>
            <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/carbon-map" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
              </Routes>
            </div>
          </Content>

          <Footer>
            <hr/>
            <p><b>{APP_NAME}</b> &copy;2022.&nbsp;{APP_DESC}.<br/></p>
          </Footer>
        </Layout>
      </div>
  );
}

export default App;
