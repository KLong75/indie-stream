import { NextResponse } from "next/server";
// import { removeSubscription } from "@/lib/subscriptions";
import { removeSubscriptionFromDB } from "@/lib/notification-subscriptions-db";

export async function POST(req: Request) {
  const { endpoint } = await req.json();
  if (!endpoint) {
    return NextResponse.json({ error: "Missing endpoint" }, { status: 400 });
  }
  // removeSubscription(endpoint);
  await removeSubscriptionFromDB(endpoint);
  return NextResponse.json({ success: true });
}