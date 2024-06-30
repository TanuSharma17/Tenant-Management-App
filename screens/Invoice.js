import * as React from "react";
import { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ImageBackground,
  TextInput,
  Modal,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Invoice = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [invoices, setInvoices] = useState([
    { id: "#106", date: "26/06/24", tenant: "Marco Rossi", amount: "$1,200", status: "Paid" },
    { id: "#413", date: "26/06/24", tenant: "Giulia Bianchi", amount: "$1,350", status: "Paid" },
  ]);
  const [newInvoice, setNewInvoice] = useState({
    id: "",
    date: "",
    tenant: "",
    amount: "",
    status: "",
  });

  const handleAddInvoice = () => {
    if (newInvoice.id && newInvoice.date && newInvoice.tenant && newInvoice.amount && newInvoice.status) {
      setInvoices([...invoices, newInvoice]);
      setNewInvoice({ id: "", date: "", tenant: "", amount: "", status: "" });
      setModalVisible(false);
    } else {
      alert("Please fill in all details");
    }
  };

  return (
    <ImageBackground
      style={[styles.container, styles.invoiceIcon]}
      resizeMode="cover"
      source={require("../assets/invoice.png")}
    >
      <Text style={styles.invoiceTitle}>Invoice</Text>
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Text style={styles.headerText}>ID</Text>
          <Text style={styles.headerText}>DATE</Text>
          <Text style={styles.headerText}>TENANT</Text>
          <Text style={styles.headerText}>AMOUNT</Text>
          <Text style={styles.headerText}>STATUS</Text>
        </View>
        <View style={styles.content}>
          {invoices.map((invoice, index) => (
            <View key={index} style={[styles.row, index % 2 && styles.altRow]}>
              <Text style={styles.rowText}>{invoice.id}</Text>
              <Text style={styles.rowText}>{invoice.date}</Text>
              <Text style={styles.rowText}>{invoice.tenant}</Text>
              <Text style={styles.rowText}>{invoice.amount}</Text>
              <Text style={styles.rowText}>{invoice.status}</Text>
            </View>
          ))}
        </View>
      </View>
      <Pressable
        style={styles.backButton}
        onPress={() => navigation.navigate("Message")}
      >
        <Image
          style={styles.backIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Pressable
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Invoice</Text>
            <TextInput
              style={styles.input}
              placeholder="ID"
              value={newInvoice.id}
              onChangeText={(text) => setNewInvoice({ ...newInvoice, id: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Date"
              value={newInvoice.date}
              onChangeText={(text) => setNewInvoice({ ...newInvoice, date: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Tenant"
              value={newInvoice.tenant}
              onChangeText={(text) => setNewInvoice({ ...newInvoice, tenant: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Amount"
              value={newInvoice.amount}
              onChangeText={(text) => setNewInvoice({ ...newInvoice, amount: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Status"
              value={newInvoice.status}
              onChangeText={(text) => setNewInvoice({ ...newInvoice, status: text })}
            />
            <Pressable style={styles.submitButton} onPress={handleAddInvoice}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </Pressable>
            <Pressable style={styles.cancelButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  invoiceIcon: {
    height: "100%",
    width: "100%",
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    width: "80%",
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  invoiceTitle: {
    fontFamily: FontFamily.hanumanBold,
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    textAlign: "center",
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  headerText: {
    fontFamily: FontFamily.hanumanBold,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    opacity: 0.5,
  },
  content: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorLightgray,
  },
  altRow: {
    backgroundColor: Color.colorWhitesmoke,
  },
  rowText: {
    fontFamily: FontFamily.hanumanRegular,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
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
  addButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: Color.colorBlue,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  addButtonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.hanumanBold,
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontFamily: FontFamily.hanumanBold,
    fontSize: FontSize.size_3xl,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderRadius: Border.br_xl,
    marginBottom: 10,
    fontFamily: FontFamily.hanumanRegular,
    fontSize: FontSize.size_base,
  },
  submitButton: {
    backgroundColor: Color.colorBlue,
    padding: 10,
    borderRadius: Border.br_xl,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  submitButtonText: {
    color: Color.colorWhite,
    fontFamily: FontFamily.hanumanBold,
    fontSize: FontSize.size_base,
  },
  cancelButton: {
    padding: 10,
    borderRadius: Border.br_xl,
    width: "100%",
    alignItems: "center",
  },
  cancelButtonText: {
    color: Color.colorBlack,
    fontFamily: FontFamily.hanumanBold,
    fontSize: FontSize.size_base,
  },
});

export default Invoice;

