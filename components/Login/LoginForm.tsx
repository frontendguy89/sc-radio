import { Pressable, TextInput, View, Text } from "react-native";
import { Formik } from "formik";

export default function Login(props: any) {
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              padding: 16,
              justifyContent: "center",
              gap: 16,
            }}
          >
            <Text>Login to South Coast Radio</Text>
            <TextInput
              placeholder="Email"
              style={{ padding: 8 }}
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
            />
            <TextInput
              placeholder="Password"
              style={{ padding: 8 }}
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              secureTextEntry={true}
            />
            <View style={{ flexDirection: "row", gap: 16 }}>
              <Pressable onPress={handleSubmit} style={{backgroundColor:"lightblue", padding:8, borderRadius:8}}>
                <Text>Login</Text>
              </Pressable>
              <Pressable style={{backgroundColor:"orange", padding:8, borderRadius:8}}>
                <Text>Register</Text>
              </Pressable>
            </View>
          </View>
        )}
      </Formik>
    </>
  );
}
