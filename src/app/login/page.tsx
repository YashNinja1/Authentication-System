"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignUpPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const [loading, setloading] = React.useState(false);

  const OnLogIn = async () => {
    try {
      setloading(true);
      const response = await axios.post("/api/users/login", user);
      toast.success("Login success");
      router.push("/profile");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl">{loading ? "Processing" : "Login"}</h1>
      <hr />
      {/* <label htmlFor="username">Username:</label>
      <input
        className="p-2 border border-gray-300 bg-white rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black  text-center text-sm"
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Enter Username"
      /> */}
      <label htmlFor="email">Email:</label>
      <input
        className="p-2 border border-gray-300 bg-white rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black  text-center text-sm"
        id="email"
        type="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Enter Email"
      />
      <label htmlFor="password">Password:</label>
      <input
        className="p-2 border border-gray-300 bg-white rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black  text-center text-sm"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Enter Email"
      />
      <button
        onClick={OnLogIn}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        LogIn
      </button>
      <Link href="/profile">Visit Profile</Link>
    </div>
  );
}
