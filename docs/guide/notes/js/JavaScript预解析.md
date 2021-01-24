## 1.易错：
```javascript
f1();
console.log(c); 
console.log(b); 
console.log(a); 
function f1() {
	//相当于var a = 9; b = 9; c = 9; b和c直接赋值,没有声明，当全局变量看
	//易混淆：集体声明 var a = 9, b = 9, c = 9;
	var a = b = c = 9; 
	console.log(a); 
	console.log(b); 
	console.log(c);
}
```
执行顺序：

```javascript
function f1() {
	var a;
	a = b = c = 9; 
	console.log(a); 
	console.log(b); 
	console.log(c);
}
f1();
console.log(c); 
console.log(b); 
console.log(a); 
```
执行结果：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201207132440136.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1MjE4NTIz,size_16,color_FFFFFF,t_70#pic_center)
## 2.比较
### 2.1情况一
```javascript
fn();
function fn() {
	console.log('打印');
}
```
执行顺序：
```javascript
function fn() {
	console.log('打印');
}
fn();
```
执行结果：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201207133239765.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1MjE4NTIz,size_16,color_FFFFFF,t_70#pic_center)


### 2.2情况二
```javascript
fn();
var fn = function() {
	console.log('想不到吧');
}
```
执行顺序：

```javascript
var fn;
fn();
var fn = function() {
	console.log('想不到吧');
}
```
执行结果：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201207133249985.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1MjE4NTIz,size_16,color_FFFFFF,t_70#pic_center)
