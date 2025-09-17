// MemberProfile.tsx
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function MemberProfile() {
  const insets = useSafeAreaInsets();

  // Dummy journey data
  const journeys = [
    { id: 1, purpose: "Purpose", date: "4th September 2025", distance: "20 km", start: "Start Location", end: "End Location" },
    { id: 2, purpose: "Purpose", date: "4th September 2025", distance: "20 km", start: "Start Location", end: "End Location" },
  ];

  return (
    <View className="flex-1 bg-gray-100" style={{ paddingTop: insets.top }}>
      {/* Header */}
      <View className="bg-[#FCD96F] px-4 py-3 flex-row items-center">
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={22} color="black" />
        </TouchableOpacity>
        <Text className="ml-3 font-bold text-lg text-black">Member Profile</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
        {/* Profile Section */}
        <View className="items-center mt-6">
          <View className="w-24 h-24 rounded-full bg-white shadow-md border-2 border-white items-center justify-center">
            <Ionicons name="person" size={60} color="black" />
          </View>
          <Text className="mt-3 font-bold text-lg text-black">Keith Rabois</Text>
          <Text className="text-gray-600 text-sm">keithr@gmail.com</Text>
          <Text className="text-green-600 font-semibold mt-1">Active</Text>
        </View>

        {/* Balance Section */}
        <View className="flex-row px-4 mt-6 space-x-4">
          <View className="flex-1 bg-white rounded-xl shadow-sm p-4 justify-center">
            <Text className="font-semibold text-black">Current Balance:</Text>
            <Text className="text-black mt-1">Rs. 200</Text>
          </View>

          <TouchableOpacity className="flex-1 bg-[#FCD96F] rounded-xl shadow-sm p-4 items-center justify-center">
            <Ionicons name="add-circle-outline" size={28} color="black" />
            <Text className="mt-1 font-semibold text-black">Add Balance</Text>
          </TouchableOpacity>
        </View>

        {/* Journeys Section */}
        <View className="px-4 mt-6">
          <Text className="font-bold text-base text-black mb-3">Journeys</Text>

          {journeys.map((item) => (
            <View key={item.id} className="bg-white rounded-xl shadow-sm p-4 mb-4">
              <View className="flex-row justify-between items-center">
                <View>
                  <Text className="text-black font-bold">{item.purpose}</Text>
                  <Text className="text-gray-600 text-sm mt-1">{item.date}</Text>
                  <Text className="text-gray-600 text-sm mt-1">{item.distance}</Text>

                  <View className="flex-row items-center mt-2">
                    <Ionicons name="location-outline" size={16} color="black" />
                    <Text className="ml-1 text-gray-700 text-sm">{item.start}</Text>
                  </View>

                  <View className="flex-row items-center mt-1">
                    <Ionicons name="location-outline" size={16} color="black" />
                    <Text className="ml-1 text-gray-700 text-sm">{item.end}</Text>
                  </View>
                </View>

                <TouchableOpacity className="bg-black px-4 py-2 rounded-lg">
                  <Text className="text-white font-semibold text-sm">View Details</Text>
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
