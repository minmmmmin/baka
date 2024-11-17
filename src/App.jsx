import { useState } from "react";

export default function App() {
    const [ukus, setUkus] = useState("us");
    const [customName, setCustomName] = useState("Bob");
    const [story, setStory] = useState("");

    function handleInputChange(event) {
        setCustomName(event.target.value || "Bob");
    }

    function handleCountryChange(event) {
        setUkus(event.target.value);
    }

    async function buttonClick() {
        try {
            const response = await fetch("/.netlify/functions/server", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ customName, ukus })
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            setStory(data.story);
        } catch (error) {
            console.error("Error fetching the story:", error);
            setStory("Failed to fetch the story. Please try again later.");
        }
    }

    return (
        <>
            <div>
                <label htmlFor="customName">Enter custom name:</label>
                <input type="text" onChange={handleInputChange} />
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