let savedTexts = document.getElementById("savedTexts");
let savedTextsString = [];
let savedNameTextsString = [];
let fullText = document.getElementById("fullText").textContent;

function addText() {
    let textIntroduced = document.getElementById("input").value;
    if (textIntroduced != "" && textIntroduced != " " && textIntroduced != "  " && textIntroduced != "Write you text here") {
        if (textIntroduced.length > 50) {
            for (let i = 0; i < 50; ++i) {
                savedTexts.innerHTML += textIntroduced[i];
            }
            var text = document.createTextNode(textIntroduced);
            fullText.appendChild(text);
            savedTexts.innerHTML += "..." + "<a href='file:///C:/Users/Calin/OneDrive/Desktop/Pastebin%20WELLCODE/text.html'>View the full text</a>";
            savedTexts.innerHTML += '<br></br>';
        } else {
            savedTexts.innerHTML += textIntroduced + '<br></br>';
        }
        localStorage.setItem('savedTexts', savedTexts.innerHTML);
        localStorage.setItem('savedTextsString', JSON.stringify(savedTextsString));
        savedNameTextsString.innerHTML.push(savedTexts.innerHTML);
        savedTextsString.push(textIntroduced);
        document.getElementById("input").value = '';
    }
}

window.onload = function() {
    if(localStorage.getItem('savedTexts')) {
        savedTexts.innerHTML = localStorage.getItem('savedTexts');
    }
    if(localStorage.getItem('savedTextsString')) {
        savedTextsString = JSON.parse(localStorage.getItem('savedTextsString'));
    }
};