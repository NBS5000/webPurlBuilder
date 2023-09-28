
function addCustom(prevId){
    console.log("Is that C3P0?")
    console.log(prevId);

    const prev = document.getElementById(prevId);
    const parent = prev.parentElement;
    const rand = Math.round(Math.random()*10000);
    console.log(rand);




const str = 
    `<div id="custom_${rand}_wrapper" class="wrapper_inputSelect">
        <input 
            class="inputChk" 
            type="checkbox" 
            id='chk_custom_${rand}'
            data-utm="custom">
        <label 
            class="chk_label" 
            for='chk_custom_${rand}'>
            Custom<span class="chk_labelTick">✔</span>
        </label>
        <div id="inputWrapper_custom_${rand}" class="inputWrapper">
            <label for="input_custom_${rand}" class="purlInput_label">Custom</label>
            <input 
                type="text" 
                name="" 
                id="input_custom_${rand}" 
                class="purlInput_key" 
                placeholder="Custom" 
                value="custom_${rand}">
            <input 
                type="text" 
                name="" 
                id="input_custom_${rand}_value" 
                class="purlInput_value" 
                placeholder="Custom">
        </div>
    </div>
    `;
    parent.insertAdjacentHTML( 'beforeend', str );

    const newSection = document.getElementById(`chk_custom_${rand}`);
    

    newSection.addEventListener("blur",(event)=>{
        console.log("Hello there")
        const parent = event.target.parentElement;
        const grandParent = parent;//document.getElementById(parent.id).parentElement;
        const chkLabel = document.querySelector("#"+grandParent.id + " > .chk_label");
        const chkBox = document.querySelector("#"+grandParent.id + " > .inputChk");
        const inputKey = document.querySelector("#"+grandParent.id + " > .inputWrapper > .purlInput_key");
        const inputVal = document.querySelector("#"+grandParent.id + " > .inputWrapper > .purlInput_value");
        const tick = document.querySelector("#"+grandParent.id + " > .chk_label > .chk_labelTick");
        
        console.log(grandParent)
        return
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
                /** if successful, add tick
                 * this will be removed if 
                 * tests subsequently fail 
                 * validation
                 */
                console.log("Beep boop");
                tick.style.display = "block";
                /** if the utm was custom, add another custom option */
                if(grandParent.id.includes("custom")){
                    console.log("Who's that with you?")
                    addCustom(grandParent.id)
                }
            };
        };
    });




    newSection.addEventListener("change", (event) => {
        if(!event.target.checked){
            document.getElementById(`input_custom_${rand}`).value = `custom_${rand}`;
            document.getElementById(`input_custom_${rand}_value`).value = "";
        }
    });
}