function getProduct(){
    let cards = localStorage.getItem("Card")
    if(cards !== null){
        return JSON.parse(cards)
    }
    return []
}
function putProduct(id){
    let product = getProduct()
    let pushProduct = false
    let index = product.indexOf(id)
    if(index === -1){
        product.push(id)
    }
    else{
        product.splice(index, 1)
    }
    localStorage.setItem("Card", JSON.stringify(product))
    return {
        pushProduct, product
    }
}