# 苏宁
## 1.body的设置
### 1.1 less + 媒体查询 + rem
max-width: 750px;可以省略
因为给了width:15rem;写死了
```css
body {
	min-width: 320px;
	/*给了width:15rem;写死了*/
    width: 15rem;
    margin: 0 auto;
    line-height:  1.5;
    font-family:  Arial,Helvetica;
    background:  #F2F2F2;
}
```

### 1.2 flexible.js + rem
max-width: 750px;不可以省略
因为flexible是根据当前屏幕调整分为10等份，所以需要限定
```css
body {
  min-width: 320px;
  /* 因为flexible是根据当前屏幕调整分为10等份，所以需要限定 */
  max-width: 750px;
  /* flexible划分为10等份 */
  width: 10rem;
  margin: 0 auto;
  line-height: 1.5;
  font-family: Arial, Helvetica;
  background: #f2f2f2;
}
```

## 2.页面大小设计

```css
.search-content {
  display: flex;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  /* 因为flexible是根据当前屏幕调整分为10等份，所以需要限定 */
  width: 10rem;
  height: 1.173333rem;
  background-color: #FFC001;
}
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201201123646412.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1MjE4NTIz,size_16,color_FFFFFF,t_70#pic_center)
需要加上：

```css
/* 如果我们的屏幕超过了 750px  
那么我们就按照 750设计稿来走 不会让我们页面超过750px */
@media screen and (min-width: 750px) {
  html {
      font-size: 75px!important;
  }
}
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201201123658990.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1MjE4NTIz,size_16,color_FFFFFF,t_70#pic_center)
