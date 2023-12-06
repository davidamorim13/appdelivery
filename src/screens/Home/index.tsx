import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from "react-native"
import { images } from "../../images"


export default function Home ( ){
    return (
        <View style={styles.container}>
            <View style={styles.eppbar}></View>
            <TextInput style={styles.searchbar}/>
            <View style={styles.categories}>
                <Text style={styles.categorytitle}>Categorias</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.categorylist}>
                    <TouchableOpacity style={styles.category}>
                        <Image source={images.massas} resizeMethod="resize" resizeMode="contain"/>
                        <Text>Massas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                        <Image source={images.pizza} resizeMethod="resize" resizeMode="contain"/>
                        <Text>Pizza</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                        <Image source={images.carne} resizeMethod="resize" resizeMode="contain"/>
                        <Text>Carne</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={styles.categories}>
                <Text style={styles.categorytitle}>Pratos</Text>
                <ScrollView>
                    <TouchableOpacity style={styles.patroitem}>
                        <View style={styles.backgroundimage}>
                            <Image source={images.aomolho} resizeMethod="resize" resizeMode="contain"/>
                        </View>
                        <View style={styles.descriptionplates}>
                            <Text style={styles.pratonome}>Ao Molho</Text>
                            <Text style={styles.pratodescrição}>Macarrão ao molho, fungi e cheiro verde das montanhas.</Text>
                            <Text style={styles.pratopreco}>
                                <Text style={{fontWeight:"100"}}>R$</Text> 
                                19,90
                            </Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
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
        marginTop: 25,
        height: 200,
    },
    categorytitle: {
        fontSize:  22,
        fontWeight: "bold",
        padding: 20,
    },
    categorylist: {
        width: "100%"

    },
    category: {
        width: 120,
        backgroundColor: "#f0f0f5",
        borderRadius: 8,
        margin: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    backgroundimage: {
        backgroundColor: "#FFB84D",
        width: "30%",
        height: 115,
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    patroitem: {
        marginHorizontal: 8,
        backgroundColor: "#F0F0F5",
        flexDirection: "row",
        gap: 10,
    },
    descriptionplates: {
        justifyContent: "center",
        width: 200,
    },
    pratonome: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,

    },
    pratodescrição: {
        fontSize: 10,
        marginBottom: 5,

    },
    pratopreco: {
        fontSize: 20,
        color: "#39B100",
        fontWeight: "bold",
    },
})