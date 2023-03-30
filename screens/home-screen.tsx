import React from "react"
import { StatusBar } from "expo-status-bar"
import { View, Text, StyleSheet, ScrollView } from "react-native"

import { BookCard, Loader } from "../widgets"
import { BoooksService } from "../services"
import { Book } from "../models"

export function HomeScreen() {

    const [books, setBooks] = React.useState<Array<Book>>([])

    React.useEffect(() => { getBooks().then(books => setBooks(books)) }, [])

    const getBooks = async () => await BoooksService.getBooks()

    const booksList = books.length ? books.map(book => <BookCard{...book} key={book.id} />) : null


    return books.length ? <View style={styles.container}>
        <StatusBar />
        <Text style={styles.title}>Google books about Sénégal</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
            {booksList}
        </ScrollView>
    </View> : <Loader></Loader>
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