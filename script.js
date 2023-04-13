
let random_query = document.querySelector('#quote');
let user_input = document.querySelector('#quote-input');
let level = 0;
let time = 0;
let mistake = 0;
let char_to_arry;

// random_query.innerHTML = `;
const level_one = () => {

    random_query.innerHTML = 'cout<<"Hello I can do anything";';
};
const level_two = () => {

    random_query.innerHTML = 'cout<<"The quick brown fox jumps over the lazy dog"';
};
const level_three = () => {

    random_query.innerHTML = 'cout<<"The shortest war in history was between Britain and Zanzibar in 1896, lasting only 38 minutes.";';
};
const level_four = () => {

    random_query.innerHTML = 'cout<<"The average person spends six months of their life waiting for red lights to turn green.";';
};




function convertQuotes_To_array() {
    let quote = random_query.innerHTML;
    char_to_arry = quote.split("").map((value) => {
        return "<span class='quote-class'>" + value + "</span>";
    });


    //   let char_to_arry =  quote.split("");
    //  console.log(char_to_arry);
}

user_input.addEventListener("input", () => {

   
    // work with given quotes
    let quoteChars = document.querySelectorAll(".quote-class");
    quoteChars = Array.from(quoteChars); //convert all nodeList to array
    //----

    //work with input
    let array_user_input = user_input.value.split(""); //convert all input char into array element
    console.log(array_user_input);

    //----

    //now check with quotes char and input char

    quoteChars.forEach((char,index) => {
        
    });



});






function startTest() {
    let start_btn = document.querySelector('#start-test').style.display = "none";
    start_btn = document.querySelector('#stop-test').style.display = "block";

}
function displayResult() {

}
window.onload = () => {
    level_one();
    let start_btn = document.querySelector('#stop-test').style.display = "none";
    convertQuotes_To_array();

}

