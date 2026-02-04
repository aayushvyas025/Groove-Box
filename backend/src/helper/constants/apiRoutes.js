export const API = Object.freeze({
  user: {
    BASE_URL: `/groove-box/api/v1/user`,
  },
  album: {
    BASE_URL: `/groove-box/api/v1/album`,
    CREATE_ALBUM: `/album/create`,
    DELETE_ALBUM: `/album/:id`,
  },
  song: {
    BASE_URL: `/groove-box/api/v1/song`,
    FETCH_ALL_SONGS: `/all`,
    CREATE_SONG: `/song/create`,
    DELETE_SONG: `/song/:id`,
    FETCH_FEATURED_SONGS: `/featured`,
    FETCH_USER_PREFERENCE_SONGS: `/user-preference`,
    FETCH_TRENDING_SONGS: `/trending`,
  },
  stats: {
    BASE_URL: `/groove-box/api/v1/stats`,
  },
  auth: {
    BASE_URL: `/groove-box/api/v1/auth`,
    CLERK_AUTH_CALLBACK: `/callback`,
  },
  admin: {
    BASE_URL: `/groove-box/api/v1/admin`,
    CHECK_ADMIN: `/check-admin`,
  },
});
