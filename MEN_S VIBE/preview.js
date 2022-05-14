"use strict";


function getBooking(){
 if(sessionStorage.first_name != undefined){
 //confirmation text
 
 document.getElementById("confirm_fname").textContent = sessionStorage.first_name;
 document.getElementById("confirm_lname").textContent = sessionStorage.last_name;
 document.getElementById("confirm_email").textContent = sessionStorage.email;
 document.getElementById("confirm_pnumber").textContent = sessionStorage.phoneno;
 document.getElementById("confirm_street").textContent = sessionStorage.street_address;
 document.getElementById("confirm_city").textContent = sessionStorage.city;
 document.getElementById("confirm_state").textContent = sessionStorage.state;
 document.getElementById("confirm_postcode").textContent = sessionStorage.post_code;
 document.getElementById("confirm_subject").textContent = sessionStorage.subject;
 document.getElementById("confirm_product").textContent = sessionStorage.product;
 document.getElementById("confirm_comment").textContent = sessionStorage.comment;
 }
}


function init () {

 //call the getBooking() function.
 getBooking();

}
window.onload = init;