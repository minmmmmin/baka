import { useState } from "react";

export default function App() {
    const [showStory,setShowStory] = useState(false);
    const [xItem,setXItem] = useState("");
    const [yItem,setYItem] = useState("");
    const [zItem,setZItem] = useState("");
    const [ukus,setUkus] = useState("us");
    const [customName, setCustomName] = useState("Bob");

    const xItems = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
    const yItems = ["the soup kitchen", "Disneyland", "the White House"];
    const zItems = [
      "spontaneously combusted",
      "melted into a puddle on the sidewalk",
      "turned into a slug and crawled away"
    ];

    function handleCountryChange(event) {
      setUkus(event.target.value);
    }

    function result(event){
      if(event.target.value !== ""){
        setCustomName(event.target.value);
      }else{
        setCustomName("Bob");
      }
    }

    function randomValueFromArray(array){
      const random = Math.floor(Math.random()*array.length);
      return array[random];
    }

    function buttonClick(){
      setXItem(randomValueFromArray(xItems));
      setYItem(randomValueFromArray(yItems));
      setZItem(randomValueFromArray(zItems));
      setShowStory(true)
    }

    function convertUnits(text) {
      if (ukus === "uk") {
        return text
          .replace("94 fahrenheit", "34 celsius")
          .replace("300 pounds", "21 stone");
      }
      return text;
    }

    return (
      <>
        <div>
          <label htmlFor="customame">Enter custom name:</label>
          <input type="text" placeholder="" onChange={result}/>
        </div>
        <div>
          <label htmlFor="us">US</label>
          <input type="radio" value="us" checked={ukus === "us"} onChange={handleCountryChange}  />
          <label htmlFor="uk">UK</label>
          <input type="radio" value="uk" checked={ukus === "uk"} onChange={handleCountryChange}/>
        </div>
        <div>
          <button onClick={buttonClick}>Generate random story</button>
        </div>
        {showStory && (
          <p>
            {convertUnits(
               `It was 94 fahrenheit outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${customName} saw the whole thing, but was not surprised — ${xItem} weighs 300 pounds, and it was a hot day.`          )}
          </p>
        )}
      </>
    );
  }