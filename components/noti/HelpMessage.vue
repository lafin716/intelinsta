<script setup lang="ts">
import { ref, unref } from "vue";
import { ClickOutside as vClickOutside } from "element-plus";

const props = defineProps({
  title: String,
  message: String,
  width: Number,
  height: Number,
});

const title = ref(props.title || "도움말");
const buttonRef = ref();
const popoverRef = ref();
const onClickOutside = () => {
  unref(popoverRef).popperRef?.delayHide?.();
};
</script>
<template>
  <el-button
    ref="buttonRef"
    size="small"
    circle
    v-click-outside="onClickOutside"
  >
    <Icon name="material-symbols:question-mark"></Icon>
  </el-button>
  <el-popover
    ref="popoverRef"
    :virtual-ref="buttonRef"
    trigger="click"
    :title="title"
    virtual-triggering
    :width="width"
    :height="height"
    placement="bottom-start"
  >
    <span> {{ message }} </span>
  </el-popover>
</template>

<style scoped></style>
