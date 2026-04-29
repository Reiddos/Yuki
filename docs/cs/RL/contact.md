# CONTACT

## 1. 接触运动学

1. 接触运动学研究的是：两个或多个刚体在**不互相穿透**的前提下，彼此之间可以怎样相对运动。定义一个距离函数$d(q)$， q描述两个物体的位姿。d>0时两个物体分开，d<0两个物体互相穿透，不可接受。d=0时，进行一阶分析，通过$\dot{d}$ 的负号判断有没有分离的趋势，之后再进行二阶分析，以此类推。**只有当d的所有时间导数都为0时，才能保持接触。**一阶公式：$\dot{d} = \frac{\partial d}{\partial q} \dot{q}$

2. 定义接触切平面和接触法向量。接触分为：B：breaking free R: rolling contact S：sliding contact三种模式。

3. 本文主要进行一阶分析，如果两个刚体是单点接触，且**保持接触**，那么就是一种**roll-slide motion**。roll-slide motion是对rolling和sliding的总称呼。保持接触的约束为$d(q)=0$，这是对位置层面的约束，而保持接触的必要条件是$\dot{d} = 0$，这表示在法向方向上没有分离或者穿透的趋势。公式如下：
   $$
   \hat{n}^T (\dot{p}_A - \dot{p}_B) = 0
   $$

​	当该式>=0时，表示不穿透，包括了>0时的B状态，和=0时的保持接触状态。

4. 引入 twist $\mathcal{V}$以及 wrench $\mathcal{F}$代替公式中的法向量和速度，得到新的公式：
   $$
   \mathcal{F}^T (\mathcal{V}_A - \mathcal{V}_B) \geq 0
   $$
   其中$\mathcal{V}$是动力学中的6维速度向量，而 $\mathcal{F}$是力矩和力组成的六维向量：$\mathcal{F} = (p_A \times \hat{n}, \hat{n}) = ([p_A]\hat{n}, \hat{n})$

5. rolling contact满足约束条件：$\dot{P_A}=\dot{P_B}$，接触点没有相对运动。rolling包含真正的滚动和两个物体的接触点相对静止，也可以叫sticking contact。

6. sliding contact的A,B在接触点速度不相同，沿着切平面相对滑动。

7. 多接触问题：物体A和其他m个物体发生n个接触，接触的数量大于物体数量。使用$j(i)$表示，其中j是物体编号，i是接触编号。对每一个接触进行限制，$\mathcal{F}_i^T (\mathcal{V}_A - \mathcal{V}_{j(i)}) \geq 0$，最后会得到一个可行域：
   $$
   V =( { \mathcal{V}_A \mid \mathcal{F}_i^T (\mathcal{V}_A - \mathcal{V}_{j(i)}) \geq 0 \text{ for all } i }
   $$
   V是A所有可运动方向的集合，多个约束把物体A能动的方向切出一个区域，如图所示，阴影区域为速度可行域：

   ![V](/cs/RL/V.png)

8. **redundant constraint**表示该接触没有进一步限制物体的运动。
9. **form closure**表示多个接触完全约束了物体的运动，物体只能保持静止。

## 2. Friction

1. **Coulomb friction，库仑摩擦**：$f_t \leq \mu f_n$，$f_t$ 是切向摩擦力，$f_n$是法向压力。
2. **摩擦锥**：有了摩擦力之后，接触力可以不用完全与法向量方向重合，可以偏离，且切向分量不能超过静摩擦力：$\sqrt{f_x^2 + f_y^2} \leq \mu f_z$

![friction cone](/cs/RL/friction cone.png)

3. 如上图所示，(a)中的锥就是摩擦锥，这是所有力的可行区域，(b)展示的是摩擦角，摩擦系数越大摩擦角越大。力在摩擦锥内部表示接触没有相对运动，在外部表示会产生滑动，而在边界上表示达到了最大静摩擦，马上滑动或者正在滑动。

   为了把接触问题变成线性问题，把圆形摩擦锥近似成多面体，(c)中就是近似成了四棱锥。分为内接锥和外接锥，内接锥会低估可用摩擦锥，如果在抓取时想保证安全可以使用内接锥。

4. **wrench cone**：把接触点的力变成$\mathcal{F}$，加入了力矩的限制。如图所示：

![wrench cone](/cs/RL/wrench cone.png)

图中的(a)是平面摩擦锥，(b)是wrench cone。而多个接触共同作用在同一个物体时，总wrench是把所有的wrench加起来，如(d)中所示。$WC=\left\{\sum_ik_i\mathcal{F}_i\mid\mathcal{F}_i\in WC_i,k_i\geq0\right\}$

4. 接触的运动约束数量和接触wrench自由度数量相等，比如说，B是分开了不限制运动也不传力；S是滑动，只限制法向量，摩擦方向被滑动方向决定，只有大小自由；R的运动限制最多，在三维中是3，平面中是2。

## 3. Constrained Dynamics

1. 将接触对运动的限制写成公式：$A(\theta)\dot{\theta} = 0, \quad A(\theta) \in \mathbb{R}^{k \times n}$ ，表示有k个约束。
2. 约束力和允许的速度方向正交，所以不做功：$\tau_{\text{con}}^T \dot{\theta} = 0$。 把约束力写成：$\tau_{\text{con}} = A^T(\theta)\lambda , \lambda \in \mathbb{R}^k$ 有k个约束，就有k个约束力大小，这个公式是把约束力大小转换成了关节空间中的力矩。
3. $(A^T(\theta)\lambda)^T \dot{\theta} = \lambda^T A(\theta)\dot{\theta}$ 因为$A(\theta)\dot{\theta} = 0$所以可以看出约束力确实不做功。
4. 将约束写入动力学方程，最关键的公式有如下两个：

$$
\tau = M(\theta)\ddot{\theta} + h(\theta, \dot{\theta}) + A^T(\theta)\lambda\\
A(\theta)\dot{\theta} = 0
$$

对速度约束求导，变成加速度约束：$\dot{A}(\theta)\dot{\theta} + A(\theta)\ddot{\theta} = 0$ ，然后把第一个式子带入该式中可以求解λ。λ是为了让机器人满足约束，环境/约束需要施加的力大小，比如说机器人用笔写字，给了关节力矩$\tau$，此时纸面给的反作用力大小就是λ。

把λ回代到加速度公式中，可以得到：
$$
P\tau = P(M\ddot{\theta} + h)\\
P = I - A^\mathrm{T}(AM^{-1}A^\mathrm{T})^{-1}AM^{-1}
$$
P会把关节力投影成做功的力成分。I-P会把力投影到约束方向。逆解运动学时，可以任意加上约束力$A^T(\theta)\lambda$，因为约束力不做功，不会对速度造成任何影响。

同样地，还有加速度投影矩阵：$P_{\ddot{\theta}} = I - M^{-1}A^T(AM^{-1}A^T)^{-1}A$ 可以去掉违反约束的加速度。

## 4. Impedance Control

1. 接触时，有些方向适合控制运动，有些方向适合控制力。比如说机器人写字时，沿着纸面方向：控制笔尖轨迹，垂直纸面方向：控制笔尖压力。

2. **impedance**：外力扰动作用到机器人末端时，机器人运动会产生多少改变，简单地说就是机器人到底硬不硬。高阻抗时，推机器人，机器人不动，所以**理想的运动控制需要高阻抗**。写字时，不希望外力扰动可以轻易地让它偏移。而**理想的力控制需要低阻抗**，控制力时，一点的误差就会产生巨大的接触力，这会损坏机械结构造成危险。比如机械臂压桌子，和拧螺丝时位置产生一点误差就会产生巨大的力。
3. impedance control就是让机器人末端呈现出**质量(mass)，弹簧(spring)，阻尼(damper)**，通过控制器让机器人像一个质量-弹簧-阻尼系统。m大不容易加速，b大运动会被强烈阻尼，k大推开一点就会产生反抗力，所以mkb大对应高阻抗/抗扰动强，反之亦然。经典的方程如下：

$$
m\ddot{x} + b\dot{x} + kx = f
$$

![mkb](/cs/RL/mkb.png)

4. 将公式进行拉普拉斯变换：

$$
(ms^2 + bs + k)X(s) = F(s)\\
Z(s) = \frac{F(s)}{X(s)}\\
Y(s) = Z^{-1}(s) = \frac{X(s)}{F(s)}
$$

Y(s)是**admittance**表示力引起的运动变化。好的运动控制器是high impedance，好的里控制器是high admittance。将系统推广到多维，MBK是虚拟的质量、阻尼、刚度矩阵。

5. impedance control是测量末端运动，产生力，比如说触觉手柄，向前运动，反馈一个向后的力。Admittance control使用力传感器，根据力计算一个期望运动，如拖动示教，给一个力之后主动让开。理论上，impedance-controlled robot 应该只和 admittance-type environment 耦合。admittance-controlled robot 应该只和 impedance-type environment 耦合。