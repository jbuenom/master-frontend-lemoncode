import { Member } from "types";

export const membersService = {
    async get(filter: string) {
        const members = await $fetch<Member[]>(`https://api.github.com/orgs/${filter}/members`).catch(err => []);
        return members;
    },

    async getDetail(id: string) {
        const member = await $fetch<Member>(`https://api.github.com/users/${id}`);
        return member;
    }
}