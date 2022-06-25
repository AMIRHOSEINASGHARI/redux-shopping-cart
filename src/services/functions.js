const shortTheTitle = (title) => {
    const splitedTitle = title.split(' ');
    return `${splitedTitle[0]}${splitedTitle[1]}`
}

const isInCart = (state , id) => {
    const result = !!state.selectedItems.find(item => item.id === id)
    return result;
}

const qCounter = (state , id) => {
    const index = state.selectedItems.findIndex(item => item.id === id);
    if (index >=0) {
        return state.selectedItems[index].quantity;
    }else {
        return false
    }
}

export {shortTheTitle , isInCart , qCounter};