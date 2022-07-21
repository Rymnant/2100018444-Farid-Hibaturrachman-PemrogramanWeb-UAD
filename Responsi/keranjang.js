let label = document.getElementById("label");
let Tokokeranjang = document.getElementById("Toko-keranjang");

let basket = JSON.parse(localStorage.getItem("daftar_barang")) || [];

let calculation = () => {
  let keranjangIcon = document.getElementById("jumlah");
  keranjangIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let generatekeranjangItems = () => {
  if (basket.length !== 0) {
    return (Tokokeranjang.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = barang.find((y) => y.id === id) || [];
        return `
      <div>
        <div class="details">

          <div class="box-harga">
              <h4 class="barang">
                <p>${search.name}</p>
                <p>harga Rp ${search.price}</p>
              </h4>
          </div>

          <div class="buttons">
              <i onclick="kurang(${id})">-</i>
              <div id=${id}>${item}</div>
              <i onclick="tambah(${id})">+</i>
          </div>

          <h3>Harga : Rp ${item * search.price}</h3>
        </div>
      </div>
      `;
      })
      .join(""));
  } else {
    Tokokeranjang.innerHTML = ``;
    label.innerHTML = `
    <h2>Keranjang kosong!</h2>
    <a href="index.html">
      <button class="HomeBtn">Kembali ke halaman utama</button>
    </a>
    `;
  }
};

generatekeranjangItems();

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

  generatekeranjangItems();
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
  generatekeranjangItems();
  localStorage.setItem("daftar_barang", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

let clearkeranjang = () => {
  basket = [];
  generatekeranjangItems();
  localStorage.setItem("daftar_barang", JSON.stringify(basket));
};

let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { item, id } = x;
        let search = barang.find((y) => y.id === id) || [];

        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    label.innerHTML = `
    <br><br>
    <h2>Total harga keseluruhan : Rp ${amount}</h2>
    <br><br>
    <button onclick=""class="checkout">Cetak struk</button>
    <button onclick="clearkeranjang()" class="removeAll">Bersihkan keranjang</button>
    `;
  } else return;
};

TotalAmount();
