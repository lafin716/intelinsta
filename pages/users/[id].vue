<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import { User, UserStatus } from "@/types/user/user.type";

const router = useRouter();
const { id } = useRoute().params;

// TODO getAccount(id);

const goUserList = () => {
  router.push("/users");
};

const activeName = ref("first");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};

const userData: User = {
  id: "ej21ioej21eo",
  username: "lafin.co",
  avatar: "/image/avatar.jpg",
  email: "lafin716@gmail.com",
  bio: "안녕하세요 레이핀입니다.",
  status: UserStatus.INACTIVE,
  follower: 100,
  followerUsers: [],
  following: 100,
  followingUsers: [],
  post: 100,
};
</script>
<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <el-card>
        <div class="text-start">
          <el-button
            circle
            size="medium"
            class="border-none"
            @click="goUserList"
          >
            <Icon name="material-symbols:arrow-back-ios-new"></Icon>
          </el-button>
        </div>
        <div
          class="grid-content ep-bg-purple flex flex-col justify-center items-center"
        >
          <el-image
            class="avatar-size rounded-full mb-2"
            :src="userData.avatar"
            lazy
          />
          <span class="text-xl">{{ userData.username }}</span>
          <LabelUserStatus class="my-2" :status="userData.status" />

          <div class="flex flex-row">
            <dl class="power-summary">
              <dt>게시물</dt>
              <dd>439</dd>
              <dt>팔로워</dt>
              <dd>10.2k</dd>
              <dt>팔로잉</dt>
              <dd>100</dd>
            </dl>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="16">
      <el-card>
        <div class="grid-content ep-bg-purple">
          <el-tabs
            v-model="activeName"
            class="demo-tabs text-center"
            @tab-click="handleClick"
          >
            <el-tab-pane label="기본정보" name="first">
              <!--계정 상태-->

              <el-form label-position="top">
                <el-form-item label="계정명">
                  <el-input v-model="userData.username" disabled></el-input>
                </el-form-item>
                <el-form-item label="이메일">
                  <el-input v-model="userData.email" disabled></el-input>
                </el-form-item>
                <el-form-item label="소개">
                  <el-input
                    type="textarea"
                    v-model="userData.bio"
                    disabled
                  ></el-input>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="Config" name="second">Config</el-tab-pane>
            <el-tab-pane label="Role" name="third">Role</el-tab-pane>
            <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
          </el-tabs>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped>
.avatar-size {
  width: 100px;
  height: 100px;
}

.power-summary {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 12px 10px;
}

.power-summary * {
  font-size: 1rem;
  margin: 0 3px;
  color: #626262;
}

.demo-tabs > .el-tabs__item {
  padding: 0 20px;
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
