import * as React from "react";
import { Text, StyleSheet, View, Pressable, ImageBackground, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Message = () => {
  const navigation = useNavigation();

  const handleNavigateChats = () => {
    navigation.navigate("Chats"); // Navigate to the "Chats" screen
  };

  const handleNavigateInvoice = () => {
    navigation.navigate("Invoice"); // Navigate to the "Invoice" screen
  };

  return (
    <ImageBackground
      style={styles.container}
      resizeMode="cover"
      source={require("../assets/message.png")}
    >
      <Text style={styles.messages}>Messages</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.messageContainer}>
          <Pressable style={styles.messageItem} onPress={handleNavigateChats}>
            <Image
              style={styles.userImage}
              contentFit="cover"
              source={require("../assets/frame-4.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.userName}>Penelope</Text>
              <Text style={styles.messageText}>Message</Text>
            </View>
          </Pressable>

          <View style={styles.messageItem}>
            <Image
              style={styles.userImage}
              contentFit="cover"
              source={require("../assets/frame-5.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.userName}>Anastasia</Text>
              <Text style={styles.messageText}>Message</Text>
            </View>
          </View>

          <View style={styles.messageItem}>
            <Image
              style={styles.userImage}
              contentFit="cover"
              source={require("../assets/frame-6.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.userName}>Isabella</Text>
              <Text style={styles.messageText}>Message</Text>
            </View>
          </View>

          <View style={styles.messageItem}>
            <Image
              style={styles.userImage}
              contentFit="cover"
              source={require("../assets/frame-7.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.userName}>Felicitas</Text>
              <Text style={styles.messageText}>Message</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Pressable style={styles.invoiceButton} onPress={handleNavigateInvoice}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/weuiarrowfilled.png")}
        />
      </Pressable>
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
  messages: {
    top: 34,
    width: "100%",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.hanumanBold,
    fontWeight: "700",
    lineHeight: 26,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  scrollContainer: {
    alignItems: "center",
    paddingTop: 80,
    width: "100%",
  },
  messageContainer: {
    width: "95%", // Increase the width of the overall content
    alignItems: "center",
  },
  messageItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    width: "100%", // Ensure the item takes full width of the container
  },
  userImage: {
    width: 50, // Increase the size of the user image
    height: 50, // Increase the size of the user image
    marginRight: 10,
    borderRadius: Border.br_31xl,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  userName: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.hanumanBold,
    color: Color.colorBlack,
  },
  messageText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.hanumanRegular,
    color: Color.colorGray_100,
    textAlign: "right",
  },
  icon: {
    height: 30,
    width: 25,
  },
  invoiceButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 10,
    borderRadius: 10,
  },
});

export default Message;
