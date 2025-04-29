fetch('products/skates.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Помилка завантаження JSON-файлу');
      }
      return response.json();
    })
    .then(dresses => {
      const productList = document.getElementById('product-list');

      dresses.forEach(dress => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
          <img src="${dress.image}" alt="${dress.name}">
          <h3>${dress.name}</h3>
          <p class="price">${dress.price}</p>
          <p class="description">${dress.description}</p>
        `;
        productList.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Помилка:', error);
    });