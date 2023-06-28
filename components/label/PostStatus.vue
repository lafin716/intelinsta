<script setup lang="ts">
import { computed } from "vue";
import { statusMap } from "~/types/post/post.status";

const props = defineProps({
  status: String,
});

const type = computed(() => {
  return statusMap[props.status || "danger"].type;
});

const icon = computed(() => {
  return statusMap[props.status || "danger"].icon;
});

const label = computed(() => {
  return statusMap[props.status || "danger"].label;
});
</script>
<template>
  <el-tag :type="type" disable-transitions>
    <Icon :name="icon" class="me-1"></Icon>
    <span>{{ label }}</span>
  </el-tag>
</template>
