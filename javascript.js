const input = document.getElementById('text');

function display(val){
    input.value+=val;
}

function solve(){  
    if(input.value==''){
        alert('enter something to show...');
    }
    else{
        let x = input.value;
        let y = eval(x);
        input.value = y;
    }
}

function del(){
    var a = input.value.slice(0,-1);
    input.value = a;
}
