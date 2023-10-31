import React from 'react'

export default function Scroll() {

    function scrollToBottom() {
        const windowHeight = window.innerHeight; // Get the viewport height (100vh)
        const documentHeight = document.documentElement.scrollHeight; // Get the total document height

        // Calculate the position to scroll to the bottom
        const scrollTo = documentHeight - windowHeight;

        // Scroll to the calculated position
        window.scrollTo({
            top: scrollTo,
            behavior: 'smooth' // You can use 'auto' for instant scrolling or 'smooth' for smooth scrolling
        });
    }

    // Call the function to scroll to the bottom of 100vh
    scrollToBottom();
    return (
        <div>
            <button className="btn btn-outline-light lineheight-0 rounded-circle circle hover" id="scroll" onClick={scrollToBottom}>
                <i class="bi bi-arrow-down-short"></i>
            </button>
        </div>
    )
}
