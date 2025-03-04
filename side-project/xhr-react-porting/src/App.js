import "./App.css";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import { faker } from "@faker-js/faker";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carousel from "./pages/Carousel";
import React, { useEffect, useRef, useState } from "react";

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

const mock = new AxiosMockAdapter(axios);

const fakeData = [...Array(30)].map((_) => {
  return {
    name: faker.lorem.words(),
    productImg: `${faker.image.animals()}?random=${Math.round(
      Math.random() * 1000
    )}`,
  };
});

mock.onGet("/").reply(() => {
  try {
    const results = fakeData;
    return [200, results];
  } catch (error) {
    console.error(error);
    return [500, { message: "Internal server error" }];
  }
});

function App() {
  const [dataList, setDataList] = useState([]);
  const [cardCount, setCardCount] = useState(0);
  const [maxX, setMaxX] = useState(0);
  const [offset, setOffset] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);

  const carouselUlTag = useRef();
  const leftButton = useRef();
  const rightButton = useRef();

  // const [fakeData, setFakeData] = useState([]);

  useEffect(() => {
    // set data, cardCount
    // fetchData();
    fetchFakeData();

    // set carousel width
    if (carouselUlTag) {
      const currentCarouselWidth = carouselUlTag.current.offsetWidth;
      setCarouselWidth(currentCarouselWidth);
    }
  }, []);

  // set maxX
  useEffect(() => {
    setMaxX(-(carouselWidth * Math.floor(cardCount / 3)));
  }, [cardCount, carouselWidth]);

  // set offset
  useEffect(() => {
    if (offset === 0) {
      leftButton.current.disabled = true;
    } else {
      //left slide
      leftButton.current.disabled = false;
      carouselUlTag.current.style.transform = `translateX(${offset}px)`;
    }

    if (offset === maxX) {
      if (maxX !== 0) {
        rightButton.current.disabled = true;
      }
    } else {
      rightButton.current.disabled = false;
      //right slide
      carouselUlTag.current.style.transform = `translateX(${offset}px)`;
    }
  }, [offset, maxX]);

  const fetchData = async () => {
    const response = await axios.get("/resources/data/phone.list.json");
    const jsonObject = Object.values(response.data);
    const cardNum = jsonObject.length;

    setDataList(jsonObject);
    setCardCount(cardNum);
    console.log(jsonObject);
  };

  const fetchFakeData = async () => {
    const mockData = await axios.get("/");
    const cardNum = mockData.data.length;

    setDataList(mockData.data);
    setCardCount(cardNum);

    console.log(mockData.data);
  };

  const handleLeftButtonClick = () => {
    setOffset((offset) => offset + carouselWidth);
  };

  const handleRightButtonClick = () => {
    setOffset((offset) => offset - carouselWidth);
  };

  return (
    <StateContext.Provider
      value={{
        dataList,
        carouselUlTag,
        leftButton,
        rightButton,
      }}
    >
      <DispatchContext.Provider
        value={{ handleLeftButtonClick, handleRightButtonClick }}
      >
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Carousel />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
