用两周跑出项目，所以每天仍然保持数学复习，在项目结束时完成数学一轮复习。

周六周日：强化学习数学基础，机器人学导论概念学习

周一周二 DEEP RL 对照issacgym代码

周三 欠驱动机器人

周四 周五 pytorch/python 深度学习

周末继续学习深度学习，然后开始跑issacgym和leggedgym代码

周一 学习AMP DEEPMIMIC

周二PAE

## 1. pytorch

看视频建立直觉，看完手敲代码，使用教材查公式和代码。

学习顺序：

> 2.1 数据操作
> 2.5 自动微分
> 5.6 GPU
>
> 以此来掌握
>
> Tensor = 深度学习里的数组
> shape = 数据的形状
> batch = 一次送进网络的一批数据
> cuda = 放到 GPU
> backward = 自动求导
>
> 4.1 多层感知机
> 4.3 多层感知机简洁实现
> 5.1 层和块
>
> nn.Module：所有神经网络的基本类
> __init__：定义网络层
> forward：定义数据怎么流过网络
> nn.Linear：全连接层
> activation：非线性激活
>
> 对应PPO中的actor和critic
>
> 3.1 线性回归
> 3.3 线性回归简洁实现
> 11.4 SGD
> 11.10 Adam
>
> 独立写完整训练循环

目标：写一个MLP ACTOR,CRITIC,AUTOENCODER,处理动作序列shape，写出完整训练循环

