import { Book } from "../models";

export class BookSerializer {
    static fromJSON(data: any): Book {
        const volumeInfo = data.volumeInfo

        return new Book({
            id: data.id,
            webLink: data.selfLink,
            title: volumeInfo.title,
            subtitle: volumeInfo.subtitle || volumeInfo.description || volumeInfo.title,
            thumbnail: volumeInfo?.imageLinks?.thumbnail,
            author: volumeInfo.authors ? volumeInfo.authors[0] : '',
            publishedDate: volumeInfo.publishedDate,
            pageCount: volumeInfo.pageCount
        })
    }
}