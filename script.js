document.addEventListener('DOMContentLoaded', function() {
    const productListContainer = document.getElementById('product-list');
    const productDetailsContainer = document.getElementById('product-details');
    const relatedProductsContainer = document.getElementById('related-products');
    const categoriesContainer = document.getElementById('categories');
    const moreStoresContainer = document.getElementById('more-stores');

    const products = [
        {
            "id": 1,
            "name": "Health Product 1",
            "price": 100,
            "discounted_price": 80,
            "category": "Health",
            "description": "Description of Health Product 1",
            "coupon_code": "HEALTH10",
            "images": ["Screenshot from 2024-02-09 11-09-57.png", "Screenshot from 2024-07-20 19-21-49.png"],
            "sizes": ["S", "M", "L"],
            "spec_image": "Screenshot from 2024-02-09 11-09-57.png",
            "affiliate_link": "https://example.com/health1",
            "video_url": "https://youtu.be/JzyQb4MFG9I?si=ehtdVf5Q4iK3U18z"
        },
        {
            "id": 2,
            "name": "Health Product 1",
            "price": 100,
            "discounted_price": 80,
            "category": "Health",
            "description": "Description of Health Product 1",
            "coupon_code": "HEALTH10",
            "images": ["Screenshot from 2024-02-09 11-09-57.png", "Screenshot from 2024-07-20 19-21-49.png"],
            "sizes": ["S", "M", "L"],
            "spec_image": "Screenshot from 2024-02-09 11-09-57.png",
            "affiliate_link": "https://example.com/health1",
            "video_url": "https://youtu.be/JzyQb4MFG9I?si=ehtdVf5Q4iK3U18z"
        },
        {
            "id":3,
            "name": "Health Product 1",
            "price": 100,
            "discounted_price": 80,
            "category": "Health",
            "description": "Description of Health Product 1",
            "coupon_code": "HEALTH10",
            "images": ["Screenshot from 2024-02-09 11-09-57.png", "Screenshot from 2024-07-20 19-21-49.png"],
            "sizes": ["S", "M", "L"],
            "spec_image": "Screenshot from 2024-02-09 11-09-57.png",
            "affiliate_link": "https://example.com/health1",
            "video_url": "https://youtu.be/JzyQb4MFG9I?si=ehtdVf5Q4iK3U18z"
        }
        ,{
            "id": 4,
            "name": "Health Product 2",
            "price": 120,
            "discounted_price": 90,
            "category": "Health",
            "description": "Description of Health Product 2",
            "coupon_code": "HEALTH20",
            "images": ["images/health2-1.jpg", "images/health2-2.jpg"],
            "sizes": ["S", "M", "L"],
            "spec_image": "images/health_spec2.jpg",
            "affiliate_link": "https://example.com/health2"
        },{
            "id": 5,
            "name": "Health Product 2",
            "price": 120,
            "discounted_price": 90,
            "category": "Health",
            "description": "Description of Health Product 2",
            "coupon_code": "HEALTH20",
            "images": ["images/health2-1.jpg", "images/health2-2.jpg"],
            "sizes": ["S", "M", "L"],
            "spec_image": "images/health_spec2.jpg",
            "affiliate_link": "https://example.com/health2"
        },{
            "id": 6,
            "name": "Health Product 2",
            "price": 120,
            "discounted_price": 90,
            "category": "Health",
            "description": "Description of Health Product 2",
            "coupon_code": "HEALTH20",
            "images": ["images/health2-1.jpg", "images/health2-2.jpg"],
            "sizes": ["S", "M", "L"],
            "spec_image": "images/health_spec2.jpg",
            "affiliate_link": "https://example.com/health2"
        },{
            "id": 7,
            "name": "Health Product 2",
            "price": 120,
            "discounted_price": 90,
            "category": "Health",
            "description": "Description of Health Product 2",
            "coupon_code": "HEALTH20",
            "images": ["images/health2-1.jpg", "images/health2-2.jpg"],
            "sizes": ["S", "M", "L"],
            "spec_image": "images/health_spec2.jpg",
            "affiliate_link": "https://example.com/health2"
        },{
            "id": 8,
            "name": "Health Product 2",
            "price": 120,
            "discounted_price": 90,
            "category": "Health",
            "description": "Description of Health Product 2",
            "coupon_code": "HEALTH20",
            "images": ["images/health2-1.jpg", "images/health2-2.jpg"],
            "sizes": ["S", "M", "L"],
            "spec_image": "images/health_spec2.jpg",
            "affiliate_link": "https://example.com/health2"
        },{
            "id": 9,
            "name": "Health Product 2",
            "price": 120,
            "discounted_price": 90,
            "category": "Health",
            "description": "Description of Health Product 2",
            "coupon_code": "HEALTH20",
            "images": ["images/health2-1.jpg", "images/health2-2.jpg"],
            "sizes": ["S", "M", "L"],
            "spec_image": "images/health_spec2.jpg",
            "affiliate_link": "https://example.com/health2"
        },{
            "id": 10,
            "name": "Health Product 2",
            "price": 120,
            "discounted_price": 90,
            "category": "Health",
            "description": "Description of Health Product 2",
            "coupon_code": "HEALTH20",
            "images": ["images/health2-1.jpg", "images/health2-2.jpg"],
            "sizes": ["S", "M", "L"],
            "spec_image": "images/health_spec2.jpg",
            "affiliate_link": "https://example.com/health2"
        },{
            "id": 11,
            "name": "Health Product 2",
            "price": 120,
            "discounted_price": 90,
            "category": "Health",
            "description": "Description of Health Product 2",
            "coupon_code": "HEALTH20",
            "images": ["images/health2-1.jpg", "images/health2-2.jpg"],
            "sizes": ["S", "M", "L"],
            "spec_image": "images/health_spec2.jpg",
            "affiliate_link": "https://example.com/health2"
        },
        {
            "id": 12,
            "name": "Health Product 2",
            "price": 120,
            "discounted_price": 90,
            "category": "Health",
            "description": "Description of Health Product 2",
            "coupon_code": "HEALTH20",
            "images": ["images/health2-1.jpg", "images/health2-2.jpg"],
            "sizes": ["S", "M", "L"],
            "spec_image": "images/health_spec2.jpg",
            "affiliate_link": "https://example.com/health2"
        },
        {
            "id": 13,
            "name": "Fashion Product 1",
            "price": 200,
            "discounted_price": 150,
            "category": "Fashion",
            "description": "Description of Fashion Product 1",
            "coupon_code": "FASHION10",
            "images": ["images/fashion1-1.jpg", "images/fashion1-2.jpg"],
            "sizes": ["S", "M", "L"],
            "spec_image": "images/fashion_spec1.jpg",
            "affiliate_link": "https://example.com/fashion1"
        },
        
        {
            "id": 14,
            "name": "Fashion Product 2",
            "price": 220,
            "discounted_price": 180,
            "category": "Fashion",
            "description": "Description of Fashion Product 2",
            "coupon_code": "FASHION20",
            "images": ["images/fashion2-1.jpg", "images/fashion2-2.jpg"],
            "sizes": ["S", "M", "L"],
            "spec_image": "images/fashion_spec2.jpg",
            "affiliate_link": "https://example.com/fashion2"
        }
    ];

    const stores = [
        {
            "name": "Store 1",
            "image": "images/store1.jpg",
            "url": "https://example.com/store1"
        },
        {
            "name": "Store 1",
            "image": "images/store1.jpg",
            "url": "https://example.com/store1"
        },
        {
            "name": "Store 1",
            "image": "images/store1.jpg",
            "url": "https://example.com/store1"
        },
        
    ];

    function displayMoreStores() {
        moreStoresContainer.innerHTML = stores.map(store => `
            <div class="store" onclick="window.location.href='${store.url}'">
                <img src="${store.image}" alt="${store.name}">
                <h2>${store.name}</h2>
            </div>
        `).join('');
    }

    displayMoreStores();

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    function displayCategories() {
        const categories = [...new Set(products.map(product => product.category))];
        categoriesContainer.innerHTML = categories.map(category => `
            <button onclick="filterByCategory('${category}')">${category}</button>
        `).join('');
    }

    function displayProductsByCategory(category) {
        const filteredProducts = products.filter(product => product.category === category);
        productListContainer.innerHTML = filteredProducts.map(product => `
            <div class="product" onclick="window.location.href='product-details.html?id=${product.id}'">
                <img src="${product.images[0]}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>Price: $${product.price}</p>
                <p>Discounted Price: $${product.discounted_price}</p>
                <button>Buy Now</button>
            </div>
        `).join('');
    }

    if (productListContainer) {
        displayCategories();
        displayProductsByCategory('Health');  // Display Health category by default
    }

    if (productDetailsContainer && productId) {
        const product = products.find(p => p.id == productId);

        if (product) {
            let imagesHTML = '';
            product.images.forEach((image, index) => {
                imagesHTML += `<img src="${image}" style="display: ${index === 0 ? 'block' : 'none'};">`;
            });

            const videoHTML = product.video_url ? `<iframe src="${product.video_url}" frameborder="0" allowfullscreen></iframe>` : '';

            productDetailsContainer.innerHTML = `
                <div id="product-content">
                    <div id="slider">
                        ${imagesHTML}
                        <a class="prev" onclick="changeSlide(-1)">&#10094;</a>
                        <a class="next" onclick="changeSlide(1)">&#10095;</a>
                    </div>
                    <div id="video-player">
                        ${videoHTML}
                    </div>
                </div>
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <p>Discounted Price: $${product.discounted_price}</p>
                <p>Coupon Code: ${product.coupon_code}</p>
                <p>Sizes: ${product.sizes.join(', ')}</p>
                <img src="${product.spec_image}" alt="Product Specification">
                <button onclick="window.location.href='${product.affiliate_link}'">Buy Now</button>
            `;

            relatedProductsContainer.innerHTML = products
                .filter(p => p.category === product.category && p.id !== product.id)
                .map(p => `
                    <div class="product" onclick="window.location.href='product-details.html?id=${p.id}'">
                        <img src="${p.images[0]}" alt="${p.name}">
                        <h2>${p.name}</h2>
                        <p>Price: $${p.price}</p>
                        <p>Discounted Price: $${p.discounted_price}</p>
                        <button>View Details</button>
                    </div>
                `).join('');
        }
    }

    window.filterByCategory = function(category) {
        displayProductsByCategory(category);
    };
});

let slideIndex = 0;

function changeSlide(n) {
    const slides = document.querySelectorAll('#slider img');
    slides[slideIndex].style.display = 'none';
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    slides[slideIndex].style.display = 'block';
}
