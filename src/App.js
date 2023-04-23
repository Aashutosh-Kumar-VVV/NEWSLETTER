import "./App.css";
import React,{ useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = ()=> {
  const apiKey=process.env.REACT_APP_NEWS_API
  const [progress,setProg] = useState(0);
  const setProgress = (prog)=>{
    setProg(prog)
  }
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <LoadingBar color="#f11946" progress={progress} />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  apikey = {apiKey}
                  pageSize={10}
                  key="general"
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  apikey = {apiKey}
                  pageSize={10}
                  key="business"
                  country="in"
                  category="business"
                />
              }
            />

            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  apikey = {apiKey}
                  pageSize={10}
                  key="entertainment"
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  apikey = {apiKey}
                  pageSize={10}
                  key="health"
                  country="in"
                  category="health"
                />
              }
            />

            <Route
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  apikey = {apiKey}
                  pageSize={10}
                  key="science"
                  country="in"
                  category="science"
                />
              }
            />

            <Route
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  apikey = {apiKey}
                  pageSize={10}
                  key="sports"
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  apikey = {apiKey}
                  pageSize={10}
                  key="technology"
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }

export default App;