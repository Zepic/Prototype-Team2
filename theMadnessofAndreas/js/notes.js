const noteModel = {
    notes: [
        {
            ID: 2,
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

async function getNotesFromFirebase() {
    try {
        let notesList = noteModel.notes;
        let groupList = model.groups;
        notesList.length = 0;
        groupList.lenght = 0;
        let notesDoc = await db.collection('notes').get();
        let groupsDoc = await db.collection('groups').get();
        notesDoc.forEach(
            function (noteDoc) {
                let notesObj = noteDoc.data();
                notesObj.ID = noteDoc.id;                
                notesList.push(notesObj);
            });
        groupsDoc.forEach(
            function (groupDoc) {
                let groupsObj = groupDoc.data();
                groupsObj.ID = groupDoc.id;
                groupList.push(groupsObj);
            });
        show();
    } catch (error) {
        console.error(error);
    }    
}