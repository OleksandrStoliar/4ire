
/* 
- Написать функцию filterBy(), которая будет принимать в себя 2 аргумента. Первый аргумент - массив, который будет содержать в себе любые данные, второй аргумент - тип данных.

- Функция должна вернуть новый массив, который будет содержать в себе все данные, которые были переданы в аргумент, за исключением тех, тип которых был передан вторым аргументом. То есть, если передать массив ['hello', 'world', 23, '23', null], и вторым аргументом передать 'string', то функция вернет массив [23, null]. */



let arr = [[], '', false, 'hello', 23, '23', null, {}, String, 9999, 1n, Symbol(), undefined, function(){}, {id: 1, name: "Josh"}];

function filterBy(array, filter) {
    return array.filter(item => typeof item != filter);
}

// Test // Test // Test // Test //
function testFilterBy() {
    const dataTypes = ['string', 'number', 'symbol', 'function', 'bigint', 'boolean', 'undefined', 'object'];

    for (let i = 0; i < dataTypes.length; i++) {
        console.log('↓ without data type ' + dataTypes[i] + ' ↓');
        console.log(filterBy(arr, dataTypes[i]));
    }
}
testFilterBy();