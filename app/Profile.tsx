// Profile.tsx
import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Profile = () => {
  const journeys = [
    {
      id: 1,
      purpose: "Purpose",
      date: "4th September 2025",
      distance: "20 km",
      start: "Start Location",
      end: "End Location",
    },
    {
      id: 2,
      purpose: "Purpose",
      date: "4th September 2025",
      distance: "20 km",
      start: "Start Location",
      end: "End Location",
    },
  ];

  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-yellow-300 px-4 py-5 flex-row items-center shadow-md rounded-b-3xl">
        <Ionicons name="arrow-back-outline" size={24} color="black" />
        <Text className="ml-3 text-lg font-bold">Profile</Text>
      </View>

      <ScrollView className="flex-1 px-4">
        {/* Profile Section */}
        <View className="items-center mt-6">
          <View className="w-24 h-24 rounded-full bg-white shadow-md items-center justify-center">
            <Ionicons name="person-outline" size={60} color="black" />
          </View>
          <Text className="mt-4 text-lg font-bold">Keith Rabois</Text>
          <Text className="text-gray-600">keithr@gmail.com</Text>
          <TouchableOpacity className="border border-gray-400 px-4 py-1 mt-3 rounded-full shadow-sm">
            <Text className="text-sm text-gray-700 font-medium">
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>

        {/* Balance Info */}
        <View className="flex-row justify-between mt-6">
          <View className="w-[48%] bg-white rounded-2xl p-4 shadow-md items-center">
            <Text className="font-semibold">Current Balance:</Text>
            <Text className="mt-1 text-gray-700">Rs. 200</Text>
          </View>
          <View className="w-[48%] bg-white rounded-2xl p-4 shadow-md items-center">
            <Text className="font-semibold">Amount Claimed:</Text>
            <Text className="mt-1 text-gray-700">Rs. 200</Text>
          </View>
        </View>

        {/* Recent Journeys */}
        <View className="mt-6">
          <Text className="font-bold text-base mb-3">Recent Journeys</Text>
          {journeys.map((journey) => (
            <View
              key={journey.id}
              className="bg-white p-4 mb-4 rounded-2xl shadow-md"
            >
              <View className="flex-row justify-between items-center">
                <Text className="font-bold text-base">{journey.purpose}</Text>
                <TouchableOpacity className="bg-gray-800 px-3 py-1 rounded-lg">
                  <Text className="text-white text-xs font-medium">
                    View Details
                  </Text>
                </TouchableOpacity>
              </View>

              <Text className="text-sm text-gray-600 mt-2">{journey.date}</Text>
              <Text className="text-sm text-gray-600">{journey.distance}</Text>

              <View className="mt-3">
                <View className="flex-row items-center mb-1">
                  <Ionicons name="location-outline" size={16} color="black" />
                  <Text className="ml-2 text-sm text-gray-700">
                    {journey.start}
                  </Text>
                </View>
                <View className="flex-row items-center">
                  <Ionicons name="location-outline" size={16} color="black" />
                  <Text className="ml-2 text-sm text-gray-700">
                    {journey.end}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Settings & Logout */}
        <View className="mt-4">
          <TouchableOpacity className="bg-white p-4 rounded-2xl shadow-md flex-row items-center justify-between mb-3">
            <View className="flex-row items-center">
              <Ionicons name="settings-outline" size={20} color="black" />
              <Text className="ml-3 font-medium text-gray-800">Settings</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={20} color="black" />
          </TouchableOpacity>

          <TouchableOpacity className="bg-white p-4 rounded-2xl shadow-md flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Ionicons name="log-out-outline" size={20} color="red" />
              <Text className="ml-3 font-medium text-red-600">Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="flex-row justify-around items-center bg-white py-3 border-t border-gray-200 shadow-sm">
        <Ionicons name="home-outline" size={24} color="black" />
        <Ionicons name="car-outline" size={24} color="black" />
        <Ionicons name="wallet-outline" size={24} color="black" />
        <Ionicons name="person-outline" size={24} color="black" />
      </View>
    </View>
  );
};

export default Profile;
