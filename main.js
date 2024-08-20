let letra = `.
..
...
.
..
...
Non ho parole da dirti, sono morte in me; 
Nemmeno io ho il diritto di parlare con te.
Ma oggi è un giorno molto importante.
Sono consapevole che questo gattino non è speciale per te, 
ma lo è per me; perché ha un significato e perché mi dà l'opportunità di scusarmi,
per il mio stupido comportamento nei tuoi confronti, sono uno stronzo.
So che sei dotato, come sempre, 
spero che un giorno mi capirai nella mia follia, 
perdonami per lo stupido che sono diventato 
e spero che ti piaccia e che questo mi aiuti.
Per tutta la vita ti augurerò di essere felice, 
buon compleanno, bella.
`
let botonArcoiris = document.getElementById("boton");
let letraArcoiris = document.getElementById("contenedorLetra")
botonArcoiris.style.display = "block";
botonArcoiris.addEventListener("click", inicio)

function miSplit(ary){
    return ary.split("\n")
}

let letraLista = miSplit(letra);

function mostOcul(element){
    if(element.style.display === "block"){
        element.style.display = "none";
    }else{
        element.style.display = "block";
    }
}


function playAudioAfterDelay() {
    // Esperar 3 segundos (3000 milisegundos)
    setTimeout(function() {
        // Obtener el elemento de audio
        var audio = document.getElementById('myAudio');
        // Reproducir el audio
        audio.play();
    }, 3000); // 3000 milisegundos = 3 segundos
}


function tiempoFrase(frase) {
    if (frase.length < 4) {
        return 2500;
    } else if (frase.length < 20) {
        return 3000;
    } else {
        return 4750;
    }
}

function* inserText(text) {
    let indice = 0;
    while (indice < text.length) {
        letraArcoiris.innerHTML = text[indice];
        yield tiempoFrase(text[indice]);
        indice++;
    }
}

let insertarTexto;

function intervalo() {
    function nextFrase() {
        const { value, done } = insertarTexto.next();
        if (!done) {
            setTimeout(nextFrase, value);
        }else{
            letraArcoiris.innerHTML = `           
Non ho parole da dirti, sono morte in me; <br>
Nemmeno io ho il diritto di parlare con te.<br>
Ma oggi è un giorno molto importante.<br>
Sono consapevole che questo gattino non è speciale per te, <br>
ma lo è per me; perché ha un significato e perché mi dà l'opportunità di scusarmi,<br>
per il mio stupido comportamento nei tuoi confronti, sono uno stronzo.<br>
So che sei dotato, come sempre, <br>
spero che un giorno mi capirai nella mia follia, <br>
perdonami per lo stupido che sono diventato <br>
e spero che ti piaccia e che questo mi aiuti.<br>
Per tutta la vita ti augurerò di essere felice, <br>
buon compleanno, bella.`;
        }
    }
    nextFrase();
}

function inicio() {
    mostOcul(botonArcoiris);
    insertarTexto = inserText(letraLista);
    intervalo();
    playAudioAfterDelay();
}
