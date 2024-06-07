var input = document.getElementById("buscador");
var caja = document.getElementById("practicas");
var li = document.getElementsByTagName("li");
var btn = document.getElementById("boton");

function buscar(){
    const minusculas = input.value.toLowerCase();
    Array.from(li).forEach(item => {
        const text = item.textContent.toLocaleLowerCase();
        if(text.includes(minusculas)){
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
};