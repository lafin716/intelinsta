<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  status: String,
});

const statusMap = {
  posted: {
    type: "success",
    icon: "ic:baseline-check",
    label: "업로드 완료",
  },
  scheduled: {
    type: "primary",
    icon: "gridicons:scheduled",
    label: "예약됨",
  },
  draft: {
    type: "warning",
    icon: "streamline:interface-page-controller-loading-1-progress-loading-load-wait-waiting",
    label: "임시저장",
  },
  canceled: {
    type: "warning",
    icon: "material-symbols:stop-circle-outline-rounded",
    label: "취소됨",
  },
  failed: {
    type: "danger",
    icon: "material-symbols:cancel-outline",
    label: "업로드실패",
  },
};

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
