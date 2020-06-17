// JavaScript source code
let diagramDiv = '';

function statShow() {
    //contentDiv.innerHTML = `<div> // make problem
    //function content() need data as HTML
    //function statShow() should not change content DIV
    //function statShow() should change diagramDIV
    //this way statShow() will not change any other content like navigation
    //only show() function from View can show other statics views
    return `<div>
                <button onclick="showAll()">Most agreed to words</button>
                <button onclick="redDiagrams()">Agreed about red</button>
                <button onclick="greenDiagrams()">Agreed about green</button>
                <button onclick="blueDiagrams()">Agreed about blue</button>
                <button onclick="wordCircles()">demo 1</button>
                <button onclick="wordFlower()">demo 2</button>                
                <div class="row">${diagramDiv}</div>
                </div>`;
}

function showAll() {
    diagramDiv = '<div style="background-color:white; border: solid black;"></br>All words</br>';
    let allWords = Array.from(allwordsList());
    allWords.sort(sorting('agree'));

    for (let word of allWords) {
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
    diagramDiv += '</div>';
    show();
}

function redDiagrams() {
    diagramDiv = '';
    let allWords = Array.from(allwordsList());
    let redAboutAll = [];
    let redAboutRed = [];
    let greenAboutRed = [];
    let blueAboutRed = [];
    let redDisagree = disagree('red');

    for (let redWords of allWords) {
        if (
            redWords.redAgreeRed > 0 ||
            redWords.greenAgreeRed > 0 ||
            redWords.blueAgreeRed > 0
        ) {
            let total =
                redWords.redAgreeRed +
                redWords.greenAgreeRed +
                redWords.blueAgreeRed;
            redAboutAll.push({ word: redWords.word, amount: total });
            if (redWords.redAgreeRed > 0) {
                redAboutRed.push({
                    word: redWords.word,
                    amount: redWords.redAgreeRed,
                });
            }
            if (redWords.greenAgreeRed > 0) {
                greenAboutRed.push({
                    word: redWords.word,
                    amount: redWords.greenAgreeRed,
                });
            }
            if (redWords.blueAgreeRed > 0) {
                blueAboutRed.push({
                    word: redWords.word,
                    amount: redWords.blueAgreeRed,
                });
            }
        }
    }
    redAboutAll.sort(sorting('amount'));
    redAboutRed.sort(sorting('amount'));
    greenAboutRed.sort(sorting('amount'));
    blueAboutRed.sort(sorting('amount'));
    diagramDiv = `<div class="column" style="background-color:white; border: solid black;"></br>Red total</br>`;
    for (let redTotal of redAboutAll) {
        let x = redTotal.amount;
        diagramDiv +=
            redTotal.word +
            '   ' +
            redTotal.amount +
            `<div style="height: 10px; width: ${x}%; background-color: red;"></div></br>`;
    }
    diagramDiv += `</div><div class="column" style="background-color:white; border: solid black;">Red about red</br>`;
    for (let redAboutSelf of redAboutRed) {
        let x = redAboutSelf.amount;
        diagramDiv +=
            redAboutSelf.word +
            '   ' +
            redAboutSelf.amount +
            `<div style="height: 10px; width: ${x}%; background-color: red;"></div></br>`;
    }
    diagramDiv += `</br>Green about red</br>`;
    for (let redAboutG of greenAboutRed) {
        let x = redAboutG.amount;

        diagramDiv +=
            redAboutG.word +
            '   ' +
            redAboutG.amount +
            `<div style="height: 10px; width: ${x}%; background-color: green;"></div></br>`;
    }
    diagramDiv += `</br>Blue about red</br>`;
    for (let redAboutB of blueAboutRed) {
        let x = redAboutB.amount;
        diagramDiv +=
            redAboutB.word +
            '   ' +
            redAboutB.amount +
            `<div style="height: 10px; width: ${x}%; background-color: blue;"></div></br>`;
    }
    diagramDiv += `</div> ${redDisagree}
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
            greenAboutAll.push({ word: greenWords.word, amount: total });
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
    diagramDiv = `<div class="column" style="background-color:white; border: solid black;"></br>Green total</br>`;
    for (let greenTotal of greenAboutAll) {
        let x = greenTotal.amount;
        diagramDiv +=
            greenTotal.word +
            '   ' +
            greenTotal.amount +
            `<div style="height: 10px; width: ${x}%; background-color: green;"></div></br>`;
    }
    diagramDiv += `</div><div class="column" style="background-color:white; border: solid black;"></br>Red about green</br>`;
    for (let greenAboutR of redAboutGreen) {
        let x = greenAboutR.amount;
        diagramDiv +=
            greenAboutR.word +
            '   ' +
            greenAboutR.amount +
            `<div style="height: 10px; width: ${x}%; background-color: red;"></div></br>`;
    }
    diagramDiv += `</br>Green about green</br>`;
    for (let greenAboutG of greenAboutGreen) {
        let x = greenAboutG.amount;

        diagramDiv +=
            greenAboutG.word +
            '   ' +
            greenAboutG.amount +
            `<div style="height: 10px; width: ${x}%; background-color: green;"></div></br>`;
    }
    diagramDiv += `</br>Blue about green</br>`;
    for (let greenAboutB of blueAboutGreen) {
        let x = greenAboutB.amount;
        diagramDiv +=
            greenAboutB.word +
            '   ' +
            greenAboutB.amount +
            `<div style="height: 10px; width: ${x}%; background-color: blue;"></div></br>`;
    }
    diagramDiv += `</div> ${greenDisagree}
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
            blueAboutAll.push({ word: blueWords.word, amount: total });
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
    diagramDiv = `<div class="column" style="background-color:white; border: solid black;"></br>Blue total</br>`;
    for (let blueTotal of blueAboutAll) {
        let x = blueTotal.amount;
        diagramDiv +=
            blueTotal.word +
            '   ' +
            blueTotal.amount +
            `<div style="height: 10px; width: ${x}%; background-color: blue;"></div></br>`;
    }
    diagramDiv += `</div><div class="column" style="background-color:white; border: solid black;"></br>Red about blue</br>`;
    for (let blueAboutR of redAboutBlue) {
        let x = blueAboutR.amount;
        diagramDiv +=
            blueAboutR.word +
            '   ' +
            blueAboutR.amount +
            `<div style="height: 10px; width: ${x}%; background-color: red;"></div></br>`;
    }
    diagramDiv += `</br>Green about blue</br>`;
    for (let blueAboutG of greenAboutBlue) {
        let x = blueAboutG.amount;

        diagramDiv +=
            blueAboutG.word +
            '   ' +
            blueAboutG.amount +
            `<div style="height: 10px; width: ${x}%; background-color: green;"></div></br>`;
    }
    diagramDiv += `</br>Blue about blue</br>`;
    for (let blueAboutB of blueAboutBlue) {
        let x = blueAboutB.amount;
        diagramDiv +=
            blueAboutB.word +
            '   ' +
            blueAboutB.amount +
            `<div style="height: 10px; width: ${x}%; background-color: blue;"></div></br>`;
    }
    diagramDiv += `</div> ${blueDisagree}
    `;
    show();
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

    diagramDiv = `<div style="width: 60%px; height: 60%px;">
        <div style="border: solid red; border-radius: 50%; width: 33%; height: 65%; position:absolute; z-index: -1; left: 25%; top: 6%;"></div>
        <div style="border: solid green; border-radius: 50%; width: 33%; height: 65%; position:absolute; left: 15%; top: 36%;"></div>
        <div style="border: solid blue; border-radius: 50%; width: 33%; height: 65%; position:absolute; z-index: 1; left: 35%; top: 36%;"></div>
        <div style="position:absolute; z-index: 2; left: 40%; top: 46%;">${allColors}</div>
        <div style="position:absolute; z-index: 2; left: 30%; top: 39%;">${redAndGreen}</div>
        <div style="position:absolute; z-index: 2; left: 50%; top: 39%;">${redAndBlue}</div>
        <div style="position:absolute; z-index: 2; left: 40%; top: 72%;">${greenAndBlue}</div>
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
    show();
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
                if (
                    wordToAdd.ID != noteInformation.ID &&
                    wordToAdd.content === noteInformation.content
                ) {
                    if (wordToAdd.aboutColor === 'red') {
                        agreeRedAboutRed =
                            agreeRedAboutRed + noteInformation.redAgree;
                        agreeGreenAboutRed =
                            agreeGreenAboutRed + noteInformation.greenAgree;
                        agreeBlueAboutRed =
                            agreeBlueAboutRed + noteInformation.blueAgree;
                    } else if (wordToAdd.aboutColor === 'green') {
                        agreeRedAboutGreen =
                            agreeRedAboutGreen + noteInformation.redAgree;
                        agreeGreenAboutGreen =
                            agreeGreenAboutGreen + noteInformation.greenAgree;
                        agreeBlueAboutGreen =
                            agreeBlueAboutGreen + noteInformation.blueAgree;
                    } else if (wordToAdd.aboutColor === 'blue') {
                        agreeRedAboutBlue =
                            agreeRedAboutBlue + noteInformation.redAgree;
                        agreeGreenAboutBlue =
                            agreeGreenAboutBlue + noteInformation.greenAgree;
                        agreeBlueAboutBlue =
                            agreeBlueAboutBlue + noteInformation.blueAgree;
                    }
                }
            }
            let agree =
                agreeRedAboutRed +
                agreeGreenAboutRed +
                agreeBlueAboutRed +
                agreeRedAboutGreen +
                agreeGreenAboutGreen +
                agreeBlueAboutGreen +
                agreeRedAboutBlue +
                agreeGreenAboutBlue +
                agreeBlueAboutBlue;
            testList.push(wordToAdd.content);
            totalList.push({
                word: wordToAdd.content,
                agree: agree,
                redAgreeRed: agreeRedAboutRed,
                redAgreeGreen: agreeRedAboutGreen,
                redAgreeBlue: agreeRedAboutBlue,
                greenAgreeRed: agreeGreenAboutRed,
                greenAgreeGreen: agreeGreenAboutGreen,
                greenAgreeBlue: agreeGreenAboutBlue,
                blueAgreeRed: agreeBlueAboutRed,
                blueAgreeGreen: agreeBlueAboutGreen,
                blueAgreeBlue: agreeBlueAboutBlue,
                disagree: disagree,
                about: wordToAdd.aboutColor,
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
    };
}

function disagree(color) {
    let wordList = Array.from(disagreeList(color));
    diagramDiv += `<div class="column">Disagree red</br></br>`;
    for (let aboutR of wordList) {
        if (aboutR.disagreeRed > 0) {
            let x = aboutR.disagreeRed * 10;
            diagramDiv +=
                aboutR.word +
                '   ' +
                aboutR.disagreeRed +
                `<div style="height: 10px; width: ${x}px; background-color: ${color};"></div></br>`;
        }
    }
    diagramDiv += `</br>Disagree green</br></br>`;
    for (let aboutG of wordList) {
        if (aboutG.disagreeGreen > 0) {
            let x = aboutG.disagreeGreen * 10;
            diagramDiv +=
                aboutG.word +
                '   ' +
                aboutG.disagreeGreen +
                `<div style="height: 10px; width: ${x}px; background-color: ${color};"></div></br>`;
        }
    }
    diagramDiv += `</br>Disagree blue</br></br>`;
    for (let aboutB of wordList) {
        if (aboutB.disagreeBlue > 0) {
            let x = aboutB.disagreeBlue * 10;
            diagramDiv +=
                aboutB.word +
                '   ' +
                aboutB.disagreeBlue +
                `<div style="height: 10px; width: ${x}px; background-color: ${color};"></div></br>`;
        }
    }

    return (diagramDiv += '</div>');
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
                groupResultList.push({
                    wordId: words.ID,
                    word: words.content,
                    disagree: words.disagree,
                    about: words.aboutColor,
                });
            }
        }
    }

    for (let wordToAdd of groupResultList) {
        //starts going through the list made above, selecting one word to check
        if (wordToAdd.about === 'red') {
            disagreeRed = wordToAdd.disagree;
        } else if (wordToAdd.about === 'green') {
            disagreeGreen = wordToAdd.disagree;
        } else if (wordToAdd.about === 'blue') {
            disagreeBlue = wordToAdd.disagree;
        }
        if (testWord.includes(wordToAdd.word) === false) {
            //makes sure the selected word has not been added before
            for (let noteInformation of groupResultList) {
                //goes through the same list once per word that has not been selected before
                if (
                    wordToAdd.wordId != noteInformation.wordId &&
                    wordToAdd.word === noteInformation.word
                ) {
                    //make sure the note containing the word is different even though the word is the same
                    if (wordToAdd.about === 'red') {
                        disagreeRed = disagreeRed + noteInformation.disagree;
                    } else if (wordToAdd.about === 'green') {
                        disagreeGreen =
                            disagreeGreen + noteInformation.disagree;
                    } else if (wordToAdd.about === 'blue') {
                        disagreeBlue = disagreeBlue + noteInformation.disagree;
                    }
                }
            }
            testWord.push(wordToAdd.word);
            collectedList.push({
                word: wordToAdd.word,
                disagreeRed: disagreeRed,
                disagreeGreen: disagreeGreen,
                disagreeBlue: disagreeBlue,
            });
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
