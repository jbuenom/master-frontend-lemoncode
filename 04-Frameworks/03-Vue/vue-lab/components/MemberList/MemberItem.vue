<template>
  <div class="member-card">
    <img :src="member.avatar_url" alt="Member picture" />
    <p>{{ member.login }}</p>
  </div>
</template>

<script lang="ts" setup>
import { Member } from "@/types";

interface Props {
  member: Member;
}

defineProps<Props>();
</script>
<style lang="scss" scoped>
@import "../../assets/scss/variables";
.member-card {
  img {
    width: 100px;
    border-radius: 50%;
    border: 5px solid $primary-color-2;
  }
  display: flex;
  align-items: center;
  gap: 20px;
  p {
    color: $primary-color-2;
    font-size: 18px;
    font-weight: bold;
  }
  p:hover {
    color: $primary-color-4;
  }
}
</style>
