export const dynamic = "force-dynamic";
// import data
import { getSubscriptionsFromDB } from "@/lib/notification-subscriptions-db";
// import components
import AdminNotificationPanel from "@/ui/admin-notification-panel";

export default async function AdminPage() {
  const subscriptions = await getSubscriptionsFromDB();
  const numberOfSubscriptions = subscriptions.length;

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-xl font-bold mb-6">Admin Dashboard</h1>
      <AdminNotificationPanel numberOfSubscriptions={numberOfSubscriptions} />
    </div>
  );
}