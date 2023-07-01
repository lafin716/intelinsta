<script setup lang="ts">
import { computed, reactive } from "vue";
import { PostType } from "@/types/post/post.type";
import type { UploadProps, UploadUserFile } from "element-plus";

const props = defineProps({
  show: Boolean,
});

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

const showDialog = computed(() => props.show);
const formLabelWidth = "140px";
const form = reactive({
  type: "",
  scheduled: new Date(),
  content: "",
});

const isSchedule = computed(() => form.type === PostType.SCHEDULED);
const isShowPictureDetail = ref(false);

const fileList = ref<UploadUserFile[]>([
  {
    name: "food.jpeg",
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
  },
  {
    name: "food.jpeg",
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
  },
  {
    name: "food.jpeg",
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
  },
]);

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
  <el-dialog v-model="showDialog" title="게시물등록" append-to-body>
    <el-form :model="form">
      <el-form-item label="업로드방식" :label-width="formLabelWidth">
        <el-select v-model="form.type" placeholder="선택">
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
        />
      </el-form-item>

      <el-form-item label="사진업로드" :label-width="formLabelWidth">
        <el-upload
          v-model:file-list="fileList"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
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
          type="textarea"
          rows="10"
        />
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
