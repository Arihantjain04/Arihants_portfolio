let name = document.getElementById('exampleFormControlInput1').innerHTML
let email = document.getElementById('exampleFormControlInput2')
let message = document.getElementById('exampleFormControlTextarea1')

let snackbar = document.getElementById('snackbar')

function showSnackbar(){
    if(name.length > 0){
        snackbar.classList.add('displayYes')
    }
}