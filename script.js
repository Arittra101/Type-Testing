let random_query = document.querySelector('#quote');
let user_input = document.querySelector('#quote-input');
let des_name = document.querySelector('.name');
let level_html = document.querySelector('#level');
let level = 1;
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
let game_lost = 0;

function initial_quotes() {
    random_query.innerHTML = "";
}
// random_query.innerHTML = `;
const level_one = () => {

    quotes = 'cout<<"Hello I can do anything";';
    initial_quotes();
   // quotes = "Hello";
   // quotes = 'cout<<"The quick brown fox jumps over the lazy dog."';
    numberofchar = quotes.length;
    convertQuotes_To_array(quotes)
};
const level_two = () => {
    initial_quotes();
    console.log("level two");
    // random_query.innerHTML="";
     quotes = 'cout<<"The quick brown fox jumps over the lazy dog"';
    //quotes = 'Hello2"';
    convertQuotes_To_array(quotes);

};
const level_three = () => {
    initial_quotes();
    console.log("Hello Level 3");
     quotes ='cout<<"The shortest war in history was between Britain and Zanzibar in 1896";';
   // quotes = 'Hello3';
    convertQuotes_To_array(quotes);
};
const level_four = () => {
    initial_quotes();
    console.log("Hello Level 4");
    quotes ='cout<<"The shortest war in history was between Britain and Zanzibar in 1896, lasting only 38 minutes.";';
  //  quotes = 'Hello4';
    convertQuotes_To_array(quotes);

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
        //console.log("Ds");
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
        if (timer > 0) {
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
    let cal = 0;
    let spd = 0;
    if (char_type > 1 || alpha == 1) {


        let numberOfCorrect = char_type - mistake;
        console.log(numberOfCorrect);

        cal = Math.round((numberOfCorrect / char_type) * 100.00);
        timer_html.innerHTML = cal + "%";

        mistake_html.innerHTML = mistake + " times";
        console.log("typed " + char_type);

        spd = Math.round((char_type / 5) / (front_time / 60));
        speed_html.innerHTML = spd + " WPM";

    }
    else {
        rs.innerHTML = "Please! Type SomeThing";
        timer_html.innerHTML = "0";
    }

    if (cal > 80 && level == 1) {
        des_name.innerHTML = `Hello! Now  To pass the level Two <span
        style="color: green; font-weight: bold;">Now Accuracy must be greater than 90%</span>`
        level++;
        console.log("Going to level 2");
    }
    else if (cal < 80 && level == 1) {
        des_name.innerHTML = `Hello! Sorry Back to level One
        style="color: red; font-weight: bold;">Accuracy less then target</span>`
        level = 1;
    }

    else if (cal > 90 && level == 2) {
        des_name.innerHTML = `Hello! Now  To pass the level Three <span
        style="color: green; font-weight: bold;">Now Accuracy must be greater than 95%</span>`
        level++;
    }
    else if (cal < 90 && level == 2) {
        des_name.innerHTML = `Hello! Sorry Back to level One
        style="color: red; font-weight: bold;">Accuracy less then target</span>`
        level = 1;
    }
    else if (cal > 95 && level == 3) {
        des_name.innerHTML = `Hello! Now  To pass the level Two <span
        style="color: green; font-weight: bold;">Now Accuracy must be 100%</span>`
        level++;
    }
    else if (cal < 95 && level == 3) {
        des_name.innerHTML = `Hello! Sorry Back to level One
        <span style="color: red; font-weight: bold;">Accuracy Less then target</span>`
        level = 1;
    }
    else if (cal == 100 && level == 4) {
        des_name.innerHTML = ` <span style="color: Green; font-weight: bold;">You complete all the levels. You can Start from level one again!</span>`
        level = 1;

    }
    console.log(char_type);
    window_load();
    iniital();

}
window.onload = () => {

    window_load();
}
function window_load() {
    //if(alpha==1) level_two();
    if (level == 1) {
        console.log("Coming to level one");
        level_one();
    }
    //level_one();
    else if (level == 2) {
        console.log("Coming to level two");
        level_two();
    }
    else if (level == 3) {
        console.log("Coming to level three");
        level_three();
    }
    else if (level == 4) {
        console.log("Coming to level four");
        level_four();
    }

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
    timer = 30;

    let timer_html = document.querySelector('#timer');
    timer_html.innerHTML = timer + "Sec";

    let start_btn = document.querySelector('#start-test').style.display = "block";
    start_btn = document.querySelector('#stop-test').style.display = "none";

    let level_inner = document.querySelector("#level");
    level_inner.innerHTML = 1;
    user_input.disabled = true;

    document.querySelector("#mistakes").innerHTML = "0";


    user_input.value = "";

}
function reset() {

    level = 1;
}
function back_to_level_one() {
    level = 1;
}

