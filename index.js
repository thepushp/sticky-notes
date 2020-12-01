console.log("hello console testing successful");
let addbtn = document.getElementById("addbtn");
shownotes();
addbtn.addEventListener("click", function (e) {
    let addnote = document.getElementById("addnote");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addnote.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addnote.value = "";
    console.log(notesObj);
    shownotes();
});
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let card = "";

    notesObj.forEach(function (element, index) {
        card += `
        <div class="card2 my-2" style="background-image:url(note.png); background-repeat: no-repeat; background-size: 300px 300px; background-color:rgb(255, 253, 253);">
            <h1 style="padding-bottom: 80px; padding-top: 150px;" id="notetitle">Note ${index + 1}</h1>
                <p id="notecontent">${element}</p>
                <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>`;
    });
    let noteelm = document.getElementById("notes");
    if (noteelm.length != 0)
        noteelm.innerHTML = card;
    else {
        noteelm.innerHTML = `No notes found use "Add Note" section to add a note`;
    }
}

function deleteNote(index) {
    //   console.log("I am deleting", index);
    
      let notes = localStorage.getItem("notes");
      if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
    
      notesObj.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notesObj));
      shownotes();
    }
   
    let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('card2');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})
