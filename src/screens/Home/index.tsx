import { View, Text, StyleSheet, TextInput } from "react-native"


export default function Home ( ){
    return (
        <View style={styles.container}>
            <View style={styles.eppbar}></View>
            <TextInput style={styles.searchbar}/>
            <View style={styles.categories}>
                <Text style={styles.categorytitle}>Categorias</Text>
            </View>
            <View style={styles.categories}>
                <Text style={styles.categorytitle}>Pratos</Text>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    eppbar: {
        borderWidth: 1,
        height: 100,
        backgroundColor: "red"
    },
    searchbar: {
        height: 50,
        backgroundColor: "#eee",
        position: "absolute",
        width: "90%",
        marginHorizontal: "5%",
        marginTop: 75,
        borderRadius: 8,
    },
    categories: {
        borderWidth: 1,
        marginTop: 25,
        height: 200,
    },
    categorytitle: {
        fontSize:  22,
        fontWeight: "bold",
        padding: 20,
    },

})