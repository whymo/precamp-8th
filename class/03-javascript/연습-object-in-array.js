const profiles = [
    { name: "철수", age: 8, school: "다람쥐초등학교" },
    { name: "영희", age: 11, school: "공룡초등학교" },
    { name: "훈이", age: 13, school: "거북이초등학교" }    
] // 쉬프트 누르고 엔터쳐야한다 // 쉼표 꼭 붙여야 한다.

// undefined
profiles.length // 프로파일즈 배열 안에 객체가 총 몇 개가 있는지 알려주는 것
// 3
profiles[1] // 프로파일즈 배열 안에 있는 객체 중 2번째를 알려주는 것
// {name: '영희', age: 11, school: '공룡초등학교'}
profiles[1].school // 프로파일즈 배열에 있는 두번째 요소 중 스쿨요소를 찾아낸다.
// '공룡초등학교'