console.log("hello console testing successful");
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}
let addbtn = document.getElementById("addbtn");
shownotes();
addbtn.addEventListener("click", function (e) {
    const today = new Date();
    const date1 = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() + `-` + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


    let addnote = document.getElementById("addnote");
    let notes = localStorage.getItem("notes");
    let title = localStorage.getItem("title");
    let date = localStorage.getItem("date");
    if (notes == null && title == null) {
        notesObj = [];
        titleObj = [];
        date = [];
    }
    else {
        notesObj = JSON.parse(notes);
        titleObj = JSON.parse(title);
        dateObj = JSON.parse(date);
    }
    dateObj.push(date1);
    notesObj.push(addnote.value);
    titleObj.push(addtitle.value);
    localStorage.setItem("date", JSON.stringify(dateObj));
    localStorage.setItem("notes", JSON.stringify(notesObj));
    localStorage.setItem("title", JSON.stringify(titleObj));
    addnote.value = " ";
    addtitle.value = " ";
    console.log(titleObj);
    console.log(notesObj);
    console.log(dateObj);
    shownotes();
});
function shownotes() {
    let notes = localStorage.getItem("notes");
    let title = localStorage.getItem("title");
    let date = localStorage.getItem("date");
    if (notes == null && title == null &&date==null) {
        notesObj = [];
        titleObj = [];
        dateObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
        titleObj = JSON.parse(title);
        dateObj = JSON.parse(date);
    }
    let card = "";

    // notesObj.forEach(function (element, index) 
    for (var i = 0; i < notesObj.length; i++) {
        card += `
        <div class="card2 my-2" style="background-image:url(note.png); background-repeat: no-repeat; background-size: 300px 300px; background-color:rgb(255, 253, 253);">
            
                <h1 style="padding-bottom: 80px; padding-top: 150px;" id="notetitle">${titleObj[i]}</h1>
                <h4 class="notedt" id="notedt">${dateObj[i]}</h4>
                <p id="notecontent">${notesObj[i]}</p>
                <button id="${i}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>`;
    }
    // let titleelm = document.getElementById("title");
    // if (titleelm.length != 0)
    //     titleelm.innerHTML = card;
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
    let title = localStorage.getItem("title");
    let date = localStorage.getItem("date");
    if (notes == null && title == null && date == null) {
        notesObj = [];
        titleObj = [];
        dateObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
        titleObj = JSON.parse(title);
        dateObj = JSON.parse(date);
    }
    dateObj.splice(index, 1);
    notesObj.splice(index, 1);
    titleObj.splice(index, 1);
    localStorage.setItem("date", JSON.stringify(dateObj));
    localStorage.setItem("notes", JSON.stringify(notesObj));
    localStorage.setItem("title", JSON.stringify(titleObj));
    shownotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('card2');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
        // console.log(cardTxt);
    });
});

// var likeBtn = document.querySelector('.ico');

// likeBtn.addEventListener('click', function() {
//      likeBtn.classList.toggle('liked');
// });

// document.addEventListener('keydown', function(key){
//    if(key.key === 'l' || key.key === 'L') {
//       likeBtn.classList.toggle('liked');
//    }
// });
