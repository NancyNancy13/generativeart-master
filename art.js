"use strict";
window.addEventListener("DOMContentLoaded", start);
const artworkList = document.querySelectorAll(".artwork");
function start() {
  // artwork 1
  for (let artwork1 = 100; artwork1 <= 300; artwork1 += 20) {
    artworkList[0].innerHTML += `<div class="box" style="width:${artwork1}px; height:${artwork1}px"></div>`;
  }
  //   artwork 2
  for (let artwork2 = 0; artwork2 <= 90; artwork2 += 10) {
    artworkList[1].innerHTML += `<div class="box" style="transform:rotate(${artwork2}deg)"></div>`;
  }
  //   artwork 3
  for (let artwork3 = 0; artwork3 <= 200; artwork3 += 10) {
    artworkList[2].innerHTML += `<div class="circle" style ="width:${artwork3}px; height:${artwork3}px"></div>`;
  }
  //   artwork 4
  for (let artwork4 = -90; artwork4 <= 90; artwork4 += 20) {
    artworkList[3].innerHTML += `<div class="box" style = "transform: translate(${artwork4}px, ${artwork4}px)"></div>`;
  }
  //   artwork 5
  for (let artwork5 = 1; artwork5 <= 512; artwork5 *= 2) {
    artworkList[4].innerHTML += `<div class ="circle" style ="width:${artwork5}px; height:${artwork5}px"></div>`;
  }
  //   artwork 6
  for (let artwork6 = -20; artwork6 <= 45; artwork6 += 5) {
    artworkList[5].innerHTML += `<div class="circle" style="transform:translateX(${artwork6 - 50}px) rotate(${artwork6 * 4}deg)"></div>`;
  }
  //   artwork 7
  for (let artwork7 = 0; artwork7 <= 200; artwork7 += 10) {
    artworkList[6].innerHTML += `<div class="circle" style = "width:${artwork7}px; height:${artwork7}px; transform:translate(${artwork7}px, ${artwork7 / 2}px)"></div>`;
  }
  //   artwork 8
  for (let artwork8 = 50; artwork8 <= 200; artwork8 += 10) {
    artworkList[7].innerHTML += `<div class="box" style = "width:${artwork8}px; height:${artwork8}px; transform:translateX(${artwork8 / 2}px) rotate(${artwork8}deg)"></div>`;
  }
  //   artwork 9
  for (let artwork9 = 50; artwork9 <= 200; artwork9 += 30) {
    artworkList[8].innerHTML += `<div class ="circle" style ="width:${artwork9}px; height:${artwork9}px"></div>`;
    artworkList[8].innerHTML += `<div class ="box" style ="width:${artwork9}px; height:${artwork9}px"></div>`;
  }
}
