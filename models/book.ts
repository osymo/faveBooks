export class Book {
    public id: string;
    public webLink: string;
    public title: string;
    public subtitle: string;
    public thumbnail: string;
    public author: string;
    public publishedDate: string;
    public pageCount: string;

    constructor(args: {id: string, webLink: string, title: string, subtitle: string, thumbnail: string, author: string, publishedDate: string, pageCount: string}) {
        this.id = args.id
        this.author = args.author
        this.publishedDate = args.publishedDate
        this.pageCount = args.pageCount
        this.subtitle = args.subtitle
        this.title = args.title
        this.thumbnail = args.thumbnail
        this.webLink = args.webLink
    }
}