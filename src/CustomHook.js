import { useEffect, useState } from "react";

export default function useFetch(usedAgain) {
    const [text, setText] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      
        setLoading(true);  // Set loading to true when the fetch starts
        fetch("https://atharvguptaaa.github.io/api/sentences.json")  // Static URL here
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((data) => {
                if (data.sentences && data.sentences.length > 0) {
                    setText(data.sentences[Math.floor(Math.random() * data.sentences.length)]);
                } else {
                    setText("No sentences available");
                }
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });

    }, [usedAgain]);  

     //console.log(text);

    return {text , error, loading };
}
