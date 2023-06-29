<script setup lang="ts">
import { computed } from "vue";
import { statusMap } from "~/types/post/post.type";

const props = defineProps({
  type: String,
});

const statusMap = {
  immediate: {
    type: "warning",
    icon: "material-symbols:rocket-launch-outline",
    label: "즉시",
  },
  scheduled: {
    type: "success",
    icon: "gridicons:scheduled",
    label: "예약",
  },
};

const type = computed(() => {
  return statusMap[props.type || "immediate"].type;
});

const icon = computed(() => {
  return statusMap[props.type || "immediate"].icon;
});

const label = computed(() => {
  return statusMap[props.type || "immediate"].label;
});
</script>
<template>
  <el-tag :type="type" disable-transitions>
    <Icon :name="icon" class="me-1"></Icon>
    <span>{{ label }}</span>
  </el-tag>
</template>
