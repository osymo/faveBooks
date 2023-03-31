import React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native'

import { Book } from '../models';

const heartIconOrange = require("../assets/icons/heart-orange.png")
const fullHeartIconOrange = require("../assets/icons/heart-orange-full.png")

interface BookProps {
    book: Book,
    showLikeBtn?: boolean,
    addToFavorite?: Function
}

export function BookCard({ book, addToFavorite, showLikeBtn = true }: BookProps) {

    const handleLike = () => addToFavorite && addToFavorite(book)

    return <View style={styles.container}>
        <View style={styles.imageWrapper}>
            <Image source={{ uri: book.thumbnail }} style={styles.image} />
        </View>
        <View style={styles.textWrapper}>
            <View>
                <Text numberOfLines={1} style={styles.title}>{book.title}</Text>
                <Text numberOfLines={2} style={styles.subtitle}>{book.subtitle}</Text>
            </View>
            <View style={styles.likeBtnWrapper}>
                {
                    showLikeBtn ?
                        <Pressable style={styles.likeBtn} onPress={handleLike}>
                            <Image source={book.isFavorite ? fullHeartIconOrange : heartIconOrange} style={{ width: 28, height: 28 }} />
                        </Pressable> : null
                }
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        height: 120,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    imageWrapper: {
        height: '100%',
        width: '22%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '95%',
        height: '95%',
        borderRadius: 10,
        borderColor: '#999',
        borderWidth: 1,
    },
    textWrapper: {
        width: '78%',
        padding: 7,
        paddingLeft: 8,
        paddingBottom: 5,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    subtitle: {
        fontSize: 12
    },
    likeBtnWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    likeBtn: {
        width: 28
    }
})