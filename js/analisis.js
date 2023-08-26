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

