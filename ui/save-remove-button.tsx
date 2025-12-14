// interface SaveButtonProps {
//   itemId: string;
//   itemType: "song" | "artist" | "release" | "playlist";
//   userId: string;
//   icon: React.ReactNode;
//   action?: (userId: string, itemId: string) => void | Promise<void>;
// }

// export default function SaveButton({ itemId, itemType, userId, icon, action }: SaveButtonProps) {
//   const handleSave = async () => {
//     console.log(`Saving ${itemType} with ID:`, itemId);
//     try {
//       if (action) {
//         await action(userId, itemId); // <-- pass arguments in correct order
//       }
//     } catch (error) {
//       console.error(`Error saving ${itemType}:`, error);
//     }
//   };

//   return (
//     <button
//       onClick={handleSave}
//       className="p-1 text-white hover:text-gray-700 flex flex-col items-center"
//       aria-label={`Save ${itemType}`}>
//       {icon}
//       <span>Save</span>
//     </button>
//   );
// }


// interface SaveAndRemoveButtonProps {
//   itemId: string;
//   itemType: "song" | "artist" | "release" | "playlist";
//   userId: string;
//   icon: React.ReactNode;
//   removeIcon?: React.ReactNode;
//   action?: (userId: string, itemId: string) => void | Promise<void>;
//   removeAction?: (userId: string, itemId: string) => void | Promise<void>;
//   isSaved: boolean;
// }

// export default function SaveAndRemoveButton({
//   itemId,
//   itemType,
//   userId,
//   icon,
//   removeIcon,
//   action,
//   removeAction,
//   isSaved,
// }: SaveAndRemoveButtonProps) {
//   const handleClick = async () => {
//     try {
//       if (isSaved) {
//         if (removeAction) await removeAction(userId, itemId);
//       } else {
//         if (action) await action(userId, itemId);
//       }
//     } catch (error) {
//       console.error(
//         `Error ${isSaved ? "removing" : "saving"} ${itemType}:`,
//         error
//       );
//     }
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className={`p-1 ${isSaved ? "text-gray-500" : "text-white"} hover:text-gray-700 flex flex-col items-center`}
//       aria-label={isSaved ? `Remove ${itemType}` : `Save ${itemType}`}>
//       {isSaved ? (removeIcon ?? icon) : icon}
//       <span>{isSaved ? "Remove" : "Save"}</span>
//     </button>
//   );
// }

interface SaveAndRemoveButtonProps {
  itemId: string;
  itemType: "song" | "artist" | "release" | "playlist";
  userId: string;
  icon: React.ReactNode;
  removeIcon?: React.ReactNode;
  action?: (userId: string, itemId: string) => void | Promise<void>;
  removeAction?: (userId: string, itemId: string) => void | Promise<void>;
  isSaved: boolean;
}

export default function SaveAndRemoveButton({
  itemId,
  itemType,
  userId,
  icon,
  removeIcon,
  action,
  removeAction,
  isSaved,
}: SaveAndRemoveButtonProps) {
  const handleClick = async () => {
    try {
      if (isSaved) {
        if (removeAction) await removeAction(userId, itemId);
      } else {
        if (action) await action(userId, itemId);
      }
    } catch (error) {
      console.error(
        `Error ${isSaved ? "removing" : "saving"} ${itemType}:`,
        error
      );
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`p-1 ${isSaved ? "text-gray-500" : "text-white"} hover:text-gray-700 flex flex-col items-center`}
      aria-label={isSaved ? `Remove ${itemType}` : `Save ${itemType}`}>
      {/* Icon wrapper with fixed size */}
      <span style={{ width: 24, height: 24, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
        {isSaved ? (removeIcon ?? icon) : icon}
      </span>
      {/* Label with fixed width */}
      <span style={{ display: "inline-block", width: "4rem", textAlign: "center" }}>
        {isSaved
          ? `Remove `
          : `Save`}
      </span>
    </button>
  );
}