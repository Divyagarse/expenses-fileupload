// userdashboard.tsx
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const UserDashboard = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <View className="bg-yellow-300 p-6 rounded-b-3xl shadow-md">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Ionicons name="person-circle-outline" size={40} color="black" />
            <Text className="text-lg font-bold ml-2">Welcome User!</Text>
          </View>
          <TouchableOpacity className="bg-black px-3 py-1 rounded-lg">
            <Text className="text-white text-sm">This Month ▼</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Stats Section */}
      <View className="p-4">
        <View className="flex-row flex-wrap justify-between">
          {/* Card */}
          <View className="w-[48%] bg-white rounded-2xl p-6 mb-4 shadow-md">
            <Text className="text-2xl font-bold text-gray-900">2500</Text>
            <View className="flex-row items-center mt-1">
              <Ionicons name="arrow-up-outline" size={16} color="green" />
              <Text className="text-xs text-gray-500 ml-1">Expected Amount</Text>
            </View>
          </View>

          <View className="w-[48%] bg-white rounded-2xl p-6 mb-4 shadow-md">
            <Text className="text-2xl font-bold text-gray-900">1226</Text>
            <View className="flex-row items-center mt-1">
              <Ionicons name="arrow-up-outline" size={16} color="green" />
              <Text className="text-xs text-gray-500 ml-1">Distance</Text>
            </View>
          </View>

          <View className="w-[48%] bg-white rounded-2xl p-6 mb-4 shadow-md">
            <Text className="text-2xl font-bold text-gray-900">09</Text>
            <View className="flex-row items-center mt-1">
              <Ionicons name="arrow-up-outline" size={16} color="green" />
              <Text className="text-xs text-gray-500 ml-1">Hours Spent</Text>
            </View>
          </View>

          <View className="w-[48%] bg-white rounded-2xl p-6 mb-4 shadow-md">
            <Text className="text-2xl font-bold text-gray-900">11</Text>
            <View className="flex-row items-center mt-1">
              <Ionicons name="arrow-down-outline" size={16} color="red" />
              <Text className="text-xs text-gray-500 ml-1">Journeys</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Quick Actions */}
      <View className="px-4">
        <Text className="font-bold text-base mb-3">Quick Actions</Text>
        <View className="flex-row justify-between">
          <TouchableOpacity className="w-[48%] bg-yellow-300 py-4 rounded-2xl shadow-md items-center">
            <Ionicons name="car-outline" size={22} color="black" />
            <Text className="mt-1 font-medium">New Journey</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-[48%] bg-yellow-300 py-4 rounded-2xl shadow-md items-center">
            <Ionicons name="cash-outline" size={22} color="black" />
            <Text className="mt-1 font-medium">Add Expense</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Recent Activity */}
      <View className="px-4 mt-6">
        <Text className="font-bold text-base mb-3">Recent Activity</Text>

        <View className="flex-row justify-between items-center bg-white p-4 rounded-xl shadow mb-2">
          <View>
            <Text className="text-sm">Expense For Rs. 300</Text>
            <Text className="text-xs text-gray-500">1 hour ago</Text>
          </View>
          <Text className="text-green-600 font-semibold">Approved</Text>
        </View>

        <View className="flex-row justify-between items-center bg-white p-4 rounded-xl shadow mb-2">
          <View>
            <Text className="text-sm">Expense For Rs. 500</Text>
            <Text className="text-xs text-gray-500">2 hours ago</Text>
          </View>
          <Text className="text-red-600 font-semibold">Rejected</Text>
        </View>
      </View>

      {/* Bottom Nav */}
      <View className="flex-row justify-around items-center bg-white py-3 mt-6 border-t border-gray-200 shadow-sm">
        <Ionicons name="home-outline" size={24} color="black" />
        <Ionicons name="car-outline" size={24} color="black" />
        <Ionicons name="document-text-outline" size={24} color="black" />
        <Ionicons name="person-outline" size={24} color="black" />
      </View>
    </ScrollView>
  );
};

export default UserDashboard;
