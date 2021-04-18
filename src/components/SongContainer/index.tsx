/*
 * @Author: wangshicheng
 * @Date: 2021-04-18 15:31:48
 * @LastEditTime: 2021-04-18 22:39:01
 * @LastEditors: Please set LastEditors
 * @Description: 歌曲列表中的item
 * @FilePath: /MusicProject/src/components/SongContainer/index.tsx
 */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import isEqual from "lodash/isEqual";

import Song from "@/components/Song/index";
import { IPlayListItem } from "@/interface/index";
// import { RootReducerType } from '../reducers';
// import { downloadMedia } from '../actions/mediaStore';
import { IAppState } from "@/reducers/index";
import { playingSong } from "@/reducers/songSlice";

interface Props {
  songData: IPlayListItem;
  goBack?: () => void;
}

const SongContainer = ({ songData, goBack }: Props) => {
  /* 记录【当前】此歌曲的播放状态 */
  const [isActive, setActive] = useState(false);
  const dispatch = useDispatch();

  /* 当前正在播放的歌曲 */
  const currentSong = useSelector((state: IAppState) => state.song.currentSong);

  useEffect(() => {
    /* 点击的歌曲是否是当前正在播放的歌曲 */
    if (currentSong.id && songData.id) {
      setActive(isEqual(currentSong.id, songData.id));
    }
  }, [currentSong, songData]);

  /**
   * @description: 处理歌曲下载
   * @param {*}
   * @return {*}
   */
  const handleSongDownload = () => {
    // dispatch(downloadMedia(track));
  };

  /**
   * @description: 处理歌曲播放操作
   * @param {*}
   * @return {*}
   */
  const handelSongPlay = () => {
    if (isActive) return;
    dispatch(playingSong({ songData: songData }));
    if (goBack) {
      goBack();
    }
  };

  return (
    <Song
      songData={songData}
      handelSongPlay={handelSongPlay}
      active={isActive}
      handleSongDownload={handleSongDownload}
    />
  );
};

export default SongContainer;