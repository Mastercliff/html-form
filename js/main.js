//Pegando os elementos html
//Getting the html elements
let name     = document.getElementById("name");
let lastName = document.getElementById("last-name");
let sex      = document.getElementById("sex");
let birthDay = document.getElementById("birth-day");
let country  = document.getElementById("country");
let phone    = document.getElementById("phone");
let terms    = document.getElementById("term-chk");


//Esta função pode ser usada para enviar os valores das entradas 
//This function can be used to send input values
function sendInfo(){
    console.log(`${name.value},${lastName.value},${sex.value},${birthDay.value},${country.value}, ${terms.checked}`);
}

//Esta função limpa as entradas
//This function clears all entries
function clean(){
    name.value = ''
    lastName.value = ''
    sex.value = 'ini'
    birthDay.value = '2020-01-01'
    country.value = ''
    phone.value = ''
    console.log('Limpo');
}