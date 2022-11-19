
class PostMan
{
    constructor()
    {
        this.method = document.getElementById("methodtype");
        this.url = document.getElementById("url");
        this.addField = document.getElementById("add_field");
        this.go = document.getElementById("go");

        this.jsonbody = document.getElementById("jsonbody");

        this.responseMessage = document.getElementById("response");

        this.addField.onclick = () => this.fieldMaker();
        
        this.sectonId = 0;

        this.data_object={};
        this.getMethodparam;

        this.go.onclick = () =>{
            this.makeRequest();
        };

        // this.url.value = localStorage.getItem('url');

    }

    makeRequest(){
        this.responseMessage.value = ' ';
 
        if (this.method.value == 'GET') {
            if ( this.makeGetParam() != '' && this.url.value !== '' ) {
                this.url.value +=  this.makeGetParam(); 
            }
            
           
        }

        const xhr = new XMLHttpRequest();
        xhr.open( this.method.value,  this.url.value, true );

        xhr.onreadystatechange = () => {
            if( xhr.readyState == 4 ){
                this.responseMessage.value = xhr.responseText;
                
            }
            console.log(xhr.responseText);
        }

        if (this.method.value == 'POST') {
            xhr.send( JSON.stringify( this.jsonbody.value ) );
        }

        if ( this.method.value == "GET" ) {
            
            xhr.send();
        }
        // localStorage.setItem('url', this.url.value);
    }

    addItem(itemKey,value){
        this.data_object[itemKey] = value;
    }

    getFieldItem(){
        let itemName = document.getElementsByClassName("name-field");
        let value = document.getElementsByClassName("value-field");
        for (let i = 0; i < itemName.length; i++) {
            this.addItem( itemName[i].value, value[i].value );
        }

        return this.data_object;
    }

    // set parameter in the url for get request.
    makeGetParam(){
        let itemName = document.getElementsByClassName("name-field");
        let value = document.getElementsByClassName("value-field");
        for (let i = 0; i < itemName.length; i++) {
            if( i > 0 ){

                if( itemName[i].value != '' && value[i].value != '' ){
                    this.getMethodparam +=  "&"+itemName[i].value+"=" + value[i].value ;
                }
                
            }else{
                if( itemName[i].value != '' && value[i].value != '' ){
                    this.getMethodparam = '?'+ itemName[i].value+"=" + value[i].value ;
                }
                
            }
        }
        return this.getMethodparam;
    }

    fieldMaker(){

        this.sectonId = 1 + this.sectonId;

        const fields = document.getElementById('fields');

        let section = document.createElement('section');
        let removeField = document.createElement('span');

        let nameContainer = document.createElement('div');
        let valueContaienr = document.createElement('div');

        let labelForName = document.createElement('label');
        let labelForValue = document.createElement('label');

        let inputForName = document.createElement('input');
        let inputForValue = document.createElement('input');

        // add class
        section.setAttribute('class', 'mx-1 my-3 d-lg-inline-flex d-flex justify-content-start border p-2');
        section.setAttribute("id", "id-"+ this.sectonId );

        // add class to second container
        removeField.setAttribute('class', 'remove-field text-danger');

        valueContaienr.setAttribute('class', 'mx-5');

        inputForName.setAttribute('class', 'form-control name-field');
        inputForValue.setAttribute('class', 'form-control value-field');

        // set onclick attribute
        removeField.setAttribute( 'onclick', 'removeField( ' + this.sectonId + ' )' );

        // add label text
        removeField.appendChild( document.createTextNode('X') );
        labelForName.appendChild( document.createTextNode('Key-Name') );
        labelForValue.appendChild( document.createTextNode('Key-Value') );

        // placeholder for inputs
        inputForName.setAttribute('placeholder', 'key-Name');
        inputForValue.setAttribute('placeholder', 'key-Value');

        // Assign childs
        nameContainer.appendChild(labelForName);
        nameContainer.appendChild(inputForName);

        valueContaienr.appendChild(labelForValue);
        valueContaienr.appendChild(inputForValue);

        
        section.appendChild(nameContainer);
        section.appendChild(valueContaienr);
        section.appendChild( removeField );
        fields.appendChild(section);
        
    }
}
 new PostMan();

function removeField(number){
    let section = document.getElementById( "id-"+number );
    section.remove();
}

// go.onclick = function (){
    
//     let jsonText = document.getElementById("json").value;
//     send(route,jsonText);
// };

// function send(route, jsonText){
//     let url = document.getElementById("url").value;
//     let method = document.getElementById("methodtype").value;
//     let res = document.getElementById("response");

//     const ajax = new XMLHttpRequest();
//     ajax.open( method , url, true );
//     let jsondata = {
//         "login": "admin",
//         "password":"admin",
//         "data": jsonText 
//     };
//     ajax.onreadystatechange = function(){
//         if( ajax.readyState == 4 ){
//             res.innerHTML = ajax.responseText;
//         }else{
//             console.log(ajax.responseText);
//         }
//     };

//     ajax.send( JSON.stringify(jsondata) );
// }   

// get_field.onclick = function(){
//     makeField();
// };

// function makeField(){
//     let field = `<div id="fields" class="d-flex justify-content-start">
//     <div class="">
//     <label class="form-label">Field Name</label>
//     <input type="text" class="form-control field-name" placeholder="Field Name">
//     </div>
//     <div class="mx-5">
//     <label class="form-label">Field Value</label>
//     <input type="text" class="form-control field-value" placeholder="Field value">
//     </div></div>`;
//     let setFields = document.getElementById("fields");
//     let section = document.createElement('section');
//     section.innerHTML = field;
//     setFields.appendChild( section );
   
// }

// const obj = {};

// test.onclick = function(){

//     let name = document.getElementsByClassName("field-name");
//     let value = document.getElementsByClassName("field-value");

//     for( var i =0; i < name.length; i++ ){
//         addItemToObject(name[i].value, value[i].value);
//     }
//     console.log(obj);
// };

// function addItemToObject(name, value){
//     obj[name] = value;
// }