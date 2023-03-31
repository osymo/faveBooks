import { StyleSheet, View, Text, Image } from "react-native"

const emptyIcon = require("../assets/icons/empty.png")

export function Empty({children}: {children: string}) {
    return <View style={styles.container}>
        <Image source={emptyIcon} style={styles.emptyIcon}/>
        <Text style={styles.emptyText}>{children}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyIcon: {
        width: 50, 
        height: 50,
        marginBottom: 20
    },
    emptyText: {
        color: '#999',
        fontSize: 19
    }
})