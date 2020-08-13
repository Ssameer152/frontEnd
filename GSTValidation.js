var citiesByState = {
  AndhraPradesh: [
    "East Godavari",
    "Kurnool",
    "Anantpur",
    "Guntur",
    "Vishakhapatnam",
    "West Godavari",
    "Chittoor",
    "Y.S.R Kadapa",
    "S.P.Nellore",
    "Srikakulam",
    "Krishna",
    "Vizianagaram",
    "Prakasam",
  ],
  ArunachalPradesh: ["Papum pare", "Changlang", "East Siang"],
  Odisha: ["Bhubaneswar", "Puri", "Cuttack"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur"],
  Kerala: ["kochi", "Kannur"],
};
function validate(value) {
  if (value.length == 0)
    document.getElementById("state").innerHTML = "<option></option>";
  else {
    var citiesOptions = "";
    for (cityId in citiesByState[value]) {
      citiesOptions += "<option>" + citiesByState[value][cityId] + "</option>";
    }
    document.getElementById("city").innerHTML = citiesOptions;
  }
}
function resetSelection() {
  document.getElementById("state").selectedIndex = 0;
  document.getElementById("city").selectedIndex = 0;
}

function zipcodeValidation(zip) {
  var a = /(^\d{6}$)/;
  if (a.test(zip)) {
    alert("Your Entered Zip Code Is Valid.");
  } else {
    alert("Your Entered Zip Code Is Not Valid.");
  }
}

// function fileValidation() {
//   var panCard= document.getElementById("pancard");
//   var aadharCard=document.getElementById('aadharcard');
//   var filePath = panCard.value;
//   var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.pdf)$/i;
//   if (!allowedExtensions.exec(filePath)) {
//     alert("Please upload file having extensions .jpeg/.jpg/.png/.pdf/");
//     fileInput.value = "";
//     return false;
//   } else {
//     //Image preview
//     if (fileInput.files && fileInput.files[0]) {
//       var reader = new FileReader();
//       reader.onload = function (e) {
//         document.getElementById("pancardimg").innerHTML =
//           '<img src="' + e.target.result + '"/>';
//       };
//       reader.readAsDataURL(fileInput.files[0]);
//     }
//   }
// }

function validateFile(id) {
  var formData = new FormData();

  var file = document.getElementById(id).files[0];

  formData.append("Filedata", file);
  var t = file.type.split("/").pop().toLowerCase();
  if (t != "jpeg" && t != "jpg" && t != "png" && t != "bmp" && t != "pdf") {
    alert("Please select a valid file format in .jpeg or.jpg or.pdf or .bmp");
    document.getElementById(id).value = "";
    return false;
  }

  return true;
}
