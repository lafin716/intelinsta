<script setup lang="ts">
const props = defineProps({
  error: Object,
});

const messages = {
  "400": "잘못된 요청입니다.",
  "401": "로그인이 필요합니다.",
  "403": "접근 권한이 없습니다.",
  "404": "페이지를 찾을 수 없습니다.",
  "500": "서버에 오류가 발생했습니다.",
};
const handleError = () => clearError({ redirect: "/" });
</script>
<template>
  <div class="w-3/5 h-full flex flex-col align-center justify-center m-auto">
    <h2 class="text-9xl text-gray-700 text-center mb-3">
      {{ props.error.statusCode }}
    </h2>
    <h3 class="text-2xl text-gray-700 text-center mb-3">
      {{ messages[props.error.statusCode] }}
    </h3>
    <el-button
      class="inline w-1/5 m-auto my-0"
      type="primary"
      size="large"
      @click="handleError"
      >메인으로 이동</el-button
    >
  </div>
</template>
