<script setup lang="ts">
import HelpMessage from "@/components/noti/HelpMessage.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const goAddTemplate = () => {
  router.push("/contents/template/add");
};
</script>
<template>
  <el-card>
    <template #header>
      <div class="card-header flex justify-between">
        <div>
          <span class="me-2">템플릿관리</span>
          <HelpMessage
            :width="300"
            message="템플릿 이미지에 게시물을 등록할 때 마다 사용할 텍스트를 동적으로 입력받아 사용할 수 있습니다."
          />
        </div>
        <el-button class="button" type="primary" text @click="goAddTemplate">
          새 템플릿 등록
        </el-button>
      </div>
    </template>
  </el-card>
</template>

<style scoped></style>
