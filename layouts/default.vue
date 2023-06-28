<script setup lang="ts">
import LayoutMenu from "~/components/layout/Menu.vue";
</script>
<template>
  <div class="common-layout h-full">
    <el-header class="flex items-center border-solid border-2">
      <NuxtLink to="/"
        ><el-text class="mx-1" size="large"
          ><Icon name="skill-icons:instagram"></Icon> INTELINSTA</el-text
        ></NuxtLink
      >
    </el-header>
    <div class="h-full flex flex-row">
      <LayoutMenu />
      <el-container>
        <el-main><NuxtPage /></el-main>
      </el-container>
    </div>
  </div>
</template>

<style scoped></style>
