let savedStringForm = document.querySelector(`#saved-string`);
let savedNameInput = document.querySelector(`#string-input`);
let savedDisplayValue = document.querySelector(`#saved-name`);

let savedStringValue = localStorage.getItem(`savedStringValue`);

const printValue = () => {
  if (savedStringValue === null) {
    savedDisplayValue.innerText = `Please Enter A Name!`;
  } else {
    savedDisplayValue.innerText = savedStringValue;
  }
};

printValue();

savedStringForm.addEventListener(`submit`, (event) => {
  event.preventDefault();
  localStorage.setItem(`savedStringValue`, savedNameInput.value);
  console.log(localStorage.getItem(`savedStringValue`));
  //SETS INPUT VALUE TO LOCAL STORAGE
  savedStringValue = localStorage.getItem(`savedStringValue`);
  savedDisplayValue.innerText = `Saved Name: ` + savedStringValue;
  //SETS DIV TO DISPLAY VALUE
});
//===============================================================
//QUERY SELECTORS
let displayPageValue = document.querySelector(`#page-load-count`);

//GRABS LOCAL STORAGE
let pageLoadValue = localStorage.getItem(`pageCount`);

let setUpCount = () => {
  pageLoadValue = localStorage.getItem(`pageCount`);

  if (pageLoadValue === null) {
    localStorage.setItem(`pageCount`, `1`);
    displayPageValue.innerText = 1;
  } else {
    pageLoadValue = Number(pageLoadValue) + 1;
    localStorage.setItem(`pageCount`, pageLoadValue.toString());
    displayPageValue.innerText = pageLoadValue;
  }
};

setUpCount();

//=====================================
//LIST BUILDER
let savedListForm = document.querySelector(`#saved-list-form`);
let savedListInput = document.querySelector(`#saved-list-input`);
let savedListDisplay = document.querySelector(`#saved-list-display`);

let list = localStorage.getItem(`list`);

const setUpList = () => {
  list = localStorage.getItem(`list`);

  if (list === null) {
    list = [];
  } else {
    list = JSON.parse(list);
    for (let str of list) {
      console.log(str);
      let listElement = document.createElement(`li`);
      listElement.className = `list-builder-item`;
    
      savedListDisplay.appendChild(listElement);
      listElement.innerText = str;
    }
  }
};

setUpList();

savedListForm.addEventListener(`submit`, (event) => {
  event.preventDefault();

  let newString = savedListInput.value;

  list.push(newString);
  console.log(newString);

  let listElement = document.createElement(`li`);
  listElement.className = `list-builder-item`;

  savedListDisplay.appendChild(listElement);
  listElement.innerText = newString;
  localStorage.setItem(`list`, JSON.stringify(list));
});
