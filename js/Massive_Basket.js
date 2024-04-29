window.addEventListener("DOMContentLoaded", function(){
    let content = document.querySelector(".Popular_Content")
    namesFind.forEach(function(Item){
        addcard(Item)
    })
    function addcard(Item){
        if(Item.isPopular === true){
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

        content.appendChild(card);
        card.appendChild(photo);
        card.appendChild(header);
        card.appendChild(text1);
        card.appendChild(mainprice);
        mainprice.appendChild(correctprice);
        mainprice.appendChild(oldprice);
        card.appendChild(select);
        }
}
}
)




