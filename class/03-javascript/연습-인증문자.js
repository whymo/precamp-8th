Math.random()
0.9079233952101868
Math.random()*10000 //math가 아니라 Math이다.
378.1194037031965
Math.random()*1000000
671445.1658190622
Math.floor(Math.random()*1000000)
575789
Math.floor(Math.random()*1000000) // 소숫자리 수 버리는 함수 floor이다.
435149
Math.floor(Math.random()*1000000) // 이 경우의 경우 앞자리 수가 0이라면 5자리 수가 되어버리기에 위험.
669217
String(Math.floor(Math.random()*1000000)) //숫자를 문자로 바꾸는 매직
'278836'
String(Math.floor(Math.random()*1000000)).padStart(6,"0!")
'649869'
String(Math.floor(Math.random()*1000000)).padStart(6,"0!") // 패드스타트는 숫자 앞자리 수가 0이 되어 사라지려고 할때 자리수가 6자리로 만들라고 통제하여 0을 표시하게 해준다.
'980028'
const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0!")
//undefined
// 위의 식은 인증문자 6자리를 나오게 하는 코드이다.
//undefined
//padStart에서 Start의 S는 대문자이다.
//undefined