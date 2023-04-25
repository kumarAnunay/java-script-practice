// Api = "https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5"

let pageNumberIndicator = document.getElementById("page_indicator");
let list = document.getElementById("issue_container");
let prevBtn = document.getElementById("load_prev");
let nextBtn = document.getElementById("load_next");
let pageNumber = 1;

async function fetchData() {
    try {
        let response = await fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`);
        let datas = await response.json();
        datas.forEach((data) => {
            return createList(data.title);
        });
    } catch (error) {
        console.log(error);
    }
}

function createList(item) {
    let listItems = document.createElement("li");
    listItems.innerText = item;
    list.append(listItems);
}

prevBtn.addEventListener("click", () => {
    if (pageNumber == 1) {
        return
    }
    pageNumber--;
    pageNumberIndicator.innerHTML = `Page number ${pageNumber}`;
    list.innerHTML = "";
    fetchData();
})

nextBtn.addEventListener("click", () => {
    pageNumber++;
    pageNumberIndicator.innerHTML = `Page number ${pageNumber}`;
    list.innerHTML = "";
    fetchData();
})

fetchData();

/*
    const listEl = document.getElementById('issue_container')

let pageIndicator = document.getElementById("page_indicator")

let pageNumber = 1;

async function load() {

let datajson = await fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`);

let issues = await datajson.json();

issues = issues.map(issue=> issue.title);

let listItems = createListItems(issues);

for(let listItem of listItems) {

listEl.appendChild(listItem);

}

}

function createListItems(items) {

let listItems = [];

for(let item of items) {

let li = document.createElement('li');

li.innerText = item;

listItems.push(li);

}

return listItems;

}

function onNext() {

listEl.innerHTML = '';

pageNumber++;

pageIndicator.innerHTML = `Page Number ${pageNumber}`;

load();

}

function onPrev() {

if(pageNumber == 1) return;

listEl.innerHTML = '';

pageNumber--;

pageIndicator.innerHTML = `Page Number ${pageNumber}`;

load();

}

load();
*/