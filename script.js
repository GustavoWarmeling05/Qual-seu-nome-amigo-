let enviar = document.querySelector("#ibotao")
enviar.addEventListener('click', function () {

    const nome = document.getElementById("inome")
    const maiusculo = document.getElementById("imaiusculo")
    const minusculo = document.getElementById("iminusculo")

    maiusculo.innerHTML = nome
    document.querySelector('#imaiusculo').value = nome.value.toUpperCase()

    minusculo.innerHTML = nome
    document.querySelector('#iminusculo').value = nome.value.toLowerCase()


})
