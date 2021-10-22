const fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" }
] // fruits 이라는 배열안에 10개의 객체를 삽입하였다.
// undefined
fruits // 프루츠 배열안에 무엇이 있는지 보여주는 것
// (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]0: {number: 1, title: '레드향'}1: {number: 2, title: '샤인머스켓'}2: {number: 3, title: '산청딸기'}3: {number: 4, title: '한라봉'}4: {number: 5, title: '사과'}5: {number: 6, title: '애플망고'}6: {number: 7, title: '딸기'}7: {number: 8, title: '천혜향'}8: {number: 9, title: '과일선물세트'}9: {number: 10, title: '귤'}length: 10[[Prototype]]: Array(0)
fruits[0].number + " " + fruits[0].title // 프루츠의 넘버와 공백 그리고 이름을 결합하는 과정이다.
'1 레드향'
fruits[1].number + " " + fruits[1].title
'2 샤인머스켓'
fruits[2].number + " " + fruits[2].title
'3 산청딸기'
fruits[3].number + " " + fruits[3].title
'4 한라봉'
fruits[4].number + " " + fruits[4].title
'5 사과'
fruits[5].number + " " + fruits[5].title
'6 애플망고'
fruits[6].number + " " + fruits[6].title
'7 딸기'
fruits[7].number + " " + fruits[7].title
'8 천혜향'
fruits[8].number + " " + fruits[8].title
'9 과일선물세트'
fruits[9].number + " " + fruits[9].title // 프루츠배열에 있는 10번째 객체의 숫자와 공백과 이름을 결합한다.
'10 귤'