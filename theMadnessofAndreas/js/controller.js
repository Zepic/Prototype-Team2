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

async function addNote(noteContent) {
    try {
        await db.collection('notes').add({
            content: `${noteContent}`,
            aboutColor: `${model.activeAboutColor}`,
            group: `${model.activeGroup}`,
            redAgree: [],
            greenAgree: [],
            blueAgree: [],
            disagree: [], //['Knut'],
            posX: 600, //x
            posY: 250, //y
            zIndex: 1
        });
    } catch (error) {
        console.error(error);
    }
    noteModel.notes.push({
        ID: noteModel.notes.length + 1,
        content: `${noteContent}`,
        aboutColor: `${model.activeAboutColor}`,
        group: `${model.activeGroup}`,
        redAgree: [],
        greenAgree: [],
        blueAgree: [],
        disagree: [], //['Knut'],
        posX: 600, //x
        posY: 250, //y
        zIndex: 1
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

async function disAgree(noteID) {
    const userDisagreeNotes = noteModel.notes.find((n) => n.ID == noteID)
        .disagree;
    if (userDisagreeNotes.find((u) => u == model.activeUser) == undefined) {
        userDisagreeNotes.push(model.activeUser);
        
    }
    try {
        await db.collection('notes').doc(noteID).update({
            disagree: model.activeUser,
        });
    } catch (error) {
        console.error(error);
    }
}
