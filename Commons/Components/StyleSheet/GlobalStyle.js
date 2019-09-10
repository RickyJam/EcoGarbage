import {StatusBar, Platform, StyleSheet} from "react-native";

const GlobalStyle = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
})

export default GlobalStyle;
