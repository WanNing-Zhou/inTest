/**
 * @description 防抖函数
 * @param func 回调
 * @param wait 时间值
 * @returns {(function(): void)|*}
 */

function debounce(func, wait) {
    let timeout; // 定时器返回值
    return function() {
        const _this = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            // 执行一次
            func.apply(_this, args);
        }, wait);
    };
}

// 使用示例
const testDebounce = debounce(function() {
    console.log('防抖函数测试');
}, 300);

// 模拟连续触发事件
for (let i = 0; i < 10; i++) {
    setTimeout(testDebounce, i * 100);
}
