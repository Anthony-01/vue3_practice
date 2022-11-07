import { ref } from 'vue'
import getUser from "../api/user";

export default function getUserInfo() {
    let userInfo = ref({})

    const getUserInfoById = async (id) => {
        userInfo.value = await getUser(id)
    }

    return {
        userInfo,
        getUserInfoById
    }
}