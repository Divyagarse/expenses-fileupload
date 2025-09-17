import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const NewMemberAdded = () => {
  const [search, setSearch] = useState('');

  const members = [
    { id: 1, name: 'Keith Rabois', email: 'keithr@gmail.com', status: 'Active' },
    { id: 2, name: 'Keith Rabois', email: 'keithr@gmail.com', status: 'Inactive' },
    { id: 3, name: 'Keith Rabois', email: 'keithr@gmail.com', status: 'Active' },
    { id: 4, name: 'Keith Rabois', email: 'keithr@gmail.com', status: 'Active' },
  ];

  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-yellow-200 p-4 flex-row items-center">
        <TouchableOpacity>
          <Text className="text-2xl">←</Text>
        </TouchableOpacity>
        <Text className="text-lg font-bold ml-4">Member List</Text>
      </View>

      {/* Search and Add */}
      <View className="flex-row items-center px-4 py-3 bg-gray-100 space-x-2">
        <View className="flex-1 flex-row items-center bg-white border border-yellow-500 rounded px-3 py-2">
          <Text className="text-gray-400 text-lg">🔍</Text>
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search"
            className="ml-2 flex-1"
          />
        </View>
        <TouchableOpacity className="bg-yellow-500 p-3 rounded-full">
          <Text className="text-white text-lg">+</Text>
        </TouchableOpacity>
      </View>

      {/* Filter Buttons */}
      <View className="flex-row justify-around mt-4 px-4">
        <TouchableOpacity className="border border-gray-300 rounded px-4 py-2">
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-yellow-500 rounded px-4 py-2">
          <Text className="text-white">Admin</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border border-gray-300 rounded px-4 py-2">
          <Text>On-ground</Text>
        </TouchableOpacity>
      </View>

      {/* Member List */}
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {members.map((member) => (
          <View
            key={member.id}
            className="bg-white p-4 rounded-lg shadow-md mb-4 flex-row items-center justify-between"
          >
            <View className="flex-row items-center space-x-4">
              <View className="w-12 h-12 rounded-full bg-gray-400 justify-center items-center">
                <Text className="text-white text-lg">👤</Text>
              </View>
              <View>
                <Text className="font-bold">{member.name}</Text>
                <Text className="text-gray-500 text-sm">{member.email}</Text>
              </View>
            </View>
            <Text
              className={`font-bold ${
                member.status === 'Active' ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {member.status}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Success Message */}
      <View className="bg-white py-3 px-4 border-t border-gray-200 flex-row items-center justify-center">
        <Text className="text-green-500 font-bold">✅ Member Added Successfully</Text>
      </View>
    </View>
  );
};

export default NewMemberAdded;
