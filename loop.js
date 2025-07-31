let array = [1,29,12,12,32]
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element)
    
// }

// array.forEach((value,index , arr)=>{
//     console.log(value,index,arr)
// })

let obj = {
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element,key)
        
    }
    
}

// for (const value of array) {
//     console.log(value)
    
// }

