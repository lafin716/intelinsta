<script setup lang="ts">
import { Post, PostType, PostStatus } from "@/types/post/post.type";
import { ref } from "vue";

const isShow = ref<boolean>(false);
const contents: Post[] = [
  {
    id: 1,
    uid: "lafin.co",
    type: PostType.IMMEDIATE,
    status: PostStatus.POSTED,
    title: "테스트 게시물",
    content: "테스트 게시물입니다. #인스타 #먹스타",
    pictures: [
      "/image/template.png",
      "/image/template.png",
      "/image/template.png",
    ],
    created: "2021-09-01",
    updated: "2021-09-01",
    scheduled: "2021-09-01",
  },
  {
    id: 2,
    uid: "lafin.co",
    type: PostType.IMMEDIATE,
    status: PostStatus.FAILED,
    title: "테스트 게시물",
    content: "테스트 게시물입니다. #인스타 #먹스타",
    pictures: [
      "/image/template.png",
      "/image/template.png",
      "/image/template.png",
    ],
    created: "2021-09-01",
    updated: "2021-09-01",
    scheduled: "2021-09-01",
  },
  {
    id: 3,
    uid: "lafin.co",
    type: PostType.IMMEDIATE,
    status: PostStatus.DRAFT,
    title: "테스트 게시물",
    content: "테스트 게시물입니다. #인스타 #먹스타",
    pictures: [
      "/image/template.png",
      "/image/template.png",
      "/image/template.png",
    ],
    created: "2021-09-01",
    updated: "2021-09-01",
    scheduled: "2021-09-01",
  },
  {
    id: 4,
    uid: "lafin.co",
    type: PostType.SCHEDULED,
    status: PostStatus.CANCELED,
    title: "테스트 게시물",
    content: "테스트 게시물입니다. #인스타 #먹스타",
    pictures: [
      "/image/template.png",
      "/image/template.png",
      "/image/template.png",
    ],
    created: "2021-09-01",
    updated: "2021-09-01",
    scheduled: "2021-09-01",
  },
  {
    id: 4,
    uid: "lafin.co",
    type: PostType.SCHEDULED,
    status: PostStatus.SCHEDULED,
    title: "테스트 게시물",
    content: "테스트 게시물입니다. #인스타 #먹스타",
    pictures: [
      "/image/template.png",
      "/image/template.png",
      "/image/template.png",
    ],
    created: "2021-09-01",
    updated: "2021-09-01",
    scheduled: "2021-09-01",
  },
];
</script>
<template>
  <el-card>
    <template #header>
      <div class="card-header flex justify-between">
        <span>템플릿 목록</span>
        <el-button class="button" type="primary" text @click="isShow = true"
          >새 템플릿 등록</el-button
        >
      </div>
    </template>
    <div class="w-full">
      <el-row :gutter="20">
        <el-col :span="6" v-for="item in contents" class="mb-2">
          <el-card>
            <template #header>
              <span>{{ item.title }}</span>
            </template>
            <el-carousel
              trigger="hover"
              indicator-position="none"
              :autoplay="false"
            >
              <el-carousel-item v-for="picture in item.pictures" :key="picture">
                <img :src="picture" class="w-full" />
              </el-carousel-item>
            </el-carousel>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>
