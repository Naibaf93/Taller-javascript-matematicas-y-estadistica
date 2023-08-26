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

    const ultimoSalario =trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumento;

    return nuevoSalario;
}