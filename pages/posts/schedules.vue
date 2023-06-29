<script setup lang="ts">
import { ref } from "vue";
import { ScheduleSummary } from "~/types/post/post.type";
import type { CalendarDateType, CalendarInstance } from "element-plus";

const calendar = ref<CalendarInstance>();
const selectDate = (val: CalendarDateType) => {
  if (!calendar.value) return;
  calendar.value.selectDate(val);
};

const scheduleMap: ScheduleSummary = {
  "2023-06-05": {
    posted: 1,
    scheduled: 2,
    failed: 5,
  },
  "2023-06-28": {
    posted: 1,
    scheduled: 2,
    failed: 5,
  },
};
</script>
<template>
  <el-card>
    <el-calendar ref="calendar">
      <template #header="{ date }">
        <span>게시물 예약 현황</span>
        <span>{{ date }}</span>
        <el-button-group>
          <el-button size="small" @click="selectDate('prev-year')">
            작년
          </el-button>
          <el-button size="small" @click="selectDate('prev-month')">
            이전달
          </el-button>
          <el-button size="small" @click="selectDate('today')">오늘</el-button>
          <el-button size="small" @click="selectDate('next-month')">
            다음달
          </el-button>
          <el-button size="small" @click="selectDate('next-year')">
            내년
          </el-button>
        </el-button-group>
      </template>

      <template #date-cell="{ data }">
        <p class="overflow-hidden" :class="data.isSelected ? 'is-selected' : ''">
          <div>{{ data.day.split("-").slice(-1)[0] }}</div>
          <div v-if="scheduleMap[data.day]">
            <el-tag
            v-if="scheduleMap[data.day].posted > 0"
              size="small"
              disable-transitions
              class="me-1 mb-1"
              type="success"
            >
              <span>업로드 완료 {{ scheduleMap[data.day].posted }} 건</span>
            </el-tag>
            <el-tag
            v-if="scheduleMap[data.day].scheduled > 0"
              size="small"
              disable-transitions
              class="me-1 mb-1"
              type="warning"
            >
              <span>예약 {{ scheduleMap[data.day].scheduled }} 건</span>
            </el-tag>
            <el-tag
              v-if="scheduleMap[data.day].failed > 0"
              size="small"
              disable-transitions
              class="me-1 mb-1"
              type="danger"
            >
              <span>실패 {{ scheduleMap[data.day].failed }} 건</span>
            </el-tag>

          </div>
        </p>
      </template>
    </el-calendar>
  </el-card>
</template>

<style scoped>
.el-calendar-table tr {
  height: 120px !important;
}
</style>
