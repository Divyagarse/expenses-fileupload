// Expenses.tsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
const Expenses = () => {
  const [activeTab, setActiveTab] = useState("Pending");

  const expenses = [
    {
      id: 1,
      type: "Expense Type",
      purpose: "Purpose",
      date: "4th September 2025",
      start: "Start Location",
      end: "End Location",
      amount: "Rs. 30",
    },
    {
      id: 2,
      type: "Expense Type",
      purpose: "Purpose",
      date: "4th September 2025",
      start: "Start Location",
      end: "End Location",
      amount: "Rs. 30",
    },
    {
      id: 3,
      type: "Expense Type",
      purpose: "Purpose",
      date: "4th September 2025",
      start: "Start Location",
      end: "End Location",
      amount: "Rs. 30",
    },
  ];

  const tabs = ["All", "Pending", "Approved", "Rejected"];
const router = useRouter();
  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-yellow-300 px-4 py-5 flex-row items-center shadow-md rounded-b-3xl">
        <Ionicons name="arrow-back-outline" size={24} color="black" />
        <Text className="ml-3 text-lg font-bold">Expenses</Text>
      </View>

      {/* Tabs */}
      <View className="flex-row justify-around mt-4 px-3">
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full border ${
              activeTab === tab
                ? "bg-yellow-300 border-yellow-300"
                : "bg-white border-gray-300"
            }`}
          >
            <Text
              className={`text-sm font-medium ${
                activeTab === tab ? "text-black" : "text-gray-600"
              }`}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Expenses List */}
      <ScrollView className="mt-4 px-4">
        {expenses.map((item) => (
          <View
            key={item.id}
            className="bg-white p-4 mb-4 rounded-2xl shadow-md"
          >
            <Text className="text-xs text-yellow-600 font-medium">
              {item.type}
            </Text>

            <View className="flex-row justify-between items-center mt-1">
              <Text className="text-base font-bold">{item.purpose}</Text>
              <Text className="text-base font-bold text-gray-800">
                {item.amount}
              </Text>
            </View>

            <Text className="text-sm text-gray-600 mt-1">{item.date}</Text>

            <View className="mt-2">
              <View className="flex-row items-center mb-1">
                <Ionicons name="location-outline" size={16} color="black" />
                <Text className="ml-2 text-sm text-gray-700">{item.start}</Text>
              </View>
              <View className="flex-row items-center">
                <Ionicons name="location-outline" size={16} color="black" />
                <Text className="ml-2 text-sm text-gray-700">{item.end}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="flex-row justify-around items-center bg-white py-3 border-t border-gray-200 shadow-sm">
       <TouchableOpacity onPress={() => router.push("/User/(tabs)/home")}>
    <Ionicons name="home-outline" size={24} color="black" />
  </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/User/(tabs)/JourneyHistory")}>
    <Ionicons name="car-outline" size={24} color="black" />
  </TouchableOpacity>
        <Ionicons name="wallet-outline" size={24} color="black" />
        <TouchableOpacity onPress={() => router.push("/User/(tabs)/profile")}>
          <Ionicons name="person-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Expenses;