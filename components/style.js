import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        padding: 10
    },
    header:{
        width: "100%",
        height: 100,
        padding: 10,
        borderWidth: 5,
        
        borderBottomColor: 'blue',
        borderTopColor: '#fff',
        borderRightColor: '#fff',
        borderLeftColor: '#fff',
        elevation: 9

    },
    header_text : {
        fontSize: 40,
        fontWeight: '700',
        color: 'blue',
        alignSelf: 'center',
        margin: 10,
    },
    holeBox1: {
     flexDirection: 'row'
    },
    holeBox2: {
     flexDirection: 'row'
    },
    holeBox3: {
     flexDirection: 'row',
     alignSelf: 'center'
    },

    box:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        width: 170,
        height: 170,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: "blue",
        margin: 10,
        elevation: 8,
    }

})

export  default styles