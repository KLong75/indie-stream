"use client";

import PushNotificationSubscriptionManager from "./push-notification-subscription-manager";
import { usePushNotification } from "../context/push-notification-context-provider";

export default function SubscriptionContextClientContainer({renderedAs}: {renderedAs: "icon" | "button"}) {
  const { isSubscribed } = usePushNotification();
  return (
    <>
      {!isSubscribed && (
        <PushNotificationSubscriptionManager renderedAs={renderedAs} />
      )}
    </>
  );
}