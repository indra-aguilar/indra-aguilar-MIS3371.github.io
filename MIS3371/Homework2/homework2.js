/*
Program Name: homework.js
Author: Indra Aguilar
Date Created: 02/09/2025
Date Last Edited: 04/02/2025
Version: 2.0
Description: This file contains JavaScript support for the file "patient-form_hw2.html".
*/


// This part displays the current date in "patient-form_hw2.html"
    // Taken from MISSO's Resources from the TP Committee 
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;


// This part displays the value of the slider in "patient-form.html"
    // Taken from MISSO's Resources from the TP Committee
let slider = document.getElementById("healthrange");
let output = document.getElementById("range-slider")
output.innerHTML = slider.value; 
slider.oninput = function () {output.innerHTML = this.value;};


// This part validates the first name data input in "patient-form_hw2.html".
function validateFname()
{
    // 

}


// This part validates the middle initial data input in "patient-form_hw2.html".
function validateMinitial()
{
    // 

}


// This part validates the last name data input in "patient-form_hw2.html".
function validateLname()
{
    // 

}


// This part validates the date of birth data input in "patient-form_hw2.html".
    // Taken from MISSO's Resources from the TP Committee 
function validateDob() 
    {
        dob = document.getElementById("dob");
        let date = new Date(dob.value);
        let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

        if (date > new Date())
        {
            document.getElementById("dob-error").innerHTML = "Date can't be in the future";
            dob.value = "";
            return false;
        }
            else if (date < new Date(maxDate))
            {
                document.getElementById("dob-error").innerHTML = "Date can't be more than 120 years ago";
                dob.value = "";
                return false;
            }
        else 
        {
            document.getElementById("dob-error").innerHTML = "";
            return true;
        }
    }


// This part validates the Social Security data input in "patient-form_hw2.html".
    // Taken from MISSO's Resources from the TP Committee 
function validateSsnumber()
    {
        const ssnumber = document.getElementById("ssnumber").value;
        const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

        if (!ssnR.test(ssnumber)) 
        {
            document.getElementById("ssnumber-error").innerHTML = "Please enter a valid SSN";
            return false;
        }
            else
                {
                    document.getElementById("ssnumber-error").innerHTML = "";
                    return true;
                }
    }


// This part validates the address data input in "patient-form_hw2.html".
function validateAddress1()
{
    // 

}


// This part validates the city data input in "patient-form_hw2.html".
function validateCity()
{
    // 

}


// This part validates the ZIP Code data input in "patient-form_hw2.html".
    // Taken from MISSO's Resources from the TP Committee 
function validateZipcode() 
    {
    const zipInput = document.getElementById("zipcode");
    let zip = zipInput.value.replace(/[^\d-]/g, "");
    
    if (!zip) 
        {
        document.getElementById("zipcode-error").innerHTML = "Please enter your ZIP code";
        return false;
        }
    
    if (zip.length > 5) 
        {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
        } 

        else 
            {
                zip = zip.slice(0, 5);
            }
    
    zipInput.value = zip;
    document.getElementById("zipcode-error").innerHTML = "";
    return true;
    }


// This part validates the email data input in "patient-form_hw2.html".
function validateEmail()
    {
        const email = document.getElementById("email").value;
        var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!emailR.test(email)) 
        {
            document.getElementById("email-error").innerHTML = "Please enter a valid email address";
            return false;
        }
            else
                {
                    document.getElementById("email-error").innerHTML = "";
                    return true;
                }
    }


// This part validates the phone number data input in "patient-form_hw2.html".
function validatePhonenumber()
    {
        const phonenumber = document.getElementById("phonenumber").value;
        const phonenumberR = /^[0-9]{3}-?[0-9]{3}-?[0-9]{4}$/;

        if (!phonenumberR.test(phonenumber)) 
        {
            document.getElementById("phonenumber-error").innerHTML = "Please enter a valid phone number";
            return false;
        }
            else
                {
                    document.getElementById("phonenumber-error").innerHTML = "";
                    return true;
                }
    }


// This part validates the username data input in "patient-form_hw2.html".
    // Taken from MISSO's Resources from the TP Committee 
function validateUid()
    {
        uid = document.getElementById("uid").value.toLowerCase();
        document.getElementById("uid").value = uid;

        if (uid.length == 0) 
            {
                document.getElementById("uid-error").innerHTML = "Please enter a User ID";
                return false;
            }

        if (!isNaN(uid.charAt(0))) 
            {
                document.getElementById("uid-error").innerHTML = "Your User ID cannot start with a number";
                return false;
            }

        let regex = /^[a-zA-Z0-9_-]+$/;
            if (!regex.test(uid)) 
                {
                    document.getElementById("uid-error").innerHTML = "Your User ID can only have letters, numbers, underscores, and dashes";
                    return false;
                } 
            else if (uid.length < 5) 
                {
                    document.getElementById("uid-error").innerHTML = "Your User ID must be at least 5 characters";
                    return false;
                } 
             else if (uid.length > 30) 
                {
                    document.getElementById("uid-error").innerHTML = "Your User ID cannot be longer than 30 characters";
                    return false;
                } 
            else   
                {
                    document.getElementById("uid-error").innerHTML = "";
                    return true;
                }
    }



// This part validates the password data input in "patient-form_hw2.html".
function validatePword()
    {
        // if (!pword.match(/[a-z]/)) errorMessage.push("Enter at least one lowercase letter");
        // if (!pword.match(/[A-Z]/)) errorMessage.push("Enter at least one uppercase letter");
        // if (!pword.match(/[0-9]/)) errorMessage.push("Enter at least one number");
        // if (!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/)) errorMessage.push("Enter at least one special character");
        // if (pword.includes(uid)) errorMessage.push("Password can't contain user ID");

    }


// This part confirms the password data input in "patient-form_hw2.html".
    // Taken from MISSO's Resources from the TP Committee 
function confirmPword() 
    {
        pword1 = document.getElementById("pword").value;
        pword2 = document.getElementById("pword2").value;
    
        if (pword1 !== pword2) 
            {
                document.getElementById("pword2-error").innerHTML = "Passwords don't match";
                return false;
            } 
        else 
            {
                document.getElementById("pword2-error").innerHTML = "Passwords match";
                return true;
            }
    }


// This part provides an overall review of the data input in "patient-form_hw2.html".
    // Taken from MISSO's Resources from the TP Committee 
function reviewInput() 
    {
        var formcontent = document.getElementById("signup");
        var formoutput = "<table class='output'> <th colspan = '3'> Review Your Information: </th>";
        
        for (let i = 0; i < formcontent.length; i++) 
            {
                if (formcontent.elements[i].value !== "") 
                    {
                        switch (formcontent.elements[i].type) 
                            {
                            case "checkbox":
                                if (formcontent.elements[i].checked) 
                                    {
                                    formoutput += `<tr> <td align='right'> ${formcontent.elements[i].name} </td> <td> &#x2713; </td> </tr>`;
                                    }
                                break;
                            case "radio":
                                if (formcontent.elements[i].checked) 
                                    {
                                        formoutput += `<tr> <td align='right'> ${formcontent.elements[i].name} </td> <td> ${formcontent.elements[i].value} </td> </tr>`;
                                    }
                                break;
                            default:
                                formoutput += `<tr> <td align='right'> ${formcontent.elements[i].name} </td> <td> ${formcontent.elements[i].value} </td> </tr>`;
                            }
                    }   
            }
        formoutput += "</table>";
        document.getElementById("showInput").innerHTML = formoutput;
    }


// This part removes the overall review of the data input in "patient-form_hw2.html".
    // Taken from MISSO's Resources from the TP Committee 
function removeReview() 
    {
        document.getElementById("showInput").innerHTML = "";
    }




