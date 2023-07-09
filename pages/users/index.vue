<script setup lang="ts">
import AddAccount from "~/components/dialogs/AddAccount.vue";
import LabelUserStatus from "~/components/label/UserStatus.vue";
import { User, UserStatus } from "~/types/user/user.type";
import { ref, computed } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { userData } from "@/data/user.data";
import DateUtil from "@/utils/date.util";

const router = useRouter();
const dialogVisible = ref(false);
const handleDialogClose = () => {
  dialogVisible.value = false;
};

const handleDetail = (index: number, row: User) => {
  console.log(index, row);
  router.push(`/users/${row.id}`);
};

const handleDelete = (index: number, row: User) => {
  ElMessage({
    message: "삭제되었습니다.",
    type: "success",
  });
};
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
    <el-table :data="userData" style="width: 100%">
      <el-table-column label="번호" width="70" align="center">
        <template #default="scope">
          <span>{{ scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="아이디" width="150" align="center">
        <template #default="scope">
          <div class="flex items-center justify-center">
            <el-image
              class="avatar-size rounded-full"
              :src="scope.row.avatar"
              lazy
            />
            <NuxtLink
              class="cursor-pointer"
              @click="handleDetail(scope.$index, scope.row)"
            >
              <span style="margin-left: 10px">
                {{ scope.row.username }}
              </span>
            </NuxtLink>
            <el-icon class="ms-2"
              ><Icon name="skill-icons:instagram"></Icon
            ></el-icon>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="상태" width="100" align="center">
        <template #default="scope">
          <LabelUserStatus :status="scope.row.status" />
        </template>
      </el-table-column>
      <el-table-column label="팔로워" width="100" align="center">
        <template #default="scope">
          <span>{{ scope.row.follower }}</span>
        </template>
      </el-table-column>
      <el-table-column label="팔로잉" width="100" align="center">
        <template #default="scope">
          <span>{{ scope.row.following }}</span>
        </template>
      </el-table-column>
      <el-table-column label="게시물 수" width="100" align="center">
        <template #default="scope">
          <span>{{ scope.row.post }}</span>
        </template>
      </el-table-column>

      <el-table-column label="등록날짜" width="150" align="center">
        <template #default="scope">
          <div class="flex items-center justify-center">
            <span style="margin-left: 10px">{{
              DateUtil.format(scope.row.createdAt, "yyyy-MM-DD")
            }}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="수정날짜" width="150" align="center">
        <template #default="scope">
          <div class="flex items-center justify-center">
            <span style="margin-left: 10px">{{
              DateUtil.format(scope.row.createdAt, "yyyy-MM-DD")
            }}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="삭제날짜" width="150" align="center">
        <template #default="scope">
          <div class="flex items-center justify-center">
            <span style="margin-left: 10px">{{
              DateUtil.format(scope.row.createdAt, "yyyy-MM-DD")
            }}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="밴 날짜" width="150" align="center">
        <template #default="scope">
          <div class="flex items-center justify-center">
            <span style="margin-left: 10px">{{
              DateUtil.format(scope.row.createdAt, "yyyy-MM-DD")
            }}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="관리" align="center">
        <template #default="scope">
          <el-button size="small" @click="handleDetail(scope.$index, scope.row)"
            >관리</el-button
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

<style scoped>
.avatar-size {
  width: 30px;
  height: 30px;
}
</style>
