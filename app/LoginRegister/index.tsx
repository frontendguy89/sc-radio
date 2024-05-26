import { ThemedView } from "@/components/ThemedView";
import Login from "@/components/Login/LoginForm";
import Register from "@/components/Register/RegisterForm";
import { useState } from "react";
import Logo from "@/components/Logo/Logo";

export default function LoginRegister() {
  const [isLoggedIn, setIsLoggedIn] = useState("true");
  return (
    <ThemedView style={{flex:1, alignItems:"center", justifyContent: "center"}}>
        <Logo />
      {isLoggedIn ? 
      (<Login />) :
      (<Register />)}
    </ThemedView>
   
  );
}
