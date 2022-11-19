go.onclick = function (){
    
    let jsonText = document.getElementById("json").value;
    send(route,jsonText);
};

function send(route, jsonText){
    let url = document.getElementById("url").value;
    let method = document.getElementById("methodtype").value;
    let res = document.getElementById("response");

    const ajax = new XMLHttpRequest();
    ajax.open( method , url, true );
    let jsondata = {
        "login": "admin",
        "password":"admin",
        "data": jsonText 
    };
    ajax.onreadystatechange = function(){
        if( ajax.readyState == 4 ){
            res.innerHTML = ajax.responseText;
        }else{
            console.log(ajax.responseText);
        }
    };

    ajax.send( JSON.stringify(jsondata) );
}   

get_field.onclick = function(){
    makeField();
};

function makeField(){
    let field = `<div id="fields" class="d-flex justify-content-start">
    <div class="">
    <label class="form-label">Field Name</label>
    <input type="text" class="form-control field-name" placeholder="Field Name">
    </div>
    <div class="mx-5">
    <label class="form-label">Field Value</label>
    <input type="text" class="form-control field-value" placeholder="Field value">
    </div></div>`;
    let setFields = document.getElementById("fields");
    setFields.innerHTML = setFields.innerHTML + field;
}

const obj = {};

test.onclick = function(){

    let name = document.getElementsByClassName("field-name");
    let value = document.getElementsByClassName("field-value");

    for( var i =0; i < name.length; i++ ){
        addItemToObject(name[i].value, value[i].value);
    }
    console.log(obj);
};

function addItemToObject(name, value){
    obj[name] = value;
}