class DTO{

    #loca_id;
    #loca_cc;
    #loca_name;
    #loca_lastName;
    #loca_address;
    #loca_cords;

    constructor (loca_id, loca_cc, loca_name, loca_lastName, loca_address, loca_cords){
        this.#loca_id = loca_id;
        this.#loca_cc = loca_cc;
        this.#loca_name = loca_name;
        this.#loca_lastName = loca_lastName;
        this.#loca_address = loca_address;
        this.#loca_cords = loca_cords;
    }

    getId() {
        return this.#loca_id;
    }

    setId(loca_id) {
        this.#loca_id = loca_id;
    }

    getCC() {
        return this.#loca_cc;
    }

    setCC(loca_cc) {
        this.#loca_cc = loca_cc;
    }

    getName() {
        return this.#loca_name;
    }

    setName(loca_name) {
        this.#loca_name = loca_name;
    }

    getLastName() {
        return this.#loca_lastName;
    }

    setLastName(loca_lastName) {
        this.#loca_lastName = loca_lastName;
    }

    getAddress() {
        return this.#loca_address;
    }

    setAddress(loca_address) {
        this.#loca_address = loca_address;
    }

    getCords() {
        return this.#loca_cords;
    }

    setCords(loca_cords) {
        this.#loca_cords = loca_cords;
    }
}

module.exports = LocationDTO;