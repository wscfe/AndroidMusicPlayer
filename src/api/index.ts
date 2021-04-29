/*
 * @Author: your name
 * @Date: 2021-04-26 18:14:11
 * @LastEditTime: 2021-04-29 16:19:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MusicProject/src/api/index.ts
 */
import { dev_api_prefix } from "@/config/index";
import { IRequest } from "@/utils/fetch";

export const playMusicOpenApi =
  "https://api.imjad.cn/cloudmusic/?type=song&id=";

/* User */
export const userLogin: IRequest = {
  url: dev_api_prefix + "/user/insert",
  config: {
    method: "POST",
  },
};

/* Song */
export const getMostPlaySongs: IRequest = {
  url: dev_api_prefix + "/song/mostPlay",
  config: {
    method: "POST",
  },
};

export const getFavSongByUser: IRequest = {
  url: dev_api_prefix + "/song/fav",
  config: {
    method: "POST",
  },
};

export const getSongByCollection: IRequest = {
  url: dev_api_prefix + "/song/get",
  config: {
    method: "POST",
  },
};

export const insertFavSong: IRequest = {
  url: dev_api_prefix + "/song/insertFav",
  config: {
    method: "POST",
  },
};

export const deleteFavSong: IRequest = {
  url: dev_api_prefix + "/song/deleteFav",
  config: {
    method: "POST",
  },
};

export const addSongToCollection: IRequest = {
  url: dev_api_prefix + "/song/addToCollection",
  config: {
    method: "POST",
  },
};

export const updateSongPlayCount: IRequest = {
  url: dev_api_prefix + "/song/updatePlayCount",
  config: {
    method: "POST",
  },
};

export const addSongToHistory: IRequest = {
  url: dev_api_prefix + "/song/addToHistory",
  config: {
    method: "POST",
  },
};

export const getSongFromHistoryByUser: IRequest = {
  url: dev_api_prefix + "/song/getHistory",
  config: {
    method: "POST",
  },
};

export const getSongByKeyword: IRequest = {
  url: dev_api_prefix + "/song/keyWord",
  config: {
    method: "POST",
  },
};

/* Collection */
export const findCollection: IRequest = {
  url: dev_api_prefix + "/collection/get",
  config: {
    method: "POST",
  },
};
export const createCollection: IRequest = {
  url: dev_api_prefix + "/collection/create",
  config: {
    method: "POST",
  },
};
export const modifyCollection: IRequest = {
  url: dev_api_prefix + "/collection/modify",
  config: {
    method: "POST",
  },
};
export const deleteCollection: IRequest = {
  url: dev_api_prefix + "/collection/delete",
  config: {
    method: "POST",
  },
};
