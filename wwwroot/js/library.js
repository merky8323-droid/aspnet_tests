let Book = {
    title: "",
    author: "",
    pages: 0
};

let BookContainer = [];

function BookConstructor(t, a, p) {
    if (!new.target) return;
    BookContainer.push({ t, a, p });
}
function display_book(trigger) {
    let selected_content = document.querySelector("#selected_content");
    let title = selected_content.querySelector("#title");
    let author = selected_content.querySelector("#author");
    let content = selected_content.querySelector("#content");

    title.textContent = trigger.currentTarget.querySelector("#title").textContent;
    author.textContent = trigger.currentTarget.querySelector("#author").textContent;
    content.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit ab accusantium aliquid architecto aspernatur at atque beatae blanditiis commodi consequatur consequuntur corporis cumque cupiditate debitis delectus deleniti deserunt dicta dignissimos distinctio.
	Lorem ipsum dolor sit amet consectetur adipisicing elit ab accusantium aliquid architecto aspernatur at atque beatae blanditiis commodi consequatur consequuntur corporis cumque cupiditate debitis delectus deleniti deserunt dicta dignissimos distinctio.
	Lorem ipsum dolor sit amet consectetur adipisicing elit ab accusantium aliquid architecto aspernatur at atque beatae blanditiis commodi consequatur consequuntur corporis cumque cupiditate debitis delectus deleniti deserunt dicta dignissimos distinctio.
	Lorem ipsum dolor sit amet consectetur adipisicing elit ab accusantium aliquid architecto aspernatur at atque beatae blanditiis commodi consequatur consequuntur corporis cumque cupiditate debitis delectus deleniti deserunt dicta dignissimos distinctio.
	Lorem ipsum dolor sit amet consectetur adipisicing elit ab accusantium aliquid architecto aspernatur at atque beatae blanditiis commodi consequatur consequuntur corporis cumque cupiditate debitis delectus deleniti deserunt dicta dignissimos distinctio.
	Lorem ipsum dolor sit amet consectetur adipisicing elit ab accusantium aliquid architecto aspernatur at atque beatae blanditiis commodi consequatur consequuntur corporis cumque cupiditate debitis delectus deleniti deserunt dicta dignissimos distinctio.
	Lorem ipsum dolor sit amet consectetur adipisicing elit ab accusantium aliquid architecto aspernatur at atque beatae blanditiis commodi consequatur consequuntur corporis cumque cupiditate debitis delectus deleniti deserunt dicta dignissimos distinctio.
	Lorem ipsum dolor sit amet consectetur adipisicing elit ab accusantium aliquid architecto aspernatur at atque beatae blanditiis commodi consequatur consequuntur corporis cumque cupiditate debitis delectus deleniti deserunt dicta dignissimos distinctio.
	Lorem ipsum dolor sit amet consectetur adipisicing elit ab accusantium aliquid architecto aspernatur at atque beatae blanditiis commodi consequatur consequuntur corporis cumque cupiditate debitis delectus deleniti deserunt dicta dignissimos distinctio.
	Lorem ipsum dolor sit amet consectetur adipisicing elit ab accusantium aliquid architecto aspernatur at atque beatae blanditiis commodi consequatur consequuntur corporis cumque cupiditate debitis delectus deleniti deserunt dicta dignissimos distinctio.`;
}

function add_book(trigger) {
    // isolate different files and their native languages; html with templates
    const sidebar_template = document.querySelector("#sidebar");
    const sidebar = sidebar_template.content.cloneNode(true);

    // form handling
    let form = sidebar.querySelector("#book_entry_form");
    form.addEventListener("submit", function (trigger) {
        trigger.preventDefault();

        let t = form.querySelector("#input_title").value;
        let a = form.querySelector("#input_author").value;
        let p = parseInt(form.querySelector("#input_pages").value, 10);

        let book_data = new BookConstructor(t, a, p);
        const book_template = document.querySelector("#book_template");
        const book_display = book_template.content.cloneNode(true);

        book_display.querySelector("#title").textContent = t;
        book_display.querySelector("#author").textContent = a;
        book_display.querySelector("#pages").textContent = p;

        let book_button = book_display.querySelector(".book");
        book_button.addEventListener("click", display_book);

        document.querySelector("#shelf").appendChild(book_display);
        document.querySelector("#sidebar_container").remove();
    });
    let cancel_form = form.querySelector("#cancel_book_btn");
    cancel_form.addEventListener("click", function (trigger) {
        document.querySelector("#sidebar_container").remove();
    });

    document.querySelector("body").appendChild(sidebar);
}



// buttons
document.querySelector("#add_book").addEventListener("click", add_book);
