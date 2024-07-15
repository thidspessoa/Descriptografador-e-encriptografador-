function activeMenuOptions() {
    let dropDownElement = document.getElementById("menuDropDownOptions");
    dropDownElement.classList.toggle("hidden");

    let iconMenuClose = document.getElementById("iconClosed");
    iconMenuClose.classList.toggle("hidden")

    let iconMenuOpened = document.getElementById("iconOpen");
    iconMenuOpened.classList.toggle("hidden");
}


function selectedOptionDropDown() {
    let option = document.getElementById("descriptografedChecked");
    optionContent = document.getElementById("descriptografedOption").innerHTML;
    option.classList.remove("hidden")


    let option2 = document.getElementById("criptografedChecked");
    option2.classList.contains("hidden") ? console.log("já contem") : option2.classList.add("hidden");

    let optionSelected = document.getElementById("optionSelected");
    optionSelected.innerHTML = optionContent
}




function selectedOptionDropDown2() {
    let option = document.getElementById("criptografedChecked");
    optionContent = document.getElementById("criptografedOption").innerHTML;
    option.classList.remove("hidden")

    let option2 = document.getElementById("descriptografedChecked");
    option2.classList.contains("hidden") ? console.log("já contem") : option2.classList.add("hidden");
    let optionSelected = document.getElementById("optionSelected");
    optionSelected.innerHTML = optionContent
}