<script setup lang="ts">
import { computed, reactive } from "vue";

const props = defineProps({
  show: Boolean,
});

const formLabelWidth = "140px";
const form = reactive({
  id: "",
  password: "",
});

const dialogVisible = computed(() => props.show);
</script>
<template>
  <el-dialog v-model="dialogVisible" title="계정등록" append-to-body>
    <el-form :model="form">
      <el-form-item label="아이디" :label-width="formLabelWidth">
        <el-input v-model="form.id" autocomplete="off" />
      </el-form-item>
      <el-form-item label="비밀번호" :label-width="formLabelWidth">
        <el-input v-model="form.password" autocomplete="off" type="password" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="$emit('close')">닫기</el-button>
        <el-button type="primary" @click="$emit('close')"> 저장 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped></style>
