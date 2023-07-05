<script setup lang="ts">
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { Textable } from "@/types/automate/textable.type";
import { ref, computed } from "vue";
import { Plus } from "@element-plus/icons-vue";
import type { UploadProps } from "element-plus";

const imageUrl = ref("");
const router = useRouter();
const goTemplateList = () => {
  router.push("/automate/textable");
};
const saveTemplate = () => {
  ElMessage.success("저장되었습니다.");
  goTemplateList();
};

const handleAvatarSuccess: UploadProps["onSuccess"] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!);
};

const form = ref<Textable>({
  title: "",
  url: "",
  text: "",
  textSize: 50,
  textColor: "#000000",
});

const previewTextStyle = computed(() => {
  return {
    color: form.value.textColor,
    fontSize: `${form.value.textSize}px`,
  };
});
</script>
<template>
  <el-row :gutter="20">
    <el-col :span="16">
      <el-card>
        <template #header>
          <div class="card-header flex justify-between">
            <span class="me-2">텍스터블 이미지 등록</span>
            <div>
              <el-button
                class="button"
                type="default"
                size="default"
                @click="goTemplateList"
              >
                뒤로
              </el-button>
              <el-button
                class="button"
                type="success"
                size="default"
                @click="saveTemplate"
              >
                저장
              </el-button>
            </div>
          </div>
        </template>
        <div class="flex flex-col">
          <el-divider content-position="left">기본정보</el-divider>
          <el-form :model="form" label-width="120px">
            <el-form-item label="템플릿 이름" required>
              <el-input
                size="default"
                class="mb-2"
                placeholder="템플릿 이름을 입력해주세요."
                v-model="form.title"
              ></el-input>
            </el-form-item>

            <el-form-item label="템플릿 이미지" required>
              <el-upload
                class="avatar-uploader"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
              </el-upload>
            </el-form-item>

            <el-form-item label="텍스트 색상" required>
              <el-color-picker v-model="form.textColor" size="large" />
            </el-form-item>

            <el-form-item label="텍스트 크기" required>
              <el-input
                size="default"
                class="mb-2 w-25"
                placeholder="텍스트 크기를 입력해주세요."
                v-model="form.textSize"
              ></el-input>
            </el-form-item>

            <el-divider content-position="left">테스트</el-divider>
            <el-form-item label="템플릿 텍스트">
              <el-input
                size="default"
                class="mb-2"
                placeholder="템플릿에 입력할 텍스트를 입력해주세요."
                v-model="form.text"
                type="textarea"
                rows="5"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card>
        <template #header>
          <div class="card-header flex justify-between">
            <span class="me-2">미리보기</span>
          </div>
        </template>
        <div class="w-full min-h-48">
          <div v-if="imageUrl" class="preview-wrap">
            <div class="preview-background">
              <img :src="imageUrl" class="avatar" />
            </div>
            <div class="preview-foreground">
              <p :style="previewTextStyle">{{ form.text }}</p>
            </div>
          </div>
          <div
            v-else
            class="border border-dashed h-48 flex items-center justify-center"
          >
            <span class="text-gray-600">이미지를 업로드해주세요.</span>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.avatar-uploader {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
