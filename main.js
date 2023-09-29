let snake = document.querySelector('#snake');
let water = document.querySelector('#water');
let gun = document.querySelector('#gun');
let h1= document.querySelector('#h1');

// variables 
let game_array = ["snake", "water", "Gun"];
let random_number;
let comp_option;
let user_option;


// generating random computer choice 
random_number = Math.floor(Math.random() * 3);
comp_option = game_array[random_number];


// water user choice logic 
water.onclick = function () {

    if (comp_option == "Gun") {
        console.log("you win! computer selected " + comp_option);
        h1.innerHTML = "you win! computer selected " + comp_option;
    }
    else if (comp_option == 'snake') {
        h1.innerHTML = "you lose! computer selected " + comp_option;

    } else {
      h1.innerHTML = "ohh! It's a draw! computer also selected " + comp_option;
    }


}


//  snake user choice logic

snake.onclick = function () {

    if (comp_option == "Gun") {
        h1.innerHTML ="you win! computer selected " + comp_option;
    }
    else if (comp_option == 'water') {
        h1.innerHTML ="you lose! computer selected " + comp_option;

    } else {
        h1.innerHTML ="ohh! It's a draw! computer also selected " + comp_option;
    }


}
gun.onclick = function () {

    if (comp_option == "snake") {
        h1.innerHTML ="you win! computer selected " + comp_option;
    }
    else if (comp_option == 'water') {
        h1.innerHTML ="you lose! computer selected " + comp_option;

    } else {
        h1.innerHTML ="ohh! It's a draw! computer also selected " + comp_option;
    }


}


// }