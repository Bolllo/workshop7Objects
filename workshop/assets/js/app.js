let me = { // Standard defined Object
    name: 'Dave Everts',
    age: 21,
    previousDiploma: 'Mechatronica Niveau 4',
    favouriteTransport: {
        name: 'bike',
        amountOFWheels: 2
    },
    FamilyNames: ['Lodie', 'Evelien', 'Roy','Sia','Bengel','Luna','Pruts','Wok','Pang'],
    myFunctions: {
        logFamilyNames :function(){  
            for (let i = 0; i < me.FamilyNames.length; i++) { //print Array in multiple Lines with for loop
                    console.log(me.FamilyNames[i]); }
            },
        logFavouriteTransport :function(){
            console.log(`My favourite type of transport is the ${me.favouriteTransport.name} and it has ${me.favouriteTransport.amountOFWheels} wheels.`);  
            }
    }

}
console.log(me)
me.myFunctions.logFavouriteTransport() // Run the Function (method) LogFavouriteTransport in the object myFunction Located in the object me
me.myFunctions.logFamilyNames() // Run the Function (method) LogFamilyNames in the object myFunction Located in the object me

console.log(me); // Print Object
//in a object you can add datatypes, objects and functions



me.Family.forEach(function(element){ //print Array in multiple Lines with for forEach
    console.log(element)
})

    me.currentStudy = 'HBO-ICT' //add property to object out of curly brackets



