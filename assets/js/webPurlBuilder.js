/** @onblur : add onblur listener to all input fields ***/
/** function within onblur is to validate fields and mark that the 
 * data is acceptable.
 * This runs on page load AFTER the generate script
 */
const inputFields = document.querySelectorAll(".inputWrapper > input");
const selectBtns = document.getElementsByClassName("inputChk");
for (let i = 0; i < inputFields.length; i++) {
    const el = inputFields[i];
    el.addEventListener("blur",(event)=>{
        console.log("Hello there")
        const parent = event.target.parentElement;
        const grandParent = document.getElementById(parent.id).parentElement;
        const chkLabel = document.querySelector("#"+grandParent.id + " > .chk_label");
        const chkBox = document.querySelector("#"+grandParent.id + " > .inputChk");
        const inputKey = document.querySelector("#"+grandParent.id + " > .inputWrapper > .purlInput_key");
        const inputVal = document.querySelector("#"+grandParent.id + " > .inputWrapper > .purlInput_value");
        const tick = document.querySelector("#"+grandParent.id + " > .chk_label > .chk_labelTick");
        /** check if section has been selected first */
        if(chkBox.checked){
            console.log("Is that you Artoo?")
            const keyVal = inputKey.value;
            const valVal = inputVal.value;
            /** run validation */
            const rgx = /\s/;
            /** make sure there is content */
            const key = !keyVal?false:true;
            const val = !valVal?false:true;
            /** make sure no whitespace */
            const keyRgx = false;//rgx.test(keyVal);
            const valRgx = false;//rgx.test(valVal);
            if(!key||!val||keyRgx||valRgx){
                /** response if validation fails */
                tick.style.display = "none";
            }else{
                /** if successful, add tick this will be removed if 
                 * tests subsequently fail validation */
                console.log("Beep boop");
                tick.style.display = "block";
                /** if the utm was custom, add another custom option */
                if(grandParent.id.includes("custom")){
                    addCustom(grandParent.id)
                }

                
            };
        };
    });
}
/** 
 *  @clears adds a function that if an option is unchecked, clear the values from 
 * its fields */
for (let i = 0; i < selectBtns.length; i++) {
    const el = selectBtns[i];
    el.addEventListener("change", (event) => {
        /* get utm type from data attribute in the chkbox */
        const utm = event.target.dataset.utm;
        if(!event.target.checked){
            document.getElementById(`input_${utm}`).value = utm;
            document.getElementById(`input_${utm}_value`).value = "";
            document.querySelector(`#${utm}_wrapper .chk_labelTick`).style.display = "none";
        }
    });
}

