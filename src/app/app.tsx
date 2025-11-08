"use client";

import dynamic from "next/dynamic";

// Dynamic import for client-side only components
const MoodSelector = dynamic(() => import("~/components/MoodSelector"), {
  ssr: false,
});

export default function App() {
  return <MoodSelector />;
}
