# CPU

## 1. 布尔逻辑和逻辑门

1.基本操作：NOT AND OR。使用三极管可以实现三种逻辑。

2.XOR：![xor](/cs/intro/01.png)

## 2. ALU

Arithmetic and logic unit: arithmetic unit + logic unit

##### **1. Arithmetic unit**: 运算单元

Half adder: 两个输出一个是总和(sum)，另一个是进位(carry)。逻辑电路可以又一个异或门和一个与门轻松实现。第一位的运算可以由半加器实现，而第二位的运算还需要加上前一位的进位，因此需要使用全加器。

Full adder: 输出依然是sum和carry。使用两个半加器和一个与门实现。

8-bit ripple carry adder: 将半加器和全加器级联在一起可以完成8位全加器。当全加器的最后一位有输出时，代表两个数字的加和超过了八位，会导致结果溢出(overflow)造成错误。因此可以级联更多的加法器，让溢出难以发生。

ALU还能做其他的算数运算：加法、带进位的加法、减法、带借位的减法、取反、加减1、pass等运算操作。简单的ALU乘法通过重复加法实现，而复杂一点的ALU会有专门做乘法的算数单元。

##### **2. Logic unit**： 逻辑单元，执行逻辑操作。

ALU基本构造如下图，两个输出，操作码以及三个基本标志位：溢出、零、负。

![alu](/cs/intro/02.png)

# 3. 寄存器

##### 1.寄存器(register)

RAM:random access memory只在有电的情况下能够存储

persistent memory
