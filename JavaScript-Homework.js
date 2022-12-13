//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

const check_list = (string, list) => {
    for(let name of list){
        if (string.includes(name) == true){
            console.log(`Matched ${name}`)
        } else {
            console.log('No Match')
        }
    }
}

//Call method here with parameters
console.log(check_list(dog_string, dog_names))
//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let Given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    //code goes here
    for(let i in arr){
        if(parseInt(i) % 2 == 0){
            arr.splice(i, 1, 'even index')
    }else {
        null
    }
    }
    console.log(arr)
}
console.log(replaceEvens(Given_arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


//codewars/
let string = "This website is for losers LOL!"

function disemvowel(str) {
    arr=Array.from(str)
    console.log(arr)
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 'a'){
            arr.splice(i, 1)
        } if (arr[i] === 'e'){
            arr.splice(i, 1)
        }if (arr[i] === 'i'){
            arr.splice(i, 1)
        }if (arr[i] === 'o'){
            arr.splice(i, 1)
        }if (arr[i] === 'u'){
            arr.splice(i, 1)
        }
    }
    console.log(arr)
    new_string = arr.toString()
    console.log(new_string)
    
    // list.toString()
    // console.log(list.join(''))
}

  console.log(disemvowel(string))