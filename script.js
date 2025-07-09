let historyList = [];

function getInputText() {
    return document.getElementById("textInput").value;
}

function updateResult(text) {
    document.getElementById("result").textContent = text;
    addToHistory(text);
}

function addToHistory(text) {
    historyList.unshift(text);
    if (historyList.length > 5) historyList.pop();
    updateHistoryUI();
}

function updateHistoryUI() {
    const historyElem = document.getElementById("history");
    historyElem.innerHTML = "";
    historyList.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item;
        li.onclick = () => updateResult(item);
        historyElem.appendChild(li);
    });
}

function calculateLength() {
    let text = getInputText();
    updateResult(`Length: ${text.length}`);
}

function convertCase(type) {
    let text = getInputText();
    if (type === "upper") updateResult(text.toUpperCase());
    if (type === "lower") updateResult(text.toLowerCase());
    if (type === "title") {
        updateResult(text.replace(/\b\w/g, char => char.toUpperCase()));
    }
}

function findSubstring() {
    let text = getInputText();
    let search = prompt("Enter text to find:");
    if (search) {
        let regex = new RegExp(search, "gi");
        let highlightedText = text.replace(regex, match => `<mark>${match}</mark>`);
        document.getElementById("result").innerHTML = highlightedText;
    }
}

function replaceText() {
    let text = getInputText();
    let wordToReplace = prompt("Enter word to replace:");
    let newWord = prompt("Enter new word:");
    if (wordToReplace && newWord) {
        updateResult(text.replace(new RegExp(wordToReplace, "gi"), newWord));
    }
}

function trimText() {
    let text = getInputText();
    updateResult(text.trim());
}

function splitText() {
    let text = getInputText();
    let delimiter = prompt("Enter delimiter (e.g., space, comma):") || " ";
    let splitArray = text.split(delimiter);
    let joinedText = splitArray.join(" | ");
    updateResult(joinedText);
}

function countWords() {
    let text = getInputText().trim();
    let wordCount = text ? text.split(/\s+/).length : 0;
    updateResult(`Word Count: ${wordCount}`);
}

function reverseText() {
    let text = getInputText();
    updateResult(text.split("").reverse().join(""));
}
