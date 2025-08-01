"use client";
import React from "react";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";

import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successfull");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 shadow-md px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-300">Yash Kharche</span>

          <button
            onClick={() => {
              logout();
              console.log("Logging out...");
            }}
            className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded-md transition duration-200"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Content */}
      <section className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Profile Card */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Profile Info</h2>
          <p>
            <span className="font-medium">Name:</span> User
          </p>
          <p>
            <span className="font-medium">Email:</span> yash@example.com
          </p>
          <p>
            <span className="font-medium">Role:</span> Developer
          </p>
        </div>

        {/* Settings */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 cursor-pointer">
              Change Password
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              Manage Sessions
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              Privacy Settings
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
