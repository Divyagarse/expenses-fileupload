import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

const ExpenseDetailsAdmin = () => {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-yellow-200 p-4 flex-row items-center justify-between">
        <TouchableOpacity>
          <Text className="text-2xl">←</Text>
        </TouchableOpacity>
        <Text className="text-lg font-bold">Pending Approvals</Text>
        <TouchableOpacity>
          <Text className="text-2xl">⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* Expense List */}
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View className="bg-white p-4 rounded-lg shadow-md mb-4">
          <View className="flex-row justify-between items-center mb-2">
            <View>
              <Text className="text-yellow-500 text-xs">Expense Type</Text>
              <Text className="font-bold text-base">Purpose</Text>
              <Text className="text-gray-500 text-sm">4th September 2025</Text>
            </View>
            <Text className="font-bold text-base">Rs. 30</Text>
          </View>

          {/* Expense Details Modal */}
          {showDetails && (
            <View className="bg-white p-4 rounded-lg shadow-md mt-4 relative">
              <TouchableOpacity
                onPress={() => setShowDetails(false)}
                className="absolute top-3 right-3"
              >
                <Text className="text-lg">✕</Text>
              </TouchableOpacity>

              <Text className="font-bold text-base mb-1">Purpose</Text>
              <Text className="text-gray-500 text-sm mb-1">
                4th September 2025
              </Text>
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

          {/* Approve / Deny Buttons */}
          <View className="flex-row space-x-4 mt-4">
            <TouchableOpacity className="flex-1 bg-black py-3 rounded items-center">
              <Text className="text-white font-bold">Approve</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 border border-gray-400 py-3 rounded items-center">
              <Text className="text-gray-700 font-bold">Deny</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ExpenseDetailsAdmin;
