//

interface IObj{
    id: number
    name: string
    age: number
    job: string
    car: boolean
    hobby: string
    block: {
        address: string
        street: string
    }
}


let obj: IObj = {
    id: 1,
    name: "Bob",
    age: 99,
    job: "Developer",
    car: false,
    hobby: "sport",
    block: {
        address: "Bishkek",
        street: "Turusbekova"
    }
}
console.log(obj)