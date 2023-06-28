export enum PostStatus {
  POSTED = "posted",
  SCHEDULED = "scheduled",
  DRAFT = "draft",
  CANCELED = "canceled",
  FAILED = "failed",
}

export const statusMap = {
  [PostStatus.POSTED]: {
    type: "success",
    icon: "ic:baseline-check",
    label: "업로드 완료",
  },
  [PostStatus.SCHEDULED]: {
    type: "primary",
    icon: "gridicons:scheduled",
    label: "예약됨",
  },
  [PostStatus.DRAFT]: {
    type: "warning",
    icon: "streamline:interface-page-controller-loading-1-progress-loading-load-wait-waiting",
    label: "임시저장",
  },
  [PostStatus.CANCELED]: {
    type: "warning",
    icon: "material-symbols:stop-circle-outline-rounded",
    label: "취소됨",
  },
  [PostStatus.FAILED]: {
    type: "danger",
    icon: "material-symbols:cancel-outline",
    label: "업로드실패",
  },
};
