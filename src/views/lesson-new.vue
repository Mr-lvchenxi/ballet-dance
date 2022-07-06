<template>
  <div class="container">
    <van-notice-bar
      left-icon="volume-o"
      text="请准确填入如下信息～  请准确填入如下信息～  请准确填入如下信息～  请准确填入如下信息～  请准确填入如下信息～"
    />
    <van-form validate-first @failed="onFailed">
      <!-- 通过 pattern 进行正则校验 -->
      <van-field
        v-model="form.lessonName"
        name="validator"
        label="课程名称："
        placeholder="请输入课程名称"
        :rules="lessonNameRules"
      />
      <van-field
        v-model="form.name"
        name="validator"
        label="老师姓名："
        placeholder="请输入老师姓名"
        :rules="nameRules"
      />
      <van-field
        readonly
        clickable
        name="calendar"
        :value="form.dataValue"
        label="日期："
        placeholder="点击选择日期"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          title="选择年月日"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>
      <van-field
        readonly
        clickable
        name="calendar"
        :value="form.startTime"
        label="开始时间："
        placeholder="点击选择开始时间"
        @click="showStartPicker = true"
      />
      <van-popup v-model="showStartPicker" position="bottom">
        <van-datetime-picker
          v-model="currentStartTime"
          type="time"
          title="选择开始时间"
          @confirm="onConfirmStart"
          @cancel="showStartPicker = false"
        />
      </van-popup>
      <van-field
        readonly
        clickable
        name="calendar"
        :value="form.endTime"
        label="结束时间："
        placeholder="点击选择结束时间"
        @click="showEndPicker = true"
      />
      <van-popup v-model="showEndPicker" position="bottom">
        <van-datetime-picker
          v-model="currentEndTime"
          type="time"
          title="选择开始时间"
          @confirm="onConfirmEnd"
          @cancel="showEndPicker = false"
        />
      </van-popup>
    </van-form>
    <div class="bottom-area">
      <van-button type="primary" native-type="submit" @click="handleSubmit"
        >确认</van-button
      >
      <van-button @click="handleCancel">取消</van-button>
    </div>
  </div>
</template>

<script>
import { Toast, Dialog } from "vant";

export default {
  data() {
    return {
      showPicker: false,
      showStartPicker: false,
      showEndPicker: false,
      form: {
        lessonName: "",
        name: "",
        dataValue: "",
        startTime: "",
        endTime: "",
      },
      currentDate: new Date(),
      currentStartTime: "10:00",
      currentEndTime: "10:00",
      lessonNameRules: [
        {
          required: true,
          message: "课程名称不能为空",
          trigger: "onBlur",
        },
      ],
      nameRules: [
        {
          required: true,
          message: "教师名称不能为空",
          trigger: "onBlur",
        },
      ],
    };
  },
  methods: {
    dateFormat(dateData) {
      var date = new Date(dateData);
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      var d = date.getDate();
      d = d < 10 ? "0" + d : d;
      const time = y + "-" + m + "-" + d;
      return time;
    },
    onFailed(errorInfo) {
      console.log("failed", errorInfo);
    },
    onConfirm(time) {
      this.form.dataValue = this.dateFormat(time);
      this.showPicker = false;
    },
    onConfirmStart(time) {
      this.form.startTime = time;
      this.showStartPicker = false;
    },
    onConfirmEnd(time) {
      this.form.endTime = time;
      this.showEndPicker = false;
    },
    handleSubmit() {
      if (
        !this.form.lessonName ||
        !this.form.name ||
        !this.form.dataValue ||
        !this.form.startTime ||
        !this.form.endTime
      )
        return Toast.fail("请输入完整信息");
      Dialog.confirm({
        title: "生成班级",
        message: "是否确认生成班级？",
      })
        .then(() => {
          console.log(1);
        })
        .catch(() => {
          console.log(2);
        });
    },
    handleCancel() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}
.bottom-area {
  box-sizing: border-box;
  padding: 5px 10px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  .van-button {
    width: 48%;
  }
}
</style>
