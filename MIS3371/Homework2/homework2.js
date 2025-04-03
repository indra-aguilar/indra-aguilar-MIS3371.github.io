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
    // Taken from MISSO's Resources from the TP Committee 
function validateEmail()
    {
        // 

    }


// This part validates the phone number data input in "patient-form_hw2.html".
    // Taken from MISSO's Resources from the TP Committee 
    function validatePhonenumber()
    {
        // 

    }


// This part validates the username data input in "patient-form_hw2.html".
    // Taken from MISSO's Resources from the TP Committee 
    function validateUid()
    {
        // 

    }


// This part validates the password data input in "patient-form_hw2.html".
    // Taken from MISSO's Resources from the TP Committee 
    function validatePword()
    {
        // 

    }


// This part confirms the password data input in "patient-form_hw2.html".
    // Taken from MISSO's Resources from the TP Committee 
    function confirmPword()
    {
        // 

    }


// This part provides an overall review of the data input in "patient-form_hw2.html".
    // Taken from MISSO's Resources from the TP Committee 
    function reviewInput()
    {
        // 

    }








