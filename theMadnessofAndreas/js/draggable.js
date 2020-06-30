
function dragElement(elmnt) {
    const noteInModel = noteModel.notes.filter((n) => n.ID == elmnt.id)[0];
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;        
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
        elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
        let updatedX = elmnt.offsetLeft - pos1;
        let updatedY = elmnt.offsetTop - pos2;
        noteInModel.posY = updatedY;
        noteInModel.posX = updatedX;
    }
        

    async function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;

        // this try catch will update the correct document
        // in the notes collection with the new x and y position after movement have stopped
        try {
            await db.collection('notes').doc(noteInModel.ID).update({
                posX: noteInModel.posX, //x
                posY: noteInModel.posY, //y                
            });
        } catch (error) {
            console.error(error);
        } 
    }
}
