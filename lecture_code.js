let lectureCode;
let validLectureCodes = ["123456", "654321", "abcdef", "fedcba"];


// Manages the value within the input box when the submit button is pressed.
document.getElementById("mySubmit").onclick = function() {
    // Stores the value of the entered lecture code to the variable lectureCode
    lectureCode = document.getElementById("lcode").value;
    
    //Checks if the enterrred lecture code is valid
    if (validLectureCodes.includes(lectureCode)) {
        //Checks to ensure the lecture code has not been used before
        if (localStorage.getItem("LectureCodesUsed").includes(lectureCode) === false) 
        {
            // If the lecture code is new, it adds 10 points, adds the code to the list of codes used and displays to the user that the lecture has been joined
            localStorage.setItem("points", parseInt(localStorage.getItem("points")) + 10);
            localStorage.setItem("LectureCodesUsed", localStorage.getItem("LectureCodesUsed") + "," + lectureCode);
            document.getElementById("result").textContent = `Lecture joined with code: ${lectureCode}`;
            // If the last attended date is not the current date it will incriment the streak and update the last attended date
            if (localStorage.getItem("lastAttended") !== new Date().toLocaleDateString()) {
                localStorage.setItem("streak", parseInt(localStorage.getItem("streak")) + 1);
                localStorage.setItem("lastAttended", new Date().toLocaleDateString());
        }
        }
        // If the lecture code has already been used it will display a relevant message to the user
        else{
            document.getElementById("result").textContent = `Lecture code: ${lectureCode} has already been attended.`;
        }
        
    }
    else if (lectureCode === "") {
        // If the input box is empty it will display a relevant message to the user
        document.getElementById("result").textContent = `Please enter a lecture code.`;
    }
    // If the lecture code is invalid it will display a relevant message to the user 
    else {
    document.getElementById("result").textContent = `Invalid lecture code: ${lectureCode}`;
    }
    // Clears the input box once the submit button has processed.
    document.getElementById("lcode").value = "";
}

