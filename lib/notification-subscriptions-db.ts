import postgres from "postgres";
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function saveSubscriptionToDB(sub: any) {
  await sql`
    INSERT INTO push_subscriptions (endpoint, expiration_time, p256dh, auth)
    VALUES (
      ${sub.endpoint},
      ${sub.expirationTime ?? null},
      ${sub.keys.p256dh},
      ${sub.keys.auth}
    )
    ON CONFLICT (endpoint) DO NOTHING
  `;
}

export async function getSubscriptionsFromDB() {
  return await sql`
    SELECT endpoint, expiration_time, p256dh, auth
    FROM push_subscriptions
  `;
}

export async function removeSubscriptionFromDB(endpoint: string) {
  await sql`
    DELETE FROM push_subscriptions WHERE endpoint = ${endpoint}
  `;
}