import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const AdminProfile = () => {
  const [baseRate, setBaseRate] = useState('20');
  const [maxExpense, setMaxExpense] = useState('20');
  const [reportPeriod, setReportPeriod] = useState('This Month');
  const [reportFormat, setReportFormat] = useState('PDF');

  return (
    <ScrollView className="flex-1 bg-yellow-200">
      <View className="p-4">
        {/* Header */}
        <View className="flex-row items-center space-x-4 mb-6">
          <TouchableOpacity>
            <Text className="text-2xl">←</Text>
          </TouchableOpacity>
          <View className="flex-1 items-center">
            <View className="w-20 h-20 rounded-full bg-gray-400 justify-center items-center">
              <Text className="text-white text-2xl">👤</Text>
            </View>
            <Text className="mt-2 text-lg font-bold">Keith Rabois</Text>
            <Text className="text-sm text-gray-600">keithr@gmail.com</Text>
            <TouchableOpacity className="mt-2 px-4 py-1 border border-gray-500 rounded">
              <Text>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Base Rate Per Km */}
        <View className="bg-white p-4 rounded-lg shadow-md mb-4">
          <Text className="font-bold mb-2">Base Rate Per Km</Text>
          <TextInput
            value={baseRate}
            onChangeText={setBaseRate}
            keyboardType="numeric"
            className="border border-gray-300 rounded px-3 py-2"
          />
        </View>

        {/* Maximum Expense Limit */}
        <View className="bg-white p-4 rounded-lg shadow-md mb-4">
          <Text className="font-bold mb-2">Maximum Expense Limit</Text>
          <TextInput
            value={maxExpense}
            onChangeText={setMaxExpense}
            keyboardType="numeric"
            className="border border-gray-300 rounded px-3 py-2"
          />
        </View>

        {/* Export Report */}
        <View className="bg-white p-4 rounded-lg shadow-md mb-4">
          <Text className="font-bold mb-2">Export Report</Text>
          <View className="flex-row space-x-2 mb-4">
            <View className="flex-1 border border-gray-300 rounded">
              <Picker
                selectedValue={reportPeriod}
                onValueChange={(itemValue) => setReportPeriod(itemValue)}
              >
                <Picker.Item label="This Month" value="This Month" />
                <Picker.Item label="Last Month" value="Last Month" />
                <Picker.Item label="This Year" value="This Year" />
              </Picker>
            </View>
            <View className="flex-1 border border-gray-300 rounded">
              <Picker
                selectedValue={reportFormat}
                onValueChange={(itemValue) => setReportFormat(itemValue)}
              >
                <Picker.Item label="PDF" value="PDF" />
                <Picker.Item label="Excel" value="Excel" />
              </Picker>
            </View>
          </View>
          <TouchableOpacity className="bg-black py-2 rounded items-center">
            <Text className="text-white font-bold">Export Report</Text>
          </TouchableOpacity>
        </View>

        {/* Links */}
        <View className="bg-white p-4 rounded-lg shadow-md mb-4">
          <TouchableOpacity className="py-2 border-b border-gray-200">
            <Text className="text-gray-700">Rejected Expenses</Text>
          </TouchableOpacity>
          <TouchableOpacity className="py-2 border-b border-gray-200">
            <Text className="text-gray-700">Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity className="py-2">
            <Text className="text-red-500">Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AdminProfile;
