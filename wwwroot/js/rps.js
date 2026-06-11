// const choices = ["Rock", "Paper", "Scissors"];
// let plr_choice = "Rock";

// // all buttons share class, if any of the buttons of class are clicked (addEventListener), send event to function
// function update_plr(trigger)
// {
//     let symbol = trigger.target.textContent;
//     let plr_choice_img = document.querySelector("#plr_choice_img");

//     switch (symbol)
//     {
//         case "Rock":
//             plr_choice_img.src = "/images/r.png";
//             break;
//         case "Paper":
//             plr_choice_img.src = "/images/p.png";
//             break;
//         case "Scissors":
//             plr_choice_img.src = "/images/s.png";
//             break;
//     }

//     plr_choice = symbol;
// }

// function play_rd(trigger)
// {
//     // cpu logic
//     let cpu_choice = choices[Math.floor(Math.random() * 3)];
//     let cpu_choice_img = document.querySelector("#cpu_choice_img");

//     switch (cpu_choice) {
//         case "Rock":
//             cpu_choice_img.src = "/images/r.png";
//             break;
//         case "Paper":
//             cpu_choice_img.src = "/images/p.png";
//             break;
//         case "Scissors":
//             cpu_choice_img.src = "/images/s.png";
//             break;
//     }

//     // round assessment
//     let round_desc = document.querySelector("#round_desc");
//     round_desc.textContent = `You have chosen ${plr_choice}, while the CPU has chosen ${cpu_choice}!`;
// }

// // container with more functionality
// let btns = document.querySelectorAll(".plr_choice");
// btns.forEach(btn => { btn.addEventListener("click", update_plr) });

// let confirm = document.querySelector(".confirm");
// confirm.addEventListener("click", play_rd);

/*
1. handle rps logic
    1. plr choice
        - query select all and foreach attach a listener thats routed to plr_update function
    2. play
        - random cpu choice
        - update round_desc
*/

const symbols = ["R", "P", "S"];
let plr_choice = symbols[0];
let win_ct = 0,
    loss_ct = 0,
    tie_ct = 0;
let score = document.querySelector("#score");
score.textContent = `0W\n0T\n0L`;
function plr_update(trigger)
{
    let plr_portrait = document.querySelector("#plr_portrait");

    switch (trigger.target.textContent)
    {
        case "R":
            plr_portrait.src = "/images/r.png";
            break;
        case "P":
            plr_portrait.src = "/images/p.png";
            break;
        case "S":
            plr_portrait.src = "/images/s.png";
    }

    plr_choice = trigger.target.textContent;
}

function play_rd(trigger)
{
    let cpu_choice = symbols[Math.floor(Math.random() * 3)];
    let cpu_portrait = document.querySelector("#cpu_portrait");
    let round_desc = document.querySelector("#round_desc");
    let score = document.querySelector("#score");

    switch (cpu_choice)
    {
        case "R":
            cpu_portrait.src = "/images/r.png";
            break;
        case "P":
            cpu_portrait.src = "/images/p.png";
            break;
        case "S":
            cpu_portrait.src = "/images/s.png";
    }

    if (plr_choice == cpu_choice) ++tie_ct;
    else if ((plr_choice == "R" && cpu_choice == "S") || (plr_choice == "P" && cpu_choice == "R") || (plr_choice == "S" && cpu_choice == "P")) ++win_ct;
    else ++loss_ct;

    score.textContent = `${win_ct}W\n${tie_ct}T\n${loss_ct}L`;
    round_desc.textContent = `You chose ${plr_choice}, while the CPU choice ${cpu_choice}!`;    
}

// for all children under plr_choices, attach listener
let plr_choices = document.querySelector(".plr_choices");
let plr_choice_btns = plr_choices.querySelectorAll("button");
plr_choice_btns.forEach(btn => { btn.addEventListener("click", plr_update) });

// on play press, route to play_rd, do cpu roll and update accordingly
(document.querySelector("#confirm")).addEventListener("click", play_rd);