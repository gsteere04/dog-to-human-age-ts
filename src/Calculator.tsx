import React, { useState, useCallback } from "react";
import dog from './assets/dog.png';
import "./Calculator.css";

/**
 * Calculator component for calculating human year age of dogs.
 */
const Calculator: React.FC = () => {
    const [age, setAge] = useState<number | string>("");
    const [displayText, setDisplayText] = useState<string>("");
    const [isAnimating, setIsAnimating] = useState<boolean>(false); // Track animation state

    // Function to type out text
    const typeText = useCallback((text: string, speed: number) => {
        let index = -1;
        setDisplayText(""); // Reset display text
        setIsAnimating(true); // Start animation

        const typingInterval = setInterval(() => {
            setDisplayText(prev => prev + text.charAt(index));
            index++;
            if (index >= text.length) {
                clearInterval(typingInterval);
                setIsAnimating(false); // End animation
            }
        }, speed);
    }, []);

    function handleAgeChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const value = event.target.valueAsNumber;
        setAge(isNaN(value) ? "" : value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log("Age in human years:", age);

        if (typeof age === "number" && age > 0) {
            const logAge = Math.log(age);
            const dogAge = 16 * logAge + 31;
            const resultText = `So I'm ${dogAge.toFixed(0)} years old then?  Interesting how that works...`;
            typeText(resultText, 60); // Adjust speed as needed
        } else {
            typeText("Hey dude!  I can't be that age!  Be for real!", 60);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <section>
                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        id="age"
                        value={age}
                        placeholder="Enter age in years..."
                        onChange={handleAgeChange}
                    />
                </section>
                <button type="submit" disabled={isAnimating}>Calculate</button> {/* Disable button when animating */}
            </form>
            <div className="output-box">
                <img src={dog} alt="Dog" className="dog"/>
                <div className="text-bubble">
                    {displayText}
                </div>
            </div>
        </>
    );
};

export default Calculator;
