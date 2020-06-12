// JavaScript source code

let selectedToShow = '';



function statShow() {
    let diagramDiv = '';

    let redList = Array.from(createList('red')); //fills the arrays from the functions
    let greenList = Array.from(createList('green'));
    let blueList = Array.from(createList('blue'));
    let allWords = Array.from(allwordsList());

    redList.sort(sorting("redAgree")); //sorts the list using the number of agree
    greenList.sort(sorting("greenAgree"));
    blueList.sort(sorting("blueAgree"));
    allWords.sort(sorting("agree"));


    //for testing code, works but have to be changed to make sense for others. Renaming things so they better reflect what they do.
    //I also need to move them into their own function, the one for red, green, blue should be managable with a single function        

    if (selectedToShow === 'topList') {
        diagramDiv = '</br>All words</br>';

        for (let test of allWords) {
            let redx = 0;
            let greenx = 0;
            let bluex = 0;

            for (let redWord of redList) {
                if (redWord.word === test.word) {
                    redx = redWord.redAgree * 5;
                }
            }
            for (let greenWord of greenList) {
                if (greenWord.word === test.word) {
                    greenx = greenWord.greenAgree * 5;
                }
            }
            for (let blueWord of blueList) {
                if (blueWord.word === test.word) {
                    bluex = blueWord.blueAgree * 5;
                }
            }
            diagramDiv += ` ${test.word}: ${test.agree} <div style="float:left; height: 20px; width: ${redx}px; background-color: red;"></div>
                                                                              <div style="float:left; height: 20px; width: ${greenx}px; background-color: green;"></div>
                                                                              <div style="float:left; height: 20px; width: ${bluex}px; background-color: blue;"></div></br></br>`;
        }
    } else if (selectedToShow === 'topRedList') {
        diagramDiv = '</br>Red total</br><div class="column">';
        for (let test of redList) {
            let x = test.redAgree * 10;
            diagramDiv += test.word + '   ' + test.redAgree + `<div style="height: 10px; width: ${x}px; background-color: red;"></div></br>`;
        }
        diagramDiv += '</div></br>Red about red</br><div class="column">';
        for (let test of redList) {
            let x = test.redAgree * 10;

            if (test.about === 'red') {
                diagramDiv += test.word + '   ' + test.redAgree + `<div style="height: 10px; width: ${x}px; background-color: red;"></div></br>`;
            }
        }
        diagramDiv += '</br>Red about green</br>';
        for (let test of redList) {
            let x = test.redAgree * 10;

            if (test.about === 'green') {
                diagramDiv += test.word + '   ' + test.redAgree + `<div style="height: 10px; width: ${x}px; background-color: red;"></div></br>`;
            }
        }
        diagramDiv += '</br>Red about blue</br>';
        for (let test of redList) {
            let x = test.redAgree * 10;

            if (test.about === 'blue') {
                diagramDiv += test.word + '   ' + test.redAgree + `<div style="height: 10px; width: ${x}px; background-color: red;"></div></br>`;
            }
        }
        diagramDiv += '</div>';

    } else if (selectedToShow === 'topGreenList') {
        diagramDiv = '</br>Green total</br><div class="column">';
        for (let test of greenList) {
            let x = test.greenAgree * 10;
            diagramDiv += test.word + '   ' + test.greenAgree + `<div style="height: 10px; width: ${x}px; background-color: green"></div></br>`;
        }
        diagramDiv += '</div></br>Green about green</br><div class="column">';
        for (let test of greenList) {
            let x = test.greenAgree * 10;

            if (test.about === 'green') {
                diagramDiv += test.word + '   ' + test.greenAgree + `<div style="height: 10px; width: ${x}px; background-color: green;"></div></br>`;
            }
        }
        diagramDiv += '</br>Green about red</br>';
        for (let test of greenList) {
            let x = test.greenAgree * 10;

            if (test.about === 'red') {
                diagramDiv += test.word + '   ' + test.greenAgree + `<div style="height: 10px; width: ${x}px; background-color: green;"></div></br>`;
            }
        }
        diagramDiv += '</br>Green about blue</br>';
        for (let test of greenList) {
            let x = test.greenAgree * 10;

            if (test.about === 'blue') {
                diagramDiv += test.word + '   ' + test.greenAgree + `<div style="height: 10px; width: ${x}px; background-color: green;"></div></br>`;
            }
        }
        diagramDiv += '</div>';

    } else if (selectedToShow === 'topBlueList') {
        diagramDiv = '</br>Blue total</br><div class="column">';
        for (let test of blueList) {
            let x = test.blueAgree * 10;
            diagramDiv += test.word + '   ' + test.blueAgree + `<div style="height: 10px; width: ${x}px; background-color: blue;"></div></br>`;
        }
        diagramDiv += '</div></br>Blue about blue</br><div class="column">';
        for (let test of blueList) {
            let x = test.blueAgree * 10;

            if (test.about === 'blue') {
                diagramDiv += test.word + '   ' + test.blueAgree + `<div style="height: 10px; width: ${x}px; background-color: blue;"></div></br>`;
            }
        }
        diagramDiv += '</br>Blue about green</br>';
        for (let test of blueList) {
            let x = test.blueAgree * 10;

            if (test.about === 'green') {
                diagramDiv += test.word + '   ' + test.blueAgree + `<div style="height: 10px; width: ${x}px; background-color: blue;"></div></br>`;
            }
        }
        diagramDiv += '</br>Blue about red</br>';
        for (let test of blueList) {
            let x = test.blueAgree * 10;

            if (test.about === 'red') {
                diagramDiv += test.word + '   ' + test.blueAgree + `<div style="height: 10px; width: ${x}px; background-color: blue;"></div></br>`;
            }
        }
        diagramDiv += '</div>';
    }

    //the html thingamacstuff

    contentDiv.innerHTML = `<div>
                <button onclick="selectDiagram('topList')">De ord flest er enig i</button>
                <button onclick="selectDiagram('topRedList')">Ord fra rød</button>
                <button onclick="selectDiagram('topGreenList')">Ord fra grønn</button>
                <button onclick="selectDiagram('topBlueList')">Ord fra blå</button>
                <div class row>${diagramDiv}</div>
                </div>`;

}


//functions to sort and list information

//sorts and add together words based on color of the group they are mentioned in
function createList(color) {
    let groupList = [];
    let groupResultList = [];
    let testWord = [];
    let collectedList = [];

    //makes a list with all the groups from the selected color
    for (let groupsOfColor of model.groups) {
        if (groupsOfColor.color === color) {
            groupList.push(groupsOfColor.name);
        }
    }

    //making a list with all the notes by the selected color
    for (let currentGroup of groupList) {
        for (let words of model.notes) {
            if (words.group === currentGroup) {
                groupResultList.push({ word: words.content, redAgree: words.redAgree, greenAgree: words.greenAgree, blueAgree: words.blueAgree, disagree: words.disagree, about: words.aboutColor, wordId: words.ID });
            }
        }
    }

    for (let wordToAdd of groupResultList) { //starts going through the list made above, selecting one word to check
        let agreeRed = wordToAdd.redAgree;
        let agreeGreen = wordToAdd.greenAgree;
        let agreeBlue = wordToAdd.blueAgree;
        let disagree = wordToAdd.disagree;
        if (testWord.includes(wordToAdd.word) === false) { //makes sure the selected word has not been added before
            for (let noteInformation of groupResultList) { //goes through the same list once per word that has not been selected before
                if (wordToAdd.wordId != noteInformation.wordId && wordToAdd.word === noteInformation.word) { //make sure the note containing the word is different even though the word is the same
                    agreeRed = agreeRed + noteInformation.redAgree;
                    agreeGreen = agreeGreen + noteInformation.greenAgree;
                    agreeBlue = agreeBlue + noteInformation.blueAgree;
                    disagree = disagree + noteInformation.disagree;
                }
            }
            testWord.push(wordToAdd.word);
            collectedList.push({ word: wordToAdd.word, redAgree: agreeRed, greenAgree: agreeGreen, blueAgree: agreeBlue, disagree: disagree, about: wordToAdd.about });
        }
    }

    return collectedList;
}

function allwordsList() {
    let totalList = [];
    let testList = [];


    for (let wordToAdd of model.notes) {
        let agreeRed = wordToAdd.redAgree;
        let agreeGreen = wordToAdd.greenAgree;
        let agreeBlue = wordToAdd.blueAgree;
        let disagree = wordToAdd.disagree;
        if (testList.includes(wordToAdd.content) === false) {
            for (let noteInformation of model.notes) {
                if (wordToAdd.ID != noteInformation.ID && wordToAdd.content === noteInformation.content) {
                    agreeRed = agreeRed + noteInformation.redAgree;
                    agreeGreen = agreeGreen + noteInformation.greenAgree;
                    agreeBlue = agreeBlue + noteInformation.blueAgree;
                    disagree = disagree + noteInformation.disagree;
                }
            }
            let agree = agreeRed + agreeGreen + agreeBlue;
            testList.push(wordToAdd.content);
            totalList.push({ word: wordToAdd.content, agree: agree, disagree: disagree, about: wordToAdd.aboutColor });
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
    selectedToShow = selected;
    statShow();
}