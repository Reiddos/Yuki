# Dynamics

## 1. 公式推导

公式太多，使用手写<a href="/Yuki/cs/RL/dynamics.pdf#page=1" target="_blank" > 点击此处查看 </a>

## 2. 封闭形式的动力学方程

1. 使用牛顿—欧拉推导最后可以整理得到封闭形式。
2. 力矩可以整理得到**状态空间形式**：

$$
\tau=M(q)\ddot{q}+C(q,\dot{q})\dot{q}+G(q)
$$

​		第一项为惯性项，与$\ddot{\theta}$ 有关，是克服质量和惯性需要的力矩，前边的$M(q)$为质量矩阵，与关节角度有关，因为角度不同时转动惯量会改变。第二项为速度耦合项和$\dot{\theta}$ 和位置相关，已经在运动时，由于关节之间耦合、离心效应、科氏效应产生的力矩。最后一项为重力项，只与位置$\theta$相关，表示克服重力需要的力矩。

3. 离基座越近通常需要的力矩越大。关节之间相互耦合，一个关节的力矩会影响其他的关节。

4. $M(q)$是对称的，因为相连的关节之间相互耦合。质量阵还是正定的，如果是负的，那么运动会产生能量，所以一定是正的。

5. **形位空间形式**，讲中间的速度耦合项更细分拆成了科氏项和离心项。
   $$
   \tau=M(\Theta)\ddot{\Theta}+B(\Theta)[\dot{\Theta}\dot{\Theta}]+C(\Theta)[\dot{\Theta}^2]+G(\Theta)
   $$

6. 

## 3. 拉格朗日方程

使用牛顿欧拉法是对每一个杆进行细致的运动和力的推导，而拉格朗日法是从**能量**的观点，直接求出关节力矩。**牛顿欧拉**主要关注如下两个方程：
$$
F=ma\\
N=I\dot{\omega}+\omega\times I\omega
$$
而**拉格朗日法**关注的是：
$$
L=K-U
$$
其中，L是在这里定义的函数，K是机器人动能的和，U是势能之和。
$$
k_i=\frac{1}{2}m_iv_{C_i}^Tv_{C_i}+\frac{1}{2}\omega_i^TI_i\omega_i
$$
从公式可以看出，动能由两个部分组成。前一项的是质心平动动能，后一项是转动动能。带入雅可比矩阵：
$$
k_\mathrm{trans}=\frac{1}{2}m(J_v\dot{q})^T(J_v\dot{q})\\
k_{\mathrm{trans}}=\frac{1}{2}m\dot{q}^TJ_v^TJ_v\dot{q}
$$
可以把中间的$m\dot{q}^TJ_v^TJ_v$ 看成是某一个矩阵，同理转动也可以使用雅可比矩阵得到：
$$
k_{\mathrm{rot}}=\frac{1}{2}\dot{q}^TJ_\omega^TIJ_\omega\dot{q}
$$
把平动和转动的动能求和：
$$
k_i=\frac{1}{2}\dot{q}^T\left(m_iJ_{v_i}^TJ_{v_i}+J_{\omega_i}^TI_iJ_{\omega_i}\right)\dot{q}
$$
把中间的括号中的内容就是前边说过的质量矩阵，它与角度有关，这一项就是第i个杆的质量矩阵。然后对系统整体的动能求和：
$$
k=\frac{1}{2}\dot{q}^T\left(\sum_{i=1}^nM_i(q)\right)\dot{q}
$$
中间就是整体机械臂的广义质量矩阵， 从这里也可以再一次看出质量矩阵是正定的，因为动能不能是负的。

后面的势能本质上就是所有连杆质心重力势能的和。接着，使用构造的方程：
$$
\frac{d}{dt}\left(\frac{\partial L}{\partial\dot{q}_i}\right)-\frac{\partial L}{\partial q_i}=\tau_i\\
\frac{d}{dt}\frac{\partial k}{\partial\dot{\Theta}}-\frac{\partial k}{\partial\Theta}+\frac{\partial u}{\partial\Theta}=\tau
$$
这里相当于**动量的变化率**减去系统随位置变化产生的**势能变化** = 外部必须提供的关节力/力矩。在双杆中，电机的力矩等于让杆加速的惯性力矩加上抵抗重力的力矩。

## 4. 非刚体的影响

前边的所有动力学方程没有包括所有在机械臂上的力，比如说摩擦力。

1. **粘性摩擦力**：摩擦力矩和关节运动速度成正比：$\tau_{friction}=\upsilon\dot{\theta}$

2. **库伦摩擦力**：$\tau_{friction}=c\operatorname{sgn}(\dot{\theta})$ 速度等于0时C 的值为1，而速度不为零时C小于1，叫做动摩擦系数。

3. 把这些摩擦力模型带入到动力学方程中，可以得到更完整的动力学公式：
   $$
   \tau=M(\Theta)\ddot{\Theta}+V(\Theta,\dot{\Theta})+G(\Theta)+F(\Theta,\dot{\Theta})
   $$