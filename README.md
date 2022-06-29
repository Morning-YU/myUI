# myui
> use HTML  CSS  JavaScript  Vue
## 详细说明
### 1. dialog 弹窗 

**核心：**

分成header[标题]、main[内容]、footer[按钮]三部分。

**注意点：**

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



### 3. selector 选择器

### 4. datePicker 时间选择器

### 5. backToTop 回到顶部

**核心：**

监听`scroll`，当距离顶部的距离大于一定数值时，触发回到顶部方法

**注意点：**

1. 绑定事件根据vue生命周期在mounted中

2. 对监听方法使用节流，一定时间内重复触发只执行一次

3. 瞬移到顶部：`document.documentElement.scrollTop`直接置为0

   缓慢移动：使用定时调用，隔一定时间上移一定距离，到达顶部后清除定时器



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
