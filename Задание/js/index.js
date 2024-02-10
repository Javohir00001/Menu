// Данные
const responseData = {
  services: [
    {
      id: 1,
      head: null,
      name: "Проф.осмотр",
      node: 0,
      price: 100.0,
      sorthead: 20,
    },
    {
      id: 2,
      head: null,
      name: "Хирургия",
      node: 1,
      price: 0.0,
      sorthead: 10,
    },
    {
      id: 3,
      head: 2,
      name: "Удаление зубов",
      node: 1,
      price: 0.0,
      sorthead: 10,
    },
    {
      id: 4,
      head: 3,
      name: "Удаление зуба",
      node: 0,
      price: 800.0,
      sorthead: 10,
    },
    {
      id: 5,
      head: 3,
      name: "Удаление 8ого зуба",
      node: 0,
      price: 1000.0,
      sorthead: 30,
    },
    {
      id: 6,
      head: 3,
      name: "Удаление осколка зуба",
      node: 0,
      price: 2000.0,
      sorthead: 20,
    },
    {
      id: 7,
      head: 2,
      name: "Хирургические вмешательство",
      node: 0,
      price: 200.0,
      sorthead: 10,
    },
    {
      id: 8,
      head: 2,
      name: "Имплантация зубов",
      node: 1,
      price: 0.0,
      sorthead: 20,
    },
    {
      id: 9,
      head: 8,
      name: "Коронка",
      node: 0,
      price: 3000.0,
      sorthead: 10,
    },
    {
      id: 10,
      head: 8,
      name: "Слепок челюсти",
      node: 0,
      price: 500.0,
      sorthead: 20,
    },
  ],
};

// Функция для динамического создания меню
function menuBuilder(data, parentId, parentNode) {
  const ul = document.createElement("ul");
  data
    .filter((item) => item.head === parentId)
    .sort((a, b) => a.sorthead - b.sorthead)
    .forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `${item.name} ${item.price > 0 ? `- <strong>${item.price} \u20BD</strong>` : ""}`;
      li.classList.add("menu__item");
      ul.appendChild(li);

      if (item.node === 1) {
        menuBuilder(data, item.id, li);
        if (!item.price) {
          const icon = document.createElement("i");
          icon.classList.add("fas", "fa-chevron-right", "menu__icon");
          li.insertBefore(icon, li.firstChild);
        }
      }
    });
  if (parentNode) {
    parentNode.appendChild(ul);
  } else {
    document.getElementById("menu").appendChild(ul);
  }
}

// Выщов функции menuBuilder
document.addEventListener("DOMContentLoaded", () => {
  menuBuilder(responseData.services, null, null);
});

// Фунция для добвления динамики при нажатии на меню
document.getElementById("menu").addEventListener("click", (event) => {
  if (event.target.classList.contains("menu__item")) {
    event.target.classList.toggle("active");
    const icon = event.target.querySelector(".menu__icon");
    if (icon) {
      icon.classList.toggle("fa-chevron-down");
    }
  }
});
