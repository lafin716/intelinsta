<script setup lang="ts">
import { computed, reactive } from "vue";
import { PostType } from "@/types/post/post.type";
import type { UploadProps, UploadUserFile } from "element-plus";

const options = [
  {
    value: PostType.IMMEDIATE,
    label: "즉시",
  },
  {
    value: PostType.SCHEDULED,
    label: "예약",
  },
];

const formLabelWidth = "140px";
const form = ref({
  type: PostType.IMMEDIATE,
  scheduled: new Date(),
  content: "",
  fileList: [],
});

const isSchedule = computed(() => form.value.type === PostType.SCHEDULED);
const isShowPictureDetail = ref(false);

const fileList = ref<UploadUserFile[]>([]);
const dialogImageUrl = ref("");
const dialogVisible = ref(false);

const handleRemove: UploadProps["onRemove"] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles);
};

const handlePictureCardPreview: UploadProps["onPreview"] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!;
  dialogVisible.value = true;
};
</script>
<template>
  <el-row :gutter="20">
    <el-col :span="16">
      <el-card>
        <template #header>게시물 등록</template>
        <el-form :model="form">
          <el-form-item label="업로드방식" :label-width="formLabelWidth">
            <el-select v-model="form.type" placeholder="선택" size="default">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>

          <el-form-item
            label="예약시간"
            :label-width="formLabelWidth"
            v-if="isSchedule"
          >
            <el-date-picker
              v-model="form.scheduled"
              type="datetime"
              placeholder="예약시간"
              size="default"
            />
          </el-form-item>

          <el-form-item label="사진업로드" :label-width="formLabelWidth">
            <el-upload
              v-model:file-list="form.fileList"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              :limit="10"
              :multiple="true"
            >
              <el-icon><Plus /></el-icon>
            </el-upload>

            <el-dialog v-model="isShowPictureDetail">
              <img w-full :src="dialogImageUrl" alt="Preview Image" />
            </el-dialog>
          </el-form-item>

          <el-form-item label="설명" :label-width="formLabelWidth">
            <el-input
              v-model="form.content"
              autocomplete="off"
              size="default"
              type="textarea"
              rows="10"
            />
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card>
        <template #header>미리보기</template>
        <div class="w-full">
          <div v-if="fileList && fileList.length > 0" class="preview-wrap">
            <el-carousel trigger="click" height="450px">
              <el-carousel-item
                v-for="item in fileList"
                :key="item"
                class="h-full"
              >
                <img :src="item.url" class="image" />
              </el-carousel-item>
            </el-carousel>
          </div>
          <div
            v-else
            class="border border-dashed h-48 flex items-center justify-center"
          >
            <span>사진을 업로드해주세요.</span>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped>
.preview-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background: rgb(71, 86, 105);
}
</style>
