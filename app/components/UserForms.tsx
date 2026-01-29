"use client";

import React, { useState } from "react";
import { createUser } from "@/actions";

type UserData = {
  name: string;
  email: string;
  message: string;
};

function UserForms() {
  const [submittedData, setSubmittedData] = useState<UserData | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const userData: UserData = {
      name: data.name as string,
      email: data.email as string,
      message: data.message as string,
    };

    await createUser(userData);
    setSubmittedData(userData);

    e.currentTarget.reset();
  };

  return (
    <div className="m-10 p-10 border-2 border-gray-300 rounded-lg">
      <h1 className="text-3xl text-center">User Forms</h1>

      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mt-6">
          <label className="block text-lg font-medium text-gray-300">
            Name:
          </label>
          <input
            type="text"
            name="name"
            className="mt-2 p-2 border border-gray-300 rounded-lg w-full"
            required
          />
        </div>

        <div className="mt-6">
          <label className="block text-lg font-medium text-gray-300">
            Email:
          </label>
          <input
            type="email"
            name="email"
            className="mt-2 p-2 border border-gray-300 rounded-lg w-full"
            required
          />
        </div>

        <div className="mt-6">
          <label className="block text-lg font-medium text-gray-300">
            Message:
          </label>
          <textarea
            name="message"
            className="mt-2 p-2 border border-gray-300 rounded-lg w-full"
            required
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Show submitted data */}
      {submittedData && (
        <div className="mt-6 p-4 border border-green-500 bg-green-100 text-gray-900 rounded-lg">
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Message:</strong> {submittedData.message}</p>
        </div>
      )}
    </div>
  );
}

export default UserForms;
