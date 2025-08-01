"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignUpPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const [buttonDisabled, setbuttonDisabled] = React.useState(false);
  const [loading, setloading] = React.useState(false);

  const OnSignUp = async () => {
    try {
      setloading(true);
      const response = await axios.post("/api/users/signup", user);
      toast.success("User created successfully");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setbuttonDisabled(false);
    } else {
      setbuttonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex bg-gradient-to-r from-gray-900 via-black to-gray-800 flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl">{loading ? "Processing" : "SignUp"}</h1>
      <hr />
      <label htmlFor="username">Username:</label>
      <input
        className="p-2 border border-gray-300 bg-white rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black  text-center text-sm"
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Enter Username"
      />
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
        placeholder="Enter Password"
      />
      <button
        onClick={OnSignUp}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        {buttonDisabled ? "Enter Fields" : "Sign Up"}
      </button>
      <Link href="/login">Visit Login</Link>
    </div>
  );
}
