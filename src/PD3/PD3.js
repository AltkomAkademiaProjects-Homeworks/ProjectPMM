function mapEx() {
    let myMap = new Map([
        [1, "Becker"],
        [11, "Salah"],
        [10, "Mane"]
    ]);
    myMap.forEach((value, key) => {
        console.log(key, value);
    })
}