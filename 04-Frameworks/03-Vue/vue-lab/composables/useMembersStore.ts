import { defineStore } from "pinia";
import { Member } from "types";

export const useMembersStore = defineStore('members', {
    state: () => ({
        members: [] as Member[],
        filter: 'Lemoncode'
    })
});