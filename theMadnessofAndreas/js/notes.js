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

async function readFirebase() { // I think function with await have to be async or it will scream bloddy murder
    try {        
        let groupList = model.groups;
        let userList = model.user;        
        groupList.lenght = 0;
        userList.length = 0;        
        let groupsDoc = await db.collection('groups').get(); // a variable for collecting all the documents in the groups collection
        let usersDoc = await db.collection('user').get();        
        groupsDoc.forEach(
            function (groupDoc) {
                let groupsObj = groupDoc.data(); //collect all the information in the document and add it to an object
                groupsObj.ID = groupDoc.id; //collect the firebase id and add it to the object as ID, we need that ID to change in specific documents in firebase
                groupList.push(groupsObj); //add the information to the model
            });
        usersDoc.forEach(
            function (userDoc) {
                let userObj = userDoc.data();
                userObj.ID = userDoc.id;
                userList.push(userObj);
                console.log(userObj);
            });
        getNotesFromFirebase();
    } catch (error) {
        console.error(error);
    }
}

async function getNotesFromFirebase() {   
    try {  // like above this reads a collection from firebase, by using the onSnapshot and querySnapshot it 
        // also starts to listen for changes made in the notes collection so it can update the things that deal with notes whenever there are changes in that collection
        await db.collection('notes').onSnapshot(function (querySnapshot) {     
            let notesList = noteModel.notes;
            notesList.length = 0;
            
            querySnapshot.forEach(function (noteDoc) {
                let notesObj = noteDoc.data();
                notesObj.ID = noteDoc.id;
                notesList.push(notesObj);
            });            
            show();     // Now that the model is filled, and our listener is active, we call show       
        });
    } catch (error) {
        console.error(error);
    }
}