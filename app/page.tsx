"use client";
import {
  getMyProfileService,
  loginService,
  logoutService,
} from "@/services/authService";
import { useAuthStore } from "@/store/useAuthStore";
import React, { useState } from "react";

const HomePage = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore((state) => state.user);
  const loading = useAuthStore((state) => state.loading);
  const exitUser = useAuthStore((state) => state.logout);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginService(values.email, values.password)
      .then((response) => {
        if (response.data.success) {
          getMyProfileService().then((res) => {
            if (res.data.success) {
              setUser(res.data.data);
            }
          });
        } else {
          console.error("Login failed:", response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
  };

  const handleLogout = () => {
    logoutService().then((res) => {
      if (res.data.success) {
        exitUser();
        window.location.reload();
      }
    });
  };

  return (
    <div>
      {loading ? (
        <div>yükleniyor</div>
      ) : user ? (
        user?.fullName
      ) : (
        <button>giriş yap</button>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      <button
        type="button"
        onClick={handleLogout}
        className="px-2 py-1 rounded-md bg-red-500 cursor-pointer text-white"
      >
        çıkış yap
      </button>
    </div>
  );
};

export default HomePage;
