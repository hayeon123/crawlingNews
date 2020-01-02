import Vue from "vue"
import Vuex from "vuex"
import http from "./http-common";
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        uid: null,
        isLogin: false,
        isLoginFalse: true
    },
    mutations: {
        loginSuccess(state, payload) {
            state.isLogin = true,
                state.isLoginFalse = false
            state.uid = payload
        },
        loginFalse(state) {
            state.isLogin = false,
                state.isLoginFalse = true
        },
        logout(state) {
            state.isLogin = false
            state.isLoginFalse = true
            state.uid = null
        }
    },
    actions: {
        login({ state, commit }, loginObj) {
            window.console.log("state : " + state)
            window.console.log("commit : " + commit)
            window.console.log(loginObj.id + " / " + loginObj.pw)
            http
                .post("/memberlogin/", {
                    id: loginObj.id,
                    pw: loginObj.pw
                })
                .then(response => {
                    if (response.data.resvalue != null) {
                        // 로그인 성공
                        alert("로그인 성공")
                        commit("loginSuccess", loginObj.id)
                        localStorage.setItem("userId", loginObj.id)
                        window.console.log(response.data.resvalue);
                        localStorage.setItem("user", JSON.stringify(response.data.resvalue))
                        window.console.log(localStorage.getItem("user"));
                        this.dispatch("getMemberInfo")
                        router.push("/")
                    } else {
                        // 로그인 실패
                        alert("로그인 실패")
                        commit("loginFalse")
                        router.push("/")
                    }
                })
                .catch(() => (this.errored = true))
                .finally(() => (this.loading = false));

        },
        logout({ commit }) {
            commit("logout")
            localStorage.removeItem("userId")
            localStorage.removeItem("user")
            router.push("/")
        },
        getMemberInfo() {
            let token = localStorage.getItem("userId")
            if (token != null) {
                this.commit("loginSuccess", token)
            }
        }
    }
})