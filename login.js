import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
// const url = "https://vue3-course-api.hexschool.io/v2";
createApp({
  data() {
    return {
      user: {
        username: "", //HTML標籤中使用 v-model(雙向綁定) 會自動更新 username
        password: "",
      },
    };
  },
  methods: {
    login() {
      const api = "https://vue3-course-api.hexschool.io/v2/admin/signin";
      axios
        .post(api, this.user)
        .then((response) => {
          const { token, expired } = response.data;
          // 寫入 cookie token
          // expires 設置有效時間
          document.cookie = `rubyToken=${token};expires=${new Date(
            expired
          )}; path=/`;
          window.location = "products.html"; //跳轉到產品頁面
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
}).mount("#app"); //渲染到畫面上
