function criptografeDescriptografed() {
    let optionSelected = document.getElementById("optionSelected").innerHTML;
    

    if (optionSelected == "Criptografar") {
        console.log("teste")
        const inputText = document.getElementById("typeTextUser").value;
        console.log(inputText)
        const encryptedText = inputText.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
        document.getElementById('textBox').innerHTML = encryptedText;
        console.log(encryptedText)
        
    }  else if (optionSelected == "Descriptografar") {
        console.log("teste")
        const inputText = document.getElementById("typeTextUser").value;
        console.log(inputText)
        const decryptedText = inputText
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
        document.getElementById('textBox').innerHTML = decryptedText;
        console.log(decryptedText)
    }
}


const input = document.getElementById("typeTextUser");
input.addEventListener('input', criptografeDescriptografed())
input.addEventListener('input', criptografeDescriptografed())