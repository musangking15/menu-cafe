feather.replace();

const menuItems = [
  {
    name: "Kopi1",
    category: "coffee",
    img: "kopi1.jpg",
    deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe et placeat sapiente aliquid nesciunt, doloribus hic adipisci harum eius tempora officiis amet, id voluptas, provident quo eos nulla quaerat nam.",
    price: 15,
  },
  {
    name: "Kopi2",
    category: "coffee",
    img: "kopi2.jpg",
    deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe et placeat sapiente aliquid nesciunt, doloribus hic adipisci harum eius tempora officiis amet, id voluptas, provident quo eos nulla quaerat nam.",
    price: 15,
  },
  {
    name: "Kopi3",
    category: "coffee",
    img: "kopi3.jpg",
    deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe et placeat sapiente aliquid nesciunt, doloribus hic adipisci harum eius tempora officiis amet, id voluptas, provident quo eos nulla quaerat nam.",
    price: 15,
  },
  {
    name: "Nonkopi1",
    category: "noncoffee",
    img: "nonkopi1.jpg",
    deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe et placeat sapiente aliquid nesciunt, doloribus hic adipisci harum eius tempora officiis amet, id voluptas, provident quo eos nulla quaerat nam.",
    price: 15,
  },
  {
    name: "Nonkopi2",
    category: "noncoffee",
    img: "nonkopi2.jpg",
    deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe et placeat sapiente aliquid nesciunt, doloribus hic adipisci harum eius tempora officiis amet, id voluptas, provident quo eos nulla quaerat nam.",
    price: 15,
  },
  {
    name: "Nonkopi3",
    category: "noncoffee",
    img: "nonkopi3.jpg",
    deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe et placeat sapiente aliquid nesciunt, doloribus hic adipisci harum eius tempora officiis amet, id voluptas, provident quo eos nulla quaerat nam.",
    price: 15,
  },
  {
    name: "Snacks1",
    category: "snacks",
    img: "snacks1.jpg",
    deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe et placeat sapiente aliquid nesciunt, doloribus hic adipisci harum eius tempora officiis amet, id voluptas, provident quo eos nulla quaerat nam.",
    price: 15,
  },
  {
    name: "Snacks2",
    category: "snacks",
    img: "snacks2.jpg",
    deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe et placeat sapiente aliquid nesciunt, doloribus hic adipisci harum eius tempora officiis amet, id voluptas, provident quo eos nulla quaerat nam.",
    price: 15,
  },
  {
    name: "Snacks3",
    category: "snacks",
    img: "snacks3.jpg",
    deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe et placeat sapiente aliquid nesciunt, doloribus hic adipisci harum eius tempora officiis amet, id voluptas, provident quo eos nulla quaerat nam.",
    price: 15,
  },
];

const menuContainer = document.querySelector("#menu-items");
const filterButtons = document.querySelectorAll(".filter");

function displayMenuItems(category) {
  menuContainer.innerHTML = "";
  const filteredItems = category === "all" ? menuItems : menuItems.filter((item) => item.category === category);

  filteredItems.forEach((item) => {
    const card = document.createElement("div");
    card.className = "col-md-6 col-lg-4";
    card.innerHTML = `
            <div class="card">
                <img src="./img/${item.img}" class="card-img-top" alt="..." />
                <div class="card-body">
                    <div class="d-flex mb-1">
                        <h4 class="fw-semibold">${item.name}</h4>
                        <h5 class="ms-auto fw-normal">Rp. ${item.price}K</h5>
                    </div>
                    <p class="card-text">${item.deskripsi}</p>
                </div>
            </div>
      `;
    menuContainer.appendChild(card);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-filter");
    displayMenuItems(category);

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
  });
});

displayMenuItems("all");
