const email = "codecamp@gmail.com" // 이메일에 코드캠프 구글메일을 넣는다.
// undefined
email
'codecamp@gmail.com'
email.includes("@") // @가 포함되어 있는지 확인
true
email.split("@") // @를 기준으로 분리한다.
// (2) ['codecamp', 'gmail.com'] //@를 기준으로 2개로 구분함
email.split("@")[0] // 0번째는[0] 1번째를 말하는 것이다. @를 기준으로 구분한 것 중 첫번째(전자)
'codecamp'
email.split("@")[1] // [1]은 2번째를 말하는 것이다. @를 기준으로 구분한 것 중 2번째(후자)
'gmail.com'
const front = email.split("@")[0] // front라는 배열에 구분한 것 중 전자를 넣는다.
//undefined
const back = email.split("@")[1] // back이라는 배열에 구분한 것 중 후자를 넣는다.
//undefined
front // front라는 배열에 코드캠프가 넣어지게 되었다.
'codecamp'
back // back이라는 배열에 쥐매일이 넣게 되어졌다.
'gmail.com'
front[0] //front라는 배열에 첫번째 상수는 c이다.
'c'
front[1] // front라는 배열에 두번째 상수는 o이다.
'o'
const newFront = [] // 뉴프런트라는 새로운 배열을 만들었다.
//undefined
newFront.push(front[0]) // 뉴프런트라는 배열에 프론트배열에 있는 첫번쩨 상수를 넣어라
1
newFront.push(front[1]) // 뉴프런트라는 배열에 프론트배열에 있는 두번쩨 상수를 넣어라
2
newFront.push(front[2]) // 뉴프런트라는 배열에 프론트배열에 있는 세번쩨 상수를 넣어라
3
newFront.push(front[3]) // 뉴프런트라는 배열에 프론트배열에 있는 네번쩨 상수를 넣어라
4
newFront // 그 결과 뉴프런트 배열에는 프런트 배열에 있는 4개의 상수가 들어가게 되었다.
(4) ['c', 'o', 'd', 'e']
newFront.push("*") // 뉴프런트라는 배열의 마지막에 *를 넣어라
5
newFront.push("*") // 뉴프런트라는 배열의 마지막에 *를 넣어라
6
newFront.push("*") // 뉴프런트라는 배열의 마지막에 *를 넣어라
7
newFront.push("*") // 뉴프런트라는 배열의 마지막에 *를 넣어라
8
newFront // 그결과 아까 들어갔던것에 더해 * 4개가 더 들어가게 되었다.
(8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
newFront.join("")
'code****'
newFront.join("") + "@" + back
'code****@gmail.com'
const result = newFront.join("") + "@" + back
undefined
result
'code****@gmail.com'