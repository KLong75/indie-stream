"use server";

import webpush from "web-push";
import type { PushSubscription } from "web-push";

webpush.setVapidDetails(
  "mailto:longk@stlouis-mo.gov",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

// let subscription: PushSubscription | null = null
let subscriptions: PushSubscription[] = [];

export async function subscribeUser(sub: PushSubscription) {
  // subscription = sub
  // In a production environment, you would want to store the subscription in a database
  // For example: await db.subscriptions.create({ data: sub })
  // return { success: true }
  if (!subscriptions.find((s) => s.endpoint === sub.endpoint)) {
    subscriptions.push(sub);
  }
  console.log("Current subscriptions after subscribe:", subscriptions);
  return { success: true };
}

export async function unsubscribeUser(sub: PushSubscription) {
  // subscription = null
  // In a production environment, you would want to remove the subscription from the database
  // For example: await db.subscriptions.delete({ where: { ... } })
  // return { success: true }
  subscriptions = subscriptions.filter((s) => s.endpoint !== sub.endpoint);
  console.log("Current subscriptions after unsubscribe:", subscriptions);
  return { success: true };
}

export async function sendNotification(message: string, url?: string) {
  // if (!subscription) {
  //   throw new Error('No subscription available')
  // }
  if (subscriptions.length === 0) {
    throw new Error("No subscriptions available");
  }

  try {
    await Promise.all(
      subscriptions.map((subscription) => {
        return webpush.sendNotification(
          subscription,
          JSON.stringify({
            title: "Notification from indieStream",
            body: message,
            icon: "/icons/icon-192x192.png",
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
