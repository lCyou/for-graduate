'use client';
import React from "react";
import {ThemeSwitcher} from "./components/themeSwitcher";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hello World!</h1>
      <div>
      <ThemeSwitcher />
      </div>
    </main>
  )
}
