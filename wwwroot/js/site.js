let cpu_choice = get_symbol(Math.floor(Math.random() * 3));
let user_choice = get_symbol(Math.floor(Math.random() * 3));
let win_ct = 0;
let tie_ct = 0;
let loss_ct = 0;

function get_symbol(num) { return (num ? (num == 1 ? "Paper" : "Scissors") : "Rock"); }
function rps(cpu, user)
{
    if (cpu == user) ++tie_ct;
    else if ((user == "Rock" && cpu == "Scissors") || (user == "Paper" && cpu == "Rock") || (user == "Scissors" && cpu == "Paper")) ++win_ct;
    else ++loss_ct;

    return;
}
function dom_test(obj) { console.log(obj); }

rps(cpu_choice, user_choice)

console.log(win_ct + ", " + tie_ct + ", " + loss_ct);

/* QUERY SELECTOR TESTS
dom_test(document.querySelector(".test_text"));

// create parent node and children elements underneath, iterate through them
let parent_node = document.createElement("div");
for (let i = 0; i < 3; ++i)
{
    let child = document.createElement("div");
    parent_node.appendChild(child);
}

// let children = parent_node.children;
console.log(parent_node.children);
*/

/* STYLE SELECTOR TESTS
*/
let x = document.querySelector(".test_text");
let color_palette = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

/* promise is basically a throw catch thing? arrow fn = lambda [](){}
- resolve effectively changes flags from pending to fulfilled or rejected
*/
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
async function change_color()   // await is like pthread_join 
{
    while (true) 
    {
        x.style.color = color_palette[Math.floor(Math.random() * color_palette.length)];
        await sleep(1000);
    }
}

change_color();

/* classList tests
let y = document.createElement("p");
y.textContent = "Hi";
document.body.append(y);

y.classList.add("test");
let select_y = document.querySelector(".test");
*/

/* button with event that alerts user that they clicked it
1. create element in js
2. set event function and listeners
*/

function alert_user(event) { alert("Hello, this message was activated by " + event.target.textContent); }

let btn = document.createElement("button");
btn.classList.add("btn");
btn.textContent = "Hi";
document.body.append(btn);

btn.addEventListener("click", alert_user);