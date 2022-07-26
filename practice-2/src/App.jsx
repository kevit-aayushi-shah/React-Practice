import { Fragment, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Quiz from "./Pages/Quiz";
import hindiData from "./HindiQuizData";
import englishData from "./EnglishQuizData";


function App() {
  const [data,setData]=useState('')
  const checkLanguageHandler = (language) => {
    if (language === "hindi") {
     setData(hindiData)
    } else if (language === "english") {
      setData(englishData)
    }
  };
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Form language={checkLanguageHandler} />} />
        <Route path="/english" element={<Quiz quizData={data}/>} />
        <Route path="/hindi" element={<Quiz quizData={data}/>} />
      </Routes>
    </Fragment>
  );
}

export default App;
