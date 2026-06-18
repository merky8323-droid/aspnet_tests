/*
- let html/css render the data thats manipulated in js; separation of concerns
- update_shelf() and content_selected() should be doing heavy lifting
1. books should be pushed to data container (array/vector)
    - update_shelf() should iterate through the container and push elements into a book template and shit
        - update_shel should happen with additions and removals of content
*/

// book element and container properties
const Book = {
    title: "",
    author: "",
    pages: 0,
    have_read: false
};
function BookConstructor(t, a, p) {
    if (!new.target) return;

    this.title = t;
    this.author = a;
    this.pages = p;
    this.have_read = false;
}
let BookContainer = [];

// common locations ill have to iterate through
const shelf = document.querySelector("#shelf");
const selected_content = document.querySelector("#selected_content");
let selected_content_title = selected_content.querySelector("#title");
let selected_content_author = selected_content.querySelector("#author");
let selected_content_txt = selected_content.querySelector("#text_content");
const book_template = document.querySelector("#book");
const sidebar = document.querySelector("#sidebar");
const add_book = document.querySelector("#add_book");

function update_container(BookContainer) {
    // i should clear all elements in shelf before populating it again
    shelf.innerHTML = ``;
    let book_ct = 0;

    // iterate through all elements in container and push all contents to template and appending to shelf
    for (const Book of BookContainer) {
        let book_render = book_template.content.cloneNode(true);
        const book_container = book_render.querySelector(".book_container");

        book_render.querySelector("#remove").dataset.index = book_ct;   // store in `a` element dataset s.t. it can instantly access whenever clicked
        book_render.querySelector("#title").textContent = Book.title;
        book_render.querySelector("#author").textContent = Book.author;
        book_render.querySelector("#pages").textContent = `${Book.pages} pages`;

        // add functionality for selection, removal, and read toggling
        book_container.addEventListener("click", function (trigger) {
            selected_content_title.textContent = Book.title;
            selected_content_author.textContent = Book.author;
            selected_content_txt.textContent = "This is a sentence. ".repeat(Math.floor(Math.random() * 1000));
        });

        book_container.querySelector("#remove").addEventListener("click", function (trigger) {
            // linearly iterate through container for the title of the element, returns the index. splice
            // could be 2 books of same title/author, mayb each Book element should have a unique ID
            // rn html/css render doesnt have any attachment to any unique id, and how would it even work for unique values; hide it secretly in the div?
            trigger.stopPropagation();

            if (Book.title == selected_content_title.textContent) {
                selected_content_title.textContent = `Select an item from the shelf or add a new book.`;
                selected_content_author.textContent = ``;
                selected_content_txt.textContent = ``;
            }

            BookContainer.splice(parseInt(trigger.currentTarget.dataset.index), 1);
            update_container(BookContainer);
        });

        ++book_ct;
        shelf.appendChild(book_render);
    }
}

function sidebar_functionality() {
    let sidebar_form = sidebar.querySelector("#sidebar_form");

    // sidebar add book/submit
    sidebar_form.addEventListener("submit", function (trigger) {
        trigger.preventDefault();

        // record values when submit is pressed
        let input_title = sidebar_form.querySelector("#input_title").value;
        let input_author = sidebar_form.querySelector("#input_author").value;
        let input_pages = parseInt(sidebar_form.querySelector("#input_pages").value);

        let new_book = new BookConstructor(input_title, input_author, input_pages);
        BookContainer.push(new_book);

        // transition by activating active pseudoclass
        sidebar.classList.remove("active");

        sidebar_form.reset();
        update_container(BookContainer);
    });

    // sidebar cancel
    let sidebar_cancel = sidebar_form.querySelector("#cancel_book_btn");
    sidebar_cancel.addEventListener("click", function (trigger) {
        trigger.preventDefault();

        sidebar.classList.remove("active");
        sidebar_form.reset();
    });
}

// main interactions
sidebar_functionality();
add_book.addEventListener("click", function (trigger) {
    sidebar.classList.add("active");
});