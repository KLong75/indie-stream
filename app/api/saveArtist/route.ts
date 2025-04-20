import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId, artistId } = await req.json();

    if (!userId || !artistId) {
      return NextResponse.json({ error: "Missing userId or artistId" }, { status: 400 });
    }

    // Simulate saving the artist (replace this with your database logic)
    console.log(`Saving artist ${artistId} for user ${userId}`);

    return NextResponse.json({ success: true, message: "Artist saved successfully" });
  } catch (error) {
    console.error("Error in /api/saveArtist:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}