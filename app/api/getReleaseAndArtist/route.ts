import { NextResponse } from 'next/server';
import { getReleaseById, getArtistById } from '@/app/lib/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const releaseId = searchParams.get('releaseId');
  const artistId = searchParams.get('artistId');

  if (!releaseId || !artistId) {
    return NextResponse.json({ error: 'Missing releaseId or artistId' }, { status: 400 });
  }

  try {
    const release = await getReleaseById(releaseId);
    const artist = await getArtistById(artistId);

    if (!release || !artist) {
      return NextResponse.json({ error: 'Release or artist not found' }, { status: 404 });
    }

    return NextResponse.json({ release, artist });
  } catch (error) {
    console.error('Error fetching release and artist:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}