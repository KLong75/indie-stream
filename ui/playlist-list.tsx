"use client";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Artist, Release, Song } from "@/lib/definitions";

interface PlaylistListProps {
  playlists: {
    id: string;
    title: string;
    songs: Song[];
    description?: string;
  }[];
}
