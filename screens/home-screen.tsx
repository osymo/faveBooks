import React from "react"
import { StatusBar } from "expo-status-bar"
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native"

import { Book } from "../models"
import { BookCard, Loader } from "../widgets"
import { BoooksService, StorageService } from "../services"

export function HomeScreen() {

    const [books, setBooks] = React.useState<Array<Book>>([])

    React.useEffect(() => { getAllBooks().then(books => setBooks(books)) }, [])

    const getAllBooks = async () => await BoooksService.getBooks()

    const addBookToFavorite = async (book: Book) => {

        const faveBooks = await StorageService.getObject('faveBooks') || []
        
        const existingBook = faveBooks.find((fb: Book) => fb.id == book.id)

        if (!existingBook) {
            faveBooks.push(book)

            const updatedBooks = books.map(item => {
                if(item.id == book.id)
                    item.isFavorite = true
                return item
            })
            
            setBooks(updatedBooks)

            StorageService.storeObject('faveBooks', faveBooks)
            Alert.alert('Success', 'The book is added to your favorite')
        } else {
     

            const updatedFaveBooks = faveBooks.filter((faveBook: Book) => faveBook.id != book.id)

            const updatedBooks = books.map(item => {
                if(item.id == book.id)
                    item.isFavorite = false
                return item
            })
            
            setBooks(updatedBooks)

            StorageService.storeObject('faveBooks', updatedFaveBooks)
            Alert.alert('Infos', 'The book is removed from your favorite')
        }
    }

    const booksList = books.length ? books.map(book => <BookCard book={book} addToFavorite={addBookToFavorite} key={book.id} />) : null

        return books.length ?
            <View style={styles.container}>
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