import React from 'react';
import { TouchableOpacity, View, Text, ActivityIndicator, StyleSheet } from 'react-native';

interface ButtonProps {
  text: string;
  onPress: () => void;
  loading: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onPress, loading }) => (
  <TouchableOpacity style={styles.container} onPress={onPress} disabled={loading}>
    {loading ? (
      <ActivityIndicator color="white" />
    ) : (
        <Text style={styles.title}>{text}</Text>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12, // Daha büyük dikey padding, daha rahat bir dokunma alanı sağlar
    paddingHorizontal: 30, // Daha geniş bir düğme için yatay padding
    backgroundColor: '#007BFF', // Canlı bir ana renk, genel bir UI kütüphanesi stilini taklit eder
    borderRadius: 8, // Yumuşak köşeler modern bir his verir
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    elevation: 3, // Düğmeye 3D görünümü kazandıran hafif bir gölge
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    marginTop: 10,
    opacity: 0.95, // Düğme üzerindeki etkileşimleri vurgulamak için hafif bir opaklık
  },
  title: {
    color: 'white', // Yüksek kontrast için beyaz renk
    fontSize: 18, // Okunabilirliği artırmak için büyük font boyutu
    fontWeight: '600', // Yarı kalın font ağırlığı, metni daha belirgin kılar
    textAlign: 'center', // Metni düğme içerisinde ortalar
  },
});


  
  

export default Button;
