import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

const JourneyDetailsAdmin = () => {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-yellow-200 p-4 flex-row items-center">
        <TouchableOpacity>
          <Text className="text-2xl">←</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <View className="items-center bg-yellow-200 pb-6">
        <View className="w-24 h-24 rounded-full bg-gray-400 border-4 border-white justify-center items-center -mb-12">
          <Text className="text-white text-3xl">👤</Text>
        </View>
        <Text className="font-bold text-lg">Keith Rabois</Text>
        <Text className="text-gray-500">keithr@gmail.com</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {/* Expense Card */}
        <View className="bg-white p-4 rounded-lg shadow-md mb-4 mt-12">
          {showDetails && (
            <View>
              <TouchableOpacity
                onPress={() => setShowDetails(false)}
                className="absolute top-4 right-4"
              >
                <Text className="text-lg">✕</Text>
              </TouchableOpacity>

              <Text className="font-bold text-base mb-1">Purpose</Text>
              <Text className="text-gray-500 text-sm mb-1">4th September 2025</Text>
              <Text className="text-gray-500 text-sm mb-2">20 km</Text>

              <View className="flex-row items-center mb-2">
                <Text className="text-gray-500 text-sm mr-2">📍 Start Location</Text>
              </View>
              <View className="flex-row items-center mb-2">
                <Text className="text-gray-500 text-sm mr-2">📍 End Location</Text>
              </View>

              <Text className="text-gray-800 font-bold mb-1">
                Total Expense: <Text className="text-black">$20</Text>
              </Text>
              <Text className="text-gray-800 font-bold mb-1">Expense Type: Food</Text>
              <Text className="text-gray-800 font-bold mb-1">Description:</Text>
              <Text className="text-gray-500 mb-4">Receipts:</Text>

              <View className="flex-row space-x-2">
                <View className="w-20 h-20 bg-yellow-200 rounded"></View>
                <View className="w-20 h-20 bg-yellow-200 rounded"></View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default JourneyDetailsAdmin;
