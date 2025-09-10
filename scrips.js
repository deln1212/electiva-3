// ======= SCROLL A PRODUCTOS =======
document.getElementById("btn-products").addEventListener("click", () => {
    document.getElementById("products").scrollIntoView({behavior:"smooth"});
});

// ======= PRODUCTOS DESTACADOS =======
const productos = [
    {
        titulo:"Apple iPhone 14 Pro Max", precio:"US$ 1,199", img:"https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SX679_.jpg",
        links:{amazon:"https://www.amazon.com/dp/B0BN93P98N", ebay:"https://www.ebay.com/sch/i.html?_nkw=iPhone+14+Pro+Max", aliexpress:"https://www.aliexpress.com/wholesale?SearchText=iPhone+14+Pro+Max"}
    },
    {
        titulo:"Samsung Galaxy S23 Ultra", precio:"US$ 999.99", img:"https://m.media-amazon.com/images/I/71HUnJvHsbL._AC_SX679_.jpg",
        links:{amazon:"https://www.amazon.com/dp/B0C544TBQM", ebay:"https://www.ebay.com/sch/i.html?_nkw=Samsung+Galaxy+S23+Ultra", aliexpress:"https://www.aliexpress.com/wholesale?SearchText=Samsung+Galaxy+S23+Ultra"}
    },
    {
        titulo:"Google Pixel 7", precio:"US$ 469", img:"pixel7.jpg",
        links:{amazon:"https://www.amazon.com/dp/B0BCQXXRJJ", ebay:"https://www.ebay.com/sch/i.html?_nkw=Google+Pixel+7", aliexpress:"https://www.aliexpress.com/wholesale?SearchText=Google+Pixel+7"}
    }
];

const grid = document.getElementById("productGrid");
productos.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
        <img src="${p.img}" alt="${p.titulo}">
        <h4>${p.titulo}</h4>
        <p class="price">${p.precio}</p>
        <div class="buy-buttons">
            <a href="${p.links.amazon}" target="_blank" class="amazon">Amazon</a>
            <a href="${p.links.ebay}" target="_blank" class="ebay">eBay</a>
            <a href="${p.links.aliexpress}" target="_blank" class="aliexpress">AliExpress</a>
        </div>
    `;
    grid.appendChild(card);
});

// ======= FORMULARIO CONTACTO
