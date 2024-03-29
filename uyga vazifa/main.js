// 1-task 1-usul
// let massiv = [29,2,3,4,5,56,7,21]
// let count = -1
// let result = 0
// for (let i = 0; i < massiv.length; i++){
//     count ++
//     if (count == 0 || count == massiv.length - 1){
//         result += massiv[i]
//     }
// }
// console.log(result);


//task-1 2-usul


// let massiv = [29,2,3,4,5,56,7,21]
// let last = massiv.pop()
// let one = massiv.shift()
// console.log(one + last);



// 2-task


// let random_num = parseInt(Math.random()*10)
// console.log(random_num + "   randomdan kelgan son");
// let massiv = [1,2,3,45,6,6,7]
// massiv.unshift(random_num)
// console.log(massiv);
// let number = random_num + 1
// if (random_num % 2 == 0){
//     massiv.shift()
//     massiv.unshift(number)
//     console.log(massiv);
// }
// else {
//     massiv.shift()
//     massiv.unshift(number)
//     console.log(massiv);
// }


// 3-task 1-usul

// let massiv = [5, 16, 7, 4, 10, 3, 4, 4, 14, 5, 14, 4, 44, 4]
// let new_massiv = []
// for (let i = 0; i < massiv.length; i++){
//     if(massiv[i] != 4){
//         new_massiv.push(massiv[i])
//     }
// }
// console.log(new_massiv);


// 3-task 2-usul
// let massiv = [5, 16, 7, 4, 10, 3, 4, 4, 14, 5, 14, 4, 44, 4]
// for (let i = 0; i < massiv.length; i++){
//     if(massiv[i] == 4){
//         massiv.splice(i,1)
//     }
// }
// console.log(massiv);


// 4-task


// let nums = [1,3,2,4,5,6,99,102]
// nums.sort((a,b)=> a - b)
// console.log(nums);
// for (let i = 0; i < nums.length; i++) {
//     if(nums[i] == 5){
//         console.log("O'sish tartibida joylashganda shu indexda   " + i );
//     }    
// }
// nums.sort((a,b)=> b - a)
// console.log(nums);
// for (let i = 0; i < nums.length; i++) {
//     if(nums[i] == 5){
//         console.log("Kamayish tartibida joylashganda shu indexda   " + i);
//     }    
// }


// 5-task 1-usul


// let massiv = [5, 16, 5, 4]
// let total = 0
// for (let i = 0; i < massiv.length; i++) {
//     total += massiv[i]
// }
// console.log(total);



// 5-task 2-usul


// let massiv = [5, 16, 5, 4]
// let total = massiv.reduce((a, b)=> a + b)
// console.log(total);



// 6-task



// let arr = function(number){
//     let nums = [1,3,2,4,5,6,99,102]
//     nums.sort((a,b)=> a - b)
//     console.log(nums);
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i] == number){
//             console.log("O'sish tartibida joylashganda shu indexda   " + i );
//         }    
//     }
//     nums.sort((a,b)=> b - a)
//     console.log(nums);
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i] == number){
//             console.log("Kamayish tartibida joylashganda shu indexda   " + i);
//         }    
//     }

// }
// arr(99)




// 7-task



// let arr = function(num_1, num_2){
//     let obj = [5, 1, 9]
//     obj.push(num_1)
//     obj.unshift(num_2)
//     console.log(obj);
// }
// arr(6,7)



// 8-task


// let arr = function(number_1){
//     let obj = {1:5, 3:5, 7:8}
//     console.log(obj);
// }
// arr(7)