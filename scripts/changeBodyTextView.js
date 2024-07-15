function changeBodyTextView() {
    let defaultMessageValueIsNull = document.getElementById("defaultMessageValueIsNull");
    // defaultMessageValueIsNull.classList.add("hidden")

    let textBodyBox = document.getElementById("textBodyBox");
    textBodyBox.classList.remove("hidden")

    let inputElement = document.getElementById("typeTextUser");

    document.addEventListener('click', function(event) {
        // Verifica se o clique ocorreu fora do input
        if (!inputElement.contains(event.target)) {
            console.log('Clique fora do input!');
            document.removeEventListener('click', arguments.callee);

            // Aqui você pode adicionar qualquer ação que deseja executar ao clicar fora do input
        }
    });

    textBodyBox.classList.contains("hidden") ? defaultMessageValueIsNull.classList.remove("hidden") : defaultMessageValueIsNull.classList.add("hidden");
}