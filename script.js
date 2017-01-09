let codes;
let inputText = document.querySelector('textarea');
let inputShift = document.querySelector('input');
let poster = document.querySelector('button');

function getData () {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:5000/decode/all');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        codes = JSON.parse(xhr.response);
        console.log(codes[0].text);
        renderCodes(codes);
    }
  }
  xhr.send();
}

function postData() {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:5000/decode');
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({shift: inputShift.value, text: inputText.value}));
}



function renderCodes (array) {
  var myList = document.querySelector('ul');
  myList.innerHTML = '';
  console.log(myList);
    for (let i = 0; i < codes.length; i++) {
      let myListItem = document.createElement('li');
      myListItem.innerText = array[i].text;
      myList.append(myListItem);
    }
}

getData();

console.log(inputText.value);

poster.addEventListener('click', function() {
  postData();
  getData();
});
