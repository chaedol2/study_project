import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import UserDetail from "./pages/UserDetail";
import PageNotFound from "./components/PageNotFound";
import Sidebar from "./components/Sidebar";
import styled from "@emotion/styled";
import UserCreate from "./pages/UserCreate";

const App = () => {
  const Center = styled.div`
    height: 92vh;
    display: flex;
    flex-direction: row;
  `;

  const Main = styled.div`
    width: 100%;
  `;

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Center>
          <Sidebar />
          <Main>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/user/create" element={<UserCreate />} />
              <Route path="/user/:id" element={<UserDetail />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Main>
        </Center>
      </div>
    </BrowserRouter>
  );
};

export default App;
