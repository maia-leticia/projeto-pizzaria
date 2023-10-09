pizzaJson.map((item, index) => {
    // copiei o html e adicionei a quantidade de itens na lista
    let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true)
    document.querySelector('.pizza-area').append(pizzaItem)
    // dados de cada pizza
    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description
})