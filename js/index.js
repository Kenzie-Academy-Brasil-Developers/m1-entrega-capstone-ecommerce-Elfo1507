const main = document.querySelector('main')
const btnAll = document.querySelector('.all')
const btnWeapons = document.querySelector('.weapons')
const btnSpells = document.querySelector('.spells')
const btnPets = document.querySelector('.pets')
const btnInitAll = document.querySelector('.Initall')
const btnInitWeapons = document.querySelector('.Initweapons')
const btnInitSpells = document.querySelector('.Initspells')
const btnInitPets = document.querySelector('.Initpets')


function criarArma(){
    main.innerHTML = ''
    let containerGeral = document.createElement('ul')
    for(let i = 0; i < data.length; i++){
        if(data[i].category === 'Armas'){
            let card = document.createElement('li')
            let imagem = document.createElement('img')
            let textCard = document.createElement('div')
            let category = document.createElement('div')
            let textCategory = document.createElement('p')
            let title = document.createElement('h3')
            let description = document.createElement('p')
            let preco = document.createElement('strong')
            let addCart = document.createElement('button')

            containerGeral.classList.add('containerCards')
            card.classList.add('card')
            imagem.src = data[i].img
            imagem.classList.add('cardImg')
            textCard.classList.add('textCard')
            category.classList.add('category')
            title.innerText = data[i].name
            description.innerText = data[i].desc
            preco.innerText = `K$${data[i].price}`
            textCategory.innerText = data[i].category
            addCart.classList.add('addCart')
            addCart.setAttribute('id', data[i].id)
            addCart.innerText = 'Adicionar ao carrinho'
            card.appendChild(imagem)
            category.appendChild(textCategory)
            textCard.appendChild(category)
            textCard.appendChild(title)
            textCard.appendChild(description)
            textCard.appendChild(preco)
            card.appendChild(textCard)
            card.appendChild(addCart)
            containerGeral.appendChild(card)   
        }
    }
    main.appendChild(containerGeral)
}

function criarPet(){
    main.innerHTML = ''
    let containerGeral = document.createElement('ul')
    for(let i = 0; i < data.length; i++){
        if(data[i].category === 'Pets'){
            let card = document.createElement('li')
            let imagem = document.createElement('img')
            let textCard = document.createElement('div')
            let category = document.createElement('div')
            let textCategory = document.createElement('p')
            let title = document.createElement('h3')
            let description = document.createElement('p')
            let preco = document.createElement('strong')
            let addCart = document.createElement('button')

            containerGeral.classList.add('containerCards')
            card.classList.add('card')
            imagem.src = data[i].img
            imagem.classList.add('cardImg')
            textCard.classList.add('textCard')
            category.classList.add('category')
            title.innerText = data[i].name
            description.innerText = data[i].desc
            preco.innerText = `K$${data[i].price}`
            textCategory.innerText = data[i].category
            addCart.classList.add('addCart')
            addCart.setAttribute('id', data[i].id)
            addCart.innerText = 'Adicionar ao carrinho'
            card.appendChild(imagem)
            category.appendChild(textCategory)
            textCard.appendChild(category)
            textCard.appendChild(title)
            textCard.appendChild(description)
            textCard.appendChild(preco)
            card.appendChild(textCard)
            card.appendChild(addCart)
            containerGeral.appendChild(card)   
        }
    }
    main.appendChild(containerGeral)
}

function criarMagia(){
    main.innerHTML = ''
    let containerGeral = document.createElement('ul')
    for(let i = 0; i < data.length; i++){
        if(data[i].category === 'Magias'){
            let card = document.createElement('li')
            let imagem = document.createElement('img')
            let textCard = document.createElement('div')
            let category = document.createElement('div')
            let textCategory = document.createElement('p')
            let title = document.createElement('h3')
            let description = document.createElement('p')
            let preco = document.createElement('strong')
            let addCart = document.createElement('button')

            containerGeral.classList.add('containerCards')
            card.classList.add('card')
            imagem.src = data[i].img
            imagem.classList.add('cardImg')
            textCard.classList.add('textCard')
            category.classList.add('category')
            title.innerText = data[i].name
            description.innerText = data[i].desc
            preco.innerText = `K$${data[i].price}`
            textCategory.innerText = data[i].category
            addCart.classList.add('addCart')
            addCart.setAttribute('id', data[i].id)
            addCart.innerText = 'Adicionar ao carrinho'
            card.appendChild(imagem)
            category.appendChild(textCategory)
            textCard.appendChild(category)
            textCard.appendChild(title)
            textCard.appendChild(description)
            textCard.appendChild(preco)
            card.appendChild(textCard)
            card.appendChild(addCart)
            containerGeral.appendChild(card)   
        }
    }
    main.appendChild(containerGeral)
}

function criarTudo(){
    let containerGeral = document.createElement('ul')
    main.innerHTML = ''
    for(let i = 0; i < data.length; i++){        
        let card = document.createElement('li')
        let imagem = document.createElement('img')
        let textCard = document.createElement('div')
        let category = document.createElement('div')
        let textCategory = document.createElement('p')
        let title = document.createElement('h3')
        let description = document.createElement('p')
        let preco = document.createElement('strong')
        let addCart = document.createElement('button')
        containerGeral.classList.add('containerCards')
        card.classList.add('card')
        imagem.src = data[i].img
        imagem.classList.add('cardImg')
        textCard.classList.add('textCard')
        category.classList.add('category')
        title.innerText = data[i].name
        description.innerText = data[i].desc
        preco.innerText = `K$${data[i].price}`
        textCategory.innerText = data[i].category
        addCart.classList.add('addCart')
        addCart.setAttribute('id', data[i].id)
        addCart.innerText = 'Adicionar ao carrinho'
        card.appendChild(imagem)
        category.appendChild(textCategory)
        textCard.appendChild(category)
        textCard.appendChild(title)
        textCard.appendChild(description)
        textCard.appendChild(preco)
        card.appendChild(textCard)
        card.appendChild(addCart)
        containerGeral.appendChild(card)
        a.push(card)       
    }
    main.appendChild(containerGeral)
}

function adiconarCart(){
    
}



btnAll.addEventListener('click', criarTudo)
btnInitAll.addEventListener('click', criarTudo)
btnWeapons.addEventListener('click', criarArma)
btnInitWeapons.addEventListener('click', criarArma)
btnSpells.addEventListener('click', criarMagia)
btnInitSpells.addEventListener('click', criarMagia)
btnPets.addEventListener('click', criarPet)
btnInitPets.addEventListener('click', criarPet)

const productCart = document.querySelector('.productCart')
productCart.classList.add('productCart')

let a = []

function criarCardCarrinho(event){
    if(event.target.nodeName === 'BUTTON'){
        let id = event.target.id
        let cartItem = document.createElement('li')
        let cartItemImg = document.createElement('img')
        let cartItemText = document.createElement('div')
        let nameItem = document.createElement('h6')
        let priceItem = document.createElement('strong')
        let remove = document.createElement('button')
        cartItem.classList.add('cartItem')
        cartItemImg.src = data[id-1].img
        cartItemImg.classList.add('cartItemImg')
        cartItemText.classList.add('cartItemText')
        nameItem.innerText = data[id-1].name
        priceItem.innerText = `K$${data[id-1].price}`
        remove.innerText = 'Remover produto'
        remove.classList.add('remove')
        remove.setAttribute('id', `a${id}`)
        cartItemText.appendChild(nameItem)
        cartItemText.appendChild(priceItem)
        cartItemText.appendChild(remove)
        cartItem.appendChild(cartItemImg)
        cartItem.appendChild(cartItemText)
        productCart.appendChild(cartItem)
    }
}
let y = 0;
let x = 0
const qtd = document.querySelector('.qtdDef')
const total = document.querySelector('.totalDef')
function somar(event){
    if(event.target.nodeName === 'BUTTON'){
        let id = event.target.id
        y = y + data[id-1].price
        x++
        qtd.innerHTML = ''
        qtd.innerHTML = x
        total.innerHTML = ''
        total.innerHTML = `K$${y}`
    }
}

let carrinho = document.querySelector('.productCart')


main.addEventListener('click', criarCardCarrinho)
main.addEventListener('click', somar)
function remover(event){
    if(event.target.nodeName === 'BUTTON'){
        id = event.target.id.slice(1)
        event.target.parentNode.parentNode.remove()
        x--
        y = y - data[id-1].price
        qtd.innerHTML = ''
        qtd.innerHTML = x
        total.innerHTML = ''
        total.innerHTML = `K$${y}`
    }
}

carrinho.addEventListener('click', remover)

const input = document.querySelector('input')

input.addEventListener('keyup', listarPesquisa)

function listarPesquisa(){
    let a = []
    main.innerHTML = ''
    let containerGeral = document.createElement('ul')
    for(let i = 0; i < data.length; i++){
        console.log('batatinha')
        if(data[i].name.toLowerCase().includes(input.value.toLowerCase().trim()) || data[i].category.toLowerCase().includes(input.value.toLowerCase().trim())){
            let card = document.createElement('li')
            let imagem = document.createElement('img')
            let textCard = document.createElement('div')
            let category = document.createElement('div')
            let textCategory = document.createElement('p')
            let title = document.createElement('h3')
            let description = document.createElement('p')
            let preco = document.createElement('strong')
            let addCart = document.createElement('button')
            containerGeral.classList.add('containerCards')
            card.classList.add('card')
            imagem.src = data[i].img
            imagem.classList.add('cardImg')
            textCard.classList.add('textCard')
            category.classList.add('category')
            title.innerText = data[i].name
            description.innerText = data[i].desc
            preco.innerText = `K$${data[i].price}`
            textCategory.innerText = data[i].category
            addCart.classList.add('addCart')
            addCart.setAttribute('id', data[i].id)
            addCart.innerText = 'Adicionar ao carrinho'
            card.appendChild(imagem)
            category.appendChild(textCategory)
            textCard.appendChild(category)
            textCard.appendChild(title)
            textCard.appendChild(description)
            textCard.appendChild(preco)
            card.appendChild(textCard)
            card.appendChild(addCart)
            containerGeral.appendChild(card)     
        }
    }
    main.appendChild(containerGeral)
}
