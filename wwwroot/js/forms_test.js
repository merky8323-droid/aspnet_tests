function obj_test_fn(obj)
{
    let obj_test_p = document.querySelector("#obj_test_p");

    // if constructors trip
    if (!obj)
    {
        obj_test_p.textContent = "Object is empty.";
        return;
    }

    for (const [k, v] of Object.entries(obj))
        obj_test_p.textContent += `${k} : ${v}\n`;
}

let obj_test =
{
    member1: "1",
    member2: "2"
};

obj_test.member3 = 3;
// obj_test_fn(obj_test);

// obj constructor test
function obj_test_constructor(m1, m2)
{
    this.member1 = m1;
    this.member2 = m2;
}

function obj_test_factory(m1, m2) { return { member1: m1, member2: m2 }; }

let obj2 = new obj_test_constructor("a", 1);
// obj_test_fn(obj2);

/*
book obj {name, author,pages,have_read}
*/
let Book = { name: "", author: "", pages: 0, have_read: false };
function BookConstructor(n, a, p, h_r)
{
    let obj_test_p = document.querySelector("#obj_test_p");
    if (!new.target)
    {
        obj_test_p.textContent = "The call must be made with the \"new\" argument!";
        return;
    }

    this.name = n;
    this.author = a;
    this.pages = p;
    this.have_read = h_r;
}

// inherits from object
const FangedNoumena = new BookConstructor("Fanged Noumena", "Nick Land", 500, false);

// is also an object..?
console.log(Object.getPrototypeOf(FangedNoumena) == BookConstructor.prototype); 

// struct inheritance
function Entity(n)
{
    if (!new.target) return;

    this.name = n;
}

Entity.prototype.inheritance_test = function () { console.log(`Entity name is ${this.name}.`); }

function Player(n, h)
{
    if (!new.target) return;

    this.name = n;
    this.health = h;
}

Object.setPrototypeOf(Player.prototype, Entity.prototype);
let plr1 = new Player("A", 1);
plr1.inheritance_test();

BookConstructor.hello = "?";
console.log(BookConstructor.hello);