var dog = {
    'name': 'Buddy',
    'legs': 4,
    'tails': 1,
    'friends': ['Arthur', 'Carl']
}

// accessing values using dot notation and bracket notation
var friendNames1 = dog.friends
var friendNames2 = dog['friends']

// updating object properties
dog.name = 'New Buddy'

// adding new properties to an object
dog.bark = 'Woof-Woof'

// deleting properties
delete dog.tails

// Using objects for lookups
var lookup = {
    'alpha': 'Adams',
    'bravo': 'Boston',
    'charlie': 'Chicago',
    'delta': 'Denver',
    'echo': 'Easy',
    'foxtrot': 'Frank'
}

// testing objects for properties
var myObj = {
    gift: 'pony',
    pet: 'kitten',
    bed: 'sleigh'
}
function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp]
    } else {
        return 'Not Found'
    }
}

// nested objects
var myStorage = {
    car: {
        inside: {
            gloveBox: 'maps',
            passengerSeat: 'crumbs'
        },
        outside: {
            trunk: 'jack'
        }
    }
}
var gloveBoxContents = myStorage.car.inside.gloveBox

// accessing nested arrays
var myPlants = [
    {
        type: 'flowers',
        list: [
            'rose',
            'tulip',
            'dandelion'
        ]
    },
    {
        type: 'trees',
        list: [
            'fir',
            'pine',
            'birch'
        ]
    }
]
var secondTree = myPlants[1].list[1] // holds 'pine'