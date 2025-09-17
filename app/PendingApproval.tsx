// PendingApproval.tsx
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function PendingApproval() {
  const insets = useSafeAreaInsets();

  // Example dummy data
  const approvals = [
    { id: 1, type: "Expense Type", purpose: "Purpose", date: "4th September 2025", amount: "Rs. 30", submittedBy: "" },
    { id: 2, type: "Expense Type", purpose: "Purpose", date: "4th September 2025", amount: "Rs. 30", submittedBy: "" },
    { id: 3, type: "Expense Type", purpose: "Purpose", date: "4th September 2025", amount: "Rs. 30", submittedBy: "" },
    { id: 4, type: "Expense Type", purpose: "Purpose", date: "4th September 2025", amount: "Rs. 30", submittedBy: "" },
  ];

  return (
    <View className="flex-1 bg-gray-100" style={{ paddingTop: insets.top }}>
      {/* Header */}
      <View className="bg-[#FCD96F] px-4 py-3 flex-row items-center justify-between">
        <View className="flex-row items-center">
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={22} color="black" />
          </TouchableOpacity>
          <Text className="ml-3 font-bold text-lg text-black">
            Pending Approvals
          </Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="filter-outline" size={22} color="black" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
        <View className="px-4 mt-4 space-y-4">
          {approvals.map((item) => (
            <View
              key={item.id}
              className="bg-white rounded-xl shadow-sm p-4"
            >
              <View className="flex-row justify-between items-start">
                <View>
                  <Text className="text-[#F4A300] text-sm font-medium">
                    {item.type}
                  </Text>
                  <Text className="text-black font-bold text-base mt-1">
                    {item.purpose}
                  </Text>
                  <Text className="text-gray-600 text-sm mt-1">
                    {item.date}
                  </Text>
                  <Text className="text-gray-600 text-sm mt-1">
                    Submitted By: {item.submittedBy}
                  </Text>
                </View>
                <Text className="text-black font-bold text-base">
                  {item.amount}
                </Text>
              </View>

              {/* Buttons */}
              <View className="flex-row space-x-3 mt-4">
                <TouchableOpacity className="flex-1 bg-black py-3 rounded-lg flex-row justify-center items-center">
                  <Ionicons name="checkmark" size={18} color="white" />
                  <Text className="text-white font-semibold text-base ml-2">
                    Approve
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity className="flex-1 border border-gray-300 py-3 rounded-lg flex-row justify-center items-center">
                  <Ionicons name="close" size={18} color="black" />
                  <Text className="text-black font-semibold text-base ml-2">
                    Deny
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="absolute bottom-0 left-0 right-0 flex-row bg-white border-t border-gray-200 py-3 justify-around">
        <TouchableOpacity>
          <Ionicons name="home-outline" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="people-outline" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="refresh-outline" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person-outline" size={22} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
