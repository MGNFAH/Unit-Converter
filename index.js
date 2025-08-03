/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")


let feet = 0
let meters = 0
let liters = 0
let gallons = 0
let kilograms = 0
let pounds = 0

convertBtn.addEventListener("click",function convertingValues(){
    feet = inputEl.value
    feetConverted = inputEl.value * 3.281
    meters= inputEl.value
    metersConverted= inputEl.value / 3.281
    lengthEl.innerText=`${meters} meters = ${feetConverted.toFixed(3)} feet | ${feet} feet = ${metersConverted.toFixed(3)} meters`
    
    liters = inputEl.value
    litersConverted = inputEl.value / 0.264
    gallons= inputEl.value
    gallonsConverted= inputEl.value *  0.264
    volumeEl.innerText=`${liters} liters = ${gallonsConverted.toFixed(3)} gallons | ${gallons} gallons = ${litersConverted.toFixed(3)} liters`
    
    kilograms = inputEl.value
    kilogramsConverted = inputEl.value / 2.204
    pounds= inputEl.value
    poundsConverted= inputEl.value * 2.204
    massEl.innerText=`${kilograms} kilograms = ${poundsConverted.toFixed(3)} pounds | ${pounds} pounds = ${kilogramsConverted.toFixed(3)} kilograms`
})