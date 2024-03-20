/**
 * 连续数缩减
 * @param {Array} arr
 * @returns {Array}
 */
function conOut(arr) {
    // 结果
    let result = [];
    // 当前数
    let current = arr[0];
    // 开始位置
    let start = arr[0]

    arr.forEach((num, index) => {
        if (current === '') {
            // 初始值
            current = num;
            start = num
        } else if (num - current === 1) {
            // 连续则赋值
            current = num;
        } else {
            if(current - start > 0){
                // 当连续不为一个
                result.push(start + '~' + arr[index-1]);
            }else{
                // 为一个
                result.push(start)
            }
            // 重新赋值
            current = num;
            start = num
        }
    });

    // 将最后一次计入
    if (current !== '') {
        if(current - start > 0){
            result.push(start + '~' + current);
        }else{
            result.push(start)
        }
    }

    return result;
}

const arr = [1, 2, 3, 5, 7, 8, 10, 11, 13];
console.log(conOut(arr));