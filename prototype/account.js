
let name = localStorage.getItem("name");
let streak = localStorage.getItem("streak");;
let lastAttended = localStorage.getItem("lastAttended");
let points = localStorage.getItem("points");
let purchased_items = localStorage.getItem("PurchasedItems");


window.onload = function() 
{

    document.getElementById("name").textContent = name;
    document.getElementById("streak").textContent = `Current Streak: ${streak} days`;
    document.getElementById("last_attended").textContent = `Last attended lecture on: ${lastAttended}`;
    document.getElementById("points").textContent = `Points: ${points}`;
    if (purchased_items !== "") {
        document.getElementById("purchased_items").textContent = `Purchased Items: ${purchased_items}`;
    }

}