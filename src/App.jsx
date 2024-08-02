import "./App.css";
import Input from "./components/Input";
import Displaytext from "./components/Displaytext";
import { useState, useEffect} from "react";
import Timer from "./components/Timer";
import Results from "./components/Results";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [isFirstChange, setFirstChange] = useState(false);
  
  
  
  const handleInput = (val) => {
    if (!isFirstChange) {
      setFirstChange(true);
    }
    setInputValue(val);
  };

  const handleTryAgain=()=>{
    setTimeLeft(60)
    setInputValue("")
    setFirstChange(false)
    setCount(0)
    setErrCount(0)
    setWords(text.split(/\s+/))
    setSubarray(words.slice(count, count + 5))
  }

  const [count, setCount] = useState(0);
  const [errCount, setErrCount] = useState(0);
  const text =
  "With that I ask why is it that no one noticed that I was carrying my own burdens like them How is it that I feel significant to others yet not equally valued in return I must have been great at concealing whatever it was they must’ve really been that important to me What if I can’t be there for you anymore Will you be okay Will you be able to navigate through life without me I hope you will because I’ll only hate myself if I make your life more miserable by choosing myself Are you going to look for me when I’m gone I’m sure you won’t I don’t think I’m that special But I hope you know I’ll miss you I may be tired but I’ll never forget how rewarding it was that I was once the person you look for when the tides crash on your shores and you need a space to tell you that it’s okay I wish I heard it from you too but I’m done waiting It sucks because when it rains there’s me and when the sun shines again I’m not even in the picture"
  const [words, setWords] = useState(text.split(/\s+/));
  const [subarray, setSubarray] = useState([]);

  useEffect(() => {
    if (timeLeft > 0 && isFirstChange) {
      const timeId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      console.log(timeId);
      //return () => clearTimeout(timeId);
    }
  }, [isFirstChange, timeLeft]);

  useEffect(() => {
    if (timeLeft > 0 && inputValue === words[count] + " ") {
      setCount(count + 1);
      setWords((prevWords) => prevWords.slice(0));
      setInputValue("");
    }
    else if(timeLeft > 0 && inputValue !== (words[count]+" ") && inputValue.includes(" "))
    {
      console.log("bobby");
      setCount(count + 1);
      setWords((prevWords) => prevWords.slice(0));
      setInputValue("");
      setErrCount(errCount+1)
    }

    function getSubarray(words, count) {
      return words.slice(count, count + 5);
    }
    setSubarray(getSubarray(words, count));

    console.log("Ipvalue in useEffect- " + inputValue);
    console.log("disply in useEffect- " + words[count]);
    console.log("count in useEffect- " + count);
    // console.log(words);
  }, [inputValue]);

  return (
    <>  
      <h1 className="text-center text-3xl font-bold text-gray-800 mt-1 mb-5">Type..</h1>
  
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="bg-blue-100 p-5 text-xl rounded-lg shadow-md w-full max-w-lg">
          <Timer time={timeLeft} />
        </div>
  
        <div className="bg-green-100 text-xl p-5 rounded-lg shadow-md w-full max-w-lg">
          <Displaytext displayValue={subarray.join(" ")} />
        </div>
  
        <div className="bg-red-100 text-xl p-9  rounded-lg shadow-md w-full max-w-lg">
          <Input onInputChange={handleInput} val={inputValue} />
        </div>
      </div>
  
      {timeLeft === 0 && (
        <div className="mt-10">
          <Results all={count} wrong={errCount} btn={handleTryAgain} />
        </div>
      )}
    </>
  );
  
}

export default App;
