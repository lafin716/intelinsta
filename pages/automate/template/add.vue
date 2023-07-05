<script setup lang="ts">
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { Textable } from "@/types/automate/textable.type";
import { ref, computed } from "vue";
import ListTextableImages from "@/components/dialogs/ListTextableImages.vue";
import type { UploadFile, UploadFiles, UploadUserFile } from "element-plus";

const imageUrl = ref("");
const router = useRouter();
const goTemplateList = () => {
  router.push("/automate/template");
};
const saveTemplate = () => {
  ElMessage.success("저장되었습니다.");
  goTemplateList();
};

const showTextableDialog = ref(false);
const fileList = ref<(UploadUserFile | Textable)[]>([]);
const dialogImageUrl = ref("");
const dialogVisible = ref(false);
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

const previewImage = (file: UploadUserFile | Textable) => {
  if ("raw" in file) {
    return URL.createObjectURL(file.raw!);
  }

  return file.url;
};

const handleDeleteImage = (index: number) => {
  console.log(index);
  fileList.value.splice(index, 1);
};

const handleSelectTextable = (item: Textable) => {
  fileList.value.push(item);
  showTextableDialog.value = false;
};

const uploaded = (
  response: any,
  uploadFile: UploadFile,
  uploadFiles: UploadFiles
) => {
  console.log(response, uploadFile, uploadFiles);
};
</script>
<template>
  <el-row :gutter="20">
    <el-col :span="16">
      <el-card>
        <template #header>
          <div class="card-header flex justify-between">
            <span class="me-2">템플릿등록</span>
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
                v-model:file-list="fileList"
                :multiple="true"
                :auto-upload="false"
                @on-success="uploaded"
                :show-file-list="false"
                class="flex items-center me-1"
              >
                <template #trigger>
                  <el-button type="">이미지 추가</el-button>
                </template>
              </el-upload>

              <el-button type="" @click="showTextableDialog = true">
                텍스터블 이미지 추가
              </el-button>
            </el-form-item>

            <el-form-item label="업로드 된 목록" required>
              <draggable v-model="fileList" class="flex flex-wrap">
                <transition-group>
                  <div
                    v-for="(item, index) in fileList"
                    v-bind:key="index"
                    class="p-2"
                  >
                    <el-card>
                      <template #header>
                        <div class="flex justify-between">
                          <Icon
                            name="material-symbols:drag-pan-rounded"
                            class="cursor-move"
                            size="16"
                          />
                          <Icon
                            name="ic:round-cancel"
                            class="cursor-pointer"
                            size="16"
                            @click="handleDeleteImage(index)"
                          />
                        </div>
                      </template>
                      <div class="flex items-center">
                        <el-image
                          :src="previewImage(item)"
                          fit="cover"
                          style="width: 100px; height: 100px"
                        ></el-image>
                      </div>
                    </el-card>
                  </div>
                </transition-group>
              </draggable>
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

  <el-dialog v-model="dialogVisible" :append-to-body="true">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>

  <el-dialog
    v-model="showTextableDialog"
    title="텍스터블 이미지 추가"
    :append-to-body="true"
  >
    <ListTextableImages @upload="handleSelectTextable" />
  </el-dialog>
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
