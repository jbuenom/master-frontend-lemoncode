<template>
  <NuxtLink to="/" class="back">⬅️ Volver</NuxtLink>
  <div v-if="member" class="member-detail-card">
    <div>
      <img :src="member?.avatar_url" alt="logo" />
    </div>
    <div class="member-info" v-if="member && !pending">
      <h1 v-if="member.login">{{ member.login }}</h1>
      <p v-if="member.email">📧{{ member.email }}</p>
      <p v-if="member.bio">📖{{ member.bio }}</p>
      <p v-if="org">💼{{ org }}</p>
    </div>
  </div>
  <div class="loading" v-if="pending">Loading...</div>
</template>

<script setup lang="ts">
import { Member } from "types";
import { membersService } from "../services/members";
const route = useRoute();
const id = route.params.login as string;
const state = useMembersStore();
const org = state.filter;

const { data: member, pending } = useAsyncData<Member>(() =>
  membersService.getDetail(id)
);

onUnmounted(() => {
  member.value = null;
});
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
.member-detail-card {
  img {
    width: 150px;
    border-radius: 50%;
    border: 5px solid $primary-color-2;
  }
  border: 2px solid black;
  border-radius: 5px;
  display: flex;
  gap: 20px;
  padding: 1rem;
  background-color: $primary-color-1;
  margin: 1rem 15vw;
}

.loading {
  text-align: center;
  font-weight: bold;
}

.member-info {
  width: 100%;
  color: $primary-color-2;
  p {
    font-weight: bold;
    color: $primary-color-2;
  }
}

.back {
  color: $primary-color-2;
  font-weight: bold;
}
</style>
