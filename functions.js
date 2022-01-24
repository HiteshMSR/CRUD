//numbers=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

// (function(data){
//      var res=0
//      for(num of data){
//          res+=num
//      }
//      console.log("Sum is : " + res)
//  })(numbers);



//  let sumarray=function(data){
//     var res=0
//     for(num of data){
//         res+=num
//     }
//     return res
// }
// console.log("Sum is : " +sumarray(numbers))

// let checkprime=function(data) {
    // let res=[]
    // for (number of data){
    //     var a=1 
    //   for (let i = 2; i < number; i++) {
    //     if (number % i == 0) {
    //       a=0
    //     }
    //   }
    //   if(a==1){
    //       res.push(number)
    //   }   
// }
// return res  
// }
//   console.log(checkprime(numbers))

// (function(data){
//     let res=[]
//     for (word of data){
//             var temp=word
//             temp=word.split('')
//             temp=temp.reverse()
//             temp=temp.join("")
//                if(word==temp){
//                    res.push(word)
//            }   
//         }
//         console.log(res)
// })(words)

// words=['hitesh','noon','ravi','oho',];
// let checkpalindrome=function(data){
//     var res=[]
//     for(word of data){
//         var temp=word.split('').reverse().join("")
//         if(temp==word){
//             res.push(word)
//         }
//     }
// return res
// }
// console.log(checkpalindrome(words))

// let checkmedian=function(arr,arr1){
    // arr=arr.concat(arr1)
    // arr=arr.sort()
    // var median
    // if(arr.length%2==1){
    // median=arr[parseInt(arr.length/2)]
    // }
    // else{
    //     median=(arr[parseInt(arr.length/2)]+arr[parseInt(arr.length/2)-1])/2
    // }
// return median
// }
// console.log("Median is : " + checkmedian(arr,arr1))



// let delduplicates=function(data){
//     var res=[]
//     for(number of data){
//         if(!res.includes(number)){
//             res.push(number)
//         }
//     }
// return res
// }
// console.log(delduplicates(arr))
// var arr=[1,2,3,4,1,2,3,4,4,4,4,3,2,1];
// (function(data){
// var res=[]

// for( number of data){
//     if(!res.includes(number)){
//         res.push(number)
//     }
// }
// console.log(res)
// })(arr)

var arr = [ 1, 2, 3, 4, 5, 6, 7 ];

(function(arr,k){
    var temp
    while(k>=1){
        temp=arr.shift()
        arr.push(temp)
        k-=1;

    }
    console.log(arr)
})(arr,4)


let leftRotate=function(arr,k){
    var temp
    while(k>=1){
        temp=arr.shift()
        arr.push(temp)
        k-=1;

    }
return arr
}


//console.log(leftRotate(arr,2))



words=['hitesh','noon','ravi','oho',];
let checkpalindrome=(data) => {
    var res=[]
    for(word of data){
        var temp=word.split('').reverse().join("")
        if(temp==word){
            res.push(word)
        }
    }
return res
}
console.log(checkpalindrome(words))