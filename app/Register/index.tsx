import Logo from "@/components/Logo/Logo";
import RegisterForm from "@/components/Register/RegisterForm";
import { ThemedView } from "@/components/ThemedView";


export default function Register() {
  return (
    <ThemedView style={{flex:1, alignItems: "center", justifyContent: "center"}}>
      <Logo />
      <RegisterForm />
    </ThemedView>
  );
}
