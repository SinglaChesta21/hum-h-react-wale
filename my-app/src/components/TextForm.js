import React, { useState } from 'react';
import girlPointingUrl from '../../src/assets/images/girlpointing-transformed.png';
import findreplace from '../../src/assets/images/exchange.png';

// This is a functional component named TextForm
export default function TextForm(props) {

    // State variables to manage the 'find' and 'replace' text inputs
    const [find, setFind] = useState('');
    const [replace, setReplace] = useState('');

    // Function to handle changes in the 'find' input field
    const handleFindChange = (event) => {
        setFind(event.target.value);
    }

    // Function to handle changes in the 'replace' input field
    const handleReplaceChange = (event) => {
        setReplace(event.target.value);
    }

    // Function to handle the find and replace operation
    const handleFindAndReplace = () => {
        // Replace all occurrences of 'find' with 'replace' in the current text
        let newText = text.replace(new RegExp(find, 'g'), replace);
        // Update the state with the new text after replacement
        setText(newText);
    }

    // Function to handle the button click event for converting text to uppercase
    const handleUpClick = () => {
        console.log("Uppercase button clicked");
        // Convert the current text to uppercase
        let newText = text.toUpperCase();
        // Update the state with the new uppercase text
        setText(newText);
    }

    // Function to handle the button click event for converting text to lowercase
    const handleLoClick = () => {
        console.log("Lowercase button clicked");
        // Convert the current text to lowercase
        let newText = text.toLowerCase();
        // Update the state with the new lowercase text
        setText(newText);
    }

    // Function to capitalize the first letter of each word in the text
    const handleCapClick = () => {
        console.log("Capitalize first letter of each word");
        // Split text into individual words
        let words = text.split(" ");
        // Capitalize the first letter of each word
        let capitalizedWords = words.map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });
        // Join the words back into a single string
        let newText = capitalizedWords.join(" ");
        // Update the state with the new capitalized text
        setText(newText);
    }

    // Function to clear the text
    const handleClearClick = () => {
        let newText = ('');
        // Update the state to clear the text
        setText(newText);
    }

    // Function to handle changes in the textarea input
    const handleOnChange = (event) => {
        console.log("Text changed");
        // Update the state with the new text value from the textarea
        setText(event.target.value);
    }

    // useState hook to manage the state of the text.
    // 'text' is the current state, and 'setText' is the function to update the state.
    // The initial state is set to an empty string.
    const [text, setText] = useState('');

    return (
        <>
            <div className="container py-5">
                <div className="row">
                    {/* Display the heading passed as a prop and the current text */}
                    <div className="col-md-8 mb-3">
                        <h1 className="text-center text-white my-3">{props.heading}</h1>
                        {/* Textarea for user input. The value is controlled by the state. */}
                        <textarea
                            className="form-control my-2"
                            id="myBox"
                            rows="10"
                            value={text}
                            onChange={handleOnChange}
                            style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '10px' }}>
                        </textarea>

                        {/* Find and Replace functionality */}
                        <div className="find-and-replace d-flex">
                            <p><i className="fa-solid fa-magnifying-glass"></i></p>
                            <input type="text" placeholder="Find" value={find} onChange={handleFindChange} className="form-control my-4" />
                            <button type='button' className='btn bg-transparent align-self-center' onClick={handleFindAndReplace}>
                                <img src={findreplace} alt="find" />
                            </button>
                            <input type="text" placeholder="Replace" value={replace} onChange={handleReplaceChange} className="form-control my-4" />
                        </div>

                        {/* Buttons for text transformation actions */}
                        <div className="d-flex justify-content-center py-2 pb-0">
                            <button className="btn btn-primary mx-3" onClick={handleUpClick}>
                                Convert to Uppercase
                            </button>
                            <button className="btn btn-primary mx-3" onClick={handleLoClick}>
                                Convert to Lowercase
                            </button>
                            <button className="btn btn-primary mx-3" onClick={handleCapClick}>
                                Capitalize First Letter
                            </button>
                            <button className="btn btn-primary mx-3" onClick={handleClearClick}>
                                Clear Text
                            </button>
                        </div>
                    </div>

                    {/* Image of a girl pointing */}
                    <div className="col-md-4">
                        <img src={girlPointingUrl} alt="girl" height={500} />
                    </div>
                </div>

                {/* Text summary and preview */}
                <div className="container-fluid text-white">
                    <div className="count">
                        <h2>Your Text Summary</h2>
                        <p><b>{text.split(" ").length}</b> Words <b>{text.length}</b> Characters</p>
                        <p><b>{0.008 * text.split(" ").length}</b> Minutes Read</p>
                    </div>
                    <div className="preview">
                        <h1>Preview:</h1>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
