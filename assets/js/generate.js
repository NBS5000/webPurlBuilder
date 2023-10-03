/** 
 * @generates the input options and related fields 
 * this will run on page load
*/

/** These are the fields that will generate. To 
 * permanently add another option, add the name 
 * to the array below
 */
const fields = [
    "Source",
    "Medium",
    "Campaign",
    "Term",
    "Content",
    "ID",
    "First Name",
    "Last Name",
    "Email",
    "Postcode",
    "Mobile",
    "Reference",
    "Custom"
]
/** builds the HTML string, starting with the wrapper, 
 * and looping through the above array to build the necessary fields.
 * ! DO NOT AMEND THIS SECTION WITHOUT COMPLETE UNDERSTANDING
 */
/*

*/
let htmlStr=`<div id="utmFields">`;
for (let i = 0; i < fields.length; i++) {
    const el = fields[i];
    let lower;
    /** creates second variable of the option name
    *  in lower case and in a usable format
     */
    switch(el){
        case "First Name":
            lower = "fname";
            break;
        case "Last Name":
            lower = "lname";
            break;
        case "Postcode":
            lower = "pcode";
            break;
        case "Mobile":
            lower = "mob";
            break;
        case "Reference":
            lower = "ref";
            break;
        default:
            lower = el.toLowerCase();
            break;
    };
    let keyText;
    if(i<6){
        keyText=`utm_${lower}`
    }else{
        keyText=`${lower}`
    }
    const str = 
    `<div id="${lower}_wrapper" class="wrapper_inputSelect">
        <input 
            class="inputChk" 
            type="checkbox" 
            id='chk_${lower}'
            data-utm="${lower}">
        <label 
            class="chk_label" 
            for='chk_${lower}'
            data-utm="${el}">
            ${el}<span class="chk_labelTick">✔</span>
        </label>
        <div id="inputWrapper_${lower}" class="inputWrapper">
            <label for="input_${lower}" class="purlInput_label">${el}</label>
            <input 
                type="text" 
                name="" 
                id="input_${lower}" 
                class="purlInput_key" 
                placeholder="${el}" 
                value="${keyText}">
            <input 
                type="text" 
                name="" 
                id="input_${lower}_value" 
                class="purlInput_value" 
                placeholder="${el}">
        </div>
    </div>
    `;
    htmlStr = htmlStr+str;
}
/** finishes string and adds to page */
htmlStr = htmlStr+`</div>`;
document.getElementById("utmFields_insert").innerHTML = htmlStr;