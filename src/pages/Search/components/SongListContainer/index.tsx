/*
 * @Author: wangshicheng
 * @Date: 2021-04-22 17:33:49
 * @LastEditTime: 2021-04-24 10:10:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MusicProject/src/pages/Search/components/SongListContainer/index.tsx
 */
import React from "react";
import { useDispatch } from "react-redux";
import SongList from "../SongsList/index";
import { ISongItem } from "@/interface/index";
import { addSongToPlaylist } from "@/reducers/playlistSlice";
import { addToPlayingQueue } from "@/reducers/queueSlice";

interface IProps {
  songDatas: ISongItem[];
  title: string;
  cover: string;
  fetchData: () => void;
}

export const SongListContainer = (props: IProps) => {
  const dispatch = useDispatch();
  const { songDatas, title, cover, fetchData } = props;

  /**
   * @description: 添加歌曲至指定歌集
   * @param {string} playlistId
   * @param {ISongItem} song
   * @return {*}
   */
  const addSongsToPlaylist = (playlistId: string, song: ISongItem) => {
    dispatch(
      addSongToPlaylist({
        playlistId: playlistId,
        songData: song,
      })
    );
  };

  /**
   * @description: 添加歌曲到播放队列
   * @param {ISongItem} songs
   * @return {*}
   */
  const addSongsToQueue = (songs: ISongItem[]) => {
    dispatch(addToPlayingQueue(songs));
  };

  return (
    <SongList
      songDatas={songDatas}
      title={title}
      cover={cover}
      fetchData={fetchData}
      addToPlaylist={addSongsToPlaylist}
      addToQueue={addSongsToQueue}
    />
  );
};