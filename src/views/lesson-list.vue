<template>
  <div class="container">
    <div class="home" @click="handleNew">新增</div>
    <div class="list">
      <div class="item-box">
        <div class="left-box">
          <div>名称：北舞四级</div>
          <div>教师：小宇老师</div>
          <div>日期：2022年12月31日</div>
          <div>时间：10:00至12:00</div>
          <div>人数：10人满班</div>
        </div>
        <div class="right-box full-status">已满班</div>
      </div>
      <div class="item-box">
        <div class="left-box">
          <div>名称：北舞四级</div>
          <div>教师：小宇老师</div>
          <div>日期：2022年12月31日</div>
          <div>时间：10:00至12:00</div>
          <div>人数：10人满班</div>
        </div>
        <div class="right-box">
          <div>已预约8人</div>
          <div>剩余 <span>2</span> 人</div>
        </div>
      </div>
      <div class="item-box">
        <div class="left-box">
          <div>名称：北舞四级</div>
          <div>教师：小宇老师</div>
          <div>日期：2022年12月31日</div>
          <div>时间：10:00至12:00</div>
          <div>人数：10人满班</div>
        </div>
        <div class="right-box full-status">已满班</div>
      </div>
      <div class="item-box">
        <div class="left-box">
          <div>名称：北舞四级</div>
          <div>教师：小宇老师</div>
          <div>日期：2022年12月31日</div>
          <div>时间：10:00至12:00</div>
          <div>人数：10人满班</div>
        </div>
        <div class="right-box full-status">已满班</div>
      </div>
      <div class="item-box">
        <div class="left-box">
          <div>名称：北舞四级</div>
          <div>教师：小宇老师</div>
          <div>日期：2022年12月31日</div>
          <div>时间：10:00至12:00</div>
          <div>人数：10人满班</div>
        </div>
        <div class="right-box full-status">已满班</div>
      </div>
      <div class="item-box">
        <div class="left-box">
          <div>名称：北舞四级</div>
          <div>教师：小宇老师</div>
          <div>日期：2022年12月31日</div>
          <div>时间：10:00至12:00</div>
          <div>人数：10人满班</div>
        </div>
        <div class="right-box">
          <div>已预约8人</div>
          <div>剩余 <span>2</span> 人</div>
        </div>
      </div>
      <div class="item-box">
        <div class="left-box">
          <div>名称：北舞四级</div>
          <div>教师：小宇老师</div>
          <div>日期：2022年12月31日</div>
          <div>时间：10:00至12:00</div>
          <div>人数：10人满班</div>
        </div>
        <div class="right-box full-status">已满班</div>
      </div>
      <div class="item-box">
        <div class="left-box">
          <div>名称：北舞四级</div>
          <div>教师：小宇老师</div>
          <div>日期：2022年12月31日</div>
          <div>时间：10:00至12:00</div>
          <div>人数：10人满班</div>
        </div>
        <div class="right-box full-status">已满班</div>
      </div>
      <div class="item-box">
        <div class="left-box">
          <div>名称：北舞四级</div>
          <div>教师：小宇老师</div>
          <div>日期：2022年12月31日</div>
          <div>时间：10:00至12:00</div>
          <div>人数：10人满班</div>
        </div>
        <div class="right-box full-status">已满班</div>
      </div>
      <div class="item-box">
        <div class="left-box">
          <div>名称：北舞四级</div>
          <div>教师：小宇老师</div>
          <div>日期：2022年12月31日</div>
          <div>时间：10:00至12:00</div>
          <div>人数：10人满班</div>
        </div>
        <div class="right-box">
          <div>已预约8人</div>
          <div>剩余 <span>2</span> 人</div>
        </div>
      </div>
      <div class="item-box">
        <div class="left-box">
          <div>名称：北舞四级</div>
          <div>教师：小宇老师</div>
          <div>日期：2022年12月31日</div>
          <div>时间：10:00至12:00</div>
          <div>人数：10人满班</div>
        </div>
        <div class="right-box full-status">已满班</div>
      </div>
      <div class="item-box">
        <div class="left-box">
          <div>名称：北舞四级</div>
          <div>教师：小宇老师</div>
          <div>日期：2022年12月31日</div>
          <div>时间：10:00至12:00</div>
          <div>人数：10人满班</div>
        </div>
        <div class="right-box full-status">已满班</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LessonList",
  methods: {
    handleNew() {
      console.log(12123123);
      this.$router.push({
        path: "/lesson-new",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}
.home {
  font-size: 20px;
  text-align: center;
  line-height: 70px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 70px;
  height: 70px;
  background: #ffffff;
  box-shadow: 0px 8px 24px 0px #d3d3e6;
  border-radius: 50%;
}
.list {
  // display: flex;
  padding: 10px 10px;
  // justify-content: space-between;
  // flex-wrap: wrap;
  .item-box {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    // height: 100px;
    background: #ffffff;
    box-shadow: 0px 8px 24px 0px #d3d3e6;
    border-radius: 26px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    .left-box {
      margin-right: 30px;
    }
    .right-box {
      flex: 1;
      border: 1px solid #ccc;
      border-radius: 10px;
      div {
        text-align: center;
        font-size: 16px;
        padding-top: 20px;
      }
    }
    .full-status {
      font-weight: bold;
      font-size: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: green;
    }
  }
}
</style>
