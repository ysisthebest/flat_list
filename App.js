import React from 'react';
import { View, FlatList, Text } from 'react-native';
import NotificationItem from './NotificationItem';
import { notifications } from './data';

export default function App() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>
        Thông báo
      </Text>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}