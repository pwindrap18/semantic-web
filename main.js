var pesanan = document.getElementById("pesanan")
var listPesanan = pesanan.children[0]

function addListAyamGr(){
    var list = document.createElement('li')
    var x = document.getElementById("Ayamgoreng").value;
    list.innerHTML = x
    listPesanan.appendChild(list)
}

function addListAyamBkr(){
    var list = document.createElement('li')
    var x = document.getElementById("Ayambakar").value;
    list.innerHTML = x
    listPesanan.appendChild(list)
}

function addListAyamGprk(){
    var list = document.createElement('li')
    var x = document.getElementById("Ayamgeprek").value;
    list.innerHTML = x
    listPesanan.appendChild(list)
}

function addListEtm(){
    var list = document.createElement('li')
    var x = document.getElementById("Estehmanis").value;
    list.innerHTML = x
    listPesanan.appendChild(list)
}

function addListEj(){
    var list = document.createElement('li')
    var x = document.getElementById("Esjeruk").value;
    list.innerHTML = x
    listPesanan.appendChild(list)
}

function addListTt(){
    var list = document.createElement('li')
    var x = document.getElementById("Tehtawar").value;
    list.innerHTML = x
    listPesanan.appendChild(list)
}

function addListAyamGr(){
    var list = document.createElement('li')
    var x = document.getElementById("Ayamgoreng").value;
    list.innerHTML = x
    listPesanan.appendChild(list)
}

