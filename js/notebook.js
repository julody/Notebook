class Notebook {
  constructor() {
    //TODO: delete testing values
    localStorage.setItem("notesNum", 2);
    localStorage.setItem("note0", "first one");
    localStorage.setItem("note1", "second one");
    
    this.notesNum = localStorage.getItem("notesNum") || 0;
    for(let i = 0; i < this.notesNum; i++) {
      let noteText = localStorage.getItem("note" + i);
      this.renderNote(i, noteText);
    }
  }
  renderNote(i, noteText) {
    let notesContainer = document.getElementById("notesContainer");
    let noteTemplate = document.getElementById("noteTemplate");
    let note = noteTemplate.cloneNode(true);
    
    note.classList.remove("invisible");
    note.id = "note" + i;
    let noteInput = note.getElementsByClassName("note-container__note-input");
    noteInput[0].value = noteText;
    console.log(noteInput[0]);
    notesContainer.insertBefore(note, notesContainer.children[0]);
  }
}

export default Notebook;