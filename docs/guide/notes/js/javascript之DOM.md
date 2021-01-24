## 1.总结：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201220201250435.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1MjE4NTIz,size_16,color_FFFFFF,t_70#pic_center)
## 2.重点案例：
### 2.1仿京东显示密码
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201216140024765.png#pic_center)
1. 核心思路： 点击眼睛按钮，把密码框类型改为文本框就可以看见里面的密码
2. 一个按钮两个状态，点击一次，切换为文本框，继续点击一次切换为密码框
3. 算法：利用一个flag变量，来判断flag的值，如果是1 就切换为文本框，flag 设置为0，如果是0 就切换为密码框，flag设置为1
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .box {
            position: relative;
            width: 400px;
            border-bottom: 1px solid #ccc;
            margin: 100px auto;
        }
        
        .box input {
            width: 370px;
            height: 30px;
            border: 0;
            outline: none;
        }
        
        .box img {
            position: absolute;
            top: 2px;
            right: 2px;
            width: 24px;
        }
    </style>
</head>

<body>
    <div class="box">
        <label for="">
            <img src="images/close.png" alt="" id="eye">
        </label>
        <input type="password" name="" id="pwd">
    </div>
    <script>
        // 1. 获取元素
        var eye = document.getElementById('eye');
        var pwd = document.getElementById('pwd');
        // 2. 注册事件 处理程序
        var flag = 0;
        eye.onclick = function() {
            // 点击一次之后， flag 一定要变化
            if (flag == 0) {
                pwd.type = 'text';
                eye.src = 'images/open.png';
                flag = 1; // 赋值操作
            } else {
                pwd.type = 'password';
                eye.src = 'images/close.png';
                flag = 0;
            }

        }
    </script>
</body>

</html>
```
### 2.2循环精灵图背景
1. 首先精灵图图片排列有规律的
2. 核心思路： 利用for循环 修改精灵图片的 背景位置 background-position
3. 剩下的就是考验你的数学功底了
4. 让循环里面的 i 索引号 * 44 就是每个图片的y坐标
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201216140252445.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1MjE4NTIz,size_16,color_FFFFFF,t_70#pic_center)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        li {
            list-style-type: none;
        }
        
        .box {
            width: 250px;
            margin: 100px auto;
        }
        
        .box li {
            float: left;
            width: 24px;
            height: 24px;
            background-color: pink;
            margin: 15px;
            background: url(images/sprite.png) no-repeat;
        }
    </style>
</head>

<body>
    <div class="box">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    <script>
        // 1. 获取元素 所有的小li 
        var lis = document.querySelectorAll('li');
        for (var i = 0; i < lis.length; i++) {
            // 让索引号 乘以 44 就是每个li 的背景y坐标   0 -44px 0 -88px 0 -132px
            var index = i * 44;
            lis[i].style.backgroundPosition = '0 -' + index + 'px';
        }
    </script>
</body>

</html>
```

### 2.3百度换肤
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210123125246953.gif#pic_center)
1. 这个案例练习的是给一组元素注册事件
2. 给4个小图片利用循环注册点击事件
3. 当我们点击了这个图片，让我们页面背景改为当前的图片
4. 核心算法： 把当前图片的src 路径取过来，给 body 做为背景即可
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        body {
            background: url(images/1.jpg) no-repeat center top;
        }
        
        li {
            list-style: none;
        }
        
        .baidu {
            overflow: hidden;
            margin: 100px auto;
            background-color: #fff;
            width: 410px;
            padding-top: 3px;
        }
        
        .baidu li {
            float: left;
            margin: 0 1px;
            cursor: pointer;
        }
        
        .baidu img {
            width: 100px;
        }
    </style>
</head>

<body>
    <ul class="baidu">
        <li><img src="images/1.jpg"></li>
        <li><img src="images/2.jpg"></li>
        <li><img src="images/3.jpg"></li>
        <li><img src="images/4.jpg"></li>
    </ul>
    <script>
        // 1. 获取元素 
        var imgs = document.querySelector('.baidu').querySelectorAll('img');
        // console.log(imgs);
        // 2. 循环注册事件 
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].onclick = function() {
                // this.src 就是我们点击图片的路径   images/2.jpg
                // console.log(this.src);
                // 把这个路径 this.src 给body 就可以了
                document.body.style.backgroundImage = 'url(' + this.src + ')';
            }
        }
    </script>
</body>

</html>
```
### 2.4 表单全选取消全选案例
1.点击上面全选复选框，下面所有的复选框都选中（全选）
2.再次点击全选复选框，下面所有的复选框都不中选（取消全选）
3.如果下面复选框全部选中，上面全选按钮就自动选中
4.如果下面复选框有一个没有选中，上面全选按钮就不选中
5.所有复选框一开始默认都没选中状态
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201220202427662.gif#pic_center)

```html
<!DOCTYPE html>
<html>

<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }
        
        .wrap {
            width: 300px;
            margin: 100px auto 0;
        }
        
        table {
            border-collapse: collapse;
            border-spacing: 0;
            border: 1px solid #c0c0c0;
            width: 300px;
        }
        
        th,
        td {
            border: 1px solid #d0d0d0;
            color: #404060;
            padding: 10px;
        }
        
        th {
            background-color: #09c;
            font: bold 16px "微软雅黑";
            color: #fff;
        }
        
        td {
            font: 14px "微软雅黑";
        }
        
        tbody tr {
            background-color: #f0f0f0;
        }
        
        tbody tr:hover {
            cursor: pointer;
            background-color: #fafafa;
        }
    </style>

</head>

<body>
    <div class="wrap">
        <table>
            <thead>
                <tr>
                    <th>
                        <input type="checkbox" id="j_cbAll" />
                    </th>
                    <th>商品</th>
                    <th>价钱</th>
                </tr>
            </thead>
            <tbody id="j_tb">
                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>iPhone8</td>
                    <td>8000</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>iPad Pro</td>
                    <td>5000</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>iPad Air</td>
                    <td>2000</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>Apple Watch</td>
                    <td>2000</td>
                </tr>

            </tbody>
        </table>
    </div>
    <script>
        // 1. 全选和取消全选做法：  让下面所有复选框的checked属性（选中状态） 跟随 全选按钮即可
        // 获取元素
        var j_cbAll = document.getElementById('j_cbAll'); // 全选按钮
        var j_tbs = document.getElementById('j_tb').getElementsByTagName('input'); // 下面所有的复选框
        // 注册事件
        j_cbAll.onclick = function() {
                // this.checked 它可以得到当前复选框的选中状态如果是true 就是选中，如果是false 就是未选中
                console.log(this.checked);
                for (var i = 0; i < j_tbs.length; i++) {
                    j_tbs[i].checked = this.checked;
                }
            }
            // 2. 下面复选框需要全部选中， 上面全选才能选中做法： 给下面所有复选框绑定点击事件，每次点击，都要循环查看下面所有的复选框是否有没选中的，如果有一个没选中的， 上面全选就不选中。
        for (var i = 0; i < j_tbs.length; i++) {
            j_tbs[i].onclick = function() {
                // flag 控制全选按钮是否选中
                var flag = true;
                // 每次点击下面的复选框都要循环检查者4个小按钮是否全被选中
                for (var i = 0; i < j_tbs.length; i++) {
                    if (!j_tbs[i].checked) {
                        flag = false;
                        break; // 退出for循环 这样可以提高执行效率 因为只要有一个没有选中，剩下的就无需循环判断了
                    }
                }
                j_cbAll.checked = flag;
            }
        }
    </script>
</body>

</html>
```
### 2.5tab栏切换
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201220202700264.gif#pic_center)
1. Tab栏切换有2个大的模块
2. 上的模块选项卡，点击某一个，当前这一个底色会是红色，其余不变（排他思想） 修改类名的方式
3. 下面的模块内容，会跟随上面的选项卡变化。所以下面模块变化写到点击事件里面。
4. 规律：下面的模块显示内容和上面的选项卡一一对应，相匹配。
5. 核心思路： 给上面的tab_list 里面的所有小li 添加自定义属性，属性值从0开始编号。
6. 当我们点击tab_list 里面的某个小li，让tab_con 里面对应序号的 内容显示，其余隐藏（排他思想）

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        li {
            list-style-type: none;
        }
        
        .tab {
            width: 978px;
            margin: 100px auto;
        }
        
        .tab_list {
            height: 39px;
            border: 1px solid #ccc;
            background-color: #f1f1f1;
        }
        
        .tab_list li {
            float: left;
            height: 39px;
            line-height: 39px;
            padding: 0 20px;
            text-align: center;
            cursor: pointer;
        }
        
        .tab_list .current {
            background-color: #c81623;
            color: #fff;
        }
        
        .item_info {
            padding: 20px 0 0 20px;
        }
        
        .item {
            display: none;
        }
    </style>
</head>

<body>
    <div class="tab">
        <div class="tab_list">
            <ul>
                <li class="current">商品介绍</li>
                <li>规格与包装</li>
                <li>售后保障</li>
                <li>商品评价（50000）</li>
                <li>手机社区</li>
            </ul>
        </div>
        <div class="tab_con">
            <div class="item" style="display: block;">
                商品介绍模块内容
            </div>
            <div class="item">
                规格与包装模块内容
            </div>
            <div class="item">
                售后保障模块内容
            </div>
            <div class="item">
                商品评价（50000）模块内容
            </div>
            <div class="item">
                手机社区模块内容
            </div>

        </div>
    </div>
    <script>
        // 获取元素
        var tab_list = document.querySelector('.tab_list');
        var lis = tab_list.querySelectorAll('li');
        var items = document.querySelectorAll('.item');
        // for循环绑定点击事件
        for (var i = 0; i < lis.length; i++) {
            // 开始给5个小li 设置索引号 
            lis[i].setAttribute('index', i);
            lis[i].onclick = function() {
                // 1. 上的模块选项卡，点击某一个，当前这一个底色会是红色，其余不变（排他思想） 修改类名的方式

                // 干掉所有人 其余的li清除 class 这个类
                for (var i = 0; i < lis.length; i++) {
                    lis[i].className = '';
                }
                // 留下我自己 
                this.className = 'current';
                // 2. 下面的显示内容模块
                var index = this.getAttribute('index');
                console.log(index);
                // 干掉所有人 让其余的item 这些div 隐藏
                for (var i = 0; i < items.length; i++) {
                    items[i].style.display = 'none';
                }
                // 留下我自己 让对应的item 显示出来
                items[index].style.display = 'block';
            }
        }
    </script>
</body>

</html>
```
### 2.6动态生成表格
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201220203110954.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1MjE4NTIz,size_16,color_FFFFFF,t_70#pic_center)
1. 因为里面的学生数据都是动态的，我们需要js 动态生成。 这里我们模拟数据，自己定义好数据。 数据我们采取对象形式存储。
2. 所有的数据都是放到tbody里面的行里面。
3. 因为行很多，我们需要循环创建多个行（对应多少人）
4. 每个行里面又有很多单元格（对应里面的数据），我们还继续使用循环创建多个单元格，并且把数据存入里面（双重for循环）
5. 最后一列单元格是删除，需要单独创建单元格。
6. 最后添加删除操作，单击删除，可以删除当前行。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        table {
            width: 500px;
            margin: 100px auto;
            border-collapse: collapse;
            text-align: center;
        }
        
        td,
        th {
            border: 1px solid #333;
        }
        
        thead tr {
            height: 40px;
            background-color: #ccc;
        }
    </style>
</head>

<body>
    <table cellspacing="0">
        <thead>
            <tr>
                <th>姓名</th>
                <th>科目</th>
                <th>成绩</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
    <script>
        // 1.先去准备好学生的数据
        var datas = [{
            name: '魏璎珞',
            subject: 'JavaScript',
            score: 100
        }, {
            name: '弘历',
            subject: 'JavaScript',
            score: 98
        }, {
            name: '傅恒',
            subject: 'JavaScript',
            score: 99
        }, {
            name: '明玉',
            subject: 'JavaScript',
            score: 88
        }, {
            name: '大猪蹄子',
            subject: 'JavaScript',
            score: 0
        }];
        // 2. 往tbody 里面创建行： 有几个人（通过数组的长度）我们就创建几行
        var tbody = document.querySelector('tbody');
        for (var i = 0; i < datas.length; i++) { // 外面的for循环管行 tr
            // 1. 创建 tr行
            var tr = document.createElement('tr');
            tbody.appendChild(tr);
            // 2. 行里面创建单元格(跟数据有关系的3个单元格) td 单元格的数量取决于每个对象里面的属性个数  for循环遍历对象 datas[i]
            for (var k in datas[i]) { // 里面的for循环管列 td
                // 创建单元格 
                var td = document.createElement('td');
                // 把对象里面的属性值 datas[i][k] 给 td  
                // console.log(datas[i][k]);
                td.innerHTML = datas[i][k];
                tr.appendChild(td);
            }
            // 3. 创建有删除2个字的单元格 
            var td = document.createElement('td');
            td.innerHTML = '<a href="javascript:;">删除 </a>';
            tr.appendChild(td);

        }
        // 4. 删除操作 开始 
        var as = document.querySelectorAll('a');
        for (var i = 0; i < as.length; i++) {
            as[i].onclick = function() {
                // 点击a 删除 当前a 所在的行(链接的爸爸的爸爸)  node.removeChild(child)  
                tbody.removeChild(this.parentNode.parentNode)
            }
        }
        // for(var k in obj) {
        //     k 得到的是属性名
        //     obj[k] 得到是属性值
        // }
    </script>
</body>

</html>
```
### 2.7简单留言板
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201220203823866.gif#pic_center)
* 发布留言
1. 核心思路： 点击按钮之后，就动态创建一个li，添加到ul 里面。
2. 创建li 的同时，把文本域里面的值通过li.innerHTML 赋值给 li
3. 如果想要新的留言后面显示就用 appendChild 如果想要前面显示就用insertBefore
* 删除留言
1. 当我们把文本域里面的值赋值给li 的时候，多添加一个删除的链接
2. 需要把所有的链接获取过来，当我们点击当前的链接的时候，删除当前链接所在的li
3. 阻止链接跳转需要添加 javascript:void(0); 或者 javascript:;

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        body {
            padding: 100px;
        }
        
        textarea {
            width: 200px;
            height: 100px;
            border: 1px solid pink;
            outline: none;
            resize: none;
        }
        
        ul {
            margin-top: 50px;
        }
        
        li {
            width: 300px;
            padding: 5px;
            background-color: rgb(245, 209, 243);
            color: red;
            font-size: 14px;
            margin: 15px 0;
        }
        
        li a {
            float: right;
        }
    </style>
</head>

<body>
    <textarea name="" id=""></textarea>
    <button>发布</button>
    <ul>

    </ul>
    <script>
        // 1. 获取元素
        var btn = document.querySelector('button');
        var text = document.querySelector('textarea');
        var ul = document.querySelector('ul');
        // 2. 注册事件
        btn.onclick = function() {
            if (text.value == '') {
                alert('您没有输入内容');
                return false;
            } else {
                // console.log(text.value);
                // (1) 创建元素
                var li = document.createElement('li');
                // 先有li 才能赋值
                li.innerHTML = text.value + "<a href='javascript:;'>删除</a>";
                // (2) 添加元素
                // ul.appendChild(li);
                ul.insertBefore(li, ul.children[0]);
                // (3) 删除元素 删除的是当前链接的li  它的父亲
                var as = document.querySelectorAll('a');
                for (var i = 0; i < as.length; i++) {
                    as[i].onclick = function() {
                        // node.removeChild(child); 删除的是 li 当前a所在的li  this.parentNode;
                        ul.removeChild(this.parentNode);
                    }
                }
            }
        }
    </script>
</body>

</html>
```

### 2.8快递单号查询
1. 快递单号输入内容时， 上面的大号字体盒子（con）显示(这里面的文字
2. 同时把快递单号里面的值（value）获取过来赋值给 con盒子（innerText）做为内容
3. 如果快递单号里面内容为空，则隐藏大号字体盒子(con)盒子
4. 注意： keydown 和 keypress 在文本框里面的特点： 他们两个事件触发的时候，文字还没有落入文本框中。
5. keyup事件触发的时候， 文字已经落入文本框里面了
6. 当我们失去焦点，就隐藏这个con盒子
7. 当我们获得焦点，并且文本框内容不为空，就显示这个con盒子
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201220205019596.gif#pic_center)

```css
        * {
            margin: 0;
            padding: 0;
        }
        
        .search {
            position: relative;
            width: 178px;
            margin: 100px;
        }
        
        .con {
            display: none;
            position: absolute;
            top: -40px;
            width: 171px;
            border: 1px solid rgba(0, 0, 0, .2);
            box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
            padding: 5px 0;
            font-size: 18px;
            line-height: 20px;
            color: #333;
        }
        
        .con::before {
            content: '';
            width: 0;
            height: 0;
            position: absolute;
            top: 28px;
            left: 18px;
            border: 8px solid #000;
            border-style: solid dashed dashed;
            border-color: #fff transparent transparent;
        }
```

```html
<div class="search">
        <div class="con">123</div>
        <input type="text" placeholder="请输入您的快递单号" class="jd">
    </div>
```

```javascript
   // 快递单号输入内容时， 上面的大号字体盒子（con）显示(这里面的字号更大）
        // 表单检测用户输入： 给表单添加键盘事件
        // 同时把快递单号里面的值（value）获取过来赋值给 con盒子（innerText）做为内容
        // 如果快递单号里面内容为空，则隐藏大号字体盒子(con)盒子
        var con = document.querySelector('.con');
        var jd_input = document.querySelector('.jd');
        jd_input.addEventListener('keyup', function() {
                // console.log('输入内容啦');
                if (this.value == '') {
                    con.style.display = 'none';
                } else {
                    con.style.display = 'block';
                    con.innerText = this.value;
                }
            })
            // 当我们失去焦点，就隐藏这个con盒子
        jd_input.addEventListener('blur', function() {
                con.style.display = 'none';
            })
            // 当我们获得焦点，就显示这个con盒子
        jd_input.addEventListener('focus', function() {
            if (this.value !== '') {
                con.style.display = 'block';
            }
        })
```
### 2.8跟随鼠标的天使
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201220205338454.gif#pic_center)
1. 鼠标不断的移动，使用鼠标移动事件： mousemove
2. 在页面中移动，给document注册事件
3. 图片要移动距离，而且不占位置，我们使用绝对定位即可
4. 核心原理： 每次鼠标移动，我们都会获得最新的鼠标坐标， 把这个x和y坐标做为图片的top和left 值就可以移动图片
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        img {
            position: absolute;
            top: 2px;
        }
    </style>
</head>

<body>
    <img src="images/angel.gif" alt="">
    <script>
        var pic = document.querySelector('img');
        document.addEventListener('mousemove', function(e) {
            // 1. mousemove只要我们鼠标移动1px 就会触发这个事件
            // console.log(1);
            // 2.核心原理： 每次鼠标移动，我们都会获得最新的鼠标坐标， 把这个x和y坐标做为图片的top和left 值就可以移动图片
            var x = e.pageX;
            var y = e.pageY;
            console.log('x坐标是' + x, 'y坐标是' + y);
            //3 . 千万不要忘记给left 和top 添加px 单位
            pic.style.left = x - 50 + 'px';
            pic.style.top = y - 40 + 'px';


        });
    </script>
</body>

</html>
```
