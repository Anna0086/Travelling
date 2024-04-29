// let button = document.createElement("button")
// button.innerHTML = "Кнопка"
// document.body.appendChild(button)

// button.onclick = function(){
//     document.body.removeChild(button)
//     let window1 = document.createElement("h2")
//     window1.classList.add("New")
//     window1.innerHTML = "Окно"
//     document.body.appendChild(window1)
// }

window.addEventListener("DOMContentLoaded", function(){
    let catalog = document.querySelector(".Catalog_content")
    let content = document.querySelector(".Popular_content")
    namesFind.forEach(function(Item){
        addcard(Item)
    })
    function addcard(Item){
        let card = document.createElement("div"),

        photo = document.createElement("img"),

        header = document.createElement("h2"),

        text1 = document.createElement("p"),

        mainprice = document.createElement("div"),

        correctprice = document.createElement("p"),

        oldprice = document.createElement("p"),

        select = document.createElement("button");


        card.classList.add("Product");

        photo.classList.add("Product_Image");

        photo.src = Item.image;
        
        header.classList.add("Product_Titel")
        header.textContent=Item.heading;

        text1.classList.add("Product_about")
        text1.textContent=Item.text;

        mainprice.classList.add("Product_price")

        correctprice.classList.add("Product_correct")
        correctprice.textContent = Item.price;
        
        oldprice.classList.add("Product_cross")
        oldprice.textContent = Item.crossedPrice;

        select.classList.add("Product_button")
        select.textContent = Item.button;
        select.onclick=()=>{
            putProduct(Item.id)
        }

        content.appendChild(card);
        card.appendChild(photo);
        card.appendChild(header);
        card.appendChild(text1);
        card.appendChild(mainprice);
        mainprice.appendChild(correctprice);
        mainprice.appendChild(oldprice);
        card.appendChild(select);

        if(Item.isPopular === true){
            content.appendChild(card)}
         else{
        catalog.appendChild(card);
}
}
})



