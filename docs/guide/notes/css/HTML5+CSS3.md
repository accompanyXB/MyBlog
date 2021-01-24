##  1.三角形

代码实现：
1. 方法一
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201118204651692.gif#pic_center)
```css
div {

            width: 40px; 

            height: 40px;

            border-top: 10px solid red;

            border-right: 10px solid green;

            border-bottom: 10px solid blue;

            border-left: 10px solid #000; 

}
```
2. 方法二
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201118205133471.gif#pic_center)

```html
<div>
        <p></p>
</div>
```
```css
/* 三角 */
        div {
            position: relative;
            width: 200px;
            height: 50px;
            border: 1px solid #cccccc;
            margin: 100px auto;
        }
        p {
            position: absolute;
            right: 10px;
            width: 10px;
            height: 10px;
            border-right: 1px solid #cccccc;
            border-top: 1px solid #cccccc;
            transform: rotate(130deg);
        }
```
## 2.热点图 
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201124093529561.gif#pic_center)


北京：相对于map放置一个city盒子，city盒子不用给宽高，直接dotted自然撑开，然后在city里面放置dotted(点)盒子，记住dotted**不用给定位**，直接就放进city,撑开了city盒子,波纹pulse盒子使用**绝对定位**,然后其相对撑开后的city盒子处于**水平垂直居中**。
```html
<div class="map">		
		/*北京*/
        <div class="city">
            <div class="dotted"></div>
            <div class="pulse1"></div>
            <div class="pulse2"></div>
            <div class="pulse3"></div> 
        </div>
        <div class="city tb">
            <div class="dotted"></div>
            <div class="pulse1"></div>
            <div class="pulse2"></div>
            <div class="pulse3"></div> 
        </div>
</div>
```

```css
		body {
            background-color: #333;
        }
        .map {
            position: relative;
            width: 747px;
            height: 616px;
            margin: 0 auto;
            background: url(media/map.png) no-repeat;
        }
        .city {
            position: absolute;
            top: 221px;
            right: 198px;
            color: #ffffff;
        }
        .tb {
            top: 500px;
            right: 79px;
        }
        .dotted {
            width: 8px;
            height: 8px;
            background-color: lightseagreen;
            border-radius: 50%;
        }
        .city div[class^="pulse"] {
            /* 保证我们小波纹在父盒子里面水平垂直居中
             放大之后就会中心向四周发散 */
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 8px;
            height: 8px;
            border-radius: 50%;
            box-shadow: 0 0 12px lightseagreen;
            animation: pulse 1.2s linear infinite;
        }
        .city div.pulse2 {
            animation-delay: 0.4s;
        }
        .city div.pulse3 {
            animation-delay: 0.8s;
        }
        @keyframes pulse {
            0% {}
            70% {
            /* transform: scale(5);  我们不要用scale 因为他会让 阴影变大*/
                width: 40px;
                height: 40px;
                opacity: 1;
            }
            100% {
                width: 70px;
                height: 70px;
                opacity: 0;
            }
        }
```

水平垂直居中方法：

```css
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);

```
## 3.奔跑的熊
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201124093953359.gif#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201124094115138.png#pic_center)
1600*100的图片
每张背景为：1600/8 = 200px*100px
给一个200*100的窗口，沿着x负半轴拖动背景图，所以需要steps(8),background向x负半轴拖动，所以100%：-1600px 。
* 熊原地奔跑

```css
div {
            position: absolute;
            bottom: 10px;
            width: 200px;
            height: 100px;
            background: url(media/bear.png) no-repeat;
            /* 我们元素可以添加多个动画， 用逗号分隔 */
            animation: bear .4s steps(8) infinite;
    }
    @keyframes bear {
            0% {
                background-position: 0 0;
            }
            100% {
                background-position: -1600px 0;
            }
        }
    
```

* 熊前进奔跑
在之前的animation改成如下：
```css
/* 我们元素可以添加多个动画， 用逗号分隔 */
animation: bear .4s steps(8) infinite, move 3s forwards;
```

## 4. 3D导航栏
1. /* 保留子元素的立体空间 */
/*不能放在li里面，**只能上一层的父物体**/
 transform-style: preserve-3d;
2. /* 有了透视才有近大远小的感觉 */ 
/* 一会我们需要给box旋转 也需要透视 干脆给li加 里面的子盒子都有透视效果 */
**可以给上多层的父物体**
perspective: 500px;
3. 正面和底部需要使用**绝对定位**，因为开始两面叠在一起，然后更改底部的位置。
4. 
**1.**
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201124091905732.gif#pic_center)

```css
.front {
            background-color: pink;
            z-index: 1;
            transform: translateZ(20px);
        }
.bottom {
            /* 如果均关于xy 有移动和其他样式，必须先移动再其他 */
            transform: translateY(20px) rotateX(-90deg);
            background-color: purple;
        }
```
**2.**
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020112409175015.gif#pic_center)

```css
.front {
            background-color: pink;
            z-index: 1;
            /* transform: translateZ(20px); */
        }
.bottom {
            /* 如果均关于xy 有移动和其他样式，必须先移动再其他 */
            transform: translateY(20px) translateZ(-20px) rotateX(-90deg);
            background-color: purple;
        }
```
**源代码：**

```html
 <ul>
        <li>
            <div class="box">
                <div class="front">Hello</div>
                <div class="bottom">World</div>
            </div>
        </li>
        <li>
            <div class="box">
                <div class="front"></div>
                <div class="bottom"></div>
            </div>
        </li>
</ul>
```

```css
ul {
            margin: 100px;
        }
        li {
            float: left;
            width: 130px;
            height: 40px;
            list-style: none;
            margin-right: 10px;
            /* 有了透视才有近大远小的感觉 */ 
            /* 一会我们需要给box旋转 也需要透视 干脆给li加 里面的子盒子都有透视效果 */
            perspective: 500px;
        }
        .box {
            position: relative;
            width: 100%;
            height: 100%;
            /* 保留子元素的立体空间 */
           /*不能放在li里面，只能上一层的父物体*/
            transform-style: preserve-3d;
            transition: all .5s;
        }
        .box:hover {
            transform: rotateX(90deg);
        }
        .front,
        .bottom { 
            position: absolute; 
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
        .front {
            background-color: pink;
            z-index: 1;
            /* transform: translateZ(20px); */
        }
        .bottom {
            /* 如果均关于xy 有移动和其他样式，必须先移动再其他 */
            transform: translateY(20px) translateZ(-20px) rotateX(-90deg);
            background-color: purple;
        }
```
## 5.旋转木马
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201124093252617.gif#pic_center)

```html
<section>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
</section>
```

```css
body {
            /* 一会section也需要给旋转，也需要透视 */
            perspective: 1000px;
        }
        section {
            position: relative;
            width: 300px;
            height: 200px;
            margin: 200px auto;
            animation: rotate 10s linear infinite;
            /* 子元素开启立体空间 */
            transform-style: preserve-3d;
        }
        @keyframes rotate {
            0% {
                transform: rotateY(0);
            }
            100% {
                transform: rotateY(360deg);
            }
        }
        div {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url(media/dog.jpg) no-repeat;
        }
        div:nth-child(1) {
            transform: translateZ(300px);
        }
        div:nth-child(2) {
            /* 移动没有涉及x，y  先旋转再移动*/
            transform: rotateY(60deg) translateZ(300px);
        }
        div:nth-child(3) {
            /* 移动没有涉及x，y  先旋转再移动*/
            transform: rotateY(120deg) translateZ(300px);
        }
        div:nth-child(4) {
            /* 移动没有涉及x，y  先旋转再移动*/
            transform: rotateY(180deg) translateZ(300px);
        }
        div:nth-child(5) {
            /* 移动没有涉及x，y  先旋转再移动*/
            transform: rotateY(240deg) translateZ(300px);
        }
        div:nth-child(6) {
            /* 移动没有涉及x，y  先旋转再移动*/
            transform: rotateY(300deg) translateZ(300px);
        }
```
