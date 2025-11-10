// import components
import AdminNotificationPanel from "@/ui/admin-notification-panel";
export default function AdminPage() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-xl font-bold mb-6">Admin Dashboard</h1>
      <AdminNotificationPanel />
    </div>
  );
}