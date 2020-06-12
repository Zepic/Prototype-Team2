const contentDiv = document.getElementById('content');

//testing code
function activeUser(activeUserName) {
    model.activeUser = activeUserName;
    show();
    dragElement(document.getElementById('mydiv'));
}

//target code
function clickUser(activeView) {
    model.activeView = activeView;
    show();
}

function clickGroup(activeView, activeGroupName) {
    model.activeView = activeView;
    model.activeGroup = activeGroupName;
    show();
    dragElement(document.getElementById('mydiv'));
}

function clickStatistics(activeView, activeStatisticsName) {
    model.activeView = activeView;
    model.activeStatistics = activeStatisticsName;
    show();
}
