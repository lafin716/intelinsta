<script setup lang="ts">
import { Template } from "types/content/template.type";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const goAddTemplate = () => {
  router.push("/automate/textable/add");
};

const testText = ref("");

const previewTextStyle = (color, size) => {
  return {
    color: color,
    fontSize: `${size}px`,
  };
};

const templates = ref<Template[]>([
  {
    title: "템플릿 1",
    url: "/image/template.png",
    text: "",
    textSize: 50,
    textColor: "#000000",
  },
  {
    title: "템플릿 1",
    url: "/image/template.png",
    text: "",
    textSize: 50,
    textColor: "#000000",
  },
  {
    title: "템플릿 1",
    url: "/image/template.png",
    text: "",
    textSize: 50,
    textColor: "#000000",
  },
  {
    title: "템플릿 1",
    url: "/image/template.png",
    text: "",
    textSize: 50,
    textColor: "#000000",
  },
  {
    title: "템플릿 1",
    url: "/image/template.png",
    text: "",
    textSize: 50,
    textColor: "#000000",
  },
  {
    title: "템플릿 1",
    url: "/image/template.png",
    text: "",
    textSize: 50,
    textColor: "#000000",
  },
  {
    title: "템플릿 1",
    url: "/image/template.png",
    text: "",
    textSize: 50,
    textColor: "#000000",
  },
  {
    title: "템플릿 1",
    url: "/image/template.png",
    text: "",
    textSize: 50,
    textColor: "#000000",
  },
  {
    title: "템플릿 1",
    url: "/image/template.png",
    text: "",
    textSize: 50,
    textColor: "#000000",
  },
]);
</script>
<template>
  <el-card>
    <template #header>
      <div class="card-header flex justify-between">
        <div>
          <span class="me-2">텍스터블 이미지 목록</span>
        </div>
        <el-button class="button" type="primary" text @click="goAddTemplate">
          새 텍스터블 이미지 등록
        </el-button>
      </div>
    </template>
    <div class="w-full">
      <el-row :gutter="20" class="mb-4 flex items-center justify-start">
        <el-col :span="2"> 테스트 텍스트 </el-col>
        <el-col :span="6">
          <el-input v-model="testText" size="default"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6" v-for="item in templates" class="mb-2">
          <el-card>
            <template #header>
              <span>{{ item.title }}</span>
            </template>
            <div class="text-center">
              <div class="preview-wrap">
                <div class="preview-background">
                  <img :src="item.url" class="w-full" />
                </div>
                <div class="preview-foreground">
                  <p :style="previewTextStyle(item.textColor, item.textSize)">
                    {{ testText }}
                  </p>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<style scoped></style>
