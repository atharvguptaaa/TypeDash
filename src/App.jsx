import "./App.css";
import Input from "./components/Input";
import Displaytext from "./components/Displaytext";
import { useState, useEffect, useRef} from "react";
import Timer from "./components/Timer";
import Results from "./components/Results";
import useFetch from "./CustomHook";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [isFirstChange, setFirstChange] = useState(false);

  const [count, setCount] = useState(0);
  const [errCount, setErrCount] = useState(0);
  const [usedAgain,setUsedAgain]=useState(0);

  const text=useFetch(usedAgain).text;
 
  const [words, setWords] = useState([]);
  const [subarray, setSubarray] = useState([]);
  const inputRef=useRef(null);

  useEffect(() => {
    if (text) {
      setWords(text.split(/\s+/));
    }
  }, [text]);


  // FUNCTION TO SET FIRSTCHANGE TRUE AND SET VALUE IN INPUTVALUE
  const handleInput = (val) => {
    if (!isFirstChange) {
      setFirstChange(true);
    }
    setInputValue(val);
  };
//FUNCTION TO RESET ALL ON TRY AGAIN
  const handleTryAgain=()=>{
    setTimeLeft(60)
    setInputValue("")
    setFirstChange(false)
    setCount(0)
    setErrCount(0)
    setUsedAgain(prev=>prev+1)
    
  //   setWords(text.split(/\s+/))
  //   setSubarray(words.slice(count, count + 5))
  }

  
// USEEFFECT FOR TIMER
  useEffect(() => {
    if (timeLeft > 0 && isFirstChange) {
      const timeId=setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timeId);
    }
  }, [isFirstChange, timeLeft]);

  //USEEFECT FOR WHEN INPUTVALUE IS CHANGEDC
  useEffect(() => {
    if (timeLeft > 0 && inputValue === words[count] + " ") {    // IF WORDS MATCH
      setCount(count + 1);
      setWords((prevWords) => prevWords.slice(0));
      
      inputRef.current.style.backgroundColor = "#b2edc2";
      setTimeout(() => {
        inputRef.current.style.backgroundColor = "white";
      }, 100);
          
      

      setInputValue("");
    }
    else if(timeLeft > 0 && inputValue !== (words[count]+" ") && inputValue.includes(" ")) 
    {                                                           //IF WORDS DONT MATCH        
      setCount(count + 1);
      setWords((prevWords) => prevWords.slice(0));

      inputRef.current.style.backgroundColor = "#edafc5";
      setTimeout(() => {
        inputRef.current.style.backgroundColor = "white";
      }, 100);

      setInputValue("");
      setErrCount(errCount+1)
    }

    // function getSubarray(words, count) {
    //   return words.slice(count, count + 5);
    // }
    // setSubarray(getSubarray(words, count));

    // console.log("Ipvalue in useEffect- " + inputValue);
    // console.log("disply in useEffect- " + words[count]);
    // console.log("count in useEffect- " + count);
    // console.log(words);
  }, [inputValue]);

    //USEEFFECT TO GET SUBARRAY
    useEffect(() => {
      function getSubarray(words, count) {
        return words.slice(count, count + 5);
      }
      setSubarray(getSubarray(words, count));
    }, [words,count])

    return (
      <>  
        <h1 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mt-1 mb-5">TypeDash!</h1>
    
        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6">
          <div className="bg-blue-100 p-4 md:p-5 text-lg md:text-xl rounded-lg shadow-md w-full max-w-lg">
            <Timer time={timeLeft} />
          </div>
    
          <div className="bg-green-100 p-4 md:p-5 text-lg md:text-xl rounded-lg shadow-md w-full max-w-lg">
            <Displaytext displayValue={subarray.join(" ")} />
          </div>
    
          <div className="bg-red-100 p-6 md:p-9 text-lg md:text-xl rounded-lg shadow-md w-full max-w-lg">
            <Input onInputChange={handleInput} val={inputValue} ref={inputRef}/>
          </div>
        </div>
    
        {timeLeft === 0 && (
          <Results all={count} wrong={errCount} btn={handleTryAgain} />
        )}
      </>
    );
    
  
}

export default App;
