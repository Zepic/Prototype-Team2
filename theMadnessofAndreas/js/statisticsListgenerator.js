// JavaScript source code

//functions to sort and list information
//sorts and add together words based on color of the group they are mentioned in

function allwordsList() {
    let totalList = [];
    let testList = [];

    for (let wordToAdd of noteModel.notes) { //goes through the notes step by step
        let agreeRedAboutRed = 0; // all the different combinations for a color agreeing about another color
        let agreeGreenAboutRed = 0;
        let agreeBlueAboutRed = 0;
        let agreeRedAboutGreen = 0;
        let agreeGreenAboutGreen = 0;
        let agreeBlueAboutGreen = 0;
        let agreeRedAboutBlue = 0;
        let agreeGreenAboutBlue = 0;
        let agreeBlueAboutBlue = 0;

        // starts sorting the agrees based on which color it was about
        if (wordToAdd.aboutColor === 'red') {
            agreeRedAboutRed = wordToAdd.redAgree.length; //reads how many users have agreed and add them to the right combination
            agreeGreenAboutRed = wordToAdd.greenAgree.length;
            agreeBlueAboutRed = wordToAdd.blueAgree.length;
        } else if (wordToAdd.aboutColor === 'green') {
            agreeRedAboutGreen = wordToAdd.redAgree.length;
            agreeGreenAboutGreen = wordToAdd.greenAgree.length;
            agreeBlueAboutGreen = wordToAdd.blueAgree.length;
        } else if (wordToAdd.aboutColor === 'blue') {
            agreeRedAboutBlue = wordToAdd.redAgree.length;
            agreeGreenAboutBlue = wordToAdd.greenAgree.length;
            agreeBlueAboutBlue = wordToAdd.blueAgree.length;
        }
        let disagree = wordToAdd.disagree;
        // goes through the same list comparing word by word while making sure it does not add the same note twice
        if (testList.includes(wordToAdd.content) === false) {
            for (let noteInformation of noteModel.notes) {
                if (
                    wordToAdd.ID != noteInformation.ID &&
                    wordToAdd.content === noteInformation.content
                ) {
                    if (wordToAdd.aboutColor === 'red') {
                        agreeRedAboutRed =
                            agreeRedAboutRed + noteInformation.redAgree.length;
                        agreeGreenAboutRed =
                            agreeGreenAboutRed + noteInformation.greenAgree.length;
                        agreeBlueAboutRed =
                            agreeBlueAboutRed + noteInformation.blueAgree.length;
                    } else if (wordToAdd.aboutColor === 'green') {
                        agreeRedAboutGreen =
                            agreeRedAboutGreen + noteInformation.redAgree.length;
                        agreeGreenAboutGreen =
                            agreeGreenAboutGreen + noteInformation.greenAgree.length;
                        agreeBlueAboutGreen =
                            agreeBlueAboutGreen + noteInformation.blueAgree.length;
                    } else if (wordToAdd.aboutColor === 'blue') {
                        agreeRedAboutBlue =
                            agreeRedAboutBlue + noteInformation.redAgree.length;
                        agreeGreenAboutBlue =
                            agreeGreenAboutBlue + noteInformation.greenAgree.length;
                        agreeBlueAboutBlue =
                            agreeBlueAboutBlue + noteInformation.blueAgree.length;
                    }
                }
            }
            //the total amount of agrees
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
            testList.push(wordToAdd.content); // just a list that is used to doublecheck that information from an ID is not added more then once not sure if it is needed anymore
            // fills the new array
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
    return totalList; //returns it so it can fill the different arrays in the statistic functions
}

//sorts and add together words based on color of the group they are mentioned in
function disagreeList(color) {
    let testWord = [];
    let collectedList = [];
    console.log(color);
    let disagreeColor = 0;


    for (let wordToAdd of noteModel.notes) {
        //starts going through the list made above, selecting one word to check
        if (wordToAdd.aboutColor === color) {
            disagreeColor = wordToAdd.disagree.length;
        }
        if (testWord.includes(wordToAdd.content) === false) {
            //makes sure the selected word has not been added before
            for (let noteInformation of noteModel.notes) {
                //goes through the same list once per word that has not been selected before
                if (wordToAdd.ID != noteInformation.ID && wordToAdd.content === noteInformation.content && noteInformation.aboutColor === color && noteInformation.disagree.length > 0) {
                    disagreeColor = disagreeColor + noteInformation.disagree.length;                    
                }
            }
            if (wordToAdd.aboutColor === color && disagreeColor > 0) {
                console.log(wordToAdd.aboutColor);
                testWord.push(wordToAdd.content);
                collectedList.push({ word: wordToAdd.content, disagree: disagreeColor, });
            }            
        }
        
    }
    return collectedList;
}

// a function that ranks the content within the arrays of object based on the value we choose to send into it
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