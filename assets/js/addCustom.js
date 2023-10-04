/** 
 * TODO: Add whitespace checker and handling
 * TODO: add remove new custom when unchecked if there is a another not empty
 */

/** @random creates random value for use on multiple custom fields */
const rand = (function(){return Math.round(Math.random()*10000)});
/** 
 * @newString creates the string to be used for new custom section 
 * @r = the random number
 * @p = the previous element 
 **/
function newHtml(r,p){
    const str = 
    `<div id="custom_${r}_wrapper" class="wrapper_inputSelect optionalInput">
        <input 
            class="inputChk" 
            type="checkbox" 
            id='chk_custom_${r}'
            data-utm="custom_${r}"
            data-prev="${p}">
        <label 
            class="chk_label" 
            for='chk_custom_${r}'>
            Custom<span class="chk_labelTick">✔</span>
        </label>
        <div id="inputWrapper_custom_${r}" class="inputWrapper">
            <label for="input_custom_${r}" class="purlInput_label">Custom</label>
            <input 
                type="text" 
                name="" 
                id="input_custom_${r}" 
                class="purlInput_key" 
                placeholder="Custom" 
                value="custom_${r}">
            <input 
                type="text" 
                name="" 
                id="input_custom_${r}_value" 
                class="purlInput_value" 
                placeholder="Custom_${r}">
        </div>
    </div>
    `;
    return str;
}
function addCustom(prevId){
    /** @previousId is the id of the button clicked */
    const r = rand();
    const prev = document.getElementById(prevId);
    const parent = prev.parentElement;
    const str = newHtml(r,prevId);
    /** adds the new HTML section to the DOM next to the clicked element*/
    parent.insertAdjacentHTML( 'beforeend', str );
    /** gets the new elements that have just been inserted */
    const newSection = document.getElementById(`chk_custom_${r}`);
    const newInput = document.getElementById(`input_custom_${r}_value`);
    /** adds relevent event listeners */
    newSection.addEventListener("change", (event) => {
        /* get utm type from data attribute in the chkbox */
        const utm = event.target.dataset.utm;
        if(!event.target.checked){
            document.getElementById(`input_${utm}`).value = utm;
            document.getElementById(`input_${utm}_value`).value = "";
        }
    });
    newInput.addEventListener("blur",(event)=>{
        const parent = event.target.parentElement;
        const grandParent = document.getElementById(parent.id).parentElement;
        const chkLabel = document.querySelector("#"+grandParent.id + " > .chk_label");
        const chkBox = document.querySelector("#"+grandParent.id + " > .inputChk");
        const inputKey = document.querySelector("#"+grandParent.id + " > .inputWrapper > .purlInput_key");
        const inputVal = document.querySelector("#"+grandParent.id + " > .inputWrapper > .purlInput_value");
        const tick = document.querySelector("#"+grandParent.id + " > .chk_label > .chk_labelTick");
        /** check if section has been selected first */
        if(chkBox.checked){
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
                tick.style.display = "block";
                /** if the utm was custom, add another custom option */
                if(grandParent.id.includes("custom")){
                    addCustom(grandParent.id)
                }
            };
        };
    });
}