<script setup lang="ts">
import { computed } from "vue";
import { menu } from "@/data/menu.data";
const route = useRoute();
const currentPath = computed(() => route.path);
const collapse = ref(false);
</script>
<template>
  <el-aside width="250px">
    <el-menu
      class="h-full overflow-y-auto"
      :default-active="currentPath"
      :router="true"
      :collapse="collapse"
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
