# myui
> use HTML  CSS  JavaScript  Vue
## 详细说明
### 1. dialog 弹窗 

**核心：**

分成header[标题]、main[内容]、footer[按钮]三部分。

**细节：**

1. 弹窗是否展示、弹窗标题：利用props（父传子）
2. 弹窗内容：使用slot插槽
3. 按钮触发的方法：使用$emit（子传父）

**使用：**

```html
<my-dialog 
	:show="show" 
	:title="title" 
	@confirmDialog="confirmDialog" 
    @hideDialog="hideDialog" 
>
弹窗内容
</my-dialog>

methods: {
    confirmDialog() {
      this.show = false;
    },
    hideDialog() {
      this.show = false;
    },
  },
```

### 2. swiper 轮播图

**核心：**

点击底部小圆点跳到指定的图片，点击左右侧的箭头前后移动图片。

**细节：**

1. 使用translate来移动，不会引发重排
2. 鼠标移入时，清空定时器
3. 根据distance的变化来移动图片

### 3. selector 选择器

**核心：**

点击后显示Options Panel，失去焦点后收回。选中panel中的选项时触发父组件的事件并且更新显示的值。

**细节：**

1. 监听selectedName，当selectedName改变时，input中也改变

2. 动态class使用

   如，`:class="['optionsPanel', isShow ? 'show' : 'hidden']"`

3. 小三角绘制

   width和height设置为0，border-left、right设置透明，border-top设置颜色。

### 4. datePicker 时间选择器

**核心：**

设置三种panel类型，分别是年面板、月面板和日期面板，根据不同的类型的展示不同的panel。

生成dateList：

1. 根据当月的日期长度装入dateList，并标记为curMonth

2. 获取当月1号的星期

3. 获取上月的总天数

4. 根据星期填充1号之前的上月日期

5. 填充下月的15个日

   日期面板是6*7，(1 7 7 7 7 1)占六行，(7 7 7 7)占四行，余下14个

**细节：**

1. 回退和前进

   小回退：年面板 -1；月面板 -1 或者遇到临界值特殊处理

   大回退：年面板 year -12；月面板 year -1

2. 选好年后跳到月面板，选好月之后跳到日期面板，选好日期panel消失

### 5. backToTop 回到顶部

**核心：**

监听`scroll`，当距离顶部的距离大于一定数值时，触发回到顶部方法

**细节：**

1. 绑定事件根据vue生命周期在mounted中

2. 对监听方法使用节流，一定时间内重复触发只执行一次

3. 瞬移到顶部：`document.documentElement.scrollTop`直接置为0

   缓慢移动：使用定时调用，隔一定时间上移一定距离，到达顶部后清除定时器

### 6. process进度条

**核心：**

动态绑定style，控制进度条的长度

`v-bind:style="{ width: initWidth + '%' }"`

**细节：**

1. 进度在0-100之间，注意临界的判断

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
