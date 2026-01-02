fetch('assets/data/products.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('products');
    data.forEach(item => {
      container.innerHTML += `
        <div class="card">
          <h3>${item.name}</h3>
          <p>${item.price}</p>
        </div>
      `;
    });
  });
