let radiologia = [
    {
        hora: '11:00', 
        especialista: 'IGNACIO SCHULZ', 
        paciente: 'FRANCISCA ROJAS', 
        rut: '9878782-1', 
        prevision: 'FONASA'
    },
    {
        hora: '11:30', 
        especialista: 'FEDERICO SUBERCASEAUX', 
        paciente: 'PAMELA ESTRADA', 
        rut: '15345241-3', 
        prevision: 'ISAPRE'
    },
    {
        hora: '15:00', 
        especialista: 'FERNANDO WURTHZ', 
        paciente: 'ARMANDO LUNA', 
        rut: '16445345-9', 
        prevision: 'ISAPRE'
    },
    {
        hora: '15:30', 
        especialista: 'ANA MARIA GODOY', 
        paciente: 'MANUEL GODOY', 
        rut: '17666419-0', 
        prevision: 'FONASA'
    },
    {
        hora: '16:00', 
        especialista: 'PATRICIA SUAZO', 
        paciente: 'RAMON ULLOA', 
        rut: '14989389-K', 
        prevision: 'FONASA'
    },
];

let traumatologia = [
    {
        hora: '8:00',  
        especialista: 'MARIA PAZ ALTUZARRA', 
        paciente: 'PAULA SANCHEZ',     
        rut: '15554774-5', 
        prevision: 'FONASA'
    },
    {
        hora: '10:00', 
        especialista: 'RAUL ARAYA',          
        paciente: 'ANGÉLICA NAVAS',    
        rut: '15444147-9', 
        prevision: 'ISAPRE'
    },
    {
        hora: '10:30', 
        especialista: 'MARIA ARRIAGADA',     
        paciente: 'ANA KLAPP',         
        rut: '17879423-9', 
        prevision: 'ISAPRE'
    },
    {
        hora: '11:00', 
        especialista: 'ALEJANDRO BADILLA',   
        paciente: 'FELIPE MARDONES',   
        rut: '1547423-6', 
        prevision: 'ISAPRE'
    },
    {
        hora: '11:30', 
        especialista: 'CECILIA BUDNIK',      
        paciente: 'DIEGO MARRE',      
        rut: '16554741-K', 
        prevision: 'FONASA'
    },
    {
        hora: '12:00', 
        especialista: 'ARTURO CAVAGNARO',    
        paciente: 'CECILIA MENDEZ',    
        rut: '9747535-8', 
        prevision: 'ISAPRE'
    },
    {
        hora: '12:30', 
        especialista: 'ANDRES KANACRI',      
        paciente: 'MARCIAL SUAZO',     
        rut: '11254785-5', 
        prevision: 'ISAPRE'
    },
];

let dental = [
    {
        hora: '8:30',  
        especialista: 'ANDREA ZUÑIGA',          
        paciente: 'MARCELA RETAMAL',
        rut: '11123425-6', 
        prevision: 'ISAPRE'
    },
    {
        hora: '11:00', 
        especialista: 'MARIA PIA ZAÑARTU',      
        paciente: 'ANGEL MUÑOZ',    
        rut: '9878789-2',  
        prevision: 'ISAPRE'
    },
    {
        hora: '11:30', 
        especialista: 'SCARLETT WITTING',       
        paciente: 'MARIO KAST',     
        rut: '7998789-5',  
        prevision: 'FONASA'
    },
    {
        hora: '13:00', 
        especialista: 'FRANCISCO VON TEUBER',   
        paciente: 'KARIN FERNANDEZ',
        rut: '18887662-K', 
        prevision: 'FONASA'
    },
    {
        hora: '13:30', 
        especialista: 'EDUARDO VIÑUELA',        
        paciente: 'HUGO SANCHEZ',   
        rut: '17665461-4', 
        prevision: 'FONASA'
    },
    {
        hora: '14:00', 
        especialista: 'RAQUEL VILLASECA',       
        paciente: 'ANA SEPULVEDA',  
        rut: '14441281-0', 
        prevision: 'ISAPRE'
    },
];

// EJERCICIO 1

traumatologia.push(
    {
        hora: "09:00", 
        especialista: "RENÉ POBLETE", 
        paciente: "ANA GELLONA", 
        rut: "13123329-7", 
        prevision: "ISAPRE"
    },
    {
        hora: "09:30", 
        especialista: "MARIA SOLAR", 
        paciente: "RAMIRO ANDRADE", 
        rut: "12221451-K", 
        prevision: "FONASA"
    },
    {
        hora: "10:00", 
        especialista: "RAUL LOYOLA", 
        paciente: "CARMEN ISLA", 
        rut: "10112348-3", 
        prevision: "ISAPRE"
    },
    {
        hora: "10:30", 
        especialista: "ANTONIO LARENAS", 
        paciente: "PABLO LOAYZA", 
        rut: "13453234-1", 
        prevision: "ISAPRE"
    },
    {
        hora: "12:00", 
        especialista: "MATIAS ARAVENA", 
        paciente: "SUSANA POBLETE", 
        rut: "14345656-6", 
        prevision: "FONASA"
    },
    )
    //fin del ejercicio

//EJERCICIO 2

// Se elimina el primero
radiologia.shift()

//Se elimina el último 
radiologia.pop()
//fin del ejercicio


let titulo = document.querySelector(".title1")

    titulo.innerHTML = "RADIOLOGIA";

miTabla(radiologia)

function miTabla(data) {
    tabla = document.querySelector("#tabla1")

    let encabezado =
                    `<tr>
                        <th>HORA</th>
                        <th>ESPECIALISTA</th>
                        <th>PACIENTE</th>
                        <th>RUT</th>
                        <th>PREVISION</th>
                    </tr>`
    tabla.innerHTML = encabezado;

    for(let i = 0; i < data.length; i++) {
        let fila = 
                    `<tr>
                        <td>${data[i].hora}</td>
                        <td>${data[i].especialista}</td>
                        <td>${data[i].paciente}</td>
                        <td>${data[i].rut}</td>
                        <td>${data[i].prevision}</td>
                    </tr>`

        tabla.innerHTML += fila;
    } 
}

let titulo2 = document.querySelector(".title2")

    titulo2.innerHTML = "TRAUMATOLOGIA"

miTabla2(traumatologia)

function miTabla2(data) {
    tabla = document.querySelector("#tabla2")

    let encabezado =
                    `<tr>
                        <th>HORA</th>
                        <th>ESPECIALISTA</th>
                        <th>PACIENTE</th>
                        <th>RUT</th>
                        <th>PREVISION</th>
                    </tr>`

    tabla.innerHTML = encabezado;

    for(i = 0; i < data.length; i++) {
        let fila = 
                    `<tr>
                        <td>${data[i].hora}</td>
                        <td>${data[i].especialista}</td>
                        <td>${data[i].paciente}</td>
                        <td>${data[i].rut}</td>
                        <td>${data[i].prevision}</td>
                    </tr>`

        tabla.innerHTML += fila;
    }
}

let titulo3 = document.querySelector(".title3")

    titulo3.innerHTML = "DENTAL"

// EJERCICIO 3

miTabla3(dental)

function miTabla3(data) {
    tabla = document.querySelector("#tabla3")
        let encabezado = `<th>HORA - ESPECIALISTA - PACIENTE - RUT - PREVISION</th>`

        tabla.innerHTML = encabezado;
    
    for(i = 0; i < data.length; i++) {
        let fila = `<td>${data[i].hora} - ${data[i].especialista} - ${data[i].paciente} - ${data[i].rut} - ${data[i].prevision}</td>`;

        tabla.innerHTML += fila;
    }
}
//fin del ejercicio

//EJERCICIO 4
let centroMedico = radiologia.concat(traumatologia, dental);

let titulo4 = document.querySelector(".title4")

    titulo4.innerHTML = "Listado de pacientes totales en el Centro Médico"

miListado(centroMedico)

function miListado(data) {
    listado = document.querySelector(".listadoPacientes")

        for(i = 0; i < centroMedico.length; i++) {
            let nombres = `<td>${data[i].paciente}</td>`

            listado.innerHTML += nombres;
        }
}
//fin del ejercicio

// EJERCICIO 5

let titulo5 = document.querySelector(".title5")

    titulo5.innerHTML = "Listado pacientes con Isapre en Dental"

let isapres = dental.filter( (isapre) => {
    return isapre.prevision === "ISAPRE" 
})

listadoIsapres(isapres)

function listadoIsapres(data) {
    listado = document.querySelector(".listadoIsapre")

    for(i = 0; i < isapres.length; i++) {
        let nombres = `<td>${data[i].paciente} - ${data[i].prevision}</td>`

        listado.innerHTML += nombres;
    }
}
//fin del ejercicio

// EJERCICIO 6

let titulo6 = document.querySelector(".title6")

    titulo6.innerHTML = "Listado pacientes con Fonasa en Traumatologia"

let fonasas = traumatologia.filter( (fonasa) => {
    return fonasa.prevision === "FONASA" 
})

listadoFonasas(fonasas)

function listadoFonasas(data) {
    listado = document.querySelector(".listadoFonasa")

    for(i = 0; i < fonasas.length; i++) {
        let nombres = `<td>${data[i].paciente} - ${data[i].prevision}</td>`

        listado.innerHTML += nombres;
    }
}
//fin del ejercicio