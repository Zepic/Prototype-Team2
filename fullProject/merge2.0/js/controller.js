const contentDiv = document.getElementById('content');

//shows the user page
function clickUser(activeView) {
    model.activeView = activeView;
    show();
}

function createPersonalNote(text){
    model.user
    .filter((u) => u.name == model.activeUser)
    [0].personalNotes.push({content: `${text}`});
    show();
}

//shows the group with its notes
function clickGroup(activeView, activeGroupName, aboutColor) {
    const colorList = ['blue','green','red',]
    if(aboutColor == 'blue'){
        model.activeAboutColor = colorList[1]
    }
    else if (aboutColor == 'green') {
        model.activeAboutColor = colorList[2]
    }
    else if (aboutColor == 'red') {
        model.activeAboutColor = colorList[0]
    }
    model.activeView = activeView;
    model.activeGroup = activeGroupName;
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
    const userCopiedNotes = model.user.find((n) => n.name == model.activeUser)
        .copiedNotes;
    //this statement prevent to copy the note more than one time
    if (userCopiedNotes.find((n) => n == noteID) == undefined) {
        userCopiedNotes.push(noteID);
    }
}

function agree(noteID) {
    const userAgreeNotes = noteModel.notes.find((n) => n.ID == noteID);
    const activeUser = model.user.find((u) => u.name == model.activeUser);
    if (activeUser.color == 'red') {
        userAgreeNotes.redAgree.push(model.activeUser);
    } else if (activeUser.color == 'green') {
        userAgreeNotes.greenAgree.push(model.activeUser);
    } else if (activeUser.color == 'blue') {
        userAgreeNotes.blueAgree.push(model.activeUser);
    }
}

function disAgree(noteID) {
    const userDisagreeNotes = noteModel.notes.find((n) => n.ID == noteID)
        .disagree;
    if (userDisagreeNotes.find((u) => u == model.activeUser) == undefined) {
        userDisagreeNotes.push(model.activeUser);
    }
}
