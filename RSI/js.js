// let nav = document.querySelector(".nav-mid");
// let left = document.querySelector(".nav-icons .left");
// let right = document.querySelector(".nav-icons .right");

// let idx;

// left.addEventListener("mouseenter", function(){
//   idx = setInterval(() => nav.scrollLeft -= 1, 10);
// });

// left.addEventListener("mouseleave", function(){
//   clearInterval(idx);
// });

// right.addEventListener("mouseenter", function(){
//   idx = setInterval(() => nav.scrollLeft += 1, 10);
// });

// right.addEventListener("mouseleave", function(){
//   clearInterval(idx);
// });

// Popups
// document.querySelector(".dicom_frame").addEventListener("click",function(){
//   document.querySelector(".popup").style.display="flex";
// })

// document.querySelector(".close").addEventListener("click",function(){
//   document.querySelector(".popup").style.display="none";
// })

function open_dropdown_account() {
  document.getElementById("dropdown_account").style.display = "block";
}

function openAddUserData() {
  document.getElementById("addUserdata").style.display = "block";
}

function openEditUserData() {
  document.getElementById("editUserdata").style.display = "block";
}

function openDicomViewer() {
    document.getElementById("dicomViewer").style.display = "block";
}

function openInsertExpertise() {
  document.getElementById("insertExpertise").style.display = "block";
}


function deleteData() {

}
  
function closePopup() {
  document.querySelector(".popup").style.display = "none";
}