import { Ionicons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";

// Type for receipt file
type ReceiptFile = {
  uri: string;
  name: string;
  type: string;
};

const ExpenseForm = () => {
  const [selectedType, setSelectedType] = useState("Fuel");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [receiptFile, setReceiptFile] = useState<ReceiptFile | null>(null);

  const expenseTypes = [
    "Fuel",
    "Accomodation",
    "Food",
    "Parking",
    "Miscellaneous",
  ];
  const router = useRouter();

  // 📂 Pick file
  const pickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ["image/*", "application/pdf"],
        copyToCacheDirectory: true,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const file = result.assets[0];
        setReceiptFile({
          uri: file.uri,
          name: file.name ?? "receipt",
          type: file.mimeType ?? "application/octet-stream",
        });
      }
    } catch (err) {
      console.error("File pick error:", err);
    }
  };

  // 📤 Save expense
const handleSave = async () => {
  if (!amount || !selectedType || !receiptFile) {
    Alert.alert("Error", "Please fill all required fields and upload a bill.");
    return;
  }

  try {
    const formData = new FormData();
    formData.append("amount", amount);
    formData.append("description", description);
    formData.append("expenseType", selectedType);

    if (receiptFile) {
      // For web: convert URI to File
      let fileToUpload: any;
      if (Platform.OS === "web") {
        const response = await fetch(receiptFile.uri);
        const blob = await response.blob();
        fileToUpload = new File([blob], receiptFile.name, { type: receiptFile.type });
      } else {
        // Native: use the URI directly
        fileToUpload = {
          uri: receiptFile.uri,
          name: receiptFile.name,
          type: receiptFile.type,
        } as any;
      }

      formData.append("receipt", fileToUpload);
    }

    const response = await fetch("http://192.168.1.32:5000/api/expenses", {
      method: "POST",
      body: formData, // do NOT set Content-Type manually
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(errText);
    }

    const data = await response.json();
    console.log("✅ Expense saved:", data);

    router.push("/PendingScreen");
  } catch (error: any) {
    console.error("❌ Submit error:", error.message);
    Alert.alert("Error", "Failed to submit expense");
  }
};


  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-yellow-300 px-4 py-5 flex-row items-center shadow-md rounded-b-3xl">
        <Ionicons name="arrow-back-outline" size={24} color="black" />
        <Text className="ml-3 text-lg font-bold">Add Expense Details</Text>
      </View>

      <ScrollView className="p-4">
        {/* Expense Type */}
        <View className="bg-white p-4 rounded-2xl shadow-md mb-4">
          <Text className="font-semibold text-base mb-2">
            Expense Type <Text className="text-red-500">*</Text>
          </Text>
          <View className="flex-row flex-wrap gap-2">
            {expenseTypes.map((type) => (
              <TouchableOpacity
                key={type}
                onPress={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-lg border shadow-sm ${
                  selectedType === type
                    ? "bg-yellow-300 border-yellow-400"
                    : "bg-white border-gray-300"
                }`}
              >
                <Text
                  className={`text-sm font-medium ${
                    selectedType === type ? "text-black" : "text-gray-700"
                  }`}
                >
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Amount */}
        <View className="bg-white p-4 rounded-2xl shadow-md mb-4">
          <Text className="font-semibold text-base mb-2">
            Amount <Text className="text-red-500">*</Text>
          </Text>
          <TextInput
            placeholder="Rs. 20"
            keyboardType="numeric"
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            value={amount}
            onChangeText={setAmount}
          />
        </View>

        {/* Description */}
        <View className="bg-white p-4 rounded-2xl shadow-md mb-4">
          <Text className="font-semibold text-base mb-2">Description</Text>
          <TextInput
            placeholder="Enter description"
            multiline
            numberOfLines={3}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            value={description}
            onChangeText={setDescription}
          />
        </View>

        {/* Add Bills */}
        <View className="bg-white p-4 rounded-2xl shadow-md mb-4 items-center justify-center">
          <Text className="font-semibold text-base mb-2">
            Add Bills <Text className="text-red-500">*</Text>
          </Text>
          <View className="border border-gray-300 rounded-xl w-full h-28 flex items-center justify-center">
            <TouchableOpacity onPress={pickFile}>
              <Ionicons name="document-text-outline" size={28} color="black" />
            </TouchableOpacity>
            {receiptFile && (
              <Text className="mt-2 text-sm text-gray-600">
                Selected: {receiptFile.name}
              </Text>
            )}
          </View>
        </View>

        {/* Save & Cancel Buttons */}
        <TouchableOpacity
          className="bg-gray-900 py-3 rounded-xl mb-3 shadow-md"
          onPress={handleSave}
        >
          <Text className="text-center text-white font-semibold text-base">
            Save
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="border border-gray-400 py-3 rounded-xl shadow-sm"
          onPress={() => router.back()}
        >
          <Text className="text-center text-gray-800 font-semibold text-base">
            Cancel
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="flex-row justify-around items-center bg-white py-3 border-t border-gray-200 shadow-sm">
        <TouchableOpacity onPress={() => router.push("/Userdashboard")}>
          <Ionicons name="home-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/JourneyHistory")}>
          <Ionicons name="car-outline" size={24} color="black" />
        </TouchableOpacity>
        <Ionicons name="wallet-outline" size={24} color="black" />
        <Ionicons name="person-outline" size={24} color="black" />
      </View>
    </View>
  );
};

export default ExpenseForm;
