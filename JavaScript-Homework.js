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

const replaceEvens = (arr) => {
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


// codewars ----- #1
/* 
Disemvowel Trolls 
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

 Your task is to write a function that takes a string and return a new string with all vowels removed.

 For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/
let string = "This website is for losers LOL!"

function disemvowel(str) {
    const a = /a/gi;
    const e = /e/gi;
    const i = /i/gi;
    const o = /o/gi;
    const u = /u/gi;
    const newstr = str.replace(a,'').replace(e,'').replace(i,'').replace(o,'').replace(u,'');
    return newstr;
  }

  console.log(disemvowel(string))

// codewars------- #2

/*
Multiply
This code does not execute properly. Try to figure out why.
*/

function multiply(a, b){
    let x = a * b
    return x
  }

console.log(multiply(5,5))