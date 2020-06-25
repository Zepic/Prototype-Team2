const contentDiv = document.getElementById('content');

//shows the user page
function clickUser(activeView) {
    model.activeView = activeView;
    show();
}

//shows the group with its notes
function clickGroup(activeView, activeGroupName, aboutColor) {
    model.activeView = activeView;
    model.activeGroup = activeGroupName;
    model.activeAboutColor = aboutColor;
    show();
}

//shows the statistics page
function clickStatistics(activeView) {
    model.activeView = activeView;
    show();
}

function addNote(noteContent) {
    noteModel.notes.push({
        ID: noteModel.notes.length + 1,
        content: `${noteContent}`,
        aboutColor: `${model.activeAboutColor}`,
        group: `${model.activeGroup}`,
        redAgree: 0,
        greenAgree: 0,
        blueAgree: 0,
        disagree: 0, //['Knut'],
        posX: 600, //x
        posY: 250, //y
        zIndex: 1,
    });
    show();
}

function copyNote(noteID) {
    console.log('note copied');
    const userCopiedNotes = model.users.find((n) => n.name == model.activeUser)
        .copiedNotes;
    //this statement prevent to copy the note more than one time
    if (userCopiedNotes.find((n) => n == noteID) == undefined) {
        userCopiedNotes.push(noteID);
    }
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

function disAgree(noteID) {
    console.log('disagreed');
    noteModel.notes.find((n) => n.ID == noteID).disagree.push(model.activeUser);
}
