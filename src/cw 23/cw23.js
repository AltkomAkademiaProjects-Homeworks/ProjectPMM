class Car {
    constructor (brand, model, yearOfProduction) {
        this.brand = brand;
        this.model = model;
        this.yearOfProduction = yearOfProduction;
    }

    displayBrandAndModel(){
        console.log("Brand: "+ this.brand+" model: "+this.model);
    }


    drive(){
        console.log("Driving");
    }

}

function createCar(){
    let car0 = new Car("Fiat", "500", "2010");

    car0.displayBrandAndModel()

    console.log("Rok produkcji: "+car0.yearOfProduction);
}


