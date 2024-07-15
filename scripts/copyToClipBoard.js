function copyToClipBoard() {
    console.log("teste")
    const outputText = document.getElementById('textBox');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
}