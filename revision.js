// // // const car = {
// // //     brand: "",
// // //     speed: "",
// // //     color: "White"
// // // }

// // // const bmw = car

// // // bmw.brand = "BMW"
// // // bmw.speed = "150KM/H"
// // // bmw.color = "white"


// // // Constructor Function
// // function Car(color, speed, brand) {
// //     this.color = color
// //     this.speed = speed
// //     this.brand = brand
// // }

// // const bwm = new Car("White", "150", "BMW")
// // const ferrari = new Car("Blue", "250", "Ferrari")

// // console.log("bwm 1", bwm.wheels) // Undefined

// // Car.prototype.wheels = 3

// // const ford = new Car("White", "150", "Ford")

// // const bwm2 = new Car("White", "150", "BMW")

// // // console.log(ford)
// // console.log("bwm 2", bwm2.wheels) // 3

// // Car.prototype.wheels = 5

// // const bwm3 = new Car("White", "150", "BMW")

// // console.log("bwm 3", bwm2.wheels) // 5


// const array = [3, 8, 276, 99]

// // array.forEach((item) => {
// //     console.log(item)
// // })

// Array.prototype.max = function () {
//     let max = 0


//     this.forEach((item) => {
//         if (item > max) max = item
//     })

//     return max
// }

// console.log(array.max())

// function handleInput() {
//     const { value } = document.getElementById('name')
//     console.log(value)
// }

// const radioFields = document.querySelectorAll('.radio')

// radioFields.forEach((inputField) => {
//     inputField.addEventListener('click', function () {
//         const { id } = this
//         console.log(id)
//     })
// })


const countryElement = document.getElementById('country')

countryElement.addEventListener('change', function () {
    console.log(this.innerHTML)
})

// console.log(countryElement.innerHTML)