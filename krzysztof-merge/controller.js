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

//add or remove agree
function agree(noteNumber) {
    const note = noteModel.notes.filter((n) => n.ID == noteNumber)[0];
    const activeUserColor = model.users.filter(
        (u) => u.name == model.activeUser,
    )[0].color;
    if (activeUserColor === 'red') {
        note.redAgree === 0 ? note.redAgree++ : note.redAgree--;
    } else if (activeUserColor === 'green') {
        note.greenAgree === 0 ? note.greenAgree++ : note.greenAgree--;
    } else if (activeUserColor === 'blue') {
        note.blueAgree === 0 ? note.blueAgree++ : note.blueAgree--;
    }
    show();
}
//allows the people of the same color as the note is about to disagree
function disagree(){

}
//copy word to own page
function shop(){

}