var haslo = "Bez pracy nie ma kołaczy";
haslo = haslo.toUpperCase() /*Zamiana litery na duże*/
var dlugosc = haslo.length; /*bez () bo to atrybut*/
var bledy = 0;
//var good_answer = new Audio(yes.wave);//stworzenie obiektu z klasu Audio
//var bad_answer = new Audio(no.wave);
var haslo1 = "";

for (i=0; i<dlugosc; ++i)
{
    if(haslo.charAt(i) == " ") haslo1 = haslo1 + " "; 
    else haslo1 = haslo1 + "-";
}

function wypisz_haslo()
{
    document.getElementById("plansza").innerHTML = haslo1; 
}

window.onload = start; /*ustawiamy alias - wypisz hasło stało się przezwiskiem windows.onload. 
Wypisanie hasła po załadowaniu się okna*/

var litery = new Array(35) /*stworzenie tablicy*/

litery[0] = "A"; /*TABLICA TO INE ŁAŃCUCH dlatego można []*/
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";

/*Generacja alfabetu*/
function start()
{
    var tresc_diva="";

    for(i=0; i<=34; i++)
    {
        var element = "lit" + i; /*wygenerowanie id, które nie mogą być liczbą*/
        tresc_diva = tresc_diva + '<div class = "litera" onclick="sprawdz('+i+')" id="'+element+'">' + litery[i] + '</div>' /*konkatenacja*/
        if((i+1) % 7 == 0) tresc_diva = tresc_diva + '<div style = "clear:both;"></div>'
    }
    document.getElementById("alfabet").innerHTML = tresc_diva;
    wypisz_haslo();
}

//Stworzenie klasy zamieniającą znak w łańcuchu na inny

String.prototype.ustawZnak = function(miejsce, znak)
{
    if (miejsce > this.length - 1) return this.toString(); //this odwołuje się do wywołenego elementu
    else return this.substring(0, miejsce) + znak + this.substring(miejsce + 1); //x, od którego miejsca zaczynamy wyjmowanie, y - ilość wyjętych znaków
    //w drugim substr nie ma końca. W takim przypadku przeglądarka domyślnie pojedzie do końca łańcucha
}

/*Sprawdzenie poprawności z hasłem*/
function sprawdz(nr)
{
    var trafiona = false;

    //alert(nr); /*funckja powodujące wyświetlenie okienka alarmowego*/
    for(i=0; i<dlugosc; ++i)
    {
        if (haslo.charAt(i) == litery[nr])
        {
            haslo1 = haslo1.ustawZnak(i, litery[nr]); 
            trafiona = true;
        }
    } 

    if(trafiona == true)
    {
//        yes.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background="#003300";
        document.getElementById(element).style.color="#00C000";
        document.getElementById(element).style.border="3px solid #00C000";
        document.getElementById(element).style.cursor="default";
        wypisz_haslo();
        
    }else{
 //       no.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background="#330000";
        document.getElementById(element).style.color="#C00000";
        document.getElementById(element).style.border="3px solid #C00000";
        document.getElementById(element).style.cursor="default";
        document.getElementById(element).setAttribute("onclick", ";"); //rozbrojenie wykonywania funkcji po kliknięciu na element!

        ++bledy;
        var obraz = "img/s"+bledy+".jpg";
        document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt=""/>';
        
    }

    if(haslo == haslo1)
    {
        document.getElementById("alfabet").innerHTML = "Tak jest! Podano prawidłowe hasło: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>' //location.reload - rozpoczęcia skryptu od nowa
    }

    if(bledy >=9)
    {
        document.getElementById("alfabet").innerHTML = "Przegrana! Prawidłowe hasło: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>' //location.reload - rozpoczęcia skryptu od nowa   
    }
    
}



