export default defineNuxtRouteMiddleware((to, from) => {
    if(process.client){
        if(to.path === '/register'){
            return navigateTo('/')
        }
    }
});