const contentDiv = document.getElementById('content');

//shows the user page
function clickUser(activeView) {
    model.activeView = activeView;
    show();
}

async function createPersonalNote(text) {
    const activeUserToFirebase = model.user.find((u) => u.name == model.activeUser);    
    activeUserToFirebase.personalNotes.push(`${text}`);    
    try {
        await db.collection('user').doc(activeUserToFirebase.ID).update({
            personalNotes: activeUserToFirebase.personalNotes 
            
        });
    } catch (error) {
        console.error(error);
    }
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
    // Instead of adding the new note to the model we add it directly to the firebase
    // and since we are listening for changes in that collection it will automatically
    // update it for the user and whoever is on the same page
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
    //getNotesFromFirebase();
}

async function copyNote(noteID) {
    const userCopiedNotes = model.user.find((n) => n.name == model.activeUser);
    //this statement prevent to copy the note more than one time
    if (userCopiedNotes.copiedWords.find((n) => n == noteID) == undefined) {
        userCopiedNotes.copiedWords.push(noteID);
        // Update firebase with the same information that we added to the model
        try {
            await db.collection('user').doc(userCopiedNotes.ID).update({
                copiedWords: userCopiedNotes.copiedWords
            });
        } catch (error) {
            console.error(error);
        }        
        //getNotesFromFirebase();
    }
}

async function agree(noteID) {
    const userAgreeNotes = noteModel.notes.find((n) => n.ID == noteID);
    const activeUser = model.user.find((u) => u.name == model.activeUser);
    if (activeUser.color == 'red') {
        if (
            userAgreeNotes.redAgree.find((u) => u == model.activeUser) == undefined) {
            userAgreeNotes.redAgree.push(model.activeUser);            
            try {
                await db.collection('notes').doc(noteID).update({
                    redAgree: userAgreeNotes.redAgree
                });
            } catch (error) {
                console.error(error);
            }
            //getNotesFromFirebase();
        }
    } else if (activeUser.color == 'green') {
        if (
            userAgreeNotes.greenAgree.find((u) => u == model.activeUser) == undefined) {
            userAgreeNotes.greenAgree.push(model.activeUser);
            try {
                await db.collection('notes').doc(noteID).update({
                    greenAgree: userAgreeNotes.greenAgree
                });
            } catch (error) {
                console.error(error);
            }
            //getNotesFromFirebase();            
        }
    } else if (activeUser.color == 'blue') {
        if (
            userAgreeNotes.blueAgree.find((u) => u == model.activeUser) == undefined) {
            userAgreeNotes.blueAgree.push(model.activeUser);
            try {
                await db.collection('notes').doc(noteID).update({
                    blueAgree: userAgreeNotes.blueAgree
                });
            } catch (error) {
                console.error(error);
            }
            //getNotesFromFirebase();
        }
    }
    
}

async function disAgree(noteID) {    
    const userDisagreeNotes = noteModel.notes.find((n) => n.ID == noteID)
        .disagree;
    if (userDisagreeNotes.find((u) => u == model.activeUser) == undefined) {
        userDisagreeNotes.push(model.activeUser);

        try {
            await db.collection('notes').doc(noteID).update({                
                disagree: userDisagreeNotes
            });
        } catch (error) {
            console.error(error);
        }
        //getNotesFromFirebase();
    }    
}

async function createUser(userColor) {    
    try {
        await db.collection('user').add({
            name: `${model.newUserName}`,
            color: `${userColor}`,
            copiedWords: [],
            personalNotes: [],
        });
        await readFirebase();        
    } catch (error) {
        console.error(error);
    }    
    selectedUser(model.newUserName);
}

function selectedUser(userName) {    
    for (let nameOfUser of model.user) {        
        if (nameOfUser.name === userName) {            
            model.activeUser = nameOfUser.name;
            model.activeUserID = nameOfUser.ID;
        }
    }    
    show();
}
