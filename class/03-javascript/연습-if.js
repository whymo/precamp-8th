if(1+1 === 2){
    console.log("정답입니다!")
    } else {
    console.log("오답입니다!")
    } //쉬프트 누르고 엔터를 쳐야한다.
    //VM482:2 정답입니다!
    //undefined
    if(1+1 === 3){
    console.log("정답입니다!")
    } else {
    console.log("오답입니다!")
    } 
    //VM501:4 오답입니다!
    //undefined
    if(1+1 === 3){
    console.log("정답입니다!")
    } // 이 경우는 틀렸을 경우 아무것도 실행되지 않는다.
    //undefined
    let age = 13
    //undefined
    //age
    //13
    if (age >= 20) {
    console.log("성인입니다!")
    } else if (age >=8) {
    console.log("학생입니다!")
    } else {
    console.log("어린이입니다!")
    }
    //VM1251:4 학생입니다!
    //undefined
    age = 6
    6
    if (age >= 20) {
    console.log("성인입니다!")
    } else if (age >=8) {
    console.log("학생입니다!")
    } else {
    console.log("어린이입니다!")
    }
    //VM1286:6 어린이입니다!
    //undefined
    age = 6 // age를 6으로 바꿈
    6
    const profile = {
    name : "철수",
    age : 7,
    school : "다람쥐초등학교"
    } // 쉼표를 꼭 써야한다.
    //undefined
    profile.age
    //7
    profile.name
    //'철수'
    profile.school
    //'다람쥐초등학교'