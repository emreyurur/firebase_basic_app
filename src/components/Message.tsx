import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface MessageProps {
  id: string;
  text: string;
  timestamp: number;
  clicks: number;
  onItemClick: () => void;
}

const Message: React.FC<MessageProps> = ({ id, text, timestamp, clicks, onItemClick }) => {
  const date = new Date(timestamp);

  return (
    <View style={styles.messageContainer}>
      <View style={styles.messageContent}>
        <Text style={styles.messageText}>{text}</Text>
        <Text style={styles.timestamp}>{date.toISOString()}</Text>
      </View>
      <TouchableOpacity style={styles.counterButton} onPress={onItemClick}>
        <Text style={styles.counterText}>{clicks}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 10,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
  },
  messageContent: {
    flex: 1,
  },
  messageText: {
    fontSize: 16,
    color: '#333',
    flexShrink: 1,
  },
  timestamp: {
    fontSize: 12,
    color: 'gray',
  },
  counterButton: {
    backgroundColor: 'red',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    padding: 6,
  },
  counterText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Message;
