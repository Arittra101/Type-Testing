let random_query = document.querySelector('#quote');
let user_input = document.querySelector('#quote-input');
let level = 0;
let time = 0;
let mistake = 0;
let char_to_arry;
let quotes;
let timer = 10;
let start = 0;
// random_query.innerHTML = `;
const level_one = () => {

    quotes = '"Hello I can do anything";';
    convertQuotes_To_array(quotes)
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




function convertQuotes_To_array(quotes) {



    //char_to_array array for all char span
    char_to_arry = quotes.split("").map((value) => {

        return "<span class='quote-class'>" + value + "</span>";
    });

    //console.log(char_to_arry);

    //join all the array element without comma and add to innerHtml 
    random_query.innerHTML += char_to_arry.join("");

}

user_input.addEventListener("input", () => {


    // work with given quotes
    let quoteChars = document.querySelectorAll(".quote-class"); //fetch all the span by class  btw when we call by class that time output will be nodelist
    quoteChars = Array.from(quoteChars); //converted nodelist into array..


    //work with input
    let array_user_input = user_input.value.split(""); //convert all input char into array element


    //---

    //now check with quotes char and input char

    quoteChars.forEach((char, index) => {                //loop on quoteschar 

        if (char.innerText == array_user_input[index]) {

            char.classList.add("success");

        }
        else if (array_user_input[index] == null) {

            if (char.classList.contains("success")) {

                char.classList.remove("success");
            }
            else {
                char.classList.remove("fail");
            }
        }
        else if (char.innerText != array_user_input[index]) {
            if (!char.classList.contains("fail")) {
                mistake++;
                char.classList.add("fail");
            }
            document.querySelector("#mistakes").innerHTML = mistake;
        }
    });



});


setInterval(() => {
    if(start)
    {
        if (timer > 0) timer--;
        if (timer == 0) {
    
            displayResult();
        }
        let timer_html = document.querySelector('#timer');
        timer_html.innerHTML = timer + "Sec";
    }
  


}, 1000);



function startTest() {
    let start_btn = document.querySelector('#start-test').style.display = "none";
    start_btn = document.querySelector('#stop-test').style.display = "block";
    user_input.disabled = false;
    start = 1;
    // let result = document.querySelector('.result');
    // result.style.display = "none";


}


function displayResult() {
    iniital();

    let result = document.querySelector('.result');
    result.style.display = "block";
    
}
window.onload = () => {
    level_one();
    let start_btn = document.querySelector('#stop-test').style.display = "none";
    user_input.disabled = true;
    let timer_html = document.querySelector('#timer');

    timer_html.innerHTML = 60 + "Sec";

}
function iniital()
{
    start=0;
    mistake=0;
    level = 1;
    timer =10;

    let timer_html = document.querySelector('#timer');
    timer_html.innerHTML = 60 + "Sec";

    let start_btn = document.querySelector('#start-test').style.display = "block";
    start_btn = document.querySelector('#stop-test').style.display = "none";

    let level_inner  = document.querySelector("#level");
    level_inner.innerHTML = 1;
}

