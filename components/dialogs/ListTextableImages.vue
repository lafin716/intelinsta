<script setup lang="ts">
import { textableData } from "@/data/textable.data";
import { Textable } from "@/types/automate/textable.type";

const emit = defineEmits(["upload"]);
const datas = ref<Textable[]>(textableData);
const selectItem = (item: Textable) => {
  emit("upload", item);
};
</script>
<template>
  <el-row>
    <el-col
      :xs="24"
      :sm="12"
      :md="12"
      :lg="6"
      :xl="6"
      v-for="item in datas"
      class="p-2"
    >
      <el-card>
        <template #header>
          <div class="flex justify-between">
            <span>{{ item.title }}</span>
            <div>
              <el-button type="" size="small" @click="selectItem(item)"
                >선택</el-button
              >
            </div>
          </div>
        </template>
        <div class="flex justify-center items-center">
          <img :src="item.url" alt="" />
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped></style>
