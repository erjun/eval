var myEval = {
    _string2number(str) {
        return Number(str)
    },
    _add(num1, num2) {
        return this._string2number(num1) + this._string2number(num2)
    },
    // 只计算一行的代码
    eval(str) {
        // 数字运算 加减乘除
        let arr = str.split('+')
        let result = this._add(arr[0], arr[1])
        console.log(result)
    }
}