import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

const RejectedExpenses = () => {
  // Dummy data for rendering multiple items
  const expenses = [
    { id: 1, purpose: 'Purpose', date: '4th September 2025', amount: '30', submittedBy: '' },
    { id: 2, purpose: 'Purpose', date: '4th September 2025', amount: '30', submittedBy: '' },
    { id: 3, purpose: 'Purpose', date: '4th September 2025', amount: '30', submittedBy: '' },
    { id: 4, purpose: 'Purpose', date: '4th September 2025', amount: '30', submittedBy: '' },
  ];

  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-yellow-200 p-4 flex-row items-center">
        <TouchableOpacity>
          <Text className="text-2xl">←</Text>
        </TouchableOpacity>
        <Text className="text-lg font-bold ml-4">Rejected Expenses</Text>
      </View>

      {/* Expense List */}
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {expenses.map((expense) => (
          <View
            key={expense.id}
            className="bg-white p-4 rounded-lg shadow-md mb-4"
          >
            <Text className="text-yellow-500 text-xs mb-1">Expense Type</Text>
            <View className="flex-row justify-between items-center mb-2">
              <Text className="font-bold text-base">{expense.purpose}</Text>
              <Text className="font-bold text-base">Rs. {expense.amount}</Text>
            </View>
            <Text className="text-gray-500 text-sm">{expense.date}</Text>
            <Text className="text-gray-500 text-sm mt-1">Submitted By:</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default RejectedExpenses;
