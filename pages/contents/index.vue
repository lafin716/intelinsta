<script setup lang="ts">
import AddPost from "@/components/dialogs/AddPost.vue";
import LabelPostType from "@/components/label/PostType.vue";
import LabelPostStatus from "@/components/label/PostStatus.vue";
import { Post, PostType, PostStatus } from "@/types/post/post.type";
import { ref } from "vue";

const isShow = ref<boolean>(false);
const closePopup = () => {
  isShow.value = false;
};

const tableData: Post[] = [
  {
    id: 1,
    uid: "lafin.co",
    type: PostType.IMMEDIATE,
    status: PostStatus.POSTED,
    title: "테스트 게시물",
    content: "테스트 게시물입니다. #인스타 #먹스타",
    pictures: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
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
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
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
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
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
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
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
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    created: "2021-09-01",
    updated: "2021-09-01",
    scheduled: "2021-09-01",
  },
];
</script>
<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header flex justify-between">
        <span>게시물 목록</span>
        <el-button class="button" type="primary" text @click="isShow = true"
          >새 게시물 등록</el-button
        >
      </div>
    </template>
    <el-card class="w-1/4">
      <template #header>
        <span>제목 1</span>
      </template>
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small justify-center" text="2xl">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-card>
  </el-card>
  <AddPost :show="isShow" @close="closePopup" />
</template>
