<template>
  <div class="login">
    <div class="computer"></div>
    <div class="content">
      <h1>登 陆</h1>
      <el-form :model="formData" :rules="rules" ref="ruleFormRef" size="large">
        <el-form-item prop="userName">
          <el-input v-model="formData.userName"></el-input>
        </el-form-item>
        <el-form-item prop="passWord">
          <el-input
            @keyup.enter="handleLogin"
            v-model="formData.passWord"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="handleLogin" type="success" style="width: 100%">
            登陆
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import { ElMessage, FormInstance, FormRules } from "element-plus/es";
import { reactive, ref } from "vue";

const ruleFormRef = ref<FormInstance>();

const formData = ref({
  userName: "",
  passWord: "",
});

const rules = reactive<FormRules>({
  userName: [{ required: true, message: "请输入账号", trigger: "blur" }],
  passWord: [{ required: true, message: "请输入密码", trigger: "blur" }],
});

type UserList = {
  userName: string;
  passWord: string;
};

const userList = ref<UserList[]>([
  { userName: "admin", passWord: "123456" },
  { userName: "guochang", passWord: "123456" },
]);

const handleLogin = async () => {
  const valid = await ruleFormRef.value?.validate();
  if (valid) {
    const userValid = userList.value.some((item) => {
      const { userName, passWord } = formData.value;
      return item.userName == userName && item.passWord == passWord;
    });
    if (userValid) {
      window.localStorage.setItem("userInfo", JSON.stringify(formData.value));
      router.replace("home");
      ElMessage.success("登陆成功");
    } else {
      ElMessage.error("用户名或密码错误");
    }
  }
};
</script>

<style scoped lang="less">
.login {
  height: 100vh;
  background-image: url("@/assets/bg.svg");
  background-size: cover;
  background-position: right;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  .computer {
    width: 400px;
    height: 207px;
    background-image: url("@/assets/computer.svg");
    background-size: 100%;
  }
  .content {
    width: 400px;
    color: #fff;
  }
}
</style>
