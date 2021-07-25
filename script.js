let qtde = 0;
let controll = false;
var preco_total = 0;

function close_controll() {
    if (controll === false) {
        document.getElementById("campo").style.display = "flex";
        controll = !controll;
    } else if (controll) {
        controll = !controll
        document.getElementById("campo").style.display = "none";
    }
}

class Book {

    constructor(id, name, price) {
        this.id = id;
        this.nome = name;
        this.preco = price;
    }
}

function cadastrarEmail(){
    let email = document.getElementById('form-email').value;
  
    let convertData = JSON.stringify(email);
    localStorage.setItem(`E-mail`, convertData);

    //console.log(convertData);
    alert("E-mail cadastrado com sucesso!!");

}

var lista_livros = [];

function addBook(id, nome, valor) {
    let livro = new Book(id, nome, valor)
    lista_livros.push(livro);
    qtde += 1;
    //console.log('Valor atual:' + qtde);
    document.getElementById("number").innerText = qtde;
    console.log(lista_livros);
}

function totalPrice() {
    preco_total = 0;

    for (let valor = 0; valor < lista_livros.length; valor++) {
        preco_total += lista_livros[valor].preco;
        
    }

    document.getElementById("preco_total").innerText = "Valor: R$ "+preco_total;

}


function finalizarPedido() {
    alert("pronto");


    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
    let data = {
        cliente: {
            nome,
            telefone
        },
        items_adquiridos: lista_livros
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem(`Compra${localStorage.length + 1}`, convertData);
    //console.log(convertData);
    alert("Items cadastrados cadastrado!!");
    //limpando carrinho
    qtde = 0;
    document.getElementById("number").innerText = qtde;
    

    
 
}




function carrinho() {
    document.getElementById('qtde_itens_form').innerText = "Quantidade de itens:" + qtde + " ";
    close_controll()
}