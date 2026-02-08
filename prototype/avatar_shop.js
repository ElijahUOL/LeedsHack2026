let points = localStorage.getItem("points");
let purchased_items = localStorage.getItem("PurchasedItems");
let items = ["hat", "glasses", "shirt", "bottoms", "shoes"];

window.onload = function(){
    document.getElementById("points").textContent = `Points: ${points}`;
    for (item in items) {
        item_name = items[item].charAt(0).toUpperCase() + items[item].slice(1);
        if (purchased_items.includes(item_name)) {
            console.log(items[item]);
            document.getElementById(items[item]).disabled = true;
            document.getElementById(items[item]).textContent = "Purchased";
        }
    }
}

document.getElementById("hat").onclick = function() {
    if (points >= 30) {
        points -= 30;
        localStorage.setItem("points", points);
        document.getElementById("hat").disabled = true;
        document.getElementById("hat").textContent = "Purchased";
        alert("Hat purchased!");
        localStorage.setItem("PurchasedItems", localStorage.getItem("PurchasedItems") + "Hat, ");
        document.getElementById("points").textContent = `Points: ${points}`;
    } else {
        alert("Not enough points!");
    }
}

document.getElementById("glasses").onclick = function() {
    if (points >= 50) {
        points -= 50;
        localStorage.setItem("points", points);
        document.getElementById("glasses").disabled = true;
        document.getElementById("glasses").textContent = "Purchased";
        alert("Glasses purchased!");
        localStorage.setItem("PurchasedItems", localStorage.getItem("PurchasedItems") + "Glasses, ");
        document.getElementById("points").textContent = `Points: ${points}`;
    }
    else {
                alert("Not enough points!");

    }
}

document.getElementById("shirt").onclick = function() {
    if (points >= 100) {
        points -= 100;
        localStorage.setItem("points", points);
        document.getElementById("shirt").disabled = true;
        document.getElementById("shirt").textContent = "Purchased";
        alert("Shirt purchased!");
        localStorage.setItem("PurchasedItems", localStorage.getItem("PurchasedItems") + "Shirt, ");
        document.getElementById("points").textContent = `Points: ${points}`;
    } else {
        alert("Not enough points!");
    }
}

document.getElementById("bottoms").onclick = function() {
    if (points >= 150) {
        points -= 150;
        localStorage.setItem("points", points);
        document.getElementById("bottoms").disabled = true;
        document.getElementById("bottoms").textContent = "Purchased";
        alert("Bottoms purchased!");
        localStorage.setItem("PurchasedItems", localStorage.getItem("PurchasedItems") + "Bottoms, ");
        document.getElementById("points").textContent = `Points: ${points}`;
    } else {
        alert("Not enough points!");
    }
}

document.getElementById("shoes").onclick = function() {
    if (points >= 200) {
        points -= 200;
        localStorage.setItem("points", points);
        document.getElementById("shoes").disabled = true;
        document.getElementById("shoes").textContent = "Purchased";
        alert("Shoes purchased!");
        localStorage.setItem("PurchasedItems", localStorage.getItem("PurchasedItems") + "Shoes, ");
        document.getElementById("points").textContent = `Points: ${points}`;
    } else {
        alert("Not enough points!");
    }
}