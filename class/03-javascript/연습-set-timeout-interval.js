setTimeout(function(){ 
    console.log("기능이 실행!!!") 
}, 2000)
// 2 //setTimeout은 2초후에 기능이 실행이라는 문장이 나오게 하는 함수이다.
setInterval(function(){
    console.log("안녕하세요!!")
}, 1000)
// 3

let time = 10
setInterval(function(){
    if(time>=0){
    console.log(time)
    time = time - 1}
},1000)
 10
 9
 8
 7
 6
 5
 4
 3
 2
 1
 0
// 조건문을 활용하여 타임이 0이상일때만 작동하게 만들었다. 그리고 time = time-1이라는 식을 작성함으로써 1초씩 줄어들게 만들었다.

let time = 180
setInterval(function(){
    if(time>=0){
    const minutes = Math.floor(time / 60) 
    const seconds = time % 60
    console.log(minutes + ":" + seconds)
    time = time - 1
    }
},1000)

 3:0
 2:59
 2:58
 2:57
 2:56
 2:55
 2:54

 // 3분부터 1초씩 줄어드는 코드이다.

 Math.floor(179/60) //분을 구하는 연산자
 3
179 % 60 // %는 나머지를 구해주는 연산자이다.
 59