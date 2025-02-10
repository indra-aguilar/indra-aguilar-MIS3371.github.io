/*
Program Name: homework.js
Author: Indra Aguilar
Date Created: 02/09/2025
Date Last Edited: 02/09/2025
Version: 1.0
Description: This file contains JavaScript support for the file "patient-form.html".
*/


// This part displays the current date in "patient-form.html"
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