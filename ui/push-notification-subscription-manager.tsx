// "use client";
// import { useState, useEffect } from "react";
// // import {
// //   subscribeUser,
// //   unsubscribeUser,
// //   // sendNotification,
// // } from "../app/actions/actions";

// async function subscribeUser(sub: any) {
//   await fetch("/api/subscribe", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(sub),
//   });
// }

// async function unsubscribeUser(endpoint: string) {
//   await fetch("/api/unsubscribe", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ endpoint }),
//   });
// }

// // Use (or adapt) this utility for generating keys
// function urlBase64ToUint8Array(base64String: string) {
//   const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
//   const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
//   const rawData = window.atob(base64);
//   const outputArray = new Uint8Array(rawData.length);
//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i);
//   }
//   return outputArray;
// }

// // Manage the browser's push subscription
// export default function PushNotificationSubscriptionManager() {
//   const [isSupported, setIsSupported] = useState(false);
//   const [subscription, setSubscription] = useState<PushSubscription | null>(null);
//   // const [message, setMessage] = useState("");
//   // const [url, setUrl] = useState("");

//   useEffect(() => {
//     if ("serviceWorker" in navigator && "PushManager" in window) {
//       setIsSupported(true);
//       registerServiceWorker();
//     }
//   }, []);

//   // Register service worker, then retrieve subscription if present
//   async function registerServiceWorker() {
//     const registration = await navigator.serviceWorker.register("/sw.js", {
//       scope: "/",
//       updateViaCache: "none",
//     });
//     const sub = await registration.pushManager.getSubscription();
//     setSubscription(sub);
//   }

//   async function subscribeToPush() {
//     const registration = await navigator.serviceWorker.ready;
//     const sub = await registration.pushManager.subscribe({
//       userVisibleOnly: true,
//       applicationServerKey: urlBase64ToUint8Array(
//         process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!
//       ),
//     });
//     setSubscription(sub);
//     const serializedSub = JSON.parse(JSON.stringify(sub));
//     await subscribeUser(serializedSub);
//   }

//   async function unsubscribeFromPush() {
//     if (subscription) {
//       await subscription.unsubscribe();
//     }
//     setSubscription(null);
//     if (subscription) {
//       const serializedSub = JSON.parse(JSON.stringify(subscription));
//       await unsubscribeUser(serializedSub);
//     }
//   }

//   // async function sendTestNotification() {
//   //   if (subscription) {
//   //     await sendNotification(message, url);
//   //     setMessage("");
//   //     setUrl("");
//   //   }
//   // }

//   if (!isSupported) {
//     return <p>Push notifications are not supported in this browser.</p>;
//   }

//   return (
//     <div className="">
//       {/* <h3>Push Notification Admin</h3> */}
//       {subscription ? (
//         <>
//           <p>You are subscribed to push notifications.</p>
//           <button onClick={unsubscribeFromPush}>Unsubscribe</button>
//           <br />
//           {/* <input
//             type="text"
//             placeholder="Enter Notification Message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="border p-1 rounded-md my-2 w-full max-w-md"
//           />
//           <br />
//            <input
//             type="text"
//             placeholder="Enter URL to open on click"
//             value={url}
//             onChange={(e) => setUrl(e.target.value)}
//             className="border p-1 rounded-md my-2 w-full max-w-md"
//           />
//           <br />
//           <button onClick={sendTestNotification}>Send Test</button> */}
//         </>
//       ) : (
//         <>
//           <p>You are not subscribed to push notifications.</p>
//           <button onClick={subscribeToPush}>Subscribe</button>
//         </>
//       )}
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";
// import from react-icons
import { IoIosNotifications, IoIosNotificationsOff } from "react-icons/io";
// import from headlessui
// import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
// import from context
import { usePushNotification } from "../context/push-notification-context-provider";

async function subscribeUser(sub: any) {
  await fetch("/api/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sub),
  });
}

async function unsubscribeUser(endpoint: string) {
  await fetch("/api/unsubscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ endpoint }),
  });
}

// for generating keys
function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

interface PushNotificationSubscriptionManagerProps {
  renderedAs: "icon" | "button";
}
// Manage the browser's push subscription
export default function PushNotificationSubscriptionManager({ renderedAs }: PushNotificationSubscriptionManagerProps) {
  const { setIsSubscribed } = usePushNotification();
  const [isSupported, setIsSupported] = useState(false);
  const [subscription, setSubscription] = useState<PushSubscription | null>(null);
  // const [message, setMessage] = useState("");
  // const [url, setUrl] = useState("");

  useEffect(() => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      setIsSupported(true);
      registerServiceWorker();
    }
  }, []);

  // Register service worker, then retrieve subscription if present
  async function registerServiceWorker() {
    const registration = await navigator.serviceWorker.register("/sw.js", {
      scope: "/",
      updateViaCache: "none",
    });
    const sub = await registration.pushManager.getSubscription();
    setSubscription(sub);
  }

  async function subscribeToPush() {
    const registration = await navigator.serviceWorker.ready;
    const sub = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!
      ),
    });
    setSubscription(sub);
    setIsSubscribed(true);
    const serializedSub = JSON.parse(JSON.stringify(sub));
    console.log("Subscribing to push notifications:", serializedSub);
    await subscribeUser(serializedSub);
  }

  async function unsubscribeFromPush() {
    if (subscription) {
      console.log("Unsubscribing from push notifications:", subscription);
      await subscription.unsubscribe();
    }
    setSubscription(null);
    setIsSubscribed(false);
    if (subscription) {
      const serializedSub = JSON.parse(JSON.stringify(subscription));
      await unsubscribeUser(serializedSub);
    }
  }

  // async function sendTestNotification() {
  //   if (subscription) {
  //     await sendNotification(message, url);
  //     setMessage("");
  //     setUrl("");
  //   }
  // }

  if (!isSupported) {
    return <p>Push notifications are not supported in this browser.</p>;
  }

  return (
    <div>
      {renderedAs === "icon" ? (
        subscription ? (
          <IoIosNotificationsOff
            className="cursor-pointer"
            size={24}
            title="Unsubscribe from push notifications"
            onClick={unsubscribeFromPush}
          />
        ) : (
          <IoIosNotifications
            className="cursor-pointer"
            size={24}
            title="Subscribe to push notifications"
            onClick={subscribeToPush}
          />
        )
      ) : (
        subscription ? (
          <button onClick={unsubscribeFromPush} className="cursor-pointer border-2 p-1 rounded-full px-4 text-sm">
            Unsubscribe from Push Notifications
          </button>
        ) : (
          <button onClick={subscribeToPush} className="cursor-pointer border-2 p-1 rounded-full px-4 text-sm">
            Subscribe to Push Notifications
          </button>
        )
      )}
    </div>

    // <div>
    //   {subscription ? (
    //     <div>
    //       <p>You are subscribed to push notifications.</p>
    //       <button onClick={unsubscribeFromPush}>Unsubscribe</button>
    //     </div>
    //   ) : (
    //     <div>
    //       <p>You are not subscribed to push notifications.</p>
    //       <button onClick={subscribeToPush} className="cursor-pointer">Subscribe</button>
    //     </div>
    //   )}
    // </div>
  );
}