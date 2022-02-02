// Wie pushe ich mit einer while schliefe in Arrays

let arrOdd = [1];
let arrEven = [2];

i = 3;
while(i <= 200){
    if(i % 2 == 0){
    arrEven.push(i);
    }else{
        arrOdd.push(i);
    };
    i++;
};

console.log(arrOdd, arrEven);

// Wie stoppe ich eine While Schleife
/* eine zusätliches werkzeug zur While Schleife ist "break" hiermit kann man unter besonderen Umständen die Scheife unterbrechen.
Beispiel:

Die Schleife läuft durch bis 100 Pakete ausgeliefert wurden
*/


let pakets = 20;
let loop = 0;

while(pakets > 0){
    if (loop % 5 == 0){
        console.log("Ich mache eine Pause!");
        
    }else{
        console.log("Ich liefere ein Paket aus.");
        pakets--;
        }loop++
    }

    console.log("Der Transporter ist leer!")

    // Lösung 2

    let pakets2 = 20;
    let loop2 = 0;

    while(pakets2 > 0){
        console.log("Ich liefere ein Paket aus2.");
        pakets2--;

        if (loop2 % 5 == 0){
            console.log("Ich mache eine Pause2!");
            
        }loop2++
    }

    console.log("Der Transporter ist leer2!")

    // Do while Schleifen
    // Größter Unterschied ist schleife läuft erst durch und prüft dann ob bedingung stimmt also <=100 == 101 Durchlauf

    i = 0;
    do{
        console.log(Math.random().toString(36).replace(/[^a-z]+/g, ''));
        i++;
    } while (i < 10)