'use client';
import React from "react";
import {ThemeSwitcher} from "./components/themeSwitcher";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gray-100 flex-col items-center justify-between p-24
     dark:bg-gray-800 dark:text-gray-50">
      <h1>hello World!</h1>
      <div>
      <ThemeSwitcher />
      </div>
    </main>
  )
}
