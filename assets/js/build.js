/** this function validates inputs, once inputs have been validated
 * purl string is constructed. If they are not validated, a list of 
 * errors is returned.
 * TODO: connection with firebase
 * TODO: 
 */

function validate(){
    document.getElementById("purl").innerText = "";
    let errors=[];
    let values=[""];
    const urls = document.getElementsByClassName("purlInput_url");
    const utms = document.getElementsByClassName("wrapper_inputSelect");
    for (let i = 0; i < urls.length; i++) {
        const el = urls[i];
        let err;
        const v = el.value;
        const f = el.dataset.field;
        if(!v){
            err = `The ${f} is missing`;
            errors.push(err);
        }else if(v && whitespace(v)){
            err = `There is whitespace in the ${f} field`;
            errors.push(err);
        }else{
            const len = v.length;
            const last = v.charAt(len - 1);
            const first = v.charAt(0);
            let newStr;
            let str1,str2,str3;
            if(last==="/"||first==="/"){
                if(last==="/"){
                    str1 = v.slice(0,-1);
                }
                str1?newStr=str1:newStr=v;
                if(first==="/"){
                    str2 = newStr.substring(1);
                }
                str2?str3=str2:str3=str1;
                values.push(str3);
            }else{
                values.push(v);
            }
            if(i==0){
                values.push("/");
            }
        }
    }  
    values.push("?");
    values.splice(0,1);
    for (let i = 0; i < utms.length; i++) {
        const el = utms[i];
        const chkBox = document.querySelector(`#${el.id} .inputChk`);
        const chkLabel = document.querySelector(`#${el.id} .chk_label`);
        const pdField = chkLabel.dataset.utm;
        if(chkBox.checked){
            const key = document.querySelector(`#${el.id} .inputWrapper .purlInput_key`);
            const val = document.querySelector(`#${el.id} .inputWrapper .purlInput_value`);
            let err;
            let x=false;
            if(!key.value){
                err = `The Key for '${pdField}' is missing`;
                x = true;
            }else if(!val.value){
                err = `The Value for '${pdField}' is missing`;
                x = true;
            }else if(key.value && whitespace(key.value)){
                err = `There is whitespace in the Key for '${pdField}'`;
                x = true;
            }else if(val.value && whitespace(val.value)){
                err = `There is whitespace in the Value for '${pdField}'`;
                x = true;
            }
            if(x){
                errors.push(err);
            }else{
                const str = `${key.value}=${val.value}&`;
                values.push(str);
            }
        }
    }
    if(errors.length){
        let str = `
        <div>
            <p class="errTitle">The following errors have been identified:</p>`;
        for (let i = 0; i < errors.length; i++) {
            const el = errors[i];
            str = str+`<p class="errFound">${el}</p>`;  
        }
        str = str+`</div>`;
        document.getElementById("errorList").innerHTML = str;
        document.getElementById("iconButton").style.display = "none";
    }else{
        document.getElementById("errorList").innerHTML = "";
        let purl_str = "";
        for (let i = 0; i < values.length; i++) {
            const el = values[i];
            purl_str = purl_str+el;
        }
        const len = purl_str.length;
        const last = purl_str.charAt(len - 1);
        if(last==="&"){
            purl_str = purl_str.slice(0,-1);
        }
        document.getElementById("purl").innerText = purl_str;
        document.getElementById("iconButton").style.display = "block";
    }
}