let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("daftar_barang")) || [];

let generateShop = () => {
  return (shop.innerHTML = barang
    .map((x) => {
      let { id, name, price, desc } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
    <div id=product-id-${id} class="item">
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <h2>Rp ${price} </h2>
          <div class="price-quantity">
            <div class="buttons">
              <i onclick="kurang(${id})">-</i>
              <div id=${id}>
              ${search.item === undefined ? 0 : search.item}
              </div>
              <i onclick="tambah(${id})">+</i>
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join(""));
};

generateShop();

let tambah = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  update(selectedItem.id);
  localStorage.setItem("daftar_barang", JSON.stringify(basket));
};

let kurang = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  localStorage.setItem("daftar_barang", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  hitung();
};

let hitung = () => {
  let keranjangIcon = document.getElementById("jumlah");
  keranjangIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

hitung();
