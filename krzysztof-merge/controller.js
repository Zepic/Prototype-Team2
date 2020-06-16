const contentDiv = document.getElementById('content');

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
}

//shows the statistics page
function clickStatistics(activeView, activeStatisticsName) {
    model.activeView = activeView;
    model.activeStatistics = activeStatisticsName;
    show();
}

//add or remove agree
function agree(noteNumber) {
    // const note = model.notes.filter((n) => n.ID == noteNumber)[0];
    // const agreeWithNoteIndex = note.agree.findIndex(
    //     (u) => u == model.activeUser,
    // );
    // if (agreeWithNoteIndex == -1) {
    //     note.agree.push(model.activeUser);
    // } else {
    //     note.agree.splice(agreeWithNoteIndex, 1);
    // }
    // show();
}
