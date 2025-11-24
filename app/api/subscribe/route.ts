import { NextResponse } from "next/server";
// import { saveSubscription } from "@/lib/subscriptions";
import { saveSubscriptionToDB } from "@/lib/notification-subscriptions-db";

export async function POST(req: Request) {
  const sub = await req.json();
  // saveSubscription(sub);
  await saveSubscriptionToDB(sub);
  return NextResponse.json({ success: true });
}