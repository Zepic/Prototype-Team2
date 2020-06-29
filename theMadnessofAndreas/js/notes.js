const noteModel = {
    notes: [
        {
            ID: 1,
            content: 'Social',
            aboutColor: 'red',
            group: 'red 1',
            redAgree: [],
            greenAgree: [],
            blueAgree: [],
            disagree: [],
            posX: 521,
            posY: 275,
            zIndex: 1,
        },
        
    ],
};

async function readFirebase() {
    try {        
        let groupList = model.groups;
        let userList = model.user;        
        groupList.lenght = 0;
        userList.length = 0;        
        let groupsDoc = await db.collection('groups').get();
        let usersDoc = await db.collection('user').get();        
        groupsDoc.forEach(
            function (groupDoc) {
                let groupsObj = groupDoc.data();
                groupsObj.ID = groupDoc.id;
                groupList.push(groupsObj);
            });
        usersDoc.forEach(
            function (userDoc) {
                let userObj = userDoc.data();
                userObj.ID = userDoc.id;
                userList.push(userObj);
            });
        getNotesFromFirebase();
    } catch (error) {
        console.error(error);
    }
}

async function getNotesFromFirebase() {   
    try {  
        await db.collection('notes').onSnapshot(function (querySnapshot) {            
            let notesList = noteModel.notes;
            notesList.length = 0;
            
            querySnapshot.forEach(function (noteDoc) {
                let notesObj = noteDoc.data();
                notesObj.ID = noteDoc.id;
                notesList.push(notesObj);
            });            
            show();            
        });
    } catch (error) {
        console.error(error);
    }
}