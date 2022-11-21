//특정 레이블에 해당하는 time~timeEnd 사이의 시간 측정

console.time('전체 시간');
console.log('일반 로그');
console.error('에러 메세지');
console.table([{name: '정우', age:27},{name: '김정', age:28}]);

const obj = {
    outside : {
        inside : {
            key : 'value',
        }
    }
}

console.dir(obj, {colors : false, depth : 2});
console.dir(obj, {colors : true, depth :1});

console.timeEnd('전체 시간');