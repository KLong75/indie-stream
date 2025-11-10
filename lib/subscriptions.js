// lib/subscriptions.js
import fs from "fs";
const FILE = "./subscriptions.json";

export function getSubscriptions() {
  if (!fs.existsSync(FILE)) return [];
  return JSON.parse(fs.readFileSync(FILE, "utf8"));
}

export function saveSubscription(sub) {
  const subs = getSubscriptions();
  subs.push(sub);
  fs.writeFileSync(FILE, JSON.stringify(subs, null, 2));
}

export function removeSubscription(endpoint) {
  const subs = getSubscriptions();
  const filtered = subs.filter((sub) => sub.endpoint !== endpoint);
  fs.writeFileSync(FILE, JSON.stringify(filtered, null, 2));
}