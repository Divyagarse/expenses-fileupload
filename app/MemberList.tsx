// MemberList.tsx
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function MemberList() {
  const insets = useSafeAreaInsets();

  // Example members data
  const members = [
    { id: 1, name: "Keith Rabois", email: "keithr@gmail.com", status: "Active" },
    { id: 2, name: "Keith Rabois", email: "keithr@gmail.com", status: "Inactive" },
    { id: 3, name: "Keith Rabois", email: "keithr@gmail.com", status: "Active" },
    { id: 4, name: "Keith Rabois", email: "keithr@gmail.com", status: "Active" },
  ];

  return (
    <View className="flex-1 bg-white" style={{ paddingTop: insets.top }}>
      {/* Header */}
      <View className="bg-[#FCD96F] px-4 py-3 flex-row items-center">
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={22} color="black" />
        </TouchableOpacity>
        <Text className="ml-3 font-bold text-lg text-black">Member List</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
        {/* Search Bar */}
        <View className="flex-row items-center px-4 mt-4">
          <View className="flex-1 flex-row items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
            <Ionicons name="search" size={18} color="black" />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#999"
              className="ml-2 flex-1 text-black"
            />
          </View>
          <TouchableOpacity className="ml-3 bg-[#FCD96F] p-2 rounded-lg shadow">
            <Ionicons name="add" size={22} color="black" />
          </TouchableOpacity>
        </View>

        {/* Filter Buttons */}
        <View className="flex-row px-4 mt-4 space-x-3">
          <TouchableOpacity className="border border-gray-400 px-4 py-2 rounded-lg">
            <Text className="text-black">All</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#FCD96F] border border-gray-400 px-4 py-2 rounded-lg">
            <Text className="text-black font-semibold">Admin</Text>
          </TouchableOpacity>
          <TouchableOpacity className="border border-gray-400 px-4 py-2 rounded-lg">
            <Text className="text-black">On-ground</Text>
          </TouchableOpacity>
        </View>

        {/* Member Cards */}
        <View className="mt-5 space-y-3 px-4">
          {members.map((member) => (
            <View
              key={member.id}
              className="bg-white rounded-xl shadow-md p-4 flex-row items-center justify-between"
            >
              {/* Avatar + Details */}
              <View className="flex-row items-center">
                <Ionicons name="person-circle" size={40} color="black" />
                <View className="ml-3">
                  <Text className="font-semibold text-black">{member.name}</Text>
                  <Text className="text-gray-600 text-sm">{member.email}</Text>
                </View>
              </View>

              {/* Status */}
              <Text
                className={`font-medium ${
                  member.status === "Active" ? "text-green-600" : "text-red-500"
                }`}
              >
                {member.status}
              </Text>
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
