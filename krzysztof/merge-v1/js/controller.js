const contentDiv = document.getElementById('content');

/*
testing code
*/

//switches users to test the correctness of content display depending on the color
//of the group and the user (possibility of agree and disagree)
function activeUser(activeUserName) {
    model.activeUser = activeUserName;
    show();
    //activates js to move notes after they are generated
    dragElement(document.getElementById('mydiv'));
}

/*
target code
*/

//shows the user page
function clickUser(activeView) {
    model.activeView = activeView;
    show();
}

//shows the group with its notes
function clickGroup(activeView, activeGroupName) {
    model.activeView = activeView;
    model.activeGroup = activeGroupName;
    show();
    //activates js to move notes after they are generated
    dragElement(document.getElementById('mydiv'));
}

//shows the statistics page
function clickStatistics(activeView, activeStatisticsName) {
    model.activeView = activeView;
    model.activeStatistics = activeStatisticsName;
    show();
}

//add or remove agree
function agree(noteNumber) {
    const note = model.notes.filter((n) => n.ID == noteNumber)[0];
    const agreeWithNoteIndex = note.agree.findIndex(
        (u) => u == model.activeUser,
    );
    if (agreeWithNoteIndex == -1) {
        note.agree.push(model.activeUser);
    } else {
        note.agree.splice(agreeWithNoteIndex, 1);
    }
    show();
}

/* 
FUNCTIONAL QUESTION:
1.  If the user creates a note, should it automatically be checked that
    he agrees with it? If there is no automate, there will be notes where
    there will be no agree and disagree and how to count them?
    
2.  How do I copy notes to user notes? Where to store them?
    How to recognize them and connect with users?

TECHNICAL QUESTIONS:
1.  How to use arrow function in onclick (for clickNavigation() )
2. 
*/
