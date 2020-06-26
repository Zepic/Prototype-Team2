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
    

    getNotesFromFirebase();
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
    updateNotesAgreeAndDisagree(noteID);
}

function disAgree(noteID) {
    console.log('kom hit 1');
    console.log(noteID);
    
    const userDisagreeNotes = noteModel.notes.find((n) => n.ID == noteID)
        .disagree;
    if (userDisagreeNotes.find((u) => u == model.activeUser) == undefined) {
        userDisagreeNotes.push(model.activeUser);
    }
    
    updateNotesAgreeAndDisagree(noteID);
}

async function updateNotesAgreeAndDisagree(noteID) {
    console.log('kom hit 3');
    console.log(noteID);
    for (let theNotesID of noteModel.notes) {
        
        if (theNotesID.ID === noteID) {
            console.log('kom hit 4');
            try {
                await db.collection('notes').doc(noteID).set({
                    content: theNotesID.content,
                    aboutColor: theNotesID.aboutColor,
                    group: theNotesID.group,
                    redAgree: theNotesID.redAgree,
                    greenAgree: theNotesID.greenAgree,
                    blueAgree: theNotesID.blueAgree,
                    disagree: theNotesID.disagree, //['Knut'],
                    posX: theNotesID.posX, //x
                    posY: theNotesID.posY, //y
                    zIndex: theNotesID.zIndex
                });

            } catch (error) {
                console.error(error);
            }
            getNotesFromFirebase();
        }
        
    }
    
}