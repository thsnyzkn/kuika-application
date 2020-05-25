import React from "react";
import MainLayout from "./components/MainLayout";
import LoginSideBar from "./components/LoginSideBar";
import MainContent from "./components/MainContent";
import "./App.less";

function App() {
  return (
    <MainLayout>
      <MainContent />
      <LoginSideBar />
    </MainLayout>
  );
}

export default App;
