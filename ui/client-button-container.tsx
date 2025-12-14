"use client";
// import from react
import { useState } from "react";
// import actions
import { saveSong, removeSavedSong } from "@/lib/actions";
// import icons
import { CiSaveDown2 } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
// import components
import SaveAndRemoveButton from "@/ui/save-remove-button";



export default function ClientButtonContainer({
  userId,
  songId,
  initiallySaved,
}: {
  userId: string;
  songId: string;
  initiallySaved: boolean;
}) {
  const [isSaved, setIsSaved] = useState(initiallySaved);

  const handleSave = async (userId: string, songId: string) => {
    setIsSaved(true);
    await saveSong(userId, songId);
  };

  const handleRemove = async (userId: string, songId: string) => {
    setIsSaved(false);
    await removeSavedSong(userId, songId);
  };

  return (
    <SaveAndRemoveButton
      userId={userId}
      itemId={songId}
      itemType="song"
      isSaved={isSaved}
      action={handleSave}
      removeAction={handleRemove}
      icon={<CiSaveDown2 size={24} />}
      removeIcon={<CiCircleMinus size={24} />}
    />
  );
}