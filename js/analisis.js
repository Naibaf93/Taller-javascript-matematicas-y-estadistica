console.log(salarios);

// analisis para juanita
function findPerson(searchPerson) {
    return salarios.find(person => person.name == searchPerson);

    //forma de hacerlo mas largo
    // const person = salarios.find((person) => {
    //     return person.name == searchPerson;
    // });
    // return person;
}

function medianaPersona(namePerson) {
    const trabajos = findPerson(namePerson).trabajos;
    
    const salarios = trabajos.map(function(element) {
        return element.salario;
    });

    const medianaSalarios = PlatziMath.calcularMediana(salarios);
    console.log(medianaSalarios);
    return medianaSalarios;
}

function proyeccionPersona(namePerson) {
    const trabajos = findPerson(namePerson).trabajos;

    let porcentajesCrecimiento = [];

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento)
    }

    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento)
    // console.log(porcentajesCrecimiento, medianaPorcentajesCrecimiento);

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumento;

    return nuevoSalario;
}

// analisis empresarial

/* {
Industrias mokepon: {
    2018: [salario, salario, salario]
    2019:
    2020:
},
 Industrias mokepon:{},
 Industrias mokepon:{},
 Industrias mokepon:{},
} */

const empresas = {};
for (person of salarios) {
    for(trabajo of person.trabajos) {
        if(!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {};
        }

        if (!empresas[trabajo.empresa] [trabajo.year]) {
            empresas[trabajo.empresa] [trabajo.year] = [];
        }

        empresas[trabajo.empresa] [trabajo.year].push(trabajo.salario);
    }
}

console.log({empresas});

function medianaEmpresaYear(nombre, year) {
    if(!empresas[nombre]) {
        console.warn('la empresa no existe');
    } else if(!empresas[nombre] [year]) {
        console.warn('la empresa no dio salarios ese año');
    } else {
       return PlatziMath.calcularMediana(empresas[nombre] [year]);
    }
}

function proyeccionEmpresa(nombre) {
    if(!empresas[nombre]) {
        console.warn('la empresa no existe');
    } else {
        const empresaYears = Object.keys(empresas[nombre]);
        const listaMedianaYears = empresaYears.map((year) => {
            return medianaEmpresaYear(nombre, year);
        });

        console.log({listaMedianaYears});

        let porcentajesCrecimiento = [];

        for (let i = 1; i < listaMedianaYears.length; i++) {
            const salarioActual = listaMedianaYears[i];
            const salarioPasado = listaMedianaYears[i - 1];
            const crecimiento = salarioActual - salarioPasado;
            const porcentajeCrecimiento = crecimiento / salarioPasado;
            porcentajesCrecimiento.push(porcentajeCrecimiento)
        }
    
        const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);
    
        const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
        const aumento = ultimaMediana * medianaPorcentajesCrecimiento;
        const nuevaMediana = ultimaMediana + aumento;
    
        return nuevaMediana;
    }
}