<script setup lang="ts">
import { computed } from "vue";
const route = useRoute();
const currentPath = computed(() => route.path);
const menu = [
  {
    title: "대시보드",
    icon: "mdi:view-dashboard",
    link: "/",
  },
  {
    title: "계정관리",
    icon: "mdi:account-circle-outline",
    link: "/accounts",
    submenu: [
      {
        title: "계정목록",
        icon: "mdi:format-list-bulleted",
        link: "",
      },
    ],
  },
  {
    title: "게시물관리",
    icon: "material-symbols:camera-rounded",
    link: "/posts",
    submenu: [
      {
        title: "게시물목록",
        icon: "mdi:format-list-bulleted",
        link: "",
      },
      {
        title: "예약현황",
        icon: "material-symbols:calendar-month-outline-sharp",
        link: "/schedules",
      },
    ],
  },
];
</script>
<template>
  <el-aside width="250px">
    <el-menu
      class="h-full overflow-y-auto"
      :default-active="currentPath"
      :router="true"
    >
      <template v-for="(item, index) in menu">
        <el-menu-item v-if="!item.submenu" :index="item.link">
          <el-icon><Icon :name="item.icon" class="me-1"></Icon></el-icon>
          <span>{{ item.title }}</span>
        </el-menu-item>
        <el-sub-menu v-else :index="item.link">
          <template #title>
            <el-icon><Icon :name="item.icon" class="me-1"></Icon></el-icon>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item
            v-for="(subitem, subindex) in item.submenu"
            :index="item.link + subitem.link"
          >
            <el-icon><Icon :name="subitem.icon" class="me-1"></Icon></el-icon>
            <span>{{ subitem.title }}</span>
          </el-menu-item>
        </el-sub-menu>
      </template>
    </el-menu>
  </el-aside>
</template>

<style scoped></style>
