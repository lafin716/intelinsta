<script setup lang="ts">
import AddAccount from "~/components/dialogs/AddAccount.vue";
import LabelUserStatus from "~/components/label/UserStatus.vue";
import { ref, computed } from "vue";

interface User {
  id: string;
  status?: UserStatus;
  follower: number;
  following: number;
  post: number;
  date: string;
  address: string;
}

enum UserStatus {
  ACTIVE = "active",
  BANNED = "banned",
  NOTVALID = "notvalid",
  INACTIVE = "inactive",
}

const dialogVisible = ref(false);
const handleDialogClose = () => {
  dialogVisible.value = false;
};

const handleEdit = (index: number, row: User) => {
  console.log(index, row);
};
const handleDelete = (index: number, row: User) => {
  console.log(index, row);
};

const tableData: User[] = [
  {
    id: "lafin.co",
    status: UserStatus.INACTIVE,
    follower: 100,
    following: 100,
    post: 100,
    date: "2016-05-03",
    address: "No. 189, Grove St, Los Angeles",
  },
];
</script>
<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header flex justify-between">
        <span>인스타그램 계정 목록</span>
        <el-button
          class="button"
          type="primary"
          text
          @click="dialogVisible = true"
          >새 계정 등록</el-button
        >
      </div>
    </template>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="아이디" width="200">
        <template #default="scope">
          <div class="flex items-center">
            <el-icon><Icon name="skill-icons:instagram"></Icon></el-icon>
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="상태" width="200">
        <template #default="scope">
          <LabelUserStatus :status="scope.row.status" />
        </template>
      </el-table-column>
      <el-table-column label="팔로워" width="200">
        <template #default="scope">
          <span>{{ scope.row.follower }}</span>
        </template>
      </el-table-column>
      <el-table-column label="팔로잉" width="200">
        <template #default="scope">
          <span>{{ scope.row.following }}</span>
        </template>
      </el-table-column>
      <el-table-column label="게시물 수" width="200">
        <template #default="scope">
          <span>{{ scope.row.post }}</span>
        </template>
      </el-table-column>
      <el-table-column label="등록날짜" width="200">
        <template #default="scope">
          <div class="flex items-center">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="관리">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
            >수정</el-button
          >
          <el-popconfirm
            width="220"
            confirm-button-text="삭제"
            cancel-button-text="취소"
            icon-color="#f56c6c"
            title="정말 삭제하시겠습니까?"
            @confirm="handleDelete(scope.$index, scope.row)"
          >
            <template #reference>
              <el-button size="small" type="danger">삭제</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
  <AddAccount :show="dialogVisible" @close="handleDialogClose" />
</template>

<style scoped></style>
