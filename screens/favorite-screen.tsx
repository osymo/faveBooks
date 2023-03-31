import React from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"

import { Book } from "../models"
import { BoooksService } from "../services"
import { BookCard, Empty } from "../widgets"

export function FavoriteScreen() {

    const [faveBooks, setFaveBooks] = React.useState<Array<Book>>([])

    React.useEffect(() => {
        BoooksService.getFaveBooks().then(fb => setFaveBooks(fb))
    })
    

    const booksList = faveBooks.length ? faveBooks.map(book => <BookCard book={book} key={book.id} showLikeBtn={false} />) : null

    return faveBooks.length ? <View style={styles.container}>
        <Text style={styles.title}>Your favorite books</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
            {booksList}
        </ScrollView>
        </View> : <Empty> You do not have any favorite book</Empty>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '14%',
        paddingHorizontal: '4%'
    },
    title: {
        fontSize: 18,
        marginBottom: 15,
        fontWeight: 'bold'
    }
})