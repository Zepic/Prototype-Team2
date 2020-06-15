// JavaScript source code
let diagramDiv = '';

function statShow() {    
    contentDiv.innerHTML = `<div>
                <button onclick="showAll()">De ord flest er enig i</button>
                <button onclick="redDiagrams()">Ord fra rød</button>
                <button onclick="greenDiagrams()">Ord fra grønn</button>
                <button onclick="blueDiagrams()">Ord fra blå</button>
                <button onclick="wordCircles()">demo1</button>
                <button onclick="wordFlower()">Ordsblomster</button>                
                <div class row>${diagramDiv}</div>
                </div>`;

}

function showAll() {
    diagramDiv = '</br>All words</br>';
    let allWords = Array.from(allwordsList());
    allWords.sort(sorting("agree"));

    for (let word of allWords) {
        let redTotal = word.redAgreeRed + word.redAgreeBlue + word.redAgreeGreen;
        let greenTotal = word.greenAgreeRed + word.greenAgreeGreen + word.greenAgreeBlue;
        let blueTotal = word.blueAgreeRed + word.blueAgreeGreen + word.blueAgreeBlue;
        let redx = redTotal * 5;
        let greenx = greenTotal * 5;
        let bluex = blueTotal * 5;
        diagramDiv += ` ${word.word}: ${word.agree} <div style="float:left; height: 20px; width: ${redx}px; background-color: red;"></div>
                                                    <div style="float:left; height: 20px; width: ${greenx}px; background-color: green;"></div>
                                                    <div style="float:left; height: 20px; width: ${bluex}px; background-color: blue;"></div></br></br>`;
    }
    statShow();
}

function redDiagrams() {
    diagramDiv = '';
    let allWords = Array.from(allwordsList());    
    let redAboutAll = [];
    let redAboutRed = [];
    let redAboutGreen = [];
    let redAboutBlue = [];
    let redDisagree = disagree('red');

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
    redAboutAll.sort(sorting("amount"));
    redAboutRed.sort(sorting("amount"));
    redAboutGreen.sort(sorting("amount"));
    redAboutBlue.sort(sorting("amount"));
    diagramDiv = `</br>Red total</br><div class="column">`;
    for (let redTotal of redAboutAll) {
        let x = redTotal.amount * 10;
        diagramDiv += redTotal.word + '   ' + redTotal.amount + `<div style="height: 10px; width: ${x}px; background-color: red;"></div></br>`;
    }
    diagramDiv += `</div>Red about red</br><div class="column">`;
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
    diagramDiv += `</div> ${redDisagree}
    `;
    statShow();
}

function greenDiagrams() {
    diagramDiv = '';
    let allWords = Array.from(allwordsList());   
    let greenAboutAll = [];
    let greenAboutRed = [];
    let greenAboutGreen = [];
    let greenAboutBlue = [];
    let greenDisagree = disagree('green');

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
    greenAboutAll.sort(sorting("amount"));
    greenAboutRed.sort(sorting("amount"));
    greenAboutGreen.sort(sorting("amount"));
    greenAboutBlue.sort(sorting("amount"));
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
    diagramDiv += `</div> ${greenDisagree}
    `;
    statShow();
}

function blueDiagrams() {
    diagramDiv = '';
    let allWords = Array.from(allwordsList());
    let blueAboutAll = [];
    let blueAboutRed = [];
    let blueAboutGreen = [];
    let blueAboutBlue = [];
    let blueDisagree = disagree('blue');

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
    blueAboutAll.sort(sorting("amount"));
    blueAboutRed.sort(sorting("amount"));
    blueAboutGreen.sort(sorting("amount"));
    blueAboutBlue.sort(sorting("amount"));
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
    diagramDiv += `</div> ${blueDisagree}
    `;
    statShow();
}

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
    statShow();
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
    statShow();
}

//functions to sort and list information

//sorts and add together words based on color of the group they are mentioned in


function allwordsList() {
    let totalList = [];
    let testList = [];

    for (let wordToAdd of noteModel.notes) {
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
            for (let noteInformation of noteModel.notes) {
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

function sorting(valueToSortAfter) {
    let sortOrder = -1;
    return function (a, b) {
        if (a[valueToSortAfter] < b[valueToSortAfter]) {
            return -1 * sortOrder;
        } else if (a[valueToSortAfter] > b[valueToSortAfter]) {
            return 1 * sortOrder;
        } else {
            return 0 * sortOrder;
        }
    }
}


function disagree(color) {
    let wordList = Array.from(disagreeList(color));    
    diagramDiv += `<div class="column">Disagree red</br></br>`;
    for (let aboutR of wordList) {
        if (aboutR.disagreeRed > 0) {
            let x = aboutR.disagreeRed * 10;
            diagramDiv += aboutR.word + '   ' + aboutR.disagreeRed + `<div style="height: 10px; width: ${x}px; background-color: ${color};"></div></br>`;
        }
    }
    diagramDiv += `</br>Disagree green</br></br>`;
    for (let aboutG of wordList) {        
        if (aboutG.disagreeGreen > 0) {
            let x = aboutG.disagreeGreen * 10;
            diagramDiv += aboutG.word + '   ' + aboutG.disagreeGreen + `<div style="height: 10px; width: ${x}px; background-color: ${color};"></div></br>`;
        }        
    }
    diagramDiv += `</br>Disagree blue</br></br>`;
    for (let aboutB of wordList) {
        if (aboutB.disagreeBlue > 0) {
            let x = aboutB.disagreeBlue * 10;
            diagramDiv += aboutB.word + '   ' + aboutB.disagreeBlue + `<div style="height: 10px; width: ${x}px; background-color: ${color};"></div></br>`;
        }        
    }    

    return diagramDiv += '</div>';
}

//sorts and add together words based on color of the group they are mentioned in
function disagreeList(color) {
    let groupList = [];
    let groupResultList = [];
    let testWord = [];
    let collectedList = [];

    let disagreeRed = 0;
    let disagreeGreen = 0;
    let disagreeBlue = 0;

    //makes a list with all the groups from the selected color
    for (let groupsOfColor of model.groups) {
        if (groupsOfColor.color === color) {
            groupList.push(groupsOfColor.name);
        }
    }

    //making a list with all the notes by the selected color
    for (let currentGroup of groupList) {
        for (let words of noteModel.notes) {            
            if (words.group === currentGroup) {              
                groupResultList.push({ wordId: words.ID, word: words.content, disagree: words.disagree, about: words.aboutColor });
            }
        }
    }

    for (let wordToAdd of groupResultList) { //starts going through the list made above, selecting one word to check        
        if (wordToAdd.about === 'red') {
            disagreeRed = wordToAdd.disagree;
        } else if (wordToAdd.about === 'green') {
            disagreeGreen = wordToAdd.disagree;
        } else if (wordToAdd.about === 'blue') {
            disagreeBlue = wordToAdd.disagree;
        }         
        if (testWord.includes(wordToAdd.word) === false) { //makes sure the selected word has not been added before
            for (let noteInformation of groupResultList) { //goes through the same list once per word that has not been selected before
                if (wordToAdd.wordId != noteInformation.wordId && wordToAdd.word === noteInformation.word) { //make sure the note containing the word is different even though the word is the same
                    if (wordToAdd.about === 'red') {
                        disagreeRed = disagreeRed + noteInformation.disagree;
                    } else if (wordToAdd.about === 'green') {
                        disagreeGreen = disagreeGreen + noteInformation.disagree;
                    } else if (wordToAdd.about === 'blue') {
                        disagreeBlue = disagreeBlue + noteInformation.disagree;
                    }
                }
            }
            testWord.push(wordToAdd.word);
            collectedList.push({ word: wordToAdd.word, disagreeRed: disagreeRed, disagreeGreen: disagreeGreen, disagreeBlue: disagreeBlue });
        }
    }
    //for (let test1 of groupList) {
    //    diagramDiv += test1;
    //}
    //for (let test2 of noteModel.notes) {
    //    diagramDiv += test2.group;
    //}
    

    return collectedList;
}