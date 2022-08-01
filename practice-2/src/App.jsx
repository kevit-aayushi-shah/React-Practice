import { Fragment, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Quiz from "./Pages/Quiz";
import hindiData from "./HindiQuizData";
import englishData from "./EnglishQuizData";


function App() {
  const [data, setData] = useState("");
  const[name,setName]=useState("")
  const checkLanguageHandler = (language) => {
    if (language === "hindi") {
      setData(hindiData);
    } else if (language === "english") {
      setData(englishData);
    }
  };
  const requiredName=(name)=>{
    setName(name)
  }

  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Form language={checkLanguageHandler} name={requiredName}/>} />
        <Route path="/english" element={<Quiz quizData={data} name={name}/>}/>
        <Route path="/hindi" element={<Quiz quizData={data} name={name}/>} />
      </Routes>
    </Fragment>
  );
}

export default App;
