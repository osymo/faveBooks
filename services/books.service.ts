import { getAxiosInstance } from "../http"

import { Book } from "../models"

import { BookSerializer } from "../serializers"


export class BoooksService {

    static getBooks = async (searchTerm: string = "Senegal"): Promise<Book[]> => {

        const instance = getAxiosInstance()

        const endpoint = `volumes?q=${searchTerm}&maxResults=40`

        const books = await instance.get(endpoint)

        return books.data.items.map((book: any) => BookSerializer.fromJSON(book))
    }
}