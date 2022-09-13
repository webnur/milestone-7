const addToLocalStorage = () => {
    const storageId = document.getElementById('storage-id');
    const id = storageId.value;
    const storageValue = document.getElementById('storage-value');
    const value = storageValue.value;

    
    if(id && value) {
        localStorage.setItem(id, value)
    }
    storageId.value = '';
    storageValue.value = '';
}