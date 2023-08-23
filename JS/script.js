openMenu.addEventListener('click', ()=> {
    menu.style.display = 'flex'
})
closeMenu.addEventListener('click', ()=> {
    menu.removeAttribute('style')
})

const produto = {

    ProdName: "Camisa lisa",
    ProdDescription: null,
    ProdId: null,
    ProdColor: null,
    ProdSize: null,
    ProdImage: null,
    ProdPrice: "2,20"

};

document.getElementById("ProdName").textContent = produto.ProdName;
document.getElementById("ProdPrice").textContent = produto.ProdPrice;