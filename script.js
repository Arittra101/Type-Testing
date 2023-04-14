let random_query = document.querySelector('#quote');
let user_input = document.querySelector('#quote-input');
let level = 0;
let time = 0;
let mistake = 0;
let char_to_arry;
let quotes;
let timer = 30;
let start = 0;
let numberofchar = 0;
let front_time = 0;
let char_type = 1;
let alpha = 0;
// random_query.innerHTML = `;
const level_one = () => {

    //  quotes = 'cout<<"Hello I can do anything";';
    quotes = 'cout<<"The quick brown fox jumps over the lazy dog."';
    numberofchar = quotes.length;
    convertQuotes_To_array(quotes)
};
const level_two = () => {
    console.log("level two");
    // random_query.innerHTML="";
    quotes = 'cout<<"The quick brown fox jumps over the lazy dog"';
    convertQuotes_To_array(quotes);

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
    char_type = array_user_input.length;
    if (array_user_input[0] >= 'A' && array_user_input[0] <= 'Z' || array_user_input[0] >= 'a' && array_user_input[0] <= 'z') {
        alpha = 1;
        console.log("Ds");
    }
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
        let if_all = quoteChars.every(check_all_success);
        function check_all_success(value) {
            return value.classList.contains("success");
        }
        if (if_all) {
            displayResult();
        }
    });



});


setInterval(() => {
    if (start) {
        if (timer > 0) 
        {
            timer--;
            front_time++;
        }
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





}


function displayResult() {
    calculation();


}

function calculation() {
    let timer_html = document.querySelector('#accuracy');
    let speed_html = document.querySelector('#wpm');
    let mistake_html = document.querySelector('#mis');
    let rs = document.querySelector('#re');
    if (char_type > 1 || alpha == 1) {


        let numberOfCorrect = char_type - mistake;
        console.log(numberOfCorrect);

        let cal = Math.round((numberOfCorrect / char_type) * 100.00);
        timer_html.innerHTML = cal + "%";

        mistake_html.innerHTML = mistake + " times";
        console.log("typed " + char_type);

        let spd =  Math.round((char_type/5)/(front_time/60));
        speed_html.innerHTML = spd + " WPM";
        //window_load();
    }
    else {
        rs.innerHTML = "Please! Type SomeThing";
        timer_html.innerHTML = "0";
    }

    console.log(char_type);
    iniital();

}
window.onload = () => {

    window_load();
}
function window_load() {
    //if(alpha==1) level_two();
    level_one();
    let start_btn = document.querySelector('#stop-test').style.display = "none";
    user_input.disabled = true;
    let timer_html = document.querySelector('#timer');

    timer_html.innerHTML = 30 + " Sec";
    let result = document.querySelector('.result');
    result.style.display = "block";
}
function iniital() {
    start = 0;
    mistake = 0;
    level = 1;
    timer = 30;

    let timer_html = document.querySelector('#timer');
    timer_html.innerHTML = 60 + "Sec";

    let start_btn = document.querySelector('#start-test').style.display = "block";
    start_btn = document.querySelector('#stop-test').style.display = "none";

    let level_inner = document.querySelector("#level");
    level_inner.innerHTML = 1;
    user_input.disabled = true;




}

