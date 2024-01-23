// Function to change the text content dynamically
function changeText() {
    // Access the paragraph element using its ID
    var demoParagraph = document.getElementById("demo");

    // Check if the paragraph element exists
    if (demoParagraph) {
        // Modify the text content
        demoParagraph.textContent = "Text changed using DOM!";
    }
}
