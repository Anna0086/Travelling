window.addEventListener("DOMContentLoaded", function(){
    let content = document.querySelector(".Main_content")
    let product = getProduct()
    product.forEach((id)=>{
        let Item = namesFind.find((Item)=>
            Item.id === id
        )
        if(Item){
            addcard(Item)
        }
        })
function addcard(Item){
    let card = document.createElement("div"),

        product1 = document.createElement("div"),

        photo = document.createElement("img"),

        info = document.createElement("div"),
        
        header = document.createElement("h2"),

        text1 = document.createElement("p"),

        correctprice = document.createElement("p"),

        input = document.createElement("input");


        card.classList.add("Main_product");

        product1.classList.add("Main_product_item");

        photo.classList.add("Main_product__image");

        photo.src = Item.image;

        info.classList.add("Main_product_info");
        
        header.classList.add("Product_titel")
        header.textContent=Item.heading;

        text1.classList.add("Product_about")
        text1.textContent=Item.text;

        correctprice.classList.add("Product_correct")
        correctprice.textContent = Item.price;
        
        input.classList.add("Product_input")
        input.setAttribute("type", "number")
        input.setAttribute("value", "1")
        input.setAttribute("min", "1")
        input.setAttribute("max", "10")

        content.appendChild(card)
        card.appendChild(product1)
        product1.appendChild(photo)
        product1.appendChild(info)
        info.appendChild(header)
        info.appendChild(text1)
        info.appendChild(correctprice)
        card.appendChild(input)
        }
       let button = document.querySelector(".Main_button__clean")
       localStorage.setItem("Card", JSON.stringify(product))
       button.addEventListener("click",()=>{
        this.localStorage.removeItem("Card")
        window.location.reload()
       })
})
function countcard(){
    let product = getProduct()
    let count = 0
    product.forEach((id)=>{
        let findid = namesFind.find((Item)=>
            Item.id === id
        )
        if(findid){
            count += findid.price
        }
    })
    let summa = document.querySelector(".Booking_Summa")
    summa.innerHTML = `Итог: ${count} руб.`
}
countcard()
