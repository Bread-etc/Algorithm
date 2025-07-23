# Algorithm

A collection of front-end algorithm exercises, with problems sourced from `LeetCode`

## KeyPoints

### String

- 欧几里得算法求最大公因数:`const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));`
- `双指针`利用`i/j`考虑左右情况进行判断

### Array

- 利用`Math.max()`直接寻找出数组中的最大值,无需遍历
- 利用`贪心算法`获得局部的最优解
- 利用`前缀积`实现从左到右/再从右到左的两次遍历实现相乘