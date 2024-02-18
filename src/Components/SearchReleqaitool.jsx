import { useState, useEffect, useContext } from "react";
import Navbar from "./Navbar";
import DarkContext from "../Context/DarkContext";

import supabase from "./Supabase";

const SearchReleqaitools = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [darks] = useContext(DarkContext);
  const [speechRecognition, setSpeechRecognition] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [showListeningPopup, setShowListeningPopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from("releqaitool")
          .select("*")
          .ilike("aitoolname", `%${search}%`);

        if (error) {
          throw error;
        }

        setSearchResults(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [search, supabase]);

  useEffect(() => {
    const initializeSpeechRecognition = () => {
      const recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition)();

      recognition.lang = "en-US";
      recognition.interimResults = true;

      recognition.onstart = () => {
        setIsListening(true);
        setShowListeningPopup(true);
      };

      recognition.onresult = (event) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            transcript += event.results[i][0].transcript;
          } else {
            transcript += event.results[i][0].transcript + " ";
          }
        }
        setSearch(transcript);
      };

      recognition.onend = () => {
        setIsListening(false);
        setShowListeningPopup(false);
      };

      recognition.onerror = (err) => {
        console.log("Error: ", err);
        alert(
          "Boss! You're not allowed to use this feature. Please allow voice permission"
        );
      };

      setSpeechRecognition(recognition);
    };

    initializeSpeechRecognition();
  }, []);

  const handleVoiceButtonClick = () => {
    if (!isListening) {
      speechRecognition.start();
    } else {
      speechRecognition.stop();
    }
  };

  return (
    <>
      <Navbar />
      <div
        className={`flex flex-col items-center ${
          darks ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for AI tools"
          className={`border p-2 rounded-md mt-8 outline-none focus:border-blue-500 ${
            darks ? "border-gray-300 text-black" : "border-gray-700 text-black"
          }`}
        />

        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md"
          onClick={handleVoiceButtonClick}
        >
          {isListening ? "Stop Listening" : "Start Listening"}
        </button>
        {showListeningPopup && (
          <div className="listening-popup">
            <p>Listening...</p>
            <p>User said: {search}</p>
          </div>
        )}

        {searchResults.length > 0 && (
          <div className="mt-4 space-y-4">
            {searchResults.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block p-4 rounded-md shadow-md transition duration-300 hover:shadow-lg ${
                  darks
                    ? "bg-white text-black"
                    : "bg-black text-white hover:bg-white hover:text-black border border-white"
                }`}
              >
                <strong className="text-blue-600">{item.aitoolname}:</strong>{" "}
                {item.catid}
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchReleqaitools;
