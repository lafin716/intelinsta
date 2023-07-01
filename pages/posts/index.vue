<script setup lang="ts">
import LabelPostType from "@/components/label/PostType.vue";
import LabelPostStatus from "@/components/label/PostStatus.vue";
import { Post, PostType, PostStatus } from "@/types/post/post.type";
import { useRouter } from "vue-router";

const router = useRouter();
const goAddPost = () => {
  router.push("/posts/add");
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
        <el-button class="button" type="primary" text @click="goAddPost">
          새 게시물 등록
        </el-button>
      </div>
    </template>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="번호" width="70">
        <template #default="scope">
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column label="제목">
        <template #default="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column label="아이디" width="150">
        <template #default="scope">
          <div class="flex items-center">
            <el-icon><Icon name="skill-icons:instagram"></Icon></el-icon>
            <span style="margin-left: 10px">{{ scope.row.uid }}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="타입" width="100" align="center">
        <template #default="scope">
          <LabelPostType :type="scope.row.type" />
        </template>
      </el-table-column>

      <el-table-column label="상태" width="120" align="center">
        <template #default="scope">
          <LabelPostStatus :status="scope.row.status" />
        </template>
      </el-table-column>

      <el-table-column label="등록날짜" width="150">
        <template #default="scope">
          <div class="flex items-center">
            <span style="margin-left: 10px">{{ scope.row.created }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="예약날짜" width="150">
        <template #default="scope">
          <div class="flex items-center">
            <span style="margin-left: 10px">{{ scope.row.scheduled }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="마지막수정날짜" width="150">
        <template #default="scope">
          <div class="flex items-center">
            <span style="margin-left: 10px">{{ scope.row.updated }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="관리" width="200">
        <template #default="scope">
          <el-button size="small">수정</el-button>
          <el-popconfirm
            width="220"
            confirm-button-text="삭제"
            cancel-button-text="취소"
            icon-color="#f56c6c"
            title="정말 삭제하시겠습니까?"
          >
            <template #reference>
              <el-button size="small" type="danger">삭제</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>
