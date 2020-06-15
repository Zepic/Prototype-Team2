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

/* 
QUESTIONS:
1. How to use arrow function in onclick (for clickNavigation() )
2. 
*/
