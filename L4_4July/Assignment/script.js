//fetch api--> fetch data from https://dummyjson.com/products
async function fetchData() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();

        // Extract required fields
        const simplifiedProducts = data.products.map(product => {
          return {
            title: product.title,
            description: product.description,
            price: product.price
          };
        });

        // Log to console (optional)
        console.log(simplifiedProducts);

        // Return the simplified data
        return simplifiedProducts;

      } catch (err) {
        console.error("Error: " + err.message);
      }
    }

    // Call fetchData and display the results
    fetchData().then(products => {
      const container = document.getElementById('products-container');

      if (products && products.length) {
        products.forEach(p => {
          const div = document.createElement('div');
          div.className = 'product';
          div.innerHTML = `
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <strong>Price: $${p.price}</strong>
          `;
          container.appendChild(div);
        });
      }
    });

fetchData();
