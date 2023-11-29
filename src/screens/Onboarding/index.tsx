import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity, } from "react-native";

export default function Onboarding (){
    const navigation = useNavigation<any>()
    return (
        <View style={styles.container}>
            <View style={styles.sloganbox}>
            <Text style={styles.appname}>GOrRestaurant</Text>
            <Text style={styles.appslogan}>Comida Italiana, sim.</Text>
            </View>
            <Text style={styles.slogan}> Uma verdadeira experiência Italiana.</Text>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Home")}>
                <Text> Entrar no Restaurant</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 163,
        backgroundColor: "#C72828",
        padding: 20,
        
    },
    slogan: {
        color: "#fff",
        fontSize: 50,
        marginTop: 50,
    },
    button:{
        backgroundColor: "#FFB84D",
        width: "90%",
        height: 60,
        position: "absolute",
        bottom: 0,
        margin: "10%",
        alignItems: "center",
        justifyContent: "center",
       
    },
    sloganbox: {
        width: "100%",
        marginTop: 50,
        
    },
    appname: {
        fontSize: 28,
        color: "#fff",
        fontWeight: "bold"
    },
    appslogan: {
        fontSize: 18,
        color: "#fff",
        

    }
})