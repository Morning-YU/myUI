<template>
  <div class="block">
    <div class="datepicker">
      <input
        class="input"
        placeholder=" 请选择日期"
        v-model="dateValue"
        @click="openPanel"
      />
      <div class="allPanel" v-show="panelState">
        <!-- 面板顶部，箭头 年份 月份 -->
        <div class="topbar">
          <!-- 双箭头：倒退或前进一年，如果在年面板，则后退12年 -->
          <!-- 单箭头：倒退或前进一个月-->
          <span @click="leftBig">&lt;&lt;</span>
          <span @click="left">&lt;</span>
          <span class="year" @click="panelType = 'year'">{{ tmpYear }}年</span>
          <span class="month" @click="panelType = 'month'">{{
            monthList[tmpMonth].label
          }}</span>
          <span @click="right">&gt;</span>
          <span @click="rightBig">&gt;&gt;</span>
        </div>
        <!-- 年面板 -->
        <div class="yearPanel" v-show="panelType === 'year'">
          <ul class="yearList">
            <li
              v-for="(item, index) in yearList"
              :key="index"
              @click="selectYear(item)"
            >
              <!-- 选择的年份与遍历到的年份相同，则添加selected样式 -->
              <span :class="{ selected: item === tmpYear }">{{ item }}</span>
            </li>
          </ul>
        </div>
        <!-- 月面板 -->
        <div class="yearPanel" v-show="panelType === 'month'">
          <ul class="yearList">
            <li
              v-for="(item, index) in monthList"
              :key="index"
              @click="selectMonth(item)"
            >
              <span :class="{ selected: item.value === tmpMonth }">
                {{ item.label }}</span
              >
            </li>
          </ul>
        </div>
        <!-- 日期面板 -->
        <div class="datePanel" v-show="panelType === 'date'">
          <!-- 顶部的星期 -->
          <span class="weekday" v-for="(item, index) in weekList" :key="index">
            {{ item.label }}
          </span>
          <ul class="dateList">
            <!-- 当天的日期有蓝色边框 -->
            <!-- 选中的日期背景是蓝色 -->
            <!-- 不是当前月的日期是灰色，通过dataList中的 preMonth、curMonth、nextMonth来标记 -->
            <li
              v-for="(item, index) in dateList"
              :key="index"
              :class="{
                today:
                  date === item.value &&
                  month === tmpMonth &&
                  year === tmpYear &&
                  item.curMonth,
                selected:
                  selectDay.getFullYear() === tmpYear &&
                  selectDay.getMonth() === tmpMonth &&
                  nowValue === item.value,
                preMonth: item.preMonth,
                nextMonth: item.nextMonth,
              }"
              @click="selectDate(item)"
            >
              {{ item.value }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dateValue: "",
      panelState: false,
      // panel有三种类型，分别是 年、月、日
      panelType: "date",
      tmpYear: new Date().getFullYear(),
      tmpMonth: new Date().getMonth(),
      // 记录当天的年月日
      date: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      // monthList对象数组
      monthList: [
        { label: "一月", value: 0 },
        { label: "二月", value: 1 },
        { label: "三月", value: 2 },
        { label: "四月", value: 3 },
        { label: "五月", value: 4 },
        { label: "六月", value: 5 },
        { label: "七月", value: 6 },
        { label: "八月", value: 7 },
        { label: "九月", value: 8 },
        { label: "十月", value: 9 },
        { label: "十一月", value: 10 },
        { label: "十二月", value: 11 },
      ],
      weekList: [
        { label: "日", value: 0 },
        { label: "一", value: 1 },
        { label: "二", value: 2 },
        { label: "三", value: 3 },
        { label: "四", value: 4 },
        { label: "五", value: 5 },
        { label: "六", value: 6 },
      ],
      // 当前选中的日期
      nowValue: 0,
      selectDay: new Date(),
    };
  },
  computed: {
    // 当tmpYear改变，生成当前年份开始往后12个年份
    yearList() {
      return Array.from({ length: 12 }, (value, index) => this.tmpYear + index);
    },
    // 生成日期面板的数字，6*7，(1 7 7 7 7 1)占六行，(7 7 7 7)占四行，余下14个
    dateList() {
      // 获取当月的总天数
      let curMonthLength = new Date(
        this.tmpYear,
        this.tmpMonth + 1,
        0
      ).getDate();
      // 将当前月的日期装入datelist
      let dateList = Array.from({ length: curMonthLength }, (val, index) => {
        return {
          curMonth: true,
          value: index + 1,
        };
      });
      // 获取当月1号的星期
      let startDay = new Date(this.tmpYear, this.tmpMonth, 1).getDay();
      // 获取上个月的总天数
      let preMonthLength = new Date(this.tmpYear, this.tmpMonth, 0).getDate();
      // 填充1号之前的日期
      for (let i = 0, len = startDay; i < len; i++) {
        dateList = [{ preMonth: true, value: preMonthLength - i }].concat(
          dateList
        );
      }
      // 填充后边剩余的日期
      for (let i = 1; i < 15; i++) {
        dateList[dateList.length] = { nextMonth: true, value: i };
      }
      return dateList;
    },
  },
  methods: {
    // 打开面板
    openPanel() {
      this.panelState = !this.panelState;
      this.panelType = "date";
    },
    // 年面板：后退十二年；月面板：一年
    leftBig() {
      if (this.panelType === "year") {
        this.tmpYear -= 12;
      } else {
        this.tmpYear--;
      }
    },
    // 年面板：后退一年；月面板：后退一个月
    left() {
      if (this.panelType === "year") {
        this.tmpYear--;
      } else {
        // 从一月往后退，则年份需要-1，且月份变成12月
        if (this.tmpMonth === 0) {
          this.tmpYear--;
          this.tmpMonth = 11;
        } else {
          this.tmpMonth--;
        }
      }
    },
    right() {
      if (this.panelType === "year") {
        this.tmpYear++;
      } else {
        if (this.tmpMonth === 11) {
          this.tmpYear++;
          this.tmpMonth = 0;
        } else {
          this.tmpMonth++;
        }
      }
    },
    rightBig() {
      if (this.panelType === "year") {
        this.tmpYear += 12;
      } else {
        this.tmpYear++;
      }
    },
    // 选择年份后，跳转至月面板，且记录新的年份值
    selectYear(item) {
      this.tmpYear = item;
      this.panelType = "month";
    },
    selectMonth(item) {
      this.tmpMonth = item.value;
      this.panelType = "date";
    },
    // 选择好日期后，面板消失
    selectDate(item) {
      this.panelState = !this.panelState;
      // 选中的日期
      this.nowValue = item.value;
      // 如果选择的不是当前月的日期
      if (item.preMonth) this.tmpMonth--;
      if (item.nextMonth) this.tmpMonth++;
      // 选中的日期，转化为日期格式
      this.selectDay = new Date(this.tmpYear, this.tmpMonth, this.nowValue);
      // 设置显示的日期格式为 2022-06-21
      this.dateValue =
        this.selectDay.getFullYear() +
        "-" +
        (this.selectDay.getMonth() + 1) +
        "-" +
        this.selectDay.getDate();
      // 触发定义的事件
      this.$emit("input", this.selectDay);
    },
  },
};
</script>
<style lang="" scoped>
/* 总宽210px，每个宽度为30px，总共7个  */
.datepicker {
  width: 210px;
  text-align: center;
}
.allPanel {
  width: 210px;
  box-shadow: 0 0 8px #ccc;
  border-radius: 3px;
  background: white;
  margin-top: 5px;
  padding: 5px;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
/* 顶部条 */
.topbar {
  padding: 6px 0;
}
.topbar span {
  display: inline-block;
  cursor: pointer;
  margin: 0 2px;
}
.topbar span:hover {
  color: #409eff;
}
input {
  height: 20px;
}
/* 年面板 月面板*/
.yearList {
  height: 200px;
  width: 210px;
}

/* 宽度为70px，一行三个 */
.yearList li {
  display: inline-block;
  width: 70px;
  height: 50px;
  line-height: 50px;
  border-radius: 10px;
  cursor: pointer;
}
.yearList span {
  display: inline-block;
  line-height: 16px;
  padding: 8px;
}
.yearList span:hover {
  background: #e1f0fe;
}
/* 选中的年份背景为蓝色 */
.yearList .selected {
  background: #409eff;
  border-radius: 4px;
}
.weekday {
  display: inline-block;
  font-size: 13px;
  width: 30px;
  margin-top: 10px;
  color: black;
  text-align: center;
}

.dateList {
  width: 210px;
  height: 180px;
  overflow: hidden;
  margin-top: 4px;
}
.dateList li {
  display: inline-block;
  width: 28px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  cursor: pointer;
  color: black;
  border: 1px solid white;
  border-radius: 4px;
}
.dateList li:hover {
  background: #e1f0fe;
}

.dateList .today {
  border: 1px solid #409eff;
}
.dateList .selected {
  background: #409eff;
  border: 1px solid #409eff;
}
.dateList .preMonth,
.dateList .nextMonth {
  color: #c5c8ce;
  border: 1px solid white;
  background: transparent;
}
</style>