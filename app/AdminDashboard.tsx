// AdminDashboard.tsx
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function AdminDashboard() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-white" style={{ paddingTop: insets.top }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
        {/* Header */}
        <View className="bg-[#FCD96F] px-5 py-4 flex-row justify-between items-center">
          <View className="flex-row items-center">
            <Ionicons name="person-circle" size={32} color="black" />
            <Text className="ml-2 font-bold text-lg text-black">
              Welcome Admin!
            </Text>
          </View>
          <TouchableOpacity className="bg-black/10 px-3 py-2 rounded-md flex-row items-center">
            <Text className="text-black text-sm">This Month</Text>
            <Ionicons name="chevron-down" size={16} color="black" />
          </TouchableOpacity>
        </View>

        {/* Stats Cards */}
        <View className="grid grid-cols-2 gap-4 px-5 mt-4">
          <View className="bg-white rounded-xl shadow-md p-4 items-center">
            <Text className="text-xl font-bold text-black">2500</Text>
            <Ionicons name="arrow-up" size={16} color="green" />
            <Text className="text-gray-600 text-sm mt-1">Total Expenses</Text>
          </View>

          <View className="bg-white rounded-xl shadow-md p-4 items-center">
            <Text className="text-xl font-bold text-black">1226</Text>
            <Ionicons name="arrow-up" size={16} color="green" />
            <Text className="text-gray-600 text-sm mt-1">Total Distance</Text>
          </View>

          <View className="bg-white rounded-xl shadow-md p-4 items-center">
            <Text className="text-xl font-bold text-black">09</Text>
            <Ionicons name="arrow-up" size={16} color="green" />
            <Text className="text-gray-600 text-sm mt-1">Efficiency Rate</Text>
          </View>

          <View className="bg-white rounded-xl shadow-md p-4 items-center">
            <Text className="text-xl font-bold text-black">11</Text>
            <Ionicons name="arrow-down" size={16} color="red" />
            <Text className="text-gray-600 text-sm mt-1">Compliance Rate</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <Text className="px-5 mt-6 mb-3 font-bold text-base text-black">
          Quick Actions
        </Text>
        <View className="flex-row justify-between px-5">
          <TouchableOpacity className="bg-[#FCD96F] flex-1 mr-2 rounded-xl py-4 shadow-md items-center">
            <Ionicons name="person-add" size={20} color="black" />
            <Text className="mt-2 text-black font-medium">Add A Member</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-[#FCD96F] flex-1 ml-2 rounded-xl py-4 shadow-md items-center">
            <MaterialIcons name="done-all" size={20} color="black" />
            <Text className="mt-2 text-black font-medium">Bulk Approval</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Activity */}
        <Text className="px-5 mt-6 mb-3 font-bold text-base text-black">
          Recent Activity
        </Text>
        <View className="px-5 space-y-3">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Ionicons name="checkmark-done" size={18} color="black" />
              <Text className="ml-2 text-black">4 Expenses Approved</Text>
            </View>
            <Text className="text-gray-500 text-xs">1 hour ago</Text>
          </View>

          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Ionicons name="document-text" size={18} color="black" />
              <Text className="ml-2 text-black">10 New Expense Submissions</Text>
            </View>
            <Text className="text-gray-500 text-xs">1 hour ago</Text>
          </View>
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
