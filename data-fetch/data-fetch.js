let product = document.getElementById("container");

for(let i=0; i<data.length; i++){

    //inner box
    let box = document.createElement("div");
    box.classList.add("box");

    //inside box
    let img = document.createElement("img");
    img.classList.add("box-img");
    img.src = data[i].img;

    let ids = document.createElement("div");
    let id = document.createTextNode(`Id:- ${data[i].id}`);

    let items = document.createElement("div");
    let item = document.createTextNode(`Item:- ${data[i].item}`);

    let prices = document.createElement("div");
    let price = document.createTextNode(`Price:- ${data[i].price}`);

    //append child
    ids.appendChild(id);
    items.appendChild(item);
    prices.appendChild(price);

    box.appendChild(img);
    box.appendChild(ids);
    box.appendChild(items);
    box.appendChild(price);

    product.appendChild(box);

}