const isInCart = (state, id) => {
    const result = !!state.selectedItem.find(item => item.url === id)
    return result
}

export {isInCart}