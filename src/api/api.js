import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "dc6e3a5e-df57-4968-926d-8710ee585462"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(response => {
                return response.data;
            });
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    getProfile(userId) {
        console.warn("Obsolete method. Please profileAPI object")
        return profileAPI.getProfile(userId)
    }

}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data;
            });
    },
    getStatus(userId) {
        return instance.get(`status` + userId)
            .then(response => {
                return response.data;
            });
    },
    updateStatus(status) {
        return instance.put('status', { status: status });
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    }
}


