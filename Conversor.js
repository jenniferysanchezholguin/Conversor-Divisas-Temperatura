function convertir()
{
	var valor=parseFloat(document.getElementById("cantidad").value);
    document.getElementById("valor").innerHTML="<b>" + valor + "</b>";
    var de=document.getElementById("de").value;
    var a=document.getElementById("a").value;

    var Dolar=4129.68; //2
    var Euros=4482.38;//3
    var Esterlina=5245.21;//4
    var Yen=28.57;//5
    var Won=3.17;//6
    var pvalor=0;
    resultado=0;

   //peso colombiano a dolar
    if(de==1 && a==2){
        resultado=valor/Dolar;
    } //peso colombiano a euro
    else if(de==1 && a==3){
        resultado=valor/Euros;
    }//peso colombiano a eesterlina
    else if(de==1 && a==4){
        resultado=valor/Esterlina;
    }//peso colombiano a yen
    else if(de==1 && a==5){
        resultado=valor/Yen;
    }//peso colombiano a won
    else if(de==1 && a==6){
        resultado=valor/Won;
    }
    
    //dolar a peso colombiano
    else if(de==2 && a==1){
         resultado=valor*Dolar;
         pvalor=resultado.toLocaleString('es-CO',{
            style:'currency',
            currency:'COP'
          });
          resultado=pvalor;
          
    }//dolar a euro
    else if(de==2 && a==3){
        resultado=valor*(Dolar/Euros);
    }//dolar a esterlina
    else if(de==2 && a==4){
        resultado=valor*(Dolar/Esterlina);
    }//dolar a yen
    else if(de==2 && a==5){
        resultado=valor*(Dolar/Yen);
    }//dolar a won
    else if(de==2 && a==6){
        resultado=valor*(Dolar/Won);
    }
    
    //euro a colombiano
    else if(de==3 && a==1){
        resultado=valor*Euros;
        pvalor=resultado.toLocaleString('es-CO',{
            style:'currency',
            currency:'COP'
          });
          resultado=pvalor;
     }//euro a dolar
     else if(de==3 && a==2){
        resultado=valor*(Euros/Dolar);
     }//euro a esterlina
     else if(de==3 && a==4){
        resultado=valor*(Euros/Esterlina);
     } //euro a yen
     else if(de==2 && a==5){
         resultado=valor*(Euros/Yen);
     }//euro a won
     else if(de==2 && a==6){
         resultado=valor*(Euros/Won);
     }

     //esterlina a colombiano
    else if(de==4 && a==1){
        resultado=valor*Esterlina;
        pvalor=resultado.toLocaleString('es-CO',{
            style:'currency',
            currency:'COP'
          });
          resultado=pvalor;
     }//esterlina a dolar
     else if(de==4 && a==2){
        resultado=valor*(Esterlina/Dolar);
     }//esterlina a euro
     else if(de==4 && a==3){
        resultado=valor*(Esterlina/Euros);
     }//esterlina a yen
     else if(de==4 && a==5){
         resultado=valor*(Esterlina/Yen);
     }//esterlina a won
     else if(de==4 && a==6){
         resultado=valor*(Esterlina/Won);
     }


     //yen a colombiano
    else if(de==5 && a==1){
        resultado=valor*Yen;
        pvalor=resultado.toLocaleString('es-CO',{
            style:'currency',
            currency:'COP'
          });
          resultado=pvalor;
     }//yen a dolar
     else if(de==5 && a==2){
        resultado=valor*(Yen/Dolar);
     }//yen a euro
     else if(de==5 && a==3){
        resultado=valor*(Yen/Euros);
     } //yen a esterlina
     else if(de==5 && a==4){
        resultado=valor*(Yen/Esterlina);
     }//yen a won
     else if(de==4 && a==6){
         resultado=valor*(Yen/Won);
     }

     
     //won a colombiano
    else if(de==6 && a==1){
        resultado=valor*Won;
        pvalor=resultado.toLocaleString('es-CO',{
            style:'currency',
            currency:'COP'
          });
          resultado=pvalor;
     }//Won a dolar
     else if(de==6 && a==2){
        resultado=valor*(Won/Dolar);
     }//yen a euro
     else if(de==6 && a==3){
        resultado=valor*(Won/Euros);
     } //yen a esterlina
     else if(de==6 && a==4){
        resultado=valor*(Won/Esterlina);
     }//yen a yen
     else if(de==6 && a==5){
         resultado=valor*(Won/Yen);
     }
     else{
        resultado=valor;
     }
    document.getElementById("resultado").innerHTML="Resultado:"+ resultado;

}
function CelsiusKelvin() {
    var temp = document.getElementById("inputCelsius").value;
    document.getElementById("Farenheit").innerHTML=((temp*9/5)+32);
    document.getElementById("Kelvin").innerHTML=(parseInt(temp)+273);
    document.getElementById("Rankine").innerHTML=(parseInt(temp*9/5)+492);

}

