function moveInput(x){
    const selected = document.getElementById(x.id);
    const chkBox = document.getElementById(selected.getAttribute("for"));
    const parent = chkBox.parentElement;
    // negative check as check runs 'after' the click
    if(!chkBox.checked){
        const mandList = document.getElementsByClassName("mandatoryInput");
        const mandLength = mandList.length;
        const lastMand = mandList[mandLength-1];
        lastMand.insertAdjacentElement('afterend', parent)
        parent.classList.add("optionalSelected");
        parent.classList.add("mandatoryInput");
    }else{
        const optList = document.querySelectorAll("div.optionalInput:not(.mandatoryInput)");
        const firstOpt = optList[0];
        firstOpt.insertAdjacentElement('beforebegin', parent)
        parent.classList.remove("optionalSelected");
        parent.classList.remove("mandatoryInput");
    }
}        