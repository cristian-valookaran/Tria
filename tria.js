var player = 1 ;
  function myFunction(n) {
      let value;
      if (checkVictory() != 1){ //nessuno vince
        if(document.getElementById(n).innerHTML == ''){
          if(player == 1){
            document.getElementById("pedina").innerHTML = "Tocca a:  O";
            document.getElementById(n).innerHTML= 'X';
            var audio = new Audio("file.wav");
            audio.play();
            document.getElementById(n).style.fontSize = "1px";
            document.getElementById(n).style.color = "white";
            document.getElementById(n).style.backgroundImage  = "url('x.png')";

          }else{
            document.getElementById("pedina").innerHTML = "Tocca a:  X";
            document.getElementById(n).innerHTML= 'O';
            var audio = new Audio("file.wav");
            audio.play();
            document.getElementById(n).style.fontSize = "1px";
            document.getElementById(n).style.color = "white";
            document.getElementById(n).style.backgroundImage  = "url('o.png')";
          }
      }else{
          player = player * (-1);
      }
      player = player * (-1);
    }else{
      var audio = new Audio("vittoria.wav");
      audio.play();
    }
}

function refresh(){
  location.reload();
}


function checkVictory(){

  if(horizontalControl() == 1){
    return 1;
  }else if(verticalControl() == 1){
    return 1;
  }else if(diagonalControl() == 1){
    return 1;
  }else{
    return 0;
  }

}
function horizontalControl(){

    if(document.getElementById(1).innerHTML == 'X' && document.getElementById(2).innerHTML == 'X' && document.getElementById(3).innerHTML == 'X'){
      document.getElementById("pedina").innerHTML = "X VINCE";
      return 1;
    }else if(document.getElementById(4).innerHTML == 'X' && document.getElementById(5).innerHTML == 'X' && document.getElementById(6).innerHTML == 'X'){
        document.getElementById("pedina").innerHTML = "X VINCE";
      return 1;
    }else if(document.getElementById(7).innerHTML == 'X' && document.getElementById(8).innerHTML == 'X' && document.getElementById(9).innerHTML == 'X'){
      document.getElementById("pedina").innerHTML = "X VINCE";
      return 1;
    }else if(document.getElementById(1).innerHTML == 'O' && document.getElementById(2).innerHTML == 'O' && document.getElementById(3).innerHTML == 'O'){
      document.getElementById("pedina").innerHTML = "O VINCE";
      return 1;
    }else if(document.getElementById(4).innerHTML == 'O' && document.getElementById(5).innerHTML == 'O' && document.getElementById(6).innerHTML == 'O'){
      document.getElementById("pedina").innerHTML = "O VINCE";
      return 1;
    }else if(document.getElementById(7).innerHTML == 'O' && document.getElementById(8).innerHTML == 'O' && document.getElementById(9).innerHTML == 'O'){
      document.getElementById("pedina").innerHTML = "O VINCE";
      return 1;
    }else{
      return 0;
    }
}

function verticalControl(){

    if(document.getElementById(1).innerHTML == 'X' && document.getElementById(4).innerHTML == 'X' && document.getElementById(7).innerHTML == 'X'){
        document.getElementById("pedina").innerHTML = "X VINCE";
      return 1;
    }else if(document.getElementById(2).innerHTML == 'X' && document.getElementById(5).innerHTML == 'X' && document.getElementById(8).innerHTML == 'X'){
        document.getElementById("pedina").innerHTML = "X VINCE";
      return 1;
    }else if(document.getElementById(3).innerHTML == 'X' && document.getElementById(6).innerHTML == 'X' && document.getElementById(9).innerHTML == 'X'){
        document.getElementById("pedina").innerHTML = "X VINCE";
      return 1;
    }else if(document.getElementById(1).innerHTML == 'O' && document.getElementById(4).innerHTML == 'O' && document.getElementById(7).innerHTML == 'O'){
      document.getElementById("pedina").innerHTML = "O VINCE";
      return 1;
    }else if(document.getElementById(2).innerHTML == 'O' && document.getElementById(5).innerHTML == 'O' && document.getElementById(8).innerHTML == 'O'){
        document.getElementById("pedina").innerHTML = "O VINCE";
      return 1;
    }else if(document.getElementById(3).innerHTML == 'O' && document.getElementById(6).innerHTML == 'O' && document.getElementById(9).innerHTML == 'O'){
      document.getElementById("pedina").innerHTML = "O VINCE";
      return 1;
    }else{
      return 0;
    }
}

function diagonalControl(){

    if(document.getElementById(1).innerHTML == 'X' && document.getElementById(5).innerHTML == 'X' && document.getElementById(9).innerHTML == 'X'){
        document.getElementById("pedina").innerHTML = "X VINCE";
      return 1;
    }else if(document.getElementById(3).innerHTML == 'X' && document.getElementById(5).innerHTML == 'X' && document.getElementById(7).innerHTML == 'X'){
        document.getElementById("pedina").innerHTML = "X VINCE";
      return 1;
    }else if(document.getElementById(1).innerHTML == 'O' && document.getElementById(5).innerHTML == 'O' && document.getElementById(9).innerHTML == 'O'){
        document.getElementById("pedina").innerHTML = "O VINCE";
      return 1;
    }else if(document.getElementById(3).innerHTML == 'O' && document.getElementById(5).innerHTML == 'O' && document.getElementById(7).innerHTML == 'O'){
        document.getElementById("pedina").innerHTML = "O VINCE";
      return 1;
    }else{
      return 0;
    }
}
