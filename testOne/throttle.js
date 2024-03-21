/**
 * @description 节流
 * @param func 回调
 * @param wait 时间值
 * @returns {(function(): void)|*}
 */
function throttle(func, wait) {
    // 上一次触发时间
    let prevTime = 0;
    return function() {
        const _this = this;
        const args = arguments;
        // 当前时间
        const now = new Date().getTime();

        if (now - prevTime > wait) {
            // 执行回回调 改变this指向 传递参数
            func.apply(_this, args);
            prevTime = now;
        }
    };
}

// 使用示例
const testThrottled = throttle(function(index) {
    console.log('节流函数执行');
}, 300);

// 模拟连续触发
for (let i = 0; i < 10; i++) {
    setTimeout(testThrottled, i * 100);
}
