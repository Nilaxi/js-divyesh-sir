const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
];

const display = (data) => {
  let display = data.map((v) => {
    return `<article class="menu-item">
                <img src = ${v.img} alt="menu item" class="photo" />
                <div class="item-info">
                  <header>
                    <h4>${v.title}</h4>
                    <h4 class="price">${v.price}</h4>
                  </header>
                  <p class="item-text">
                    ${v.desc}
                  </p>
                </div>
              </article>`
  })
  let category = menu.map((v) => {
    return v.category;
  }).reduce((p, v) => {
    if (!p.includes(v)) {
      p.push(v);
    }
    return p;
  }, [])
  let button = category.map((p) => {
    return `<button type="button" class="filter-btn"data-id="breakfast" onclick="filterData('${p}')">${p}</button>`

  })
  document.getElementById("btn").innerHTML = button.join("");
  document.getElementById("menu").innerHTML = display.join("");
}
display(menu);

filterData = (category) => {
  let filterData = menu.filter((v) => {
    return v.category === category;
  })

  display(filterData);
}
Ascprice = () => {
  const Ascprice = menu.sort((a, b) => {
    if (a.price > b.price)
      return 1
    else if (a.price === b.price) {
      if (a.id > b.id) {
        return 1
      }
   else {
        return -1
      }
    }
    else{
      return -1
    }
  })
  display(Ascprice);
}
Dscprice = () =>{
  const Dscprice = menu.sort((a, b) => {
    if (a.price < b.price)
      return 1
    else if (a.price === b.price) {
      if (a.id < b.id) {
        return 1
      }
   else {
        return -1
      }
    }
    else{
      return -1
    }
  })
  display(Dscprice);
}
