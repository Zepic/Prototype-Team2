function addNote(input){
    noteModel.notes.push({
        ID: noteModel.notes.length +1,
        content: `${input}`,
        aboutColor: "red",
        group: 'red 1',
        redAgree: 3,//['Terje', 'Per', 'Espen'],
        greenAgree: 0,
        blueAgree: 0,
        disagree: 0, //['Knut'],
        posX: 100, //x
        posY: 300, //y
        zIndex: 1
    },);
}