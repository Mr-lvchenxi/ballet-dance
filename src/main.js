import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./scss/base.scss";

import { Form } from "vant";
import { Field } from "vant";
import { Button } from "vant";
import { DatetimePicker } from "vant";
import { Popup } from "vant";
import { NoticeBar } from "vant";
import { Toast } from "vant";
import { Dialog } from "vant";

Vue.use(Dialog);
Vue.use(NoticeBar);
Vue.use(Popup);
Vue.use(DatetimePicker);
Vue.use(Button);
Vue.use(Form);
Vue.use(Field);
Vue.use(Toast);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
