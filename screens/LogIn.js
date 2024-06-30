import * as React from "react";
import { useState } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LogIn = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    // Hardcoded credentials
    const validUsername = "ethan.hunt";
    const validPassword = "entity!2025";

    if (username === validUsername && password === validPassword) {
      navigation.navigate("Message");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <ImageBackground
      style={styles.container}
      resizeMode="cover"
      source={require("../assets/login.png")}
    >
      <View style={styles.content}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={[styles.pleaseEnterYour, styles.userNameTypo]}>
          Please enter your details
        </Text>
        <View style={styles.inputContainer}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/mdiuser.png")}
          />
          <TextInput
            style={styles.input}
            placeholder="User Name"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/materialsymbolslock.png")}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log in</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  content: {
    width: "80%", // Adjust the width of the content area as needed
    maxWidth: 400, // Maximum width to ensure it doesn't exceed a certain size
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background for content
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    fontSize: 28,
    fontFamily: FontFamily.hanumanBold,
    color: Color.colorRoyalblue,
    marginBottom: 20,
  },
  pleaseEnterYour: {
    fontSize: 18,
    fontFamily: FontFamily.hanumanRegular,
    color: Color.colorBlack,
    marginBottom: 30,
    textAlign: "center",
  },
  userNameTypo: {
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorSilver_100,
    paddingVertical: 5,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.hanumanRegular,
    color: Color.colorBlack,
  },
  errorMessage: {
    color: "red",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: Color.colorRoyalblue,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 20,
  },
  buttonText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.hanumanBold,
    color: "#fff",
  },
});

export default LogIn;

