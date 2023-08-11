<template>
  <div @keyup.enter="handleClick" class="search">
    <input type="text" name="search" v-model="filter" />
    <button type="button" @click="handleClick">Buscar</button>
  </div>
  <ul v-if="members.length > 0">
    <li v-for="member in members" :key="member.id">
      <NuxtLink :to="`/member/${member.login}`">
        <MemberItem :member="member" />
      </NuxtLink>
    </li>
  </ul>

  <p class="members-placeholder" v-else>No se han encontrado miembros.</p>
</template>

<script setup lang="ts">
import { Member } from "../../types";
import { membersService } from "../../services/members";
import MemberItem from "./MemberItem.vue";

const members = ref<Member[]>([]);
const filter = ref("");
const store = useMembersStore();

filter.value = store.filter ? store.filter : "";
members.value =
  store.members.length > 0
    ? store.members
    : await membersService.get(filter.value);

store.filter = filter.value;
store.members = members.value;

const handleClick = async () => {
  members.value = await membersService.get(filter.value);
  store.filter = filter.value;
  store.members = members.value;
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/variables";
.search {
  text-align: center;
  align-self: center;
  input {
    font-size: 16px;
    border: 1px solid $primary-color-2;
    background-color: $primary-color-3;
  }
  button {
    border: 1px solid $primary-color-2;
    font-size: 16px;
    background-color: $primary-color-1;
    color: $primary-color-2;
    font-weight: bold;
    cursor: pointer;
  }
  button:hover {
    background-color: $primary-color-4;
  }
}

li {
  margin: 1rem;
  list-style: none;
  border: 2px solid black;
  border-radius: 5px;
  padding: 1rem;
  background-color: $primary-color-1;
  margin: 1rem 15vw;
}

.members-placeholder {
  text-align: center;
  border: 1px solid black;
  padding: 1rem;
  background-color: $primary-color-1;
}
</style>
