const list = [
    {
        "pd_id":"0001",
        "orgName":"Black Dog Institute",
        "contactEmail":"bdi@test.com",
        "contactPerson":"James Test",
        "contactTel":"0444444444",
        "shorthand":"BDI"
    },
    {
        "pd_id":"0002",
        "orgName":"MSI",
        "contactEmail":"msi@test.com",
        "contactPerson":"Jane Test",
        "contactTel":"0444444444",
        "shorthand":"MSI"
    },
    {
        "pd_id":"0003",
        "orgName":"Variety",
        "contactEmail":"variety@test.com",
        "contactPerson":"Jack Test",
        "contactTel":"0444444444",
        "shorthand":"VAR"
    },
    {
        "pd_id":"0004",
        "orgName":"Dogs Home of Tasmania",
        "contactEmail":"dogshome@test.com",
        "contactPerson":"Joan Test",
        "contactTel":"0444444444",
        "shorthand":"DHOT"
    }
]
/*role

*/

function loadClientList(){
    const select = document.getElementById("clientSelect");    
    let blank = document.createElement("option");
    blank.text = "Select Org";
    blank.value = false;
    blank.id = "blankClientOption";
    blank.style = "color:rgb(100,100,100);font-size:1rem;";
    select.add(blank);
    list.forEach(org => {
        let el = document.createElement("option");
        el.text = org.orgName;
        el.value = org.shorthand;
        
        select.add(el);
    });
}
loadClientList()