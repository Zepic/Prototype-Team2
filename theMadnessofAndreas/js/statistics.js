// JavaScript source code
let diagramDiv = '';

function statShow() {
    //contentDiv.innerHTML = `<div> // make problem
    //function content() need data as HTML
    //function statShow() should not change content DIV
    //function statShow() should change diagramDIV
    //this way statShow() will not change any other content like navigation
    //only show() function from View can show other statics views
    return `<div class="diagramButtonsDiv">
                <button onclick="showAll()" class="selectDiagram multicolored">All agreed</button>
                <button onclick="redDiagrams()" class="selectDiagram aboutRed">About Red</button>
                <button onclick="greenDiagrams()" class="selectDiagram aboutGreen">About Green</button>
                <button onclick="blueDiagrams()" class="selectDiagram aboutBlue">About Blue</button>
                <button onclick="wordCircles()" class="selectDiagram multicolored">demo 1</button>
                <button onclick="wordFlower()" class="selectDiagram multicolored">demo 2</button>
                <div class="row">${diagramDiv}</div>
                </div>`;
}

function showAll() {
    diagramDiv = '<div style="background-color:white; border: solid black;"></br>All words</br>';
    let allWords = Array.from(allwordsList());
    allWords.sort(sorting('agree'));

    for (let word of allWords) {
        if (word.agree > 0) {
            let redTotal =
                word.redAgreeRed + word.redAgreeBlue + word.redAgreeGreen;
            let greenTotal =
                word.greenAgreeRed + word.greenAgreeGreen + word.greenAgreeBlue;
            let blueTotal =
                word.blueAgreeRed + word.blueAgreeGreen + word.blueAgreeBlue;
            let redx = redTotal / 2;
            let greenx = greenTotal / 2;
            let bluex = blueTotal / 2;
            diagramDiv += ` ${word.word}: ${word.agree} <div style="float:left; height: 20px; width: ${redx}%; background-color: red;"></div>
                                                    <div style="float:left; height: 20px; width: ${greenx}%; background-color: green;"></div>
                                                    <div style="float:left; height: 20px; width: ${bluex}%; background-color: blue;"></div></br></br>`;
        }        
    }
    diagramDiv += '</div>';
    show();
}

function redDiagrams() {
    diagramDiv = '';
    let allWords = Array.from(allwordsList()); //populate the array with the result from the allwordsList function
    let redAboutAll = [];
    let redAboutRed = [];
    let greenAboutRed = [];
    let blueAboutRed = [];
    let redDisagree = disagree('red');

    for (let redWords of allWords) { 
        if ( redWords.redAgreeRed > 0 || redWords.greenAgreeRed > 0 || redWords.blueAgreeRed > 0 ) {
            let total = redWords.redAgreeRed + redWords.greenAgreeRed + redWords.blueAgreeRed; //creates a list with all the words said about red and how many agrees they have
            redAboutAll.push({ word: redWords.word, amount: total, redAgree: redWords.redAgreeRed, greenAgree: redWords.greenAgreeRed, blueAgree: redWords.blueAgreeRed });
            if (redWords.redAgreeRed > 0) { //same as above but only red about red
                redAboutRed.push({ word: redWords.word, amount: redWords.redAgreeRed, });
            }
            if (redWords.greenAgreeRed > 0) {
                greenAboutRed.push({ word: redWords.word, amount: redWords.greenAgreeRed, });
            }
            if (redWords.blueAgreeRed > 0) {
                blueAboutRed.push({ word: redWords.word, amount: redWords.blueAgreeRed, });
            }
        }
    }
    redAboutAll.sort(sorting('amount')); // ranks the objects based on the amount part of the objects within
    redAboutRed.sort(sorting('amount'));
    greenAboutRed.sort(sorting('amount'));
    blueAboutRed.sort(sorting('amount'));
    diagramDiv = `<div class="column" style="background-color:white; border: solid black; height: 450px;"></br>Red total</br>`;
    for (let redTotal of redAboutAll) {
        let x = redTotal.amount;
        diagramDiv +=
            redTotal.word +
            '   ' +
        redTotal.amount +
        `<div style=" float:left; height: 10px; width: ${redTotal.redAgree}%; background-color: red;"></div>
            <div style=" float:left; height: 10px; width: ${redTotal.greenAgree}%; background-color: green;"></div>
            <div style=" float:left; height: 10px; width: ${redTotal.blueAgree}%; background-color: blue;"></div>
            </br>`;
    }
    diagramDiv += `</div><div class="column" style="background-color:white; border: solid black;"><div class="columnWithin">Red about red</br>`;
    for (let redAboutSelf of redAboutRed) {
        let x = redAboutSelf.amount;
        diagramDiv +=
            redAboutSelf.word +
            '   ' +
            redAboutSelf.amount +
            `<div style="height: 10px; width: ${x}%; background-color: red;"></div></br>`;
    }
    diagramDiv += `</div><div class="columnWithin"></br>Green about red</br>`;
    for (let redAboutG of greenAboutRed) {
        let x = redAboutG.amount;

        diagramDiv +=
            redAboutG.word +
            '   ' +
            redAboutG.amount +
            `<div style="height: 10px; width: ${x}%; background-color: green;"></div></br>`;
    }
    diagramDiv += `</div><div class="columnWithin"></br>Blue about red</br>`;
    for (let redAboutB of blueAboutRed) {
        let x = redAboutB.amount;
        diagramDiv +=
            redAboutB.word +
            '   ' +
            redAboutB.amount +
            `<div style="height: 10px; width: ${x}%; background-color: blue;"></div></br>`;
    }
    diagramDiv += `</div></div> ${redDisagree}
    `;
    show();
}

function greenDiagrams() {
    diagramDiv = '';
    let allWords = Array.from(allwordsList());
    let greenAboutAll = [];
    let redAboutGreen = [];
    let greenAboutGreen = [];
    let blueAboutGreen = [];
    let greenDisagree = disagree('green');

    for (let greenWords of allWords) {
        if (
            greenWords.redAgreeGreen > 0 ||
            greenWords.greenAgreeGreen > 0 ||
            greenWords.blueAgreeGreen > 0
        ) {
            let total =
                greenWords.redAgreeGreen +
                greenWords.greenAgreeGreen +
                greenWords.blueAgreeGreen;
            greenAboutAll.push({ word: greenWords.word, amount: total, redAgree: greenWords.redAgreeGreen, greenAgree: greenWords.greenAgreeGreen, blueAgree: greenWords.blueAgreeGreen });
            if (greenWords.redAgreeGreen > 0) {
                redAboutGreen.push({
                    word: greenWords.word,
                    amount: greenWords.redAgreeGreen,
                });
            } if (greenWords.greenAgreeGreen > 0) {
                greenAboutGreen.push({
                    word: greenWords.word,
                    amount: greenWords.greenAgreeGreen,
                });
            } if (greenWords.blueAgreeGreen > 0) {
                blueAboutGreen.push({
                    word: greenWords.word,
                    amount: greenWords.blueAgreeGreen,
                });
            }
        }
    }
    greenAboutAll.sort(sorting('amount'));
    redAboutGreen.sort(sorting('amount'));
    greenAboutGreen.sort(sorting('amount'));
    blueAboutGreen.sort(sorting('amount'));
    diagramDiv = `<div class="column" style="background-color:white; border: solid black; height: 450px;"></br>Green total</br>`;
    for (let greenTotal of greenAboutAll) {
        let x = greenTotal.amount;
        diagramDiv +=
            greenTotal.word +
            '   ' +
            greenTotal.amount + `<div style=" float:left; height: 10px; width: ${greenTotal.redAgree}%; background-color: red;"></div>
            <div style=" float:left; height: 10px; width: ${greenTotal.greenAgree}%; background-color: green;"></div>
            <div style=" float:left; height: 10px; width: ${greenTotal.blueAgree}%; background-color: blue;"></div>
            </br>`;
    }
    diagramDiv += `</div><div class="column" style="background-color:white; border: solid black;"><div class="columnWithin"></br>Red about green</br>`;
    for (let greenAboutR of redAboutGreen) {
        let x = greenAboutR.amount;
        diagramDiv +=
            greenAboutR.word +
            '   ' +
            greenAboutR.amount +
            `<div style="height: 10px; width: ${x}%; background-color: red;"></div></br>`;
    }
    diagramDiv += `</div><div class="columnWithin"></br>Green about green</br>`;
    for (let greenAboutG of greenAboutGreen) {
        let x = greenAboutG.amount;

        diagramDiv +=
            greenAboutG.word +
            '   ' +
            greenAboutG.amount +
            `<div style="height: 10px; width: ${x}%; background-color: green;"></div></br>`;
    }
    diagramDiv += `</div><div class="columnWithin"></br>Blue about green</br>`;
    for (let greenAboutB of blueAboutGreen) {
        let x = greenAboutB.amount;
        diagramDiv +=
            greenAboutB.word +
            '   ' +
            greenAboutB.amount +
            `<div style="height: 10px; width: ${x}%; background-color: blue;"></div></br>`;
    }
    diagramDiv += `</div></div> ${greenDisagree}
    `;
    show();
}

function blueDiagrams() {
    diagramDiv = '';
    let allWords = Array.from(allwordsList());
    let blueAboutAll = [];
    let redAboutBlue = [];
    let greenAboutBlue = [];
    let blueAboutBlue = [];
    let blueDisagree = disagree('blue');

    for (let blueWords of allWords) {
        if (
            blueWords.redAgreeBlue > 0 ||
            blueWords.greenAgreeBlue > 0 ||
            blueWords.blueAgreeBlue > 0
        ) {
            let total =
                blueWords.redAgreeBlue +
                blueWords.greenAgreeBlue +
                blueWords.blueAgreeBlue;
            blueAboutAll.push({ word: blueWords.word, amount: total, redAgree: blueWords.redAgreeBlue, greenAgree: blueWords.greenAgreeBlue, blueAgree: blueWords.blueAgreeBlue });
            if (blueWords.redAgreeBlue > 0) {
                redAboutBlue.push({
                    word: blueWords.word,
                    amount: blueWords.redAgreeBlue,
                });
            } if (blueWords.greenAgreeBlue > 0) {
                greenAboutBlue.push({
                    word: blueWords.word,
                    amount: blueWords.greenAgreeBlue,
                });
            } if (blueWords.blueAgreeBlue > 0) {
                blueAboutBlue.push({
                    word: blueWords.word,
                    amount: blueWords.blueAgreeBlue,
                });
            }
        }
    }
    blueAboutAll.sort(sorting('amount'));
    redAboutBlue.sort(sorting('amount'));
    greenAboutBlue.sort(sorting('amount'));
    blueAboutBlue.sort(sorting('amount'));
    diagramDiv = `<div class="column" style="background-color:white; border: solid black; height: 450px;"></br>Blue total</br>`;
    for (let blueTotal of blueAboutAll) {
        let x = blueTotal.amount;
        diagramDiv +=
            blueTotal.word +
            '   ' +
            blueTotal.amount + `<div style=" float:left; height: 10px; width: ${blueTotal.redAgree}%; background-color: red;"></div>
            <div style=" float:left; height: 10px; width: ${blueTotal.greenAgree}%; background-color: green;"></div>
            <div style=" float:left; height: 10px; width: ${blueTotal.blueAgree}%; background-color: blue;"></div>
            </br>`;
    }
    diagramDiv += `</div><div class="column" style="background-color:white; border: solid black;"><div class="columnWithin"></br>Red about blue</br>`;
    for (let blueAboutR of redAboutBlue) {
        let x = blueAboutR.amount;
        diagramDiv +=
            blueAboutR.word +
            '   ' +
            blueAboutR.amount +
            `<div style="height: 10px; width: ${x}%; background-color: red;"></div></br>`;
    }
    
    diagramDiv += `</div><div class="columnWithin"></br>Green about blue</br>`;
    for (let blueAboutG of greenAboutBlue) {
        let x = blueAboutG.amount;

        diagramDiv +=
            blueAboutG.word +
            '   ' +
            blueAboutG.amount +
            `<div style="height: 10px; width: ${x}%; background-color: green;"></div></br>`;
    }
    diagramDiv += `</div><div class="columnWithin"></br>Blue about blue</br>`;
    for (let blueAboutB of blueAboutBlue) {
        let x = blueAboutB.amount;
        diagramDiv +=
            blueAboutB.word +
            '   ' +
            blueAboutB.amount +
            `<div style="height: 10px; width: ${x}%; background-color: blue;"></div></br>`;
    }
    diagramDiv += `</div></div>${blueDisagree}
    `;
    show();
}

function disagree(color) {
    let wordList = Array.from(disagreeList(color));
    diagramDiv += `<div class="row column" style="background-color:white; border: solid black;">Words ${color} disagree with</br>`;
    for (let aboutR of wordList) {
        if (aboutR.disagree > 0) {
            let x = aboutR.disagree;
            diagramDiv +=
                aboutR.word +
                '   ' +
                aboutR.disagree +
                `<div style="height: 10px; width: ${x}%; background-color: ${color};"></div></br>`;
        }
    }
    return (diagramDiv += '</div>');
}