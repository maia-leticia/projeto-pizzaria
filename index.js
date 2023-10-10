// Funções 


pizzaJson.map((item, index) => {
    // Colocar pizzas
    let pizzaItem = document.querySelector('.pizza-item').cloneNode(true)
    document.querySelector('.pizza-area').append(pizzaItem)
    // dados de cada pizza
    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price}`
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description

    // ABRIR janela modal
    pizzaItem.querySelector('.pizza-item a').addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelector('.pizzaWindowArea').style.display = 'flex'
    // Preenchimento dos dados
    document.querySelector('.pizzaBig img').src = item.img
    document.querySelector('.pizzaInfo h1').innerHTML = item.name
    document.querySelector('.pizzaInfo--actualPrice').innerHTML = `R$ ${item.price}`
    document.querySelector(".pizzaInfo--desc").innerHTML = item.description
    })

    // FECHAR janela modal
    document.querySelector('.pizzaInfo--cancelButton').addEventListener('click', (f) => {
        f.preventDefault()
        document.querySelector('.pizzaWindowArea').style.display = 'none'
    })
    document.querySelector('.pizzaInfo--cancelMobileButton').addEventListener('click', (f) => {
        f.preventDefault()
        document.querySelector('.pizzaWindowArea').style.display = 'none'
    })
})