// JavaScript source code
function wordCircles() {
    let allWords = Array.from(allwordsList());
    let allColors = '';
    let redAndGreen = '';
    let redAndBlue = '';
    let greenAndBlue = '';
    let red = '';
    let green = '';
    let blue = '';

    for (let words of allWords) {
        if (
            (words.redAgreeRed > 0 ||
                words.redAgreeGreen > 0 ||
                words.redAgreeBlue > 0) &&
            (words.greenAgreeRed > 0 ||
                words.greenAgreeGreen > 0 ||
                words.greenAgreeBlue > 0) &&
            (words.blueAgreeRed > 0 ||
                words.blueAgreeGreen > 0 ||
                words.blueAgreeBlue > 0)
        ) {
            allColors += `${words.word}</br>`;
        } else if (
            (words.redAgreeRed > 0 ||
                words.redAgreeGreen > 0 ||
                words.redAgreeBlue > 0) &&
            (words.greenAgreeRed > 0 ||
                words.greenAgreeGreen > 0 ||
                words.greenAgreeBlue > 0) &&
            (words.blueAgreeRed == 0 ||
                words.blueAgreeGreen == 0 ||
                words.blueAgreeBlue == 0)
        ) {
            redAndGreen += `${words.word}</br>`;
        } else if (
            (words.redAgreeRed > 0 ||
                words.redAgreeGreen > 0 ||
                words.redAgreeBlue > 0) &&
            (words.greenAgreeRed == 0 ||
                words.greenAgreeGreen == 0 ||
                words.greenAgreeBlue == 0) &&
            (words.blueAgreeRed > 0 ||
                words.blueAgreeGreen > 0 ||
                words.blueAgreeBlue > 0)
        ) {
            redAndBlue += `${words.word}</br>`;
        } else if (
            (words.redAgreeRed == 0 ||
                words.redAgreeGreen == 0 ||
                words.redAgreeBlue == 0) &&
            (words.greenAgreeRed > 0 ||
                words.greenAgreeGreen > 0 ||
                words.greenAgreeBlue > 0) &&
            (words.blueAgreeRed > 0 ||
                words.blueAgreeGreen > 0 ||
                words.blueAgreeBlue > 0)
        ) {
            greenAndBlue += `${words.word}</br>`;
        } else if (
            (words.redAgreeRed > 0 ||
                words.redAgreeGreen > 0 ||
                words.redAgreeBlue > 0) &&
            (words.greenAgreeRed == 0 ||
                words.greenAgreeGreen == 0 ||
                words.greenAgreeBlue == 0) &&
            (words.blueAgreeRed == 0 ||
                words.blueAgreeGreen == 0 ||
                words.blueAgreeBlue == 0)
        ) {
            red += `${words.word}</br>`;
        } else if (
            (words.redAgreeRed == 0 ||
                words.redAgreeGreen == 0 ||
                words.redAgreeBlue == 0) &&
            (words.greenAgreeRed > 0 ||
                words.greenAgreeGreen > 0 ||
                words.greenAgreeBlue > 0) &&
            (words.blueAgreeRed == 0 ||
                words.blueAgreeGreen == 0 ||
                words.blueAgreeBlue == 0)
        ) {
            green += `${words.word}</br>`;
        } else if (
            (words.redAgreeRed == 0 ||
                words.redAgreeGreen == 0 ||
                words.redAgreeBlue == 0) &&
            (words.greenAgreeRed == 0 ||
                words.greenAgreeGreen == 0 ||
                words.greenAgreeBlue == 0) &&
            (words.blueAgreeRed > 0 ||
                words.blueAgreeGreen > 0 ||
                words.blueAgreeBlue > 0)
        ) {
            blue += `${words.word}</br>`;
        }
    }

    diagramDiv = `<div style="width: 90%; height: 900px; background-color: white; border: solid black; z-index: -2;">
        <div style="border: solid red; border-radius: 50%; width: 33%; height: 63%; position:absolute; left: 25%; top: 9%;"></div>
        <div style="border: solid green; border-radius: 50%; width: 33%; height: 63%; position:absolute; left: 15%; top: 36%;"></div>
        <div style="border: solid blue; border-radius: 50%; width: 33%; height: 63%; position:absolute; z-index: 1; left: 35%; top: 36%;"></div>
        <div style="position:absolute; z-index: 2; left: 40%; top: 46%;">${allColors}</div>
        <div style="position:absolute; z-index: 2; left: 30%; top: 39%;">${redAndGreen}</div>
        <div style="position:absolute; z-index: 2; left: 50%; top: 39%;">${redAndBlue}</div>
        <div style="position:absolute; z-index: 2; left: 40%; top: 73%;">${greenAndBlue}</div>
        <div style="position:absolute; z-index: 2; left: 40%; top: 10%;">${red}</div>
        <div style="position:absolute; z-index: 2; left: 20%; top: 50%;">${green}</div>
        <div style="position:absolute; z-index: 2; left: 60%; top: 50%;">${blue}</div>
    </div>`;
    show();
}

function wordFlower() {
    diagramDiv = '';
    let allWords = Array.from(allwordsList());
    let redAboutR = '';
    let redAboutG = '';
    let redAboutB = '';
    let greenAboutR = '';
    let greenAboutG = '';
    let greenAboutB = '';
    let blueAboutR = '';
    let blueAboutG = '';
    let blueAboutB = '';

    for (let words of allWords) {
        if (words.redAgreeRed > 0) {
            redAboutR += `${words.word}</br>`;
        }
        if (words.redAgreeGreen > 0) {
            redAboutG += `${words.word}</br>`;
        }
        if (words.redAgreeBlue > 0) {
            redAboutB += `${words.word}</br>`;
        }
        if (words.greenAgreeRed > 0) {
            greenAboutR += `${words.word}</br>`;
        }
        if (words.greenAgreeGreen > 0) {
            greenAboutG += `${words.word}</br>`;
        }
        if (words.greenAgreeBlue > 0) {
            greenAboutB += `${words.word}</br>`;
        }
        if (words.blueAgreeRed > 0) {
            blueAboutR += `${words.word}</br>`;
        }
        if (words.blueAgreeGreen > 0) {
            blueAboutG += `${words.word}</br>`;
        }
        if (words.blueAgreeBlue > 0) {
            blueAboutB += `${words.word}</br>`;
        }
    }

    diagramDiv = `<div style="width: 90%; height: 900px; background-color: white; border: solid black; z-index: -2;">
        <div style="border: solid black; background-color: red; border-radius: 50%; width: 200px; height: 200px; position:absolute; left: 18%; top: 8%;"></div>
        <div style="border: solid black; background-color: mediumspringgreen; border-radius: 50%; width: 200px; height: 200px; position:absolute; left: 1%; top: 56%;"></div>
        <div style="border: solid black; background-color: deepskyblue; border-radius: 50%; width: 200px; height: 200px; position:absolute; left: 35%; top: 56%;"></div>
        <img src="pictures/circle.jpg" style="z-index: -2; display: block; margin-top:6% width: 100%;">
        <div style="position:absolute; left: 21%; top: 10%;">${redAboutR}</div>
        <div style="position:absolute; left: 11%; top: 31%; color: red;">${redAboutG}</div>
        <div style="position:absolute; left: 44%; top: 26%; color: red;">${redAboutB}</div>
        <div style="position:absolute; left: 3%; top: 26%; color: green">${greenAboutR}</div>
        <div style="position:absolute; left: 5%; top: 57%;">${greenAboutG}</div>
        <div style="position:absolute; left: 22%; top: 69%; color: green">${greenAboutB}</div>
        <div style="position:absolute; left: 34%; top: 31%; color: blue;">${blueAboutR}</div>
        <div style="position:absolute; left: 7%; top: 79%; color: blue;">${blueAboutG}</div>
        <div style="position:absolute; left: 39%; top: 57%;">${blueAboutB}</div>
    </div>`;
    show();
}