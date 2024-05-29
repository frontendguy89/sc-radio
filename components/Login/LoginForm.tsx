import { Pressable, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function LoginForm(props: any) {
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <ThemedView
            style={{
              flex: 1,
              alignItems: "center",
              padding: 16,
              justifyContent: "center",
              gap: 16,
            }}
          >
            <ThemedText type="title">Login to South Coast Radio</ThemedText>
            <TextInput
              placeholder="Email"
              style={{
                padding: 8,
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 8,
                color: "white",
                width: "100%",
              }}
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
            />
            <TextInput
              placeholder="Password"
              style={{
                padding: 8,
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 8,
                color: "white",
                width: "100%",
              }}
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              secureTextEntry={true}
            />
            <View style={{ flexDirection: "row", gap: 16 }}>
              <Pressable
                onPress={handleSubmit}
                style={{
                  backgroundColor: "lightblue",
                  padding: 8,
                  borderRadius: 8,
                }}
              >
                <ThemedText
                  style={{ fontWeight: "bold", textTransform: "uppercase" }}
                >
                  Login
                </ThemedText>
              </Pressable>

              <Pressable
                style={{
                  backgroundColor: "orange",
                  padding: 8,
                  borderRadius: 8,
                }}
              >
                <ThemedText
                  style={{ fontWeight: "bold", textTransform: "uppercase" }}
                >
                  Register
                </ThemedText>
              </Pressable>
            </View>
          </ThemedView>
        )}
      </Formik>
    </>
  );
}
