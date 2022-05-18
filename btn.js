let btnBuscar = document.getElementById("botonBuscar")
let searchBar = document.getElementById("entradaBuscar")
let btnShow = true

btnBuscar.addEventListener("click", function() {
    console.log("clicked")

    if (btnShow == true) {
        searchBar.classList.remove("searchInputFalse")
        btnShow = false
    }
    else {
        if (btnShow == false) {
            searchBar.classList.add("searchInputFalse")
        btnShow = true
        }
    }

})