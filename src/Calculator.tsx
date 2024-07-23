import React, { useState } from "react";
import "./Calculator.css"

/**
 * Calculator component for calculating human year age of dogs.
 */

const Calculator: React.FC = () => {
    // State to store age input value.
    const [age, setAge] = useState<number | string>("");

    // State to store the result and display result.
    const [result, setResult] = useState<number | string>("");

    /**
     * Handles the change event for the age input. 
     * @param {React.ChangeEvent<HTMLInputElement>} event - the input change event
     */
    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {

        // Parses the input to be strictly a number.
        const value = event.target.valueAsNumber;

        // Sets age state, if it is NaN, to be an empty string.  (This fixes NaN error)
        setAge(isNaN(value) ? "" : value);
    };

    /**
     * Handles the change event for the submit button
     * @param {React.FormEvent<HTMLFormElement>} event - the submit change event
     */
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {

        // Prevents default functionality from the submit button
        event.preventDefault();
        console.log("Age in human years:", age);

        // Check to see if the input is a number
        if (typeof age === "number" && age > 0) {
            
            // Calculates dog age
            const logAge = Math.log(age);
            const dogAge = 16 * logAge + 31;
            
            // Sets the result to the dog age, using calculations above
            setResult(`Dog age: ${dogAge.toFixed(2)} years`);
        } else {
            setResult("Please enter a valid response. (Positive numbers)")
        }
    };

    return (
        <>{/* Form for age input and submission */}
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
                <button type="submit">Calculate</button>
            </form>
            {/* An output box to display results */}
            <div className="output-box">
                {result}
            </div>
        </>
    );
};

export default Calculator;