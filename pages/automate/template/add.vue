<script setup lang="ts">
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { Textable } from "@/types/automate/textable.type";
import { ref, computed } from "vue";
import ListTextableImages from "@/components/dialogs/ListTextableImages.vue";
import type { UploadProps, UploadRawFile, UploadUserFile } from "element-plus";

const limitItemCount = 10;
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
const computedFileList = computed(() => fileList.value);
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

const previewLabelType = (file: UploadUserFile | Textable) => {
  if ("raw" in file) {
    return "warning";
  }

  if ("url" in file) {
    return "success";
  }

  return "warning";
};

const previewLabel = (file: UploadUserFile | Textable) => {
  if ("raw" in file) {
    return "업로드";
  }

  if ("url" in file) {
    return "텍스터블";
  }

  return "업로드";
};

const previewImage = (file: UploadUserFile | Textable | UploadRawFile) => {
  if ("raw" in file) {
    return URL.createObjectURL(file.raw!);
  }

  if ("url" in file) {
    return file.url;
  }

  return URL.createObjectURL(file as File);
};

const uploadedLength = computed(() => {
  return fileList.value.length || 0;
});

const handleDeleteImage = (index: number) => {
  console.log(index);
  fileList.value.splice(index, 1);
};

const handleSelectTextable = (item: Textable) => {
  if (fileList.value.length >= limitItemCount) {
    ElMessage.warning(`이미지는 ${limitItemCount}개까지만 등록할 수 있습니다.`);
    return;
  }

  fileList.value.push(item);
  showTextableDialog.value = false;
};

const handleExceed: UploadProps["onExceed"] = (files) => {
  ElMessage.warning(`이미지는 ${limitItemCount}개까지만 등록할 수 있습니다.`);

  const remainCount = limitItemCount - fileList.value.length;
  if (remainCount > 0) {
    fileList.value.push(...files.slice(0, remainCount));
  }
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
                :limit="limitItemCount"
                :show-file-list="false"
                class="flex items-center me-1"
                :on-exceed="handleExceed"
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
              <p v-if="uploadedLength === 0">이미지를 업로드해주세요.</p>
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
                          <el-tag :type="previewLabelType(item)">{{
                            previewLabel(item)
                          }}</el-tag>
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
        <div>
          <el-carousel
            trigger="click"
            :autoplay="false"
            v-if="fileList && fileList.length > 0"
          >
            <el-carousel-item v-for="item in fileList" :key="item">
              <el-image :src="previewImage(item)" style="width: 100%" />
            </el-carousel-item>
          </el-carousel>
          <div
            v-else
            class="border border-dashed h-48 flex items-center justify-center"
          >
            <span class="text-gray-600">컨텐츠를 업로드해주세요.</span>
          </div>

          <p class="border p-3">
            {{ form.text || "텍스트를 입력하세요." }}
          </p>
        </div>
      </el-card>
    </el-col>
  </el-row>

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
