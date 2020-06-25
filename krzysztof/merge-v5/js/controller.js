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
    const userCopiedNotes = model.users.find((n) => n.name == model.activeUser)
        .copiedNotes;
    //this statement prevent to copy the note more than one time
    if (userCopiedNotes.find((n) => n == noteID) == undefined) {
        userCopiedNotes.push(noteID);
    }
}

function agree(noteID) {
    const userAgreeNotes = noteModel.notes.find((n) => n.ID == noteID);
    const activeUser = model.users.find((u) => u.name == model.activeUser);
    if (activeUser.color == 'red') {
        if (
            userAgreeNotes.redAgree.find((u) => u == model.activeUser) ==
            undefined
        ) {
            userAgreeNotes.redAgree.push(model.activeUser);
        }
    } else if (activeUser.color == 'green') {
        if (
            userAgreeNotes.greenAgree.find((u) => u == model.activeUser) ==
            undefined
        ) {
            userAgreeNotes.greenAgree.push(model.activeUser);
        }
    } else if (activeUser.color == 'blue') {
        if (
            userAgreeNotes.blueAgree.find((u) => u == model.activeUser) ==
            undefined
        ) {
            userAgreeNotes.blueAgree.push(model.activeUser);
        }
    }
}

function disAgree(noteID) {
    const userDisagreeNotes = noteModel.notes.find((n) => n.ID == noteID)
        .disagree;
    if (userDisagreeNotes.find((u) => u == model.activeUser) == undefined) {
        userDisagreeNotes.push(model.activeUser);
    }
}
