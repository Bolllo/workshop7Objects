let laprounds = {
    time: [55.99,  63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12]
}
console.log(laprounds.time)

myObject = {
    teachers: [
        {
            name: 'Loek',
            profession: 'Teacher',
            brand: 'Linux',
            hoursPerWeek: 24,
            salary: 10
        },
        {
            name: 'Daan',
            profession: 'Teacher',
            brand: 'Arduino',
            hoursPerWeek: 32,
            salary: 15
        },
        {
            name: 'Rimmert',
            profession: 'Teacher',
            brand: 'Apple',
            hoursPerWeek: 36,
            salary: 20
        },
    ],
    salaryPerHour: function() {
        for (let i = 0; i < myObject.teachers.length; i++) {
            TotalsalaryFor = myObject.teachers[i].hoursPerWeek * myObject.teachers[i].salary
            console.log(`${myObject.teachers[i].name} earns ${TotalsalaryFor} euro's if he works ${this.teachers[i].hoursPerWeek} hours a week with a salary of ${myObject.teachers[i].salary} euro's a hour.`)
        }
        myObject.teachers.forEach(function(element){
            TotalSalaryforEach = element.hoursPerWeek * element.salary
            console.log(`${element.name} earns ${TotalSalaryforEach} euro's if he works ${element.hoursPerWeek} hours a week with a salary of ${element.salary} euro's a hour.`)
        })
    }
}
myObject.salaryPerHour()
console.table(myObject.teachers)


for (let i = 0; i < myObject.teachers.length; i++) {
    console.log(`I have a ${myObject.teachers[i].profession} named ${myObject.teachers[i].name} and he likes to work on a ${myObject.teachers[i].brand} computer`)    
    }

myObject.teachers.forEach(function(element){
        console.log(`I have a ${element.profession} named ${element.name} and he likes to work on a ${element.brand} computer`)
    })







