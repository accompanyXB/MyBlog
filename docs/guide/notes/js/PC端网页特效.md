## 1.总结：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201230195246464.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1MjE4NTIz,size_16,color_FFFFFF,t_70#pic_center)
## 2.实例
### 1.拖动的模态框
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201230202132768.gif#pic_center)

要求：
1. 点击弹出层， 会弹出模态框， 并且显示灰色半透明的遮挡层。
2. 点击关闭按钮，可以关闭模态框，并且同时关闭灰色半透明遮挡层。
3. 鼠标放到模态框最上面一行，可以按住鼠标拖拽模态框在页面中移动。
4. 鼠标松开，可以停止拖动模态框移动。

思路：
1. 点击弹出层， 模态框和遮挡层就会显示出来 display:block;
2. 点击关闭按钮，模态框和遮挡层就会隐藏起来 display:none;
3. 在页面中拖拽的原理： 鼠标按下并且移动， 之后松开鼠标
4. 触发事件是鼠标按下 mousedown， 鼠标移动mousemove 鼠标松开 mouseup
5. 拖拽过程: 鼠标移动过程中，获得最新的值赋值给模态框的left和top值， 这样模态框可以跟着鼠标走了
6. 鼠标按下触发的事件源是 最上面一行，就是 id 为 title
7. 鼠标的坐标 减去 鼠标在盒子内的坐标， 才是模态框真正的位置。
8. 鼠标按下，我们要得到鼠标在盒子的坐标。
9. 鼠标移动，就让模态框的坐标 设置为 ： 鼠标坐标 减去盒子坐标即可，注意移动事件写到按下事件里面。
10. 鼠标松开，就停止拖拽，就是可以让鼠标移动事件解除
```html
<!DOCTYPE html>
<html>

<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .login-header {
            width: 100%;
            text-align: center;
            height: 30px;
            font-size: 24px;
            line-height: 30px;
        }
        
        ul,
        li,
        ol,
        dl,
        dt,
        dd,
        div,
        p,
        span,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        a {
            padding: 0px;
            margin: 0px;
        }
        
        .login {
            display: none;
            width: 512px;
            height: 280px;
            position: fixed;
            border: #ebebeb solid 1px;
            left: 50%;
            top: 50%;
            background: #ffffff;
            box-shadow: 0px 0px 20px #ddd;
            z-index: 9999;
            transform: translate(-50%, -50%);
        }
        
        .login-title {
            width: 100%;
            margin: 10px 0px 0px 0px;
            text-align: center;
            line-height: 40px;
            height: 40px;
            font-size: 18px;
            position: relative;
            cursor: move;
        }
        
        .login-input-content {
            margin-top: 20px;
        }
        
        .login-button {
            width: 50%;
            margin: 30px auto 0px auto;
            line-height: 40px;
            font-size: 14px;
            border: #ebebeb 1px solid;
            text-align: center;
        }
        
        .login-bg {
            display: none;
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0px;
            left: 0px;
            background: rgba(0, 0, 0, .3);
        }
        
        a {
            text-decoration: none;
            color: #000000;
        }
        
        .login-button a {
            display: block;
        }
        
        .login-input input.list-input {
            float: left;
            line-height: 35px;
            height: 35px;
            width: 350px;
            border: #ebebeb 1px solid;
            text-indent: 5px;
        }
        
        .login-input {
            overflow: hidden;
            margin: 0px 0px 20px 0px;
        }
        
        .login-input label {
            float: left;
            width: 90px;
            padding-right: 10px;
            text-align: right;
            line-height: 35px;
            height: 35px;
            font-size: 14px;
        }
        
        .login-title span {
            position: absolute;
            font-size: 12px;
            right: -20px;
            top: -30px;
            background: #ffffff;
            border: #ebebeb solid 1px;
            width: 40px;
            height: 40px;
            border-radius: 20px;
        }
    </style>
</head>

<body>
    <div class="login-header"><a id="link" href="javascript:;">点击，弹出登录框</a></div>
    <div id="login" class="login">
        <div id="title" class="login-title">登录会员
            <span><a id="closeBtn" href="javascript:void(0);" class="close-login">关闭</a></span>
        </div>
        <div class="login-input-content">
            <div class="login-input">
                <label>用户名：</label>
                <input type="text" placeholder="请输入用户名" name="info[username]" id="username" class="list-input">
            </div>
            <div class="login-input">
                <label>登录密码：</label>
                <input type="password" placeholder="请输入登录密码" name="info[password]" id="password" class="list-input">
            </div>
        </div>
        <div id="loginBtn" class="login-button"><a href="javascript:void(0);" id="login-button-submit">登录会员</a></div>
    </div>
    <!-- 遮盖层 -->
    <div id="bg" class="login-bg"></div>
    <script>
        // 1. 获取元素
        var login = document.querySelector('.login');
        var mask = document.querySelector('.login-bg');
        var link = document.querySelector('#link');
        var closeBtn = document.querySelector('#closeBtn');
        var title = document.querySelector('#title');
        // 2. 点击弹出层这个链接 link  让mask 和login 显示出来
        link.addEventListener('click', function() {
                mask.style.display = 'block';
                login.style.display = 'block';
            })
            // 3. 点击 closeBtn 就隐藏 mask 和 login 
        closeBtn.addEventListener('click', function() {
                mask.style.display = 'none';
                login.style.display = 'none';
            })
            // 4. 开始拖拽
            // (1) 当我们鼠标按下， 就获得鼠标在盒子内的坐标
        title.addEventListener('mousedown', function(e) {
            var x = e.pageX - login.offsetLeft;
            var y = e.pageY - login.offsetTop;
            // (2) 鼠标移动的时候，把鼠标在页面中的坐标，减去 鼠标在盒子内的坐标就是模态框的left和top值
            // 在页面任意位置都可以移动鼠标，所以绑定事件源为document
            document.addEventListener('mousemove', move)

            function move(e) {
                login.style.left = e.pageX - x + 'px';
                login.style.top = e.pageY - y + 'px';
            }
            // (3) 鼠标弹起，就让鼠标移动事件移除
            document.addEventListener('mouseup', function() {
                document.removeEventListener('mousemove', move);
            })
        })
    </script>
</body>

</html>
```

### 2.放大镜效果
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020123020092565.gif#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201230200941995.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1MjE4NTIz,size_16,color_FFFFFF,t_70#pic_center)

要求：
1. 整个案例可以分为三个功能模块
2. 鼠标经过小图片盒子， 黄色的遮挡层 和 大图片盒子显示，离开隐藏2个盒子功能
3. 黄色的遮挡层跟随鼠标功能。
4. 移动黄色遮挡层，大图片跟随移动功能。

思路：
模块一：
1. 鼠标经过小图片盒子， 黄色的遮挡层 和 大图片盒子显示，离开隐藏2个盒子功能
2. 就是显示与隐藏

模块二：
1. 黄色的遮挡层跟随鼠标功能。
2. 把鼠标坐标给遮挡层不合适。因为遮挡层坐标以父盒子为准。
3. 首先是获得鼠标在盒子的坐标。
4. 之后把数值给遮挡层做为left 和top值。
5. 此时用到鼠标移动事件，但是还是在小图片盒子内移动。
6. 发现，遮挡层位置不对，需要再减去盒子自身高度和宽度的一半。
7. 遮挡层不能超出小图片盒子范围。
8. 如果小于零，就把坐标设置为0
9. 如果大于遮挡层最大的移动距离，就把坐标设置为最大的移动距离
10. 遮挡层的最大移动距离： 小图片盒子宽度 减去 遮挡层盒子宽度

模块三：
大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离

```javascript
window.addEventListener('load', function () {
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    var preview_img = document.querySelector('.preview_img');
    var previewImgWeight = preview_img.offsetWidth;
    var previewImgHeight = preview_img.offsetHeight;
    var bigWeight = big.offsetWidth;
    var bigHeight = big.offsetHeight;
    // 1. 当我们鼠标经过 preview_img 就显示和隐藏 mask 遮挡层 和 big 大盒子
    preview_img.addEventListener('mouseenter', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    })

    preview_img.addEventListener('mouseleave', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    // 2. 鼠标移动的时候，让黄色的盒子跟着鼠标来走
    preview_img.addEventListener('mousemove', function (e) {
        // (1). 先计算出鼠标在盒子内的坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        // (2) 减去盒子高度 300的一半 是 150 就是我们mask 的最终 left 和top值了
        // (3) 我们mask 移动的距离
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        // (4) 如果x 坐标小于了0 就让他停在0 的位置
        // 遮挡层的最大移动距离
        var maskWeightMax = previewImgWeight - mask.offsetWidth;
        var maskHeightMax = previewImgHeight - mask.offsetHeight;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskWeightMax) {
            maskX = maskWeightMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskHeightMax) {
            maskY = maskHeightMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        // 3. 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
        var bigImg = document.querySelector('.bigImg');
        // 大图片最大移动距离
        var bigWeightMax = bigImg.offsetWidth - bigWeight;
        var bigHeightMax = bigImg.offsetHeight - bigHeight;
        // 大图片的移动距离 X Y
        var bigX = maskX * bigWeightMax / maskWeightMax;
        var bigY = maskY * bigHeightMax / maskHeightMax;
        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigY + 'px';
    })

})
```

### 3.仿淘宝固定右侧侧边栏
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201230201429964.gif#pic_center)

要求：
1. 原先侧边栏是绝对定位
2. 当页面滚动到一定位置，侧边栏改为固定定位
3. 页面继续滚动，会让 返回顶部显示出来
思路：
①需要用到页面滚动事件 scroll 因为是页面滚动，所以事件源是 document
②滚动到某个位置，就是判断页面被卷去的上部值。
③页面被卷去的头部：可以通过window.pageYOffset 获得 如果是被卷去的左侧 window.pageXOffset
④注意，元素被卷去的头部是 element.scrollTop , 如果是页面被卷去的头部 则是 window.pageYOffset
⑤其实这个值 可以通过盒子的 offsetTop 可以得到，如果大于等于这个值，就可以让盒子固定定位了

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .slider-bar {
            position: absolute;
            left: 50%;
            top: 300px;
            margin-left: 600px;
            width: 45px;
            height: 130px;
            background-color: pink;
        }

        .w {
            width: 1200px;
            margin: 10px auto;
        }

        .header {
            height: 150px;
            background-color: purple;
        }

        .banner {
            height: 250px;
            background-color: skyblue;
        }

        .main {
            height: 1000px;
            background-color: yellowgreen;
        }

        span {
            display: none;
            position: absolute;
            bottom: 0;
        }
    </style>
</head>

<body>
    <div class="slider-bar">
        <span class="goBack">返回顶部</span>
    </div>
    <div class="header w">头部区域</div>
    <div class="banner w">banner区域</div>
    <div class="main w">主体部分</div>
    <script>
        //1. 获取元素
        var sliderbar = document.querySelector('.slider-bar');
        var banner = document.querySelector('.banner');
        // banner.offestTop 就是被卷去头部的大小 一定要写到滚动的外面
        var bannerTop = banner.offsetTop
        // 当我们侧边栏固定定位之后应该变化的数值
        // 固定定位相对于屏幕的
        var sliderbarTop = sliderbar.offsetTop - bannerTop;
        // 获取main 主体元素
        var main = document.querySelector('.main');
        var goBack = document.querySelector('.goBack');
        var mainTop = main.offsetTop;
        // 2. 页面滚动事件 scroll
        document.addEventListener('scroll', function () {
            // console.log(11);
            // window.pageYOffset 页面被卷去的头部
            // console.log(window.pageYOffset);
            // 3 .当我们页面被卷去的头部大于等于了 172 此时 侧边栏就要改为固定定位
            if (window.pageYOffset >= bannerTop) {
                sliderbar.style.position = 'fixed';
                sliderbar.style.top = sliderbarTop + 'px';
            } else {
                sliderbar.style.position = 'absolute';
                sliderbar.style.top = '300px';
            }
            // 4. 当我们页面滚动到main盒子，就显示 goback模块
            if (window.pageYOffset >= mainTop) {
                goBack.style.display = 'block';
            } else {
                goBack.style.display = 'none';
            }

        })
        // 3. 当我们点击了返回顶部模块，就让窗口滚动的页面的最上方
        goBack.addEventListener('click', function () {
            // 里面的x和y 不跟单位的 直接写数字即可
            // window.scroll(0, 0);
            // 因为是窗口滚动 所以对象是window
            animate(window, 0);
        });
        // 动画函数
        function animate(obj, target, callback) {
            // console.log(callback);  callback = function() {}  调用的时候 callback()

            // 先清除以前的定时器，只保留当前的一个定时器执行
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                // 步长值写到定时器的里面
                // 把我们步长值改为整数 不要出现小数的问题
                // var step = Math.ceil((target - obj.offsetLeft) / 10);
                var step = (target - window.pageYOffset) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                if (window.pageYOffset == target) {
                    // 停止动画 本质是停止定时器
                    clearInterval(obj.timer);
                    // 回调函数写到定时器结束里面
                    // if (callback) {
                    //     // 调用函数
                    //     callback();
                    // }
                    callback && callback();
                }
                // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
                // obj.style.left = window.pageYOffset + step + 'px';
                window.scroll(0, window.pageYOffset + step);
            }, 15);
        }
    </script>
</body>

</html>
```
## 4.轮播图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201230201943313.gif#pic_center)

1.要求：
1. 鼠标经过轮播图模块，左右按钮显示，离开隐藏左右按钮。
2. 点击右侧按钮一次，图片往左播放一张，以此类推， 左侧按钮同理。
3. 图片播放的同时，下面小圆圈模块跟随一起变化。
4. 点击小圆圈，可以播放相应图片。
5. 鼠标不经过轮播图， 轮播图也会自动播放图片。
6. 鼠标经过，轮播图模块， 自动播放停止。

2.思路：
模块一：
1. 因为js较多，我们单独新建js文件夹，再新建js文件， 引入页面中。
2. 此时需要添加 load 事件。
3. 鼠标经过轮播图模块，左右按钮显示，离开隐藏左右按钮。
4. 显示隐藏 display 按钮。

模块二：
1. 动态生成小圆圈
2. 核心思路：小圆圈的个数要跟图片张数一致
3. 所以首先先得到ul里面图片的张数（图片放入li里面，所以就是li的个数）
4. 利用循环动态生成小圆圈（这个小圆圈要放入ol里面）
5. 创建节点 createElement(‘li’)
6. 插入节点 ol. appendChild(li)
7. 第一个小圆圈需要添加 current 类

模块三：
1. 小圆圈的排他思想
2. 点击当前小圆圈，就添加current类
3. 其余的小圆圈就移除这个current类
4. 注意： 我们在刚才生成小圆圈的同时，就可以直接绑定这个点击事件了。

模块四：
1. 点击小圆圈滚动图片
2. 此时用到animate动画函数，将js文件引入（注意，因为index.js 依赖 animate.js 所以，animate.js 要写到 index.js 上面）
3. 使用动画函数的前提，该元素必须有定位
4. 注意是ul 移动 而不是小li
5. 滚动图片的核心算法： 点击某个小圆圈 ， 就让图片滚动 小圆圈的索引号乘以图片的宽度做为ul移动距离
6. 此时需要知道小圆圈的索引号， 我们可以在生成小圆圈的时候，给它设置一个自定义属性，点击的时候获取这个自定义属性即可。

模块五：
1. 点击右侧按钮一次，就让图片滚动一张。
2. 声明一个变量num， 点击一次，自增1， 让这个变量乘以图片宽度，就是 ul 的滚动距离。
3. 图片无缝滚动原理
4. 把ul 第一个li 复制一份，放到ul 的最后面
5. 当图片滚动到克隆的最后一张图片时， 让ul 快速的、不做动画的跳到最左侧： left 为0
6. 同时num 赋值为0，可以从新开始滚动图片了

模块六：
1. 克隆第一张图片
2. 克隆ul 第一个li cloneNode() 加true 深克隆 复制里面的子节点 false 浅克隆
3. 添加到 ul 最后面 appendChild

模块七：
1. 点击右侧按钮， 小圆圈跟随变化
2. 最简单的做法是再声明一个变量circle，每次点击自增1，注意，左侧按钮也需要这个变量，因此要声明全局变量。
3. 但是图片有5张，我们小圆圈只有4个少一个，必须加一个判断条件
4. 如果circle == 4 就 从新复原为 0

模块八：
1. 自动播放功能
2. 添加一个定时器
3. 自动播放轮播图，实际就类似于点击了右侧按钮
4. 此时我们使用手动调用右侧按钮点击事件 arrow_r.click()
5. 鼠标经过focus 就停止定时器
6. 鼠标离开focus 就开启定时器

模块九：
1. 防止轮播图按钮连续点击造成播放过快。
2. 节流阀目的：当上一个函数动画内容执行完毕，再去执行下一个函数动画，让事件无法连续触发。
3. 核心实现思路：利用回调函数，添加一个变量来控制，锁住函数和解锁函数。
4. 开始设置一个变量 var flag = true;
* If(flag) {flag = false; do something} 关闭水龙头
* 利用回调函数 动画执行完毕， flag = true 打开水龙头
```javascript
window.addEventListener('load', function() {
    // 1. 获取元素
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    // 2. 鼠标经过focus 就显示隐藏左右按钮
    focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null; // 清除定时器变量
    });
    focus.addEventListener('mouseleave', function() {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function() {
            //手动调用点击事件
            arrow_r.click();
        }, 2000);
    });
    // 3. 动态生成小圆圈  有几张图片，我就生成几个小圆圈
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    // console.log(ul.children.length);
    for (var i = 0; i < ul.children.length; i++) {
        // 创建一个小li 
        var li = document.createElement('li');
        // 记录当前小圆圈的索引号 通过自定义属性来做 
        li.setAttribute('index', i);
        // 把小li插入到ol 里面
        ol.appendChild(li);
        // 4. 小圆圈的排他思想 我们可以直接在生成小圆圈的同时直接绑定点击事件
        li.addEventListener('click', function() {
            // 干掉所有人 把所有的小li 清除 current 类名
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            // 留下我自己  当前的小li 设置current 类名
            this.className = 'current';
            // 5. 点击小圆圈，移动图片 当然移动的是 ul 
            // ul 的移动距离 小圆圈的索引号 乘以 图片的宽度 注意是负值
            // 当我们点击了某个小li 就拿到当前小li 的索引号
            var index = this.getAttribute('index');
            // 当我们点击了某个小li 就要把这个li 的索引号给 num  
            num = index;
            // 当我们点击了某个小li 就要把这个li 的索引号给 circle  
            circle = index;
            // num = circle = index;
            animate(ul, -index * focusWidth);
        })
    }
    // 把ol里面的第一个小li设置类名为 current
    ol.children[0].className = 'current';
    // 6. 克隆第一张图片(li)放到ul 最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    // 7. 点击右侧按钮， 图片滚动一张
    var num = 0;
    // circle 控制小圆圈的播放
    var circle = 0;
    // flag 节流阀
    var flag = true;
    arrow_r.addEventListener('click', function() {
        if (flag) {
            flag = false; // 关闭节流阀
            // 如果走到了最后复制的一张图片，此时 我们的ul 要快速复原 left 改为 0
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            console.log(num);
            animate(ul, -num * focusWidth, function() {
                flag = true; // 打开节流阀
            });
            // 8. 点击右侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
            circle++;
            // 如果circle == 4 说明走到最后我们克隆的这张图片了 我们就复原
            if (circle == ol.children.length) {
                circle = 0;
            }
            // 调用函数
            circleChange();
        }
    });

    // 9. 左侧按钮做法
    arrow_l.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';

            }
            num--;
            console.log(num);
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            // 点击左侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
            circle--;
            // 如果circle < 0  说明第一张图片，则小圆圈要改为第4个小圆圈（3）
            // if (circle < 0) {
            //     circle = ol.children.length - 1;
            // }
            circle = circle < 0 ? ol.children.length - 1 : circle;
            // 调用函数
            circleChange();
        }
    });

    function circleChange() {
        // 先清除其余小圆圈的current类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 留下当前的小圆圈的current类名
        ol.children[circle].className = 'current';
    }
    // 10. 自动播放轮播图
    var timer = setInterval(function() {
        //手动调用点击事件
        arrow_r.click();
    }, 2000);

})
```
