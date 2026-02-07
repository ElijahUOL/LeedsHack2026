let points = localStorage.getItem("points");
let purchased_items = localStorage.getItem("purchased_items")

window.onload = function(){
    document.getElementById("points").textContent = `Points: ${points}`;
    for (item in purchased_items) {
        this.document.getElementById(item).disabled = true;
        this.document.getElementById(item).textContent = "Purchased";
    }
}

document.getElementById("hat").onclick = function() {
    if (points >= 30) {
        points -= 30;
        localStorage.setItem("points", points);
        document.getElementById("hat").disabled = true;
        document.getElementById("hat").textContent = "Purchased";
        alert("Hat purchased!");
        localStorage.setItem("purchased_items", localStorage.getItem("purchased_items").push("hat"));
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
        localStorage.setItem("purchased_items", localStorage.getItem("purchased_items") + ",glasses");
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
        localStorage.setItem("purchased_items", localStorage.getItem("purchased_items") + ",shirt");
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
        localStorage.setItem("purchased_items", localStorage.getItem("purchased_items") + ",bottoms");
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
        localStorage.setItem("purchased_items", localStorage.getItem("purchased_items") + ",shoes");
        document.getElementById("points").textContent = `Points: ${points}`;
    } else {
        alert("Not enough points!");
    }
}