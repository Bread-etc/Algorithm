# Algorithm

A collection of front-end algorithm exercises, with problems sourced from `LeetCode`

## KeyPoints

### String

- 欧几里得算法求最大公因数:`const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));`
- `双指针`利用`i/j`考虑左右情况进行判断
- 可以通过外层`let`设定一个写入的指针`writeIndex`,然后for循环内利用循环条件设定读取指针来实现`readIndex`双指针的形式,实现原地压缩

### Array

- 利用`Math.max()`直接寻找出数组中的最大值,无需遍历
- 利用`贪心算法`获得局部的最优解
- 利用`前缀积`实现从左到右/再从右到左的两次遍历实现相乘
- 利用`fill(0, index)`在指定索引后填充元素`0`