
function whitespace(text){
    const rgx = /\s/;
    const res = rgx.test(text);
    return res;
}