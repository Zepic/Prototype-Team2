// JavaScript source code
let diagramDiv = '';

let allWords = Array.from(allwordsList());

allWords.sort(sorting("agree"));

function statShow() {
    
    contentDiv.innerHTML = `<div>
                <button onclick="selectDiagram('topList')">De ord flest er enig i</button>
                <button onclick="selectDiagram('topRedList')">Ord fra rød</button>
                <button onclick="selectDiagram('topGreenList')">Ord fra grønn</button>
                <button onclick="selectDiagram('topBlueList')">Ord fra blå</button>
                <button onclick="selectDiagram('wordCircle')">demo1</button>
                <button onclick="selectDiagram('wordFlower')">Ordsblomster</button>
                <div class row>${diagramDiv}</div>
                </div>`;

}


//functions to sort and list information

//sorts and add together words based on color of the group they are mentioned in


function allwordsList() {
    let totalList = [];
    let testList = [];


    for (let wordToAdd of model.notes) {
        let agreeRedAboutRed = 0;
        let agreeGreenAboutRed = 0;
        let agreeBlueAboutRed = 0;
        let agreeRedAboutGreen = 0;
        let agreeGreenAboutGreen = 0;
        let agreeBlueAboutGreen = 0;
        let agreeRedAboutBlue = 0;
        let agreeGreenAboutBlue = 0;
        let agreeBlueAboutBlue = 0;

        if (wordToAdd.aboutColor === 'red') {
            agreeRedAboutRed = wordToAdd.redAgree;
            agreeGreenAboutRed = wordToAdd.greenAgree;
            agreeBlueAboutRed = wordToAdd.blueAgree;
        } else if (wordToAdd.aboutColor === 'green') {
            agreeRedAboutGreen = wordToAdd.redAgree;
            agreeGreenAboutGreen = wordToAdd.greenAgree;
            agreeBlueAboutGreen = wordToAdd.blueAgree;
        } else if (wordToAdd.aboutColor === 'blue') {
            agreeRedAboutBlue = wordToAdd.redAgree;
            agreeGreenAboutBlue = wordToAdd.greenAgree;
            agreeBlueAboutBlue = wordToAdd.blueAgree;
        } 
        let disagree = wordToAdd.disagree;
        if (testList.includes(wordToAdd.content) === false) {
            for (let noteInformation of model.notes) {
                if (wordToAdd.ID != noteInformation.ID && wordToAdd.content === noteInformation.content) {
                    if (wordToAdd.aboutColor === 'red') {
                        agreeRedAboutRed = agreeRedAboutRed + noteInformation.redAgree;
                        agreeGreenAboutRed = agreeGreenAboutRed + noteInformation.greenAgree;
                        agreeBlueAboutRed = agreeBlueAboutRed + noteInformation.blueAgree;
                    } else if (wordToAdd.aboutColor === 'green') {
                        agreeRedAboutGreen = agreeRedAboutGreen + noteInformation.redAgree;
                        agreeGreenAboutGreen = agreeGreenAboutGreen + noteInformation.greenAgree;
                        agreeBlueAboutGreen = agreeBlueAboutGreen + noteInformation.blueAgree;
                    } else if (wordToAdd.aboutColor === 'blue') {
                        agreeRedAboutBlue = agreeRedAboutBlue + noteInformation.redAgree;
                        agreeGreenAboutBlue = agreeGreenAboutBlue + noteInformation.greenAgree;
                        agreeBlueAboutBlue = agreeBlueAboutBlue + noteInformation.blueAgree;
                    }
                }
            }
            let agree = agreeRedAboutRed + agreeGreenAboutRed + agreeBlueAboutRed + agreeRedAboutGreen +
                        agreeGreenAboutGreen + agreeBlueAboutGreen + agreeRedAboutBlue + agreeGreenAboutBlue + agreeBlueAboutBlue;
            testList.push(wordToAdd.content);
            totalList.push({
                word: wordToAdd.content, agree: agree, redAgreeRed: agreeRedAboutRed, redAgreeGreen: agreeRedAboutGreen, redAgreeBlue: agreeRedAboutBlue,
                greenAgreeRed: agreeGreenAboutRed, greenAgreeGreen: agreeGreenAboutGreen, greenAgreeBlue: agreeGreenAboutBlue,
                blueAgreeRed: agreeBlueAboutRed, blueAgreeGreen: agreeBlueAboutGreen, blueAgreeBlue: agreeBlueAboutBlue,
                disagree: disagree, about: wordToAdd.aboutColor
            });
        }
    }
    return totalList;
}

function sorting(word) {
    let sortOrder = -1;

    return function (a, b) {
        if (a[word] < b[word]) {
            return -1 * sortOrder;
        } else if (a[word] > b[word]) {
            return 1 * sortOrder;
        } else {
            return 0 * sortOrder;
        }
    }
}

function selectDiagram(selected) {
    
    if (selected === 'topList') {
        showAll();
    } else if (selected === 'topRedList') {
        redDiagrams();
    } else if (selected === 'topGreenList') {
        greenDiagrams();
    } else if (selected === 'topBlueList') {
        blueDiagrams();
    } else if (selected === 'wordCircle') {
        wordCircles();
    } else if (selected === 'wordFlower') {
        wordFlower();
    }
    statShow();
}

function showAll() {
    diagramDiv = '</br>All words</br>';

    for (let test of allWords) {
        let redTotal = test.redAgreeRed + test.redAgreeBlue + test.redAgreeGreen;
        let greenTotal = test.greenAgreeRed + test.greenAgreeGreen + test.greenAgreeBlue;
        let blueTotal = test.blueAgreeRed + test.blueAgreeGreen + test.blueAgreeBlue;
        let redx = redTotal * 5;
        let greenx = greenTotal * 5;
        let bluex = blueTotal * 5;

        diagramDiv += ` ${test.word}: ${test.agree} <div style="float:left; height: 20px; width: ${redx}px; background-color: red;"></div>
                                                    <div style="float:left; height: 20px; width: ${greenx}px; background-color: green;"></div>
                                                    <div style="float:left; height: 20px; width: ${bluex}px; background-color: blue;"></div></br></br>`;
    }
}

function redDiagrams() {
    let redAboutAll = [];
    let redAboutRed = [];
    let redAboutGreen = [];
    let redAboutBlue = [];

    for (let redWords of allWords) {
        if (redWords.redAgreeRed > 0 || redWords.redAgreeGreen > 0 || redWords.redAgreeBlue > 0) {
            let total = redWords.redAgreeRed + redWords.redAgreeGreen + redWords.redAgreeBlue;
            redAboutAll.push({ word: redWords.word, amount: total });
            if (redWords.redAgreeRed > 0) {
                redAboutRed.push({ word: redWords.word, amount: redWords.redAgreeRed });
            } else if (redWords.redAgreeGreen > 0) {
                redAboutGreen.push({ word: redWords.word, amount: redWords.redAgreeGreen });
            } else if (redWords.redAgreeBlue > 0) {
                redAboutBlue.push({ word: redWords.word, amount: redWords.redAgreeBlue });
            }
        }        
    }
    diagramDiv = `</br>Red total</br><div class="column">`;

    for (let redTotal of redAboutAll) {
        let x = redTotal.amount * 10;
        diagramDiv += redTotal.word + '   ' + redTotal.amount + `<div style="height: 10px; width: ${x}px; background-color: red;"></div></br>`;
    }
    diagramDiv += `</div></br>Red about red</br><div class="column">`;
    for (let redAboutSelf of redAboutRed) {

        let x = redAboutSelf.amount * 10;
        diagramDiv += redAboutSelf.word + '   ' + redAboutSelf.amount + `<div style="height: 10px; width: ${x}px; background-color: red;"></div></br>`;
        
    }
    diagramDiv += `</br>Red about green</br>`;
    for (let redAboutG of redAboutGreen) {
        let x = redAboutG.amount * 10;
        
        diagramDiv += redAboutG.word + '   ' + redAboutG.amount + `<div style="height: 10px; width: ${x}px; background-color: red;"></div></br>`;        
    }
    diagramDiv += `</br>Red about blue</br>`;
    for (let redAboutB of redAboutBlue) {
        let x = redAboutB.amount * 10;
        diagramDiv += redAboutB.word + '   ' + redAboutB.amount + `<div style="height: 10px; width: ${x}px; background-color: red;"></div></br>`;        
    }
    diagramDiv += '</div>';
}

function greenDiagrams() {
    let greenAboutAll = [];
    let greenAboutRed = [];
    let greenAboutGreen = [];
    let greenAboutBlue = [];

    for (let greenWords of allWords) {
        if (greenWords.greenAgreeRed > 0 || greenWords.greenAgreeGreen > 0 || greenWords.greenAgreeBlue > 0) {
            let total = greenWords.greenAgreeRed + greenWords.greenAgreeGreen + greenWords.greenAgreeBlue;
            greenAboutAll.push({ word: greenWords.word, amount: total });
            if (greenWords.greenAgreeRed > 0) {
                greenAboutRed.push({ word: greenWords.word, amount: greenWords.greenAgreeRed });
            } else if (greenWords.greenAgreeGreen > 0) {
                greenAboutGreen.push({ word: greenWords.word, amount: greenWords.greenAgreeGreen });
            } else if (greenWords.greenAgreeBlue > 0) {
                greenAboutBlue.push({ word: greenWords.word, amount: greenWords.greenAgreeBlue });
            }
        }
    }
    diagramDiv = `</br>Green total</br><div class="column">`;

    for (let greenTotal of greenAboutAll) {
        let x = greenTotal.amount * 10;
        diagramDiv += greenTotal.word + '   ' + greenTotal.amount + `<div style="height: 10px; width: ${x}px; background-color: green;"></div></br>`;
    }
    diagramDiv += `</div></br>Green about red</br><div class="column">`;
    for (let greenAboutR of greenAboutRed) {

        let x = greenAboutR.amount * 10;
        diagramDiv += greenAboutR.word + '   ' + greenAboutR.amount + `<div style="height: 10px; width: ${x}px; background-color: green;"></div></br>`;

    }
    diagramDiv += `</br>Red about green</br>`;
    for (let greenAboutG of greenAboutGreen) {
        let x = greenAboutG.amount * 10;

        diagramDiv += greenAboutG.word + '   ' + greenAboutG.amount + `<div style="height: 10px; width: ${x}px; background-color: green;"></div></br>`;
    }
    diagramDiv += `</br>Red about blue</br>`;
    for (let greenAboutB of greenAboutBlue) {
        let x = greenAboutB.amount * 10;
        diagramDiv += greenAboutB.word + '   ' + greenAboutB.amount + `<div style="height: 10px; width: ${x}px; background-color: green;"></div></br>`;
    }
    diagramDiv += '</div>';
}
function blueDiagrams() {
    let blueAboutAll = [];
    let blueAboutRed = [];
    let blueAboutGreen = [];
    let blueAboutBlue = [];

    for (let blueWords of allWords) {
        if (blueWords.blueAgreeRed > 0 || blueWords.blueAgreeGreen > 0 || blueWords.blueAgreeBlue > 0) {
            let total = blueWords.blueAgreeRed + blueWords.blueAgreeGreen + blueWords.blueAgreeBlue;
            blueAboutAll.push({ word: blueWords.word, amount: total });
            if (blueWords.blueAgreeRed > 0) {
                blueAboutRed.push({ word: blueWords.word, amount: blueWords.blueAgreeRed });
            } else if (blueWords.blueAgreeGreen > 0) {
                blueAboutGreen.push({ word: blueWords.word, amount: blueWords.blueAgreeGreen });
            } else if (blueWords.blueAgreeBlue > 0) {
                blueAboutBlue.push({ word: blueWords.word, amount: blueWords.blueAgreeBlue });
            }
        }
    }
    diagramDiv = `</br>Blue total</br><div class="column">`;

    for (let blueTotal of blueAboutAll) {
        let x = blueTotal.amount * 10;
        diagramDiv += blueTotal.word + '   ' + blueTotal.amount + `<div style="height: 10px; width: ${x}px; background-color: blue;"></div></br>`;
    }
    diagramDiv += `</div></br>Blue about red</br><div class="column">`;
    for (let blueAboutR of blueAboutRed) {

        let x = blueAboutR.amount * 10;
        diagramDiv += blueAboutR.word + '   ' + blueAboutR.amount + `<div style="height: 10px; width: ${x}px; background-color: blue;"></div></br>`;

    }
    diagramDiv += `</br>Blue about green</br>`;
    for (let blueAboutG of blueAboutGreen) {
        let x = blueAboutG.amount * 10;

        diagramDiv += blueAboutG.word + '   ' + blueAboutG.amount + `<div style="height: 10px; width: ${x}px; background-color: blue;"></div></br>`;
    }
    diagramDiv += `</br>Blue about blue</br>`;
    for (let blueAboutB of blueAboutBlue) {
        let x = blueAboutB.amount * 10;
        diagramDiv += blueAboutB.word + '   ' + blueAboutB.amount + `<div style="height: 10px; width: ${x}px; background-color: blue;"></div></br>`;
    }
    diagramDiv += '</div>';
}

function wordCircles() {
    let allColors = '';
    let redAndGreen = '';
    let redAndBlue = '';
    let greenAndBlue = '';
    let red = '';
    let green = '';
    let blue = '';

    for (let words of allWords) {
        if ((words.redAgreeRed > 0 || words.redAgreeGreen > 0 || words.redAgreeBlue > 0) && (words.greenAgreeRed > 0 || words.greenAgreeGreen > 0 || words.greenAgreeBlue > 0)
            && (words.blueAgreeRed > 0 || words.blueAgreeGreen > 0 || words.blueAgreeBlue > 0)) {
            allColors += `${words.word}</br>`;
        } else if ((words.redAgreeRed > 0 || words.redAgreeGreen > 0 || words.redAgreeBlue > 0) && (words.greenAgreeRed > 0 || words.greenAgreeGreen > 0 || words.greenAgreeBlue > 0)
            && (words.blueAgreeRed == 0 || words.blueAgreeGreen == 0 || words.blueAgreeBlue == 0)) {
            redAndGreen += `${words.word}</br>`;
        } else if ((words.redAgreeRed > 0 || words.redAgreeGreen > 0 || words.redAgreeBlue > 0) && (words.greenAgreeRed == 0 || words.greenAgreeGreen == 0 || words.greenAgreeBlue == 0)
            && (words.blueAgreeRed > 0 || words.blueAgreeGreen > 0 || words.blueAgreeBlue > 0)) {
            redAndBlue += `${words.word}</br>`;
        } else if ((words.redAgreeRed == 0 || words.redAgreeGreen == 0 || words.redAgreeBlue == 0) && (words.greenAgreeRed > 0 || words.greenAgreeGreen > 0 || words.greenAgreeBlue > 0)
            && (words.blueAgreeRed > 0 || words.blueAgreeGreen > 0 || words.blueAgreeBlue > 0)) {
            greenAndBlue += `${words.word}</br>`;
        } else if ((words.redAgreeRed > 0 || words.redAgreeGreen > 0 || words.redAgreeBlue > 0) && (words.greenAgreeRed == 0 || words.greenAgreeGreen == 0 || words.greenAgreeBlue == 0)
            && (words.blueAgreeRed == 0 || words.blueAgreeGreen == 0 || words.blueAgreeBlue == 0)) {
            red += `${words.word}</br>`;
        } else if ((words.redAgreeRed == 0 || words.redAgreeGreen == 0 || words.redAgreeBlue == 0) && (words.greenAgreeRed > 0 || words.greenAgreeGreen > 0 || words.greenAgreeBlue > 0)
            && (words.blueAgreeRed == 0 || words.blueAgreeGreen == 0 || words.blueAgreeBlue == 0)) {
            green += `${words.word}</br>`;
        } else if ((words.redAgreeRed == 0 || words.redAgreeGreen == 0 || words.redAgreeBlue == 0) && (words.greenAgreeRed == 0 || words.greenAgreeGreen == 0 || words.greenAgreeBlue == 0)
            && (words.blueAgreeRed > 0 || words.blueAgreeGreen > 0 || words.blueAgreeBlue > 0)) {
            blue += `${words.word}</br>`;
        }
    }

    diagramDiv = `<div style="width: 800px; height: 600px;">
        <div style="border: solid red; border-radius: 50%; width: 600px; height: 600px; position:absolute; z-index: -1; left: 500px; top: 50px;"></div>
        <div style="border: solid green; border-radius: 50%; width: 600px; height: 600px; position:absolute; left: 350px; top: 300px;"></div>
        <div style="border: solid blue; border-radius: 50%; width: 600px; height: 600px; position:absolute; z-index: 1; left: 650px; top: 300px;"></div>
        <div style="position:absolute; z-index: 2; left: 775px; top: 375px;">${allColors}</div>
        <div style="position:absolute; z-index: 3; left: 575px; top: 325px;">${redAndGreen}</div>
        <div style="position:absolute; z-index: 3; left: 875px; top: 325px;">${redAndBlue}</div>
        <div style="position:absolute; z-index: 3; left: 775px; top: 675px;">${greenAndBlue}</div>
        <div style="position:absolute; z-index: 3; left: 775px; top: 100px;">${red}</div>
        <div style="position:absolute; z-index: 3; left: 450px; top: 500px;">${green}</div>
        <div style="position:absolute; z-index: 3; left: 1100px; top: 500px;">${blue}</div>
    </div>`;
}

function wordFlower() {
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
        if (words.redAgreeRed > 0) { redAboutR += `${words.word}</br>`; }
        if (words.redAgreeGreen > 0) { redAboutG += `${words.word}</br>`; }
        if (words.redAgreeBlue > 0) { redAboutB += `${words.word}</br>`; }
        if (words.greenAgreeRed > 0) { greenAboutR += `${words.word}</br>`; }
        if (words.greenAgreeGreen > 0) { greenAboutG += `${words.word}</br>`; }
        if (words.greenAgreeBlue > 0) { greenAboutB += `${words.word}</br>`; }
        if (words.blueAgreeRed > 0) { blueAboutR += `${words.word}</br>`; }
        if (words.blueAgreeGreen > 0) { blueAboutG += `${words.word}</br>`; }
        if (words.blueAgreeBlue > 0) { blueAboutB += `${words.word}</br>`; }
    }

    diagramDiv = `<div style="width: 800px; height: 600px;">
        <div style="border: solid black; background-color: red; border-radius: 50%; width: 200px; height: 200px; position:absolute; left: 825px; top: 50px;"></div>
        <div style="border: solid black; background-color: mediumspringgreen; border-radius: 50%; width: 200px; height: 200px; position:absolute; left: 500px; top: 500px;"></div>
        <div style="border: solid black; background-color: deepskyblue; border-radius: 50%; width: 200px; height: 200px; position:absolute; z-index: 1; left: 1150px; top: 500px;"></div>
        <img src="pictures/circle.jpg" style="z-index: -2; display: block; margin-left: 450px; margin-top:50px">
        <div style="position:absolute; z-index: 2; left: 900px; top: 75px;">${redAboutR}</div>
        <div style="position:absolute; z-index: 3; left: 700px; top: 300px;">${redAboutG}</div>
        <div style="position:absolute; z-index: 3; left: 1300px; top: 200px;">${redAboutB}</div>
        <div style="position:absolute; z-index: 3; left: 550px; top: 200px;">${greenAboutR}</div>
        <div style="position:absolute; z-index: 3; left: 575px; top: 525px;">${greenAboutG}</div>
        <div style="position:absolute; z-index: 3; left: 900px; top: 650px;">${greenAboutB}</div>
        <div style="position:absolute; z-index: 3; left: 1100px; top: 300px;">${blueAboutR}</div>
        <div style="position:absolute; z-index: 3; left: 1220px; top: 725px;">${blueAboutG}</div>
        <div style="position:absolute; z-index: 3; left: 1225px; top: 525px;">${blueAboutB}</div>
    </div>`;
}