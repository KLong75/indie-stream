"use client";
import { useState } from "react";
import { sendNotification } from "../app/actions/actions";

export default function AdminNotificationPanel( {numberOfSubscriptions}: {numberOfSubscriptions?: number} ) {
  // console.log("numberOfSubscriptions in client:", numberOfSubscriptions);
  const [message, setMessage] = useState("");
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<null | string>(null);

  async function handleSend() {
    const result = await sendNotification(message, url);
    console.log("Notification send result:", result);
    setStatus(result && result.success ? "Notification sent!" : "Failed to send.");
    setMessage("");
    setUrl("");
  }

  return (
    <div className="p-2">
      <h2>Push Notification Admin</h2>
      <p>
        {numberOfSubscriptions === 1
              ? `There is currently ${numberOfSubscriptions} person subscribed to notifications.`
          : `There are currently ${numberOfSubscriptions ?? "Loading..."} people subscribed to notifications.`}
      </p>
      <br />
      <p>Send a new notification:</p>
      <input
        type="text"
        placeholder="Enter Notification Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-1 rounded-md my-2 w-full max-w-md"
      />
      <input
        type="text"
        placeholder="Enter URL to open on click"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="border p-1 rounded-md my-2 w-full max-w-md"
      />
      <button onClick={handleSend} className="mt-2">
        Send Notification
      </button>
      {status && <p>{status}</p>}
    </div>
  );
}