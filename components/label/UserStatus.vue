<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  status: String,
});

const statusMap = {
  active: {
    type: "success",
    icon: "ic:baseline-check",
    label: "활성",
  },
  banned: {
    type: "warning",
    icon: "material-symbols:warning",
    label: "정지",
  },
  notvalid: {
    type: "warning",
    icon: "material-symbols:warning",
    label: "미인증",
  },
  inactive: {
    type: "danger",
    icon: "material-symbols:do-not-disturb-on-outline",
    label: "비활성",
  },
};

const type = computed(() => {
  return statusMap[props.status || "inactive"].type;
});

const icon = computed(() => {
  return statusMap[props.status || "inactive"].icon;
});

const label = computed(() => {
  return statusMap[props.status || "inactive"].label;
});
</script>
<template>
  <el-tag :type="type" disable-transitions>
    <Icon :name="icon" class="me-1"></Icon>
    <span>{{ label }}</span>
  </el-tag>
</template>
