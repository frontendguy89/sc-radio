import { ThemedView } from "@/components/ThemedView";
import LoginForm from "@/components/Login/LoginForm";
import Register from "@/components/Register/RegisterForm";
import { useState } from "react";
import Logo from "@/components/Logo/Logo";

export default function LoginRegister() {
  return (
    <ThemedView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Logo />
      <LoginForm />)
    </ThemedView>
  );
}
