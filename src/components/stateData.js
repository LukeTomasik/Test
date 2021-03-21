
import stateData from './stateData.json'




console.log(stateData)
console.log(stateData[0].id)
const usStates = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY',
'LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA',
'RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']


// states contains an array of objects that are only US states
const states = stateData.filter(state => {
    if (usStates.includes(state.id)) {
        return state
    }
},0)

console.log(states)
// loop through states - push only the first matching ID state into unique states to avoid duplicates

let uniqueStates = []
for (let state of usStates) {
    uniqueStates.push(states.find(element => element.id.toUpperCase() == state))
}
console.log(uniqueStates)

// create function that takes in an array of objects 

// 0-250
const rangeOne = []
// 251-500
const rangeTwo =[]
// 501-1000
const rangeThree =[]
// 1000+
const rangeFour =[]
function sortStates(param) {
    // create if statement that checks if vists are 0-250,251-500,501-1000,1001+
    param.forEach(el => {
        // loops through array, if it falls between 0-250 gets pushed int0 array
        if (el.visits <= 250) {
            rangeOne.push(el.id.toLowerCase())
        } // loops through array, if it falls between 251-500 gets pushed int0 array
         else if(el.visits >= 251 && el.visits <= 500) {
            rangeTwo.push(el.id.toLowerCase())
        } // loops through array, if it falls between 501-1000 gets pushed int0 array
         else if(el.visits >= 501 && el.visits <= 1000) {
            rangeThree.push(el.id.toLowerCase())
        } // catches anything thats greater then 1000
         else {
            rangeFour.push(el.id.toLowerCase())
        }
    })

    console.log(rangeOne)
    console.log(rangeTwo)
    console.log(rangeThree)
    console.log(rangeFour)
}
sortStates(uniqueStates)


// create a function, that loops through the proper array (out of 4) and then targets the SVG

function  changeActive(arr) {
    // reset all classes with an 'active' class
    // loop through the ranges array => if the ranges array elements match with path array elements
    //  add a classlist titled active = this will display the color
    // this function should be ran on select option

}


