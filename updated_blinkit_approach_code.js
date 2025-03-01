var categories = {
    'dairy': dairyBreadEggsData,
    'guthkaPaanMasala': rollingPaperTobaccoData,
    'snacks': snacksAndMunchiesData,
    'vegetables': dairyBreadEggsData,
    'fruits': rollingPaperTobaccoData,
    'drinks': snacksAndMunchiesData
  }
  
  function renderCateWiseProducts(categories){
    
    const categoryHTML = Object.keys(categories).map((category) => {
      console.log(category, categories[category]);
      
      var products = categories[category];
      var productsTpl = products.map((product) => {
        return <li>${product.productName}</li>
      }).join('');
      
      var tpl = `<div>
        <h2>${category}</h2>
        <ul>${productsTpl}</ul>
      </div>`;
      
      return tpl;
    }).join('');
    
    document.body.innerHTML += categoryHTML; 
  }
  // renderCateWiseProducts(categories);
  
  function filter(searchTerm){
    var filteredCats = {};
    Object.keys(categories).forEach((category) => {
      var products = categories[category];
      var fitleredProducts = products.filter((product) => {
        return product.productName.includes(searchTerm);
      })
      filteredCats[category] = fitleredProducts;
    })
    renderCateWiseProducts(filteredCats)
  }
  
  // filter('Meetha');
  
  function filterByCat(cat){
    var obj = {};
    obj[cat] = categories[cat];
    renderCateWiseProducts(obj);
  }
  filterByCat('dairy')