class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    /**
     * mdamdapdmapdmapdmapd testowy
     */
    displayNameAndSurname() {
        console.log("Imie: " + this.name + " Nazwisko: " + this.surname);
    }
    getNameAndSurname() {
        return "Imie: " + this.name + " Nazwisko: " + this.surname;
    }
}

function createPerson(){
    let person1 = new Person("Jan", "Kowalski", 40)
    person1.displayNameAndSurname();
    console.log("Wiek: "+ person1.age)
}


