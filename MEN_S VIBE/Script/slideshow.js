var x = 0;
function bgChange(){
    document.getElementById("datetime").innerHTML = Date();
    if(x == 0){
        
        document.getElementById("jumbotron").style.backgroundImage = "url('styles/images/polo.jpg')";
        x = x+1;
        
    }
    else if(x == 1){
        document.getElementById("jumbotron").style.backgroundImage = "url('styles/images/armanibg2.jpg')";
        x = 0;
        
    }
    
    
}
window.onload = new Function('setInterval("bgChange()",4000)');