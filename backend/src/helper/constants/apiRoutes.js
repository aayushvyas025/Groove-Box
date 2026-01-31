
export const API = Object.freeze({
 user:{
     BASE_URL:`/groove-box/api/v1/user`,
 },
 album:{
    BASE_URL:`/groove-box/api/v1/album`,
 },
 song:{
    BASE_URL:`/groove-box/api/v1/song`,
    CREATE_SONG:`/create`
 },
 stats: {
    BASE_URL:`/groove-box/api/v1/stats`
 },
 auth:{ 
    BASE_URL:`/groove-box/api/v1/auth`, 
    CLERK_AUTH_CALLBACK:`/callback`
 },
admin: {
    BASE_URL:`/groove-box/api/v1/admin`,
    CHECK_ADMIN:`/check-admin`,
}
}) 


