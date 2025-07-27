// import { createUploadthing, type FileRouter } from "uploadthing/next";
// import { UploadThingError } from "uploadthing/server";

// const f = createUploadthing();

// const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

// // FileRouter for your app, can contain multiple FileRoutes
// export const ourFileRouter = {
//   // Define as many FileRoutes as you like, each with a unique routeSlug
//   imageUploader: f({
//     image: {
//       /**
//        * For full list of options and defaults, see the File Route API reference
//        * @see https://docs.uploadthing.com/file-routes#route-config
//        */
//       maxFileSize: "4MB",
//       maxFileCount: 1,
//     },
//   })
//     // Set permissions and file types for this FileRoute
//     .middleware(async ({ req }) => {
//       // This code runs on your server before upload
//       const user = await auth(req);

//       // If you throw, the user will not be able to upload
//       if (!user) throw new UploadThingError("Unauthorized");

//       // Whatever is returned here is accessible in onUploadComplete as `metadata`
//       return { userId: user.id };
//     })
//     .onUploadComplete(async ({ metadata, file }) => {
//       // This code RUNS ON YOUR SERVER after upload
//       console.log("Upload complete for userId:", metadata.userId);

//       console.log("file url", file.ufsUrl);

//       // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
//       return { uploadedBy: metadata.userId };
//     }),
// } satisfies FileRouter;

// export type OurFileRouter = typeof ourFileRouter;
import { v4 as uuidv4 } from "uuid";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

import { auth } from "@/auth";

const f = createUploadthing();

// const auth = (_req: Request) => ({ id: "fakeId" }); // Fake auth function
// const auth = (req: Request) => {
//   console.log("Request URL:", req.url);
//   return { id: "fakeId" };
// };

const authUser = async (req: Request) => {
  console.log("Request URL:", req.url);
  const session = await auth(); // This gets the session for the current user
  if (!session?.user?.id) return null;
  return { id: session.user.id };
};

export const ourFileRouter = {
  // Existing image route
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async ({ req }) => {
      const user = await authUser(req);
      if (!user) throw new UploadThingError("Unauthorized");
      // return { userId: user.id };
       // Generate a UUID here and pass it as metadata
      return { userId: user.id, fileId: uuidv4() };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Image upload complete for userId:", metadata.userId);
      console.log("file url", file.ufsUrl);
      console.log("fileId", metadata.fileId);
      return { uploadedBy: metadata.userId, fileId: metadata.fileId };
    }),

  // New audio route
  audioUploader: f({
    audio: {
      maxFileSize: "128MB",
      maxFileCount: 12, // or whatever limits you want
    },
  })
    .middleware(async ({ req }) => {
      const user = await authUser(req);
      if (!user) throw new UploadThingError("Unauthorized");
      // return { userId: user.id };
      // Generate a UUID here and pass it as metadata
      return { userId: user.id, fileId: uuidv4() };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Audio upload complete for userId:", metadata.userId);
      console.log("audio file url", file.ufsUrl);
      console.log("fileId", metadata.fileId);
      return { uploadedBy: metadata.userId, fileId: metadata.fileId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;