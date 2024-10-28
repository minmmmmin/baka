import { useState } from "react";

export default function App() {
    const [ukus, setUkus] = useState("us");
    const [customName, setCustomName] = useState("Bob");
    const [story, setStory] = useState("");

    const xItems = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
    const yItems = ["the soup kitchen", "Disneyland", "the White House"];
    const zItems = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];

    function result(event) {
        if (event.target.value !== "") {
            setCustomName(event.target.value);
        } else {
            setCustomName("Bob");
        }
    }

    function randomValueFromArray(array) {
        const random = Math.floor(Math.random() * array.length);
        return array[random];
    }

    function convertUnits(text) {
        if (ukus === "uk") {
            return text
                .replace("94 fahrenheit", "34 celsius")
                .replace("300 pounds", "21 stone");
        }
        return text;
    }

    function handleCountryChange(event) {
        setUkus(event.target.value);
    }

    function buttonClick() {
        const xItem = randomValueFromArray(xItems);
        const yItem = randomValueFromArray(yItems);
        const zItem = randomValueFromArray(zItems);
        setStory(convertUnits(`It was 94 fahrenheit outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${customName} saw the whole thing, but was not surprised — ${xItem} weighs 300 pounds, and it was a hot day.`));
    }

    return (
        <>
            <div>
                <label htmlFor="customName">Enter custom name:</label>
                <input type="text" placeholder="" onChange={result} />
            </div>
            <div>
                <label htmlFor="us">US</label>
                <input type="radio" value="us" checked={ukus === "us"} onChange={handleCountryChange} />
                <label htmlFor="uk">UK</label>
                <input type="radio" value="uk" checked={ukus === "uk"} onChange={handleCountryChange} />
            </div>
            <div>
                <button onClick={buttonClick}>Generate random story</button>
            </div>
            {story && (
                <p>
                    {story}
                </p>
            )}
        </>
    );
}
