/*
 * @Author: wangshicheng
 * @Date: 2021-04-18 17:40:21
 * @LastEditTime: 2021-04-22 15:00:23
 * @LastEditors: Please set LastEditors
 * @Description: 收藏歌曲到歌集
 * @FilePath: /MusicProject/src/components/PlaylistDialog/index.tsx
 */
import React from "react";
import { List, Dialog, Portal, Button } from "react-native-paper";
import { FlatList, StyleSheet } from "react-native";
import { IPlaylist } from "@/interface/index";
import { useSelector } from "react-redux";
import { IAppState } from "@/reducers/index";

interface Props {
  visible: boolean;
  hideModal(): void;
  addToPlaylist(id: string): void;
}

const PlaylistDialog = (props: Props) => {
  const { visible, hideModal, addToPlaylist } = props;
  const playlists = useSelector((state: IAppState) => state.playlist);
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideModal}>
        <Dialog.Title style={styles.dialogTextStyle}>
          {playlists.length ? "Add to Playlist" : "No playlists found"}
        </Dialog.Title>

        <Dialog.ScrollArea>
          <FlatList
            data={playlists}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }: { item: IPlaylist }) => (
              <List.Item
                title={item.name}
                description={`by ${item.owner}`}
                left={(props) => <List.Icon {...props} icon="folder-outline" />}
                onPress={() => addToPlaylist(item.id)}
              />
            )}
          />
        </Dialog.ScrollArea>
        <Dialog.Actions>
          <Button mode="contained" onPress={() => hideModal()}>
            Close
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  dialogTextStyle: {
    textAlign: "center",
  },
});

export default PlaylistDialog;
