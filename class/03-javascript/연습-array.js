const classmates = ["철수", "영희", "훈이"]
// undefined
console.log(classmates)
// VM184:1 (3) ['철수', '영희', '훈이']
// undefined
classmates
// (3) ['철수', '영희', '훈이']
classmates[0]
// '철수'
classmates[1]
// '영희'
classmates.includes("훈이")
// true
classmates.includes("맹구") // includes는 배열안에 함수가 있는지 알려주는 것
// false
classmates.push("맹구")
// 4
classmates
// (4) ['철수', '영희', '훈이', '맹구']
classmates.includes("맹구")
// true
classmates.pop() // pop은 배열의 마지막 인수를 빼버린다.
// '맹구'
classmates
// (3) ['철수', '영희', '훈이']
classmates.length // length는 배열 안의 갯수를 알려주는 함수이다.
// 3
