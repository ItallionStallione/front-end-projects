var homePageImageData=[
    {homeImage : "12/paan-corner_web.png"},
    {homeImage : "11/Slice-2_10.png"},
    {homeImage : "11/Slice-3_9.png"},
    {homeImage : "11/Slice-4_9.png"},
    {homeImage : "11/Slice-5_4.png"},
    {homeImage : "11/Slice-6_5.png"},
    {homeImage : "11/Slice-7_3.png"},
    {homeImage : "11/Slice-8_4.png"},
    {homeImage : "11/Slice-9_3.png"},
    {homeImage : "11/Slice-10.png"},
    {homeImage : "11/Slice-11.png"},
    {homeImage : "11/Slice-12.png"},
    {homeImage : "11/Slice-14.png"},
    {homeImage : "11/Slice-15.png"},
    {homeImage : "11/Slice-17.png"},
    {homeImage : "11/Slice-18.png"},
    {homeImage : "11/Slice-19.png"},
    {homeImage : "11/Slice-20.png"}
];

function renderHomePageImageData(homePageImageData) {
    return homePageImageData.map(function (imageData) {
        return `<img class="homeImages" src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-${imageData.homeImage}" alt="">`;
    }).join('');
}
document.querySelector('.homePage-Category-img-box').innerHTML += renderHomePageImageData(homePageImageData);


var dairyBreadEggsData = [
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg?ts=1706182143" alt="Amul Taaza Toned Fresh Milk" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'Amul Taaza Toned Fresh Milk',
        quantity: '500 ml',
        price: 28     
    },
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142" alt="Amul Gold Full Cream Fresh Milk" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'Amul Gold Full Cream Fresh Milk',
        quantity: '500 ml',
        price: 34     
    },
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6ae62ec2-3b13-4fff-b052-2ff3d4ef2d16.jpg?ts=1726473593" alt="Amul Masti Pouch Curd" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'Amul Masti Pouch Curd',
        quantity: '400 gm',
        price: 35     
    },
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/e3f63e12-631f-4193-9160-ea4ddcbd6c5c.jpg?ts=1711189562" alt="Mother Dairy Toned Milk" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'Mother Dairy Toned Milk',
        quantity: '500 ml',
        price: 28     
    },
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0be0d49a-4dae-408a-8786-afae1dd05cb1.jpg?ts=1707312314" alt="Amul Salted Butter" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'Amul Salted Butter',
        quantity: '100 gm',
        price: 60     
    },
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a9b8e4d0-62ae-4a55-b0f7-c07d16a09326.jpg?ts=1707564212" alt="Harvest Gold - White Bread" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'Harvest Gold- white Bread',
        quantity: '350 gm',
        price: 30     
    },
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/8f6bfafc-ad44-422a-8e96-7e2d2994012a.jpg?ts=1707998856" alt="Mother Dairy Full Cream Fresh Milk" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'Mother Dairy Full Cream Fresh Milk',
        quantity: '500 ml',
        price: 34     
    },
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/86446a.jpg?ts=1687948913" alt="Mother Dairy Classic Pouch Curd" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'Mother Dairy Classic Pouch Curd',
        quantity: '400 gm',
        price: 35     
    },
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/42139f09-bfa0-4445-9827-bae0e2f3e52b.jpg?ts=1726817074" alt="Harvest Gold 100% Atta Whole Wheat Bread" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'Harvest Gold 100% Atta Whole Wheat Bread',
        quantity: '450 gm',
        price: 60     
    },
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/89cb3ef5-0003-4100-bcf4-f97092f30997.jpg?ts=1712325592" alt="Amul Cow Fresh Milk" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'Amul Cow Fresh Milk',
        quantity: '500 ml',
        price: 29     
    }
];

var rollingPaperTobaccoData = [
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/478728a.jpg?ts=1690814280" alt="Ultimate Rolling Paper with Filter Tips &amp; Crushing Tray (King Size, Unbleached) - Mozo" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'Ultimate Rolling Paper with Filter Tips',
        quantity: '1 pack (32 pieces)',
        price: 90     
    },
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/506710a.jpg?ts=1685952438" alt="Perfect Rolled Cones (Natural) - Bongchie" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'Perfect Rolled Cones (Natural) - Bongchie',
        quantity: '3 pack',
        price: 45     
    },
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/508043a.jpg" alt="Pink Rolling Paper (King Size Slim) - Stash Pro" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'Pink Rolling Paper (King Size Slim) - Stash Pro',
        quantity: '32 sgeets',
        price: 70     
    },
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/496996a.jpg?ts=1690814374" alt="Brown Rolling Paper Cones - Stash Pro" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'Brown Rolling Paper Cones - Stash Pro',
        quantity: '6 pieces',
        price: 90     
    },
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/506375a.jpg?ts=1698309252" alt="Brown Ripper Rolling Paper 32 Leaves + 32 Roaches Stash Pro" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'Brown Ripper Rolling Paper 32 Leaves + 32 Roaches Stash Pro',
        quantity: '1 pack(64 pieces)',
        price: 120     
    },
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/512860a.jpg?ts=1690832312" alt="Ultimate Rolling Paper with Filter Tips &amp; Crushing Tray (King Size, Bleached) - Mozo" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'Ultimate Rolling Paper with Filter Tips',
        quantity: '1 pack(32 leaves)',
        price: 80     
    },
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/506711a.jpg?ts=1686566489" alt="Perfect Rolling Paper (Pink) - Bongchie" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'Perfect Rolling Paper (Pink) - Bongchie',
        quantity: '3 pack',
        price: 45     
    },
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5b811154-db15-456d-a219-13edaa288ab7.jpg?ts=1725020018" alt="Colour Roach - Stash Pro" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'Colour Roach - Stash Pro',
        quantity: '32 sheets',
        price: 50     
    },
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/b06b8269-b0f2-4887-8106-f49d5695fc12.jpg?ts=1720016904" alt="GO DESI Meetha Paan Desi Mints" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'GO DESI Meetha Paan Desi Mints',
        quantity: '1 piece',
        price: 80     
    },
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/b91a3d9a-4595-45b5-a123-5cbfcecc3bcc.jpg?ts=1728246095" alt="Thins Pre-Rolled Rolling Paper By LIT" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'Thins Pre-Rolled Rolling Paper By LIT',
        quantity: '1 pack',
        price: 25     
    }
];

var snacksAndMunchiesData = [
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/03e157a6-b601-48ec-b664-e44155bb1808.jpg?ts=1723100068" alt="DOKi Tokyo Teriyaki Chicken Jerky" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'DOKi Tokyo Teriyaki Chicken Jerky',
        quantity: '30 gm',
        price: 199     
    },
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a0f592fe-d783-42e1-b1a4-1efccdc52721.jpg?ts=1723100072" alt="DOKi Kerala Fry Buffalo Jerky" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'DOKi Kerala Fry Buffalo Jerky',
        quantity: '30 gm',
        price: 199     
    },
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/f20b4670-e147-4af7-8a25-c5e30ad860c2.jpg?ts=1723100071" alt="DOKi Tokyo Teriyaki Buffalo Jerky" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'DOKi Tokyo Teriyaki Buffalo Jerky',
        quantity: '30 gm',
        price: 199     
    },
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/54e0759c-4c83-49d9-8e01-48497382fba5.jpg?ts=1721899365" alt="Goldfish Cheddar Cheese Cracker Snack" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'Goldfish Cheddar Cheese Cracker Snack',
        quantity: '28 gm',
        price: 112     
    },
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/7dd25b43-94da-42ad-b719-35ad9e395705.jpg?ts=1724850850" alt="Kettle Studio Himalayan Pink Salt Potato Chips" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'Kettle Studio Himalayan Pink Salt Potato Chips',
        quantity: '47 gm',
        price: 47     
    },
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/b3ee7724-3b6c-475e-aa50-1714fe9199be.jpg?ts=1723100802" alt="Cheetos Flamin hot Crunchy Puffs" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'Cheetos Flamin hot Crunchy Puffs',
        quantity: '28.3 gm',
        price: 161     
    },
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/7b3ddcef-4908-4ada-a7c0-a2a7d4e91e1e.jpg?ts=1723100712" alt="Jolochip Last Chip Challenge Chips" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'Jolochip Last Chip Challenge Chips',
        quantity: '5 gm',
        price: 249     
    },
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/52c85487-3399-4731-8385-ce3a52f681bf.jpg?ts=1721899356" alt="Cheez-It White Cheddar Cheese Crackers Snack" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'Cheez-It White Cheddar Cheese Crackers Snack',
        quantity: '29 gm',
        price: 154     
    },
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/c7221d26-16ce-4b85-802a-b4a5aaabae13.jpg" alt="Orion Korean Kimchi K Snack Onion Rings" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'Orion Korean Kimchi K Snack Onion Rings',
        quantity: '70gm',
        price: 54     
    },
    {
        productImage: '<img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/88679327-6d68-4836-9f07-1f3d660605ee.jpg?ts=1723100069" alt="DOKi Korean Gochujang Buffalo Jerky" width="140" height="140" loading="lazy" style="border-radius: 0px; object-fit: fill; cursor: default;">',
        arrivalTime: '8 mins',
        productName: 'DOKi Korean Gochujang Buffalo Jerky',
        quantity: '30 gm',
        price: 199     
    }
];

var categories = {
    'dairy': dairyBreadEggsData,
    'guthkaPaanMasala': rollingPaperTobaccoData,
    'snacks': snacksAndMunchiesData,
  }

function renderCateWiseProducts(categories) {
    console.log("***inside renderCateWiseProducts() function***");
    const categoryHTML = Object.keys(categories).map((category) => {
        //console.log(category, categories[category]);
        var products = categories[category];
        //console.log('products',products);
        var productsTpl = products.map((product,index) => {
            return `
                <div class='product-box'>
                    <div class='product-img'>${product.productImage}</div>
                    <div class='product-data-box'>
                        <div class='logo-timer'>
                            <div class='timer-logo'><img class='timer-logo-img' src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png' alt='logo-timer'></div>
                            <div class='arrival-time'>${product.arrivalTime}</div>
                        </div>
                        <div class='product-name-box'><p>${product.productName}</p></div>
                        <div class='quantity-box'><p>${product.quantity}</p></div>
                        <div class='add-price'>
                            <div><p class='item-price'>₹${product.price}</p></div>
                            <div><button type='button' class='add-dbe-item' data-category='${category}' data-index='${index}'>Add</button> </div>
                        </div>
                    </div>
                </div>
                `; 
        }).join('');

        var Tpl = `
                    <div class="dairy-bread-eggs-box">
                    <div class="dbe-top-box">
                        <p class="text-one">${category}</p>
                        <button type="button" class="see-all-btn">see all</button>
                    </div>
                    <div class="dbe-bottom-box">
                        ${productsTpl}
                    </div>
                    </div>
                `;
        return Tpl;
    }).join('');
    document.querySelector('.products-data-container').innerHTML += categoryHTML;
}
renderCateWiseProducts(categories);

function paanCornerPage() {
    console.log("***inside paanCornerPage()***");
    
    const categoryPages = Object.keys(categories).map((category) => {
        console.log("category :",category);
        return `<div class='item-box'><a href='#' onclick='categoryDataRender("${category}")'>${category}</a></div>`;
    }).join('');
    console.log("categoryPages :",categoryPages);
    const paanCornerMain = `
                        <div class='main-box'>
                            <div class='left-box'>
                                ${categoryPages}
                            </div>
                            <div class='right-main-box'>
                                <div class='sorting-box'>
                                    <div class='online'></div>
                                    <div class='sortBy'></div>
                                </div>
                                <div class='right-box'>
                                </div>
                            </div>
                        </div> `;      
    document.querySelector('.hero-container').innerHTML = '';
    document.querySelector('.main-container').innerHTML = paanCornerMain;
    document.querySelector('.right-box').innerHTML = renderProductData('dairy');
}

function categoryDataRender(category_one) {
    console.log('***inside categoryDataRender()***');
    console.log('category :',category_one);
    document.querySelector('.online').innerHTML = `Buy ${category_one} online`;
    document.querySelector('.sortBy').innerHTML = `
                                                    <label for="dropdown">Sort by</label>
                                                    <select id="dropdown" name="dropdown">
                                                        <option value="relevance" id='relevance'>Relevance</option>
                                                        <option value="lowToHigh" id='priceAscend'>Price(Low to High)</option>
                                                        <option value="highToLow" id='priceDescend'>Price(High to Low)</option>
                                                        <option value="discount" id='discount'>Discount(High to Low)</option>
                                                        <option value="Name" id='nameAscend'>Name(A to Z)</option>
                                                    </select> 
                                                    `;
    
    document.querySelector('.right-box').innerHTML = renderProductData(`${category_one}`);
    const productsList= categories[category_one];
    console.log("productsList:",productsList);  
    document.querySelector('#dropdown').addEventListener('change', function () {
        const selectedValue =this.value;
        const sortedDataset = sortProductsData(selectedValue, productsList);
        console.log('sortedDataset :',sortedDataset);
        document.querySelector('.right-box').innerHTML = renderSortedData(sortedDataset);
    });
}

//render category wise data inside paancorner image for each category
function renderProductData(category) {
    var products = categories[category];
    var productsTpl = products.map((product) => {
        return `
            <div class='product-box'>
                <div class='product-img'>${product.productImage}</div>
                <div class='product-data-box'>
                    <div class='logo-timer'>
                        <div class='timer-logo'><img class='timer-logo-img' src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png' alt='logo-timer'></div>
                        <div class='arrival-time'>${product.arrivalTime}</div>
                    </div>
                    <div class='product-name-box'><p>${product.productName}</p></div>
                    <div class='quantity-box'><p>${product.quantity}</p></div>
                    <div class='add-price'>
                        <div><p class='item-price'>₹${product.price}</p></div>
                        <div><button type='button' class='add-dbe-item'>Add</button> </div>
                    </div>
                </div>
            </div>
            `; 
    }).join('');
    return productsTpl;
}

//sorting category data
function sortProductsData(selectedValue, data) {
    console.log("***inside sortProductsData***");
    console.log("data :",data);
    if(selectedValue == 'lowToHigh'){
        data.sort((a,b) => a.price - b.price);
    }else if(selectedValue == 'highToLow') {
        data.sort((a,b) => b.price - a.price);
    }else if(selectedValue == 'Name'){
        data.sort((a,b) => a.productName.localeCompare(b.productName));
    }
    return data;   
}

//to render sorted data as array of object will be coming as input instead the category name.
function renderSortedData(sortedDataset) {
    return sortedDataset.map(function (product) {
        return `
            <div class='product-box'>
                <div class='product-img'>${product.productImage}</div>
                <div class='product-data-box'>
                    <div class='logo-timer'>
                        <div class='timer-logo'><img class='timer-logo-img' src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png' alt='logo-timer'></div>
                        <div class='arrival-time'>${product.arrivalTime}</div>
                    </div>
                    <div class='product-name-box'><p>${product.productName}</p></div>
                    <div class='quantity-box'><p>${product.quantity}</p></div>
                    <div class='add-price'>
                        <div><p class='item-price'>₹${product.price}</p></div>
                        <div><button type='button' class='add-dbe-item'>Add</button> </div>
                    </div>
                </div>
            </div>          
        `;
    }).join('');
}

//searching
function renderCateWiseProductsForSearch(categoriesSearch) {
    console.log("***inside renderCateWiseProductsForSearch() function***"); 
    var categoryHTMLOne = Object.keys(categoriesSearch).map((categoryItem) => {
        var products = categoriesSearch[categoryItem];
        return products.map((product) => {
            return `
                <div class='product-box'>
                    <div class='product-img'>${product.productImage}</div>
                    <div class='product-data-box'>
                        <div class='logo-timer'>
                            <div class='timer-logo'><img class='timer-logo-img' src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png' alt='logo-timer'></div>
                            <div class='arrival-time'>${product.arrivalTime}</div>
                        </div>
                        <div class='product-name-box'><p>${product.productName}</p></div>
                        <div class='quantity-box'><p>${product.quantity}</p></div>
                        <div class='add-price'>
                            <div><p class='item-price'>₹${product.price}</p></div>
                            <div><button type='button' class='add-dbe-item'>Add</button> </div>
                        </div>
                    </div>
                </div>
                `; 
            
        }).join('');
    }).join('');
    console.log('categoryHTMLOne :',categoryHTMLOne);
    document.querySelector('.hero-container').innerHTML = '';
    document.querySelector('.main-container').innerHTML = categoryHTMLOne;
    
}

function filter(searchTerm){
    console.log("***inside filter()***");
    console.log("searchTerm :",searchTerm);
    var filteredCats = {};
    Object.keys(categories).forEach((category) => {
        console.log("category :",category);
      var products = categories[category];
      var fitleredProducts = products.filter((product) => {
        return product.productName.toLowerCase().includes(searchTerm);
      })
      
      filteredCats[category] = fitleredProducts;
      
    })
    console.log("filteredCats :",filteredCats);
    //document.querySelector('.hero-container').innerHTML ='';
    //document.querySelector('.homePage-Category-img-box').innerHTML = '';
    renderCateWiseProductsForSearch(filteredCats);
}

document.querySelector('#search-text').addEventListener('input', (event) => {
    var searchTerm = event.target.value.toLowerCase();
    console.log("searchTerm :",searchTerm);
    filter(searchTerm);
});