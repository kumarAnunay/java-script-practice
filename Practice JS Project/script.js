let input = document.getElementById("search");

function searchBar() {
  dataFetch();
}

let storage = [];

async function dataFetch() {
    let apiUrl = `https://api.github.com/search/users?q=${input.value}`
    try {
        const response = await fetch(apiUrl);
        storage = await response.json();
        dataAdded(storage.items);
        // console.log(storage.items);
    } catch (error) {
        // Catch error here
    }
}

function dataAdded(arr) {
    // console.log(arr);
    let content = document.getElementById("content"); 
    content.innerHTML = "";
    for(let i in arr){
        let itemConainer = document.createElement("div");
        itemConainer.innerHTML = arr[i].login;
        console.log(arr[i]);
        content.appendChild(itemConainer);
    }
}




