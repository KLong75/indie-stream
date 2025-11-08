// "use client";
// //import components
// import { UploadButton } from "./uploadthing/uploadthing";

// export default function UploadButtonContainer() {
//   return (
//     <div>
//       <UploadButton
//         endpoint="imageUploader"
//         onClientUploadComplete={(res) => {
//           // Do something with the response
//           console.log("Files: ", res);
//           alert("Upload Completed");
//         }}
//         onUploadError={(error: Error) => {
//           // Do something with the error.
//           alert(`ERROR! ${error.message}`);
//         }}
//       />
//     </div>
//   );
// }


"use client";
// import components
import { UploadButton } from "./uploadthing/uploadthing";

interface UploadButtonContainerProps { file_route: "imageUploader" | "audioUploader"; }

export default function UploadButtonContainer({
  file_route,
}: UploadButtonContainerProps) {
  return (
    <div>
      <UploadButton
        endpoint={file_route}
        onClientUploadComplete={(res) => {
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
}