import { Text } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";

export default function RegisterForm() {
    return (
        <ThemedView style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <ThemedText type="title">Register for South Coast Radio</ThemedText>
        </ThemedView>
    )
}