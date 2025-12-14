"use client";
// import from react
import { useState } from "react";
// import actions
import { 
  saveSong, 
  removeSavedSong, 
  saveArtist, 
  removeSavedArtist, 
  saveRelease, 
  removeSavedRelease, 
  savePlaylist, 
  removeSavedPlaylist 
} from "@/lib/actions";
// import icons
import { CiSaveDown2 } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
// import components
import SaveAndRemoveButton from "@/ui/save-remove-button";

interface SaveRemoveButtonClientContainerProps {
  userId: string;
  itemId: string;
  itemType: "song" | "artist" | "release" | "playlist";
  initiallySaved: boolean;
}

export default function SaveAndRemoveButtonClientContainer({
  userId,
  itemId,
  itemType,
  initiallySaved,
}: SaveRemoveButtonClientContainerProps) {
  const [isSaved, setIsSaved] = useState(initiallySaved);

  const handleSave = async (userId: string, itemId: string) => {
    setIsSaved(true);
    switch (itemType) {
      case "song":
      await saveSong(userId, itemId);
      break;
      case "artist":
      await saveArtist(userId, itemId);
      break;
      case "release":
      await saveRelease(userId, itemId);
      break;
      case "playlist":
      await savePlaylist(userId, itemId);
      break;
      default:
      break;
    }
  };

  const handleRemove = async (userId: string, itemId: string) => {
    setIsSaved(false);
    // await removeSavedSong(userId, itemId);
    switch (itemType) {
      case "song":
      await removeSavedSong(userId, itemId);
      break;
      case "artist":
      await removeSavedArtist(userId, itemId);
      break;
      case "release":
      await removeSavedRelease(userId, itemId);
      break;
      case "playlist":
      await removeSavedPlaylist(userId, itemId);
      break;
      default:
      break;
    }
  };

  return (
    <SaveAndRemoveButton
      userId={userId}
      itemId={itemId}
      itemType={itemType}
      isSaved={isSaved}
      action={handleSave}
      removeAction={handleRemove}
      icon={<CiSaveDown2 size={24} />}
      removeIcon={<CiCircleMinus size={24} />}
    />
  );
}