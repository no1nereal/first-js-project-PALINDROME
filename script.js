//Variables
const input = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result');


//Event Listeners
button.addEventListener('click', (event) => {
    event.preventDefault();
    checkPalindrome(input.value);
});


//Functions
function checkPalindrome(word) {

    
  //cleaning the word
let cleaned = word.toLowerCase().replace(/[^a-z0-9]/g, "")


let reverse = cleaned.split("").reverse().join("");
console.log(cleaned)
console.log(reverse);

if (word === "") {
    alert("Please input a value."); 
    return;
 } else if (reverse === cleaned) {
    console.log("PALINDROME");
    result.style.display = "block";
    result.innerHTML = word + " IS A PALINDROME";
 }else {
    console.log("NOT PALINDROME");
    result.style.display = "block";
    result.innerHTML = word + " IS NOT A PALINDROME";

}
}