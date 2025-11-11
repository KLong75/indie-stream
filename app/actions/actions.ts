"use server";

import webpush from "web-push";
import type { PushSubscription } from "web-push";
import { getSubscriptions, saveSubscription, removeSubscription } from "@/lib/subscriptions";

webpush.setVapidDetails(
  "mailto:kevin@rhythmcodestudio.tech",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

// let subscription: PushSubscription | null = null
// let subscriptions: PushSubscription[] = [];

// save for potential server-side subscription management
// export async function subscribeUserServerSide(endpoint: string) {
//   saveSubscription(endpoint);
//   return { success: true };
// }
// save for potential server-side subscription management
// export async function unsubscribeUserServerSide(endpoint: string) {
//   removeSubscription(endpoint);
//   return { success: true };
// }

export async function sendNotification(message: string, url?: string) {
  const subscriptions = getSubscriptions();
if (subscriptions.length === 0) {
  throw new Error("No subscriptions available");
}

  try {
    await Promise.all(
      subscriptions.map((subscription: PushSubscription) => {
        return webpush.sendNotification(
          subscription,
          JSON.stringify({
            title: "Notification from indieStream",
            body: message,
            icon: "/icons/web-app-manifest-192x192.png",
            data: {
              url: url || "https://indie-stream.vercel.app/",
            },
          })
        );
      })
    );
    return { success: true };
  } catch (error) {
    console.error("Error sending push notification:", error);
    return { success: false, error: "Failed to send notification" };
  }
}
