import { getAxiosInstance } from "../http"

import { Book } from "../models"

import { BookSerializer } from "../serializers"
import { StorageService } from "./storage-service"


export class BoooksService {

    public static getBooks = async (searchTerm: string = "Senegal"): Promise<Book[]> => {

        const instance = getAxiosInstance()

        const endpoint = `volumes?q=${searchTerm}&maxResults=40`

        const response = await instance.get(endpoint)

        const books = response.data.items.map((book: any) => BookSerializer.fromJSON(book))

        return this.parseBooks(books)
    }

    public static getFaveBooks = async (): Promise<Array<Book>> => await StorageService.getObject('faveBooks') || []

    private static async parseBooks(books: Book[]): Promise<Book[]> {
        
        const faveBooks = await BoooksService.getFaveBooks()

        for (const book of books) {
            if (faveBooks.find(b => b.id == book.id))
                book.isFavorite = true
        }

        return books
    }
}