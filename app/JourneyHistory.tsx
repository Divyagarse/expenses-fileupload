// JourneyHistory.tsx
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const JourneyHistory = () => {
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
    {
      id: 3,
      purpose: "Purpose",
      date: "4th September 2025",
      distance: "20 km",
      start: "Start Location",
      end: "End Location",
    },
    {
      id: 4,
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
      <View className="bg-yellow-300 px-4 py-5 flex-row items-center justify-between shadow-md rounded-b-3xl">
        <View className="flex-row items-center">
          <Ionicons name="arrow-back-outline" size={24} color="black" />
          <Text className="ml-3 text-lg font-bold">Your Journeys</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="add-circle-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {/* Journey Cards */}
      <ScrollView className="p-4">
        {journeys.map((journey) => (
          <View
            key={journey.id}
            className="bg-white p-4 mb-4 rounded-2xl shadow-md"
          >
            {/* Card Header */}
            <View className="flex-row justify-between items-center">
              <Text className="font-bold text-base">{journey.purpose}</Text>
              <TouchableOpacity className="bg-gray-800 px-3 py-1 rounded-lg">
                <Text className="text-white text-xs font-medium">
                  View Details
                </Text>
              </TouchableOpacity>
            </View>

            {/* Date & Distance */}
            <Text className="text-sm text-gray-600 mt-2">{journey.date}</Text>
            <Text className="text-sm text-gray-600">{journey.distance}</Text>

            {/* Locations */}
            <View className="mt-3">
              <View className="flex-row items-center mb-1">
                <Ionicons name="location-outline" size={16} color="black" />
                <Text className="ml-2 text-sm text-gray-700">{journey.start}</Text>
              </View>
              <View className="flex-row items-center">
                <Ionicons name="location-outline" size={16} color="black" />
                <Text className="ml-2 text-sm text-gray-700">{journey.end}</Text>
              </View>
            </View>
          </View>
        ))}
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

export default JourneyHistory;
