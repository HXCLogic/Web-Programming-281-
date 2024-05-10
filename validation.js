function setValid(fieldName) {
    let element = document.getElementById(fieldName.id);
    element.classList.remove("error");
    element.classList.add("valid");

    const errDiv = document.getElementById(`error${fieldName.id}`); //Clear the error messsage

    if (errDiv) {
        errDiv.innerHTML = '';
    }
}

function setError(fieldName, message) {
    let element = document.getElementById(fieldName.id);
    element.classList.remove("valid");
    element.classList.add("error"); //Add showError into setError

    const errDiv = document.getElementById(`error${fieldName.id}`);

    if (errDiv) {
        errDiv.innerHTML = message;
    }
}

function validateName(firstName) {    
    if (firstName.value.length === 0 || !/^[A-Za-z]+$/.test(firstName.value)) {
        setError(firstName, 'Please enter your name correctly');
    } else {
        setValid(firstName);
    }
}

function validateLastName(lastName) {    
    if (lastName.value.length === 0 || !/^[A-Za-z]+$/.test(lastName.value)) {
        setError(lastName, 'Please enter your last name correctly');
    } else {
        setValid(lastName);
    }
}

function validateEmail(emailID) {
    const email = emailID.value.trim(); //trim any whitespace
    if (email.length === 0 || !/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        statusIcon.innerHTML = '';
        setError(emailID, 'Please enter a valid email address');
    } else {
        statusIcon.innerHTML = '✓'; // Display the check mark 
        setValid(emailID);
    }
}

function validateUserID(userIDInput) {
    const lockIcon = document.getElementById('lockIconUserID'); // Get the lock icon element
    const errDiv = document.getElementById('erroruserID'); // Get the error message element

    if (userIDInput.value.length === 0 || !isNaN(userIDInput.value)) {
        setError(userIDInput, 'Please check if your User ID is correct');
        lockIcon.style.display = 'none'; // Hide the lock icon
        errDiv.innerHTML = ''; // Clear the error message
    } else {
        setValid(userIDInput);
        lockIcon.style.display = 'inline-block'; // Display the lock icon
        errDiv.innerHTML = ''; // Clear the error message
    }
}



function validatePhoneNumber(phoneNumber) {
    if (phoneNumber.value.length === 0 || !/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(phoneNumber.value)) {
        setError(phoneNumber, 'Please enter your phone number in the format (xxx) xxx-xxxx or xxxxxxxxxx');
    } else {
        setValid(phoneNumber);
    }
}

function validateReferenceCode(referenceCode) {
    if (referenceCode.value.length === 0 || !isNaN(referenceCode.value)) {
        setError(referenceCode, 'Please check if your reference code is correct');
    } else {
        setValid(referenceCode);
    }
}

window.addEventListener("load", () => {
    const resetButton = document.getElementById("resetButton");
    const continueButton = document.getElementById("continueButton");
    const inputs = document.getElementsByTagName("input");
    const selects = document.getElementsByTagName("select");
    const box = document.getElementById("container");

    resetButton.addEventListener("click", () => {
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }

        for (let j = 0; j < selects.length; j++) {
            selects[j].selectedIndex = 0;
        }
        
        document.getElementById("errorfirstName").innerHTML = "";
        document.getElementById("errorlastName").innerHTML = "";
        document.getElementById("erroremailID").innerHTML = "";
        document.getElementById("erroruserID").innerHTML = "";
        document.getElementById("errorcountry").innerHTML = "";
        document.getElementById("errorstate").innerHTML = "";
        document.getElementById("errorcity").innerHTML = "";
        document.getElementById("errorphoneNumber").innerHTML = "";
        document.getElementById("errorreferenceCode").innerHTML = "";
    })

    continueButton.addEventListener("click", () => {
        let values = {};
        values["Firstname"] = document.getElementById("firstName").value;
        values["Lastname"] = document.getElementById("lastName").value;
        values["Email-ID"] = document.getElementById("emailID").value;
        values["User-ID"] = document.getElementById("userID").value;
        values["Country"] = document.getElementById("country").value;
        values["State"] = document.getElementById("state").value;
        values["City"] = document.getElementById("city").value;
        values["Phone Number"] = document.getElementById("phoneNumber").value;
        values["Reference Code"] = document.getElementById("referenceCode").value;

        document.getElementById("content").remove();
        const outputHeading = document.createElement("h2");
        box.appendChild(outputHeading);
        outputHeading.innerText = "Details captured:";
        for (const key in values) {
            const output = document.createElement("p");
            box.appendChild(output);
            output.innerText = key + ": " + values[key];
        }

        box.style.backgroundColor = "rgb(232, 232, 232)";
    })
})