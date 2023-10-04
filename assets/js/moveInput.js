function moveInput(x){
    const selected = document.getElementById(x.id);
    const chkBox = document.getElementById(selected.getAttribute("for"));
    console.log(!chkBox.checked);
    const parent = chkBox.parentElement;
    // negative check as check runs 'after' the click
    if(!chkBox.checked){
        const mandList = document.getElementsByClassName("mandatoryInput");
        const mandLength = mandList.length;
        const lastMand = mandList[mandLength-1];
        console.log(mandList);
        lastMand.insertAdjacentElement('afterend', parent)

        parent.classList.add("optionalSelected");
        parent.classList.add("mandatoryInput");
    }else{
        
        const optList = document.querySelectorAll("div.optionalInput:not(.mandatoryInput)");
        //const optLength = optList.length;
        const firstOpt = optList[0];
        console.log(firstOpt);
        firstOpt.insertAdjacentElement('beforebegin', parent)


        parent.classList.remove("optionalSelected");
        parent.classList.remove("mandatoryInput");
    }
    
    /*
    
    if(document.querySelector(`#${x.id}`)){
        
        console.log("hi")
    }
    const parent = selected.parentElement;
    if([...parent.classList].includes("optionalInput")){
        parent.classList.add("mandatory");
    }
    /*const chkLabel = document.querySelector("#"+parent + " > .chk_label");
    const chkBox = document.querySelector("#"+grandParent.id + " > .inputChk");
    const inputKey = document.querySelector("#"+grandParent.id + " > .inputWrapper > .purlInput_key");
    const inputVal = document.querySelector("#"+grandParent.id + " > .inputWrapper > .purlInput_value");
    const tick = document.querySelector("#"+grandParent.id + " > .chk_label > .chk_labelTick");
    */

}        