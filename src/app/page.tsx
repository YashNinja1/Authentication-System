"use client";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white flex items-center justify-center">
      <div className="grid grid-cols-2 w-full max-w-5xl">
        {/* Left Column – Dog Image */}
        <div className="flex items-center justify-center p-4">
          <Image
            src="/My photo.jpg" // Place your image in public/My photo.jpg
            alt="CreatersImg"
            onClick={() => window.open("/My photo.jpg")}
            width={300}
            height={500}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Column – Buttons */}
        <div className="flex flex-col items-center justify-center space-y-6 p-4">
          <h1 className="text-4xl font-bold text-white">Welcome</h1>
          <Link href="/login">
            <button className="w-40 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="w-40 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
