import React, { useState } from "react";
import { View, TextInput, Modal, StyleSheet, Dimensions } from "react-native";
import CustomButton from '../components/CustomButton';

const deviceSize = Dimensions.get("window");

interface ContentInputProps {
    visible: boolean;
    onSend: (content: string) => void;
    onClose: () => void;
}

const ContentInput: React.FC<ContentInputProps> = ({ visible, onSend, onClose }) => {
    const [text, setText] = useState("");

    return (
        <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
            <View style={styles.modalOverlay}>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        multiline // Birden fazla satıra izin ver
                        placeholder="Content giriniz:"
                        value={text}
                        onChangeText={setText}
                        autoFocus
                    />
                    <CustomButton text="Gönder" onPress={() => {
                        onSend(text);
                        setText(""); // Input'u sıfırla
                    }} loading={false} />
                    <CustomButton text="Kapat" onPress={onClose} loading={false} />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Modalın arkasındaki yarı saydam siyah katman
    },
    container: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        width: deviceSize.width * 0.8,
        maxHeight: deviceSize.height * 0.8, // Maksimum yükseklik ekranın yüzde 80'i kadar olacak şekilde ayarlandı
        alignItems: 'center',
        justifyContent: 'flex-start' // İçerik girişi ekranının yukarıdan aşağıya doğru genişlemesini sağlar
    },
    input: {
        width: '100%',
        height: '60%', // İçerik girişinin yüksekliği ekranın yüzde 60'ı kadar olacak şekilde ayarlandı
        borderColor: 'gray',
        fontSize:30,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        textAlignVertical: 'top', // İçerik girişinin yukarıdan aşağıya doğru uzanmasını sağlar
    },
});

export default ContentInput;
