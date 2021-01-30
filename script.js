// function componentToHex(c) {
//     var hex = c.toString(16);
//     return hex.length == 1 ? "0" + hex : hex;
//   }

// function rgbToHex(r, g, b) {
//     return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
//   }

// let color = $("h1").css("color");
// let extract = color.match(/\d+\D\s\d+\D\s\d+/);
// let split = extract[0].split(",");

// let hexValue = rgbToHex(Number(split[0]), Number(split[1]), Number(split[2]));

// let ntcMatch = ntc.name(hexValue);

// console.log(ntcMatch[1]);

$(document).ready(function() {
  $("#collapse-btn").on("click", function() {
    $("#collapse-navbar-container").toggle(500);
  })
});



