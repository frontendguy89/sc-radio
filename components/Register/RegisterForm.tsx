import { Pressable, TextInput } from "react-native";
import { Formik } from "formik";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";

export default function RegisterForm() {
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
            <ThemedText type="title">Register for South Coast Radio</ThemedText>
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
            />
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
          </ThemedView>
        )}
      </Formik>
    </>
  );
}
