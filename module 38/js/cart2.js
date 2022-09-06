const getInputValue = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const addPrduct = () => {
    const product = getInputValue('product-name-filed');
    const quantity = getInputValue('product-quantity-filed');
    console.log(product)

    // display product on UI
    displayProducts(product, quantity)

    // set to local Store
    // Simple way

    // localStorage.setItem(product, quantity)
    saveItemToLocalStore(product, quantity)

}

const getShoppingCartFromLocalStore = () => {
    let savedCart = localStorage.getItem('cart');
    let cart = {};
    if(savedCart) {
        cart = JSON.parse(savedCart);

    }
    return cart;
}

const saveItemToLocalStore = (product, quantity) => {

    const cart = getShoppingCartFromLocalStore();
    // add product to the object as property
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);

    // save to the local store
    localStorage.setItem('cart', cartStringified)

}


const displayProducts = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;

    productContainer.appendChild(li)
}



const displayStoreProducts = () => {
    const cart = getShoppingCartFromLocalStore();

    for(const product in cart){
        const quantity = cart[product];
        console.log(product, quantity)
        displayProducts(product, quantity)
    }

}

displayStoreProducts()