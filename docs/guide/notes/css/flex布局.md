# 携程案例
## 1.CSS3中行高=高时，文字没有垂直居中
原因：设置box-sizing:border-box后设置的盒子的高，包含padding和border，所以此时想文字垂直居中，需要行高=高-padding-border才行。

## 2.常见flex布局
### 2.1 思路
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201130083849254.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1MjE4NTIz,size_16,color_FFFFFF,t_70#pic_center)
1.设主轴为y轴
2.侧轴设为居中对齐
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201130084315357.png#pic_center)

```html
 <ul class="local-nav">
        <li>
            <a href="#" title="景点·玩乐">
                <span class="local-nav-icon-icon1"></span>
                <span>景点·玩乐</span>
            </a>
        </li>
        <li>
            <a href="#" title="景点·玩乐">
                <span class="local-nav-icon-icon2"></span>
                <span>景点·玩乐</span>
            </a>
        </li>
</ul>
```
```css
.local-nav a {
    display: flex;
    flex-direction: column;
    /* 侧轴居中对齐 因为是单行 */
    align-items: center;
    font-size: 12px;
}
.local-nav li [class^="local-nav-icon"] {
    width: 32px;
    height: 32px;
    background-color: pink;
    margin-top: 8px;
    background: url(../images/localnav_bg.png) no-repeat 0 0;
    background-size: 32px auto;
}
```
### 2.2 主导航栏
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201130084703452.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1MjE4NTIz,size_16,color_FFFFFF,t_70#pic_center)
1.每一列分为三个绿盒子
2.后两个绿盒子各自分为两个蓝盒子
```html
   <nav>
        <div class="nav-common">
            <div class="nav-items">
                <a href="#">海外酒店</a>
            </div>
            <div class="nav-items">
                <a href="#">海外酒店</a>
                <a href="#">特价酒店</a>
            </div>
            <div class="nav-items">
                <a href="#">海外酒店</a>
                <a href="#">特价酒店</a>
            </div>
        </div>
        <div class="nav-common">
            <div class="nav-items">
                <a href="#">海外酒店</a>
            </div>
            <div class="nav-items">
                <a href="#">海外酒店</a>
                <a href="#">特价酒店</a>
            </div>
            <div class="nav-items">
                <a href="#">海外酒店</a>
                <a href="#">特价酒店</a>
            </div>
        </div>
        <div class="nav-common">
            <div class="nav-items">
                <a href="#">海外酒店</a>
            </div>
            <div class="nav-items">
                <a href="#">海外酒店</a>
                <a href="#">特价酒店</a>
            </div>
            <div class="nav-items">
                <a href="#">海外酒店</a>
                <a href="#">特价酒店</a>
            </div>
        </div>

    </nav>
```

```css
nav {
    overflow: hidden;
    border-radius: 8px;
    margin: 0 4px 3px;
}

.nav-common {
    display: flex;
    height: 88px;
    background-color: pink;
}

.nav-common:nth-child(2) {
    margin: 3px 0;
}

.nav-items {
    /* 不冲突的 */
    flex: 1;
    display: flex;
    flex-direction: column;
}

.nav-items a {
    flex: 1;
    text-align: center;
    line-height: 44px;
    color: #fff;
    font-size: 14px;
    /* 文字阴影 */
    text-shadow: 1px 1px rgba(0, 0, 0, .2);
}

.nav-items a:nth-child(1) {
    border-bottom: 1px solid #fff;
}

.nav-items:nth-child(1) a {
	/*第一列的底部多叠加了border-bottom*/
    border-bottom: 0;
    background: url(../images/hotel.png) no-repeat bottom center;
    background-size: 121px auto;
}


/* -n+2就是选择前面两个元素 */

.nav-items:nth-child(-n+2) {
    border-right: 1px solid #fff;
}

.nav-common:nth-child(1) {
    background: -webkit-linear-gradient(left, #FA5A55, #FA994D);
}

.nav-common:nth-child(2) {
    background: -webkit-linear-gradient(left, #4B90ED, #53BCED);
}

.nav-common:nth-child(3) {
    background: -webkit-linear-gradient(left, #34C2A9, #6CD559);
}
```
### 2.3 搜索模块
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201130090515294.gif#pic_center)
左侧盒子伸缩，右侧盒子大小不变

```html
<div class="search-index">
        <div class="search">搜索:目的地/酒店/景点/航班号				  </div>
        <a href="#" class="user">我 的</a>
</div>
```

```css
/* 搜索模块 */

.search-index {
    display: flex;
    /* 固定定位跟父级没有关系 它以屏幕为准 */
    position: fixed;
    top: 0;
    left: 50%;
    /* 固定的盒子应该有宽度 */
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 100%;
    min-width: 320px;
    max-width: 540px;
    height: 44px;
    /* background-color: pink; */
    background-color: #F6F6F6;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}

.search {
    position: relative;
    height: 26px;
    line-height: 24px;
    border: 1px solid #ccc;
    flex: 1;
    font-size: 12px;
    color: #666;
    margin: 7px 10px;
    padding-left: 25px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
}

.search::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    width: 15px;
    height: 15px;
    background: url(../images/sprite.png) no-repeat -59px -279px;
    background-size: 104px auto;
}

.user {
    width: 44px;
    height: 44px;
    /* background-color: purple; */
    font-size: 12px;
    text-align: center;
    color: #2eaae0;
}

.user::before {
    content: "";
    display: block;
    width: 23px;
    height: 23px;
    background: url(../images/sprite.png) no-repeat -59px -194px;
    background-size: 104px auto;
    margin: 4px auto -2px;
}
```
## 3.flex:20%
flex可以设置百分比：里面盒子的%相对于父级来讲。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201130092724321.png#pic_center)

```css
.subnav-entry {
    display: flex;
    border-radius: 8px;
    background-color: #fff;
    margin: 0 4px;
    flex-wrap: wrap;
    padding: 5px 0;
}

.subnav-entry li {
    /* 里面的子盒子可以写 % 相对于父级来说的 */
    flex: 20%;
}
```
## 4.背景图可以使用伪类选择器 ::before或::after
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201130093132993.png#pic_center)

```css
.search::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    width: 15px;
    height: 15px;
    background: url(../images/sprite.png) no-repeat -59px -279px;
    background-size: 104px auto;
}
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020113009314551.png#pic_center)

```css
.user::before {
    content: "";
    display: block;
    width: 23px;
    height: 23px;
    background: url(../images/sprite.png) no-repeat -59px -194px;
    background-size: 104px auto;
    margin: 4px auto -2px;
}
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201130093154420.png#pic_center)

```css
.sales-hd h2::after {
    position: absolute;
    top: 5px;
    left: 8px;
    content: "";
    width: 79px;
    height: 15px;
    background: url(../images/hot.png) no-repeat 0 -20px;
    background-size: 79px auto;
}
```
