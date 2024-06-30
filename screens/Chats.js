import * as React from "react";
import { useState } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Chats = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([
    { text: "Hey! Penelope this side", sender: "left" },
    { text: "Hyy! Wassup, How things going?", sender: "right" },
    { text: "It’s Fine, You Say", sender: "left" },
    { text: "Can you Please tell me the Wifi Password of the floor?", sender: "left" },
    { text: "Yeah! sure , It’s “dhtygte873@&”", sender: "right" },
    { text: "Thanks a lot", sender: "left" },
    { text: "Mention not!", sender: "right" },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages([...messages, { text: inputMessage, sender: "right" }]);
      setInputMessage("");
    }
  };

  return (
    <ImageBackground
      style={styles.container}
      resizeMode="cover"
      source={require("../assets/chats.png")}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Chats</Text>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.navigate("Message")}
        >
          <Image
            style={styles.backIcon}
            contentFit="cover"
            source={require("../assets/frame-8.png")}
          />
        </Pressable>

        <ScrollView contentContainerStyle={styles.chatContent}>
          <View style={styles.profileSection}>
            <Image
              style={styles.profileImage}
              contentFit="cover"
              source={require("../assets/frame-11.png")}
            />
            <View style={styles.profileText}>
              <Text style={styles.penelope}>Penelope</Text>
              <Text style={styles.active}>Active</Text>
            </View>
          </View>

          <View style={styles.messagesSection}>
            {messages.map((message, index) => (
              <View
                key={index}
                style={
                  message.sender === "left"
                    ? styles.messageWrapperLeft
                    : styles.messageWrapperRight
                }
              >
                <Text style={styles.message}>{message.text}</Text>
              </View>
            ))}
          </View>
        </ScrollView>

        <View style={styles.sendMessageSection}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            value={inputMessage}
            onChangeText={setInputMessage}
          />
          <Pressable onPress={handleSendMessage}>
            <Image
              style={styles.sendIcon}
              contentFit="cover"
              source={require("../assets/materialsymbolslightsendoutline.png")}
            />
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    width: "80%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontFamily: FontFamily.hanumanBold,
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    marginBottom: 20,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  backIcon: {
    width: 25,
    height: 25,
  },
  chatContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    alignSelf: "flex-start", // Aligns the profile section to the left
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: Border.br_31xl,
    marginRight: 10,
  },
  profileText: {
    alignItems: "flex-start", // Aligns text to the left
  },
  penelope: {
    fontFamily: FontFamily.hanumanBold,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    marginBottom: 5,
  },
  active: {
    fontFamily: FontFamily.hanumanLight,
    fontSize: FontSize.size_base,
    color: "#837676",
  },
  messagesSection: {
    width: "100%",
    paddingHorizontal: 20,
  },
  messageWrapperLeft: {
    marginBottom: 15,
    alignItems: "flex-start",
  },
  messageWrapperRight: {
    marginBottom: 15,
    alignItems: "flex-end",
  },
  message: {
    fontFamily: FontFamily.hanumanLight,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    backgroundColor: Color.colorLightgray,
    borderRadius: Border.br_xl,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  sendMessageSection: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: Border.br_xl,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontFamily: FontFamily.hanumanLight,
    fontSize: FontSize.size_base,
    marginRight: 10,
  },
  sendIcon: {
    width: 25,
    height: 25,
  },
});

export default Chats;
