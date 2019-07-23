export class Post {

    // represente post-list-item-component

    title: string;
    content: string;
    added_at: Date;
    loveIts: number;

    constructor(title: string, content: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus turpis massa tincidunt dui ut ornare lectus sit amet.') {
        this.title = title;
        this.content = content;
        this.added_at = new Date();
        this.loveIts = 0;
    }
}
