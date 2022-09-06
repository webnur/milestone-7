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

    localStorage.setItem(product, quantity)

}

const displayProducts = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;

    productContainer.appendChild(li)
}