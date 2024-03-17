export default function errorMessage(errorCode: string) {
    switch (errorCode) {
        case "auth/invalid-email":
            return "Geçersiz e-posta adresi.";
        case "auth/email-already-exist":
            return "Bu e-posta adresi zaten kullanımda.";
        case "auth/user-not-found":
             return "Bu e-posta adresi zaten kullanımda.";
        default:
            return errorCode;
    }
}
