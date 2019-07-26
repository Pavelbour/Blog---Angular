export class Post {

    // this class represents post-list-item-component

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

    onLoveIt() {
        //click event listener for Love It
        //incease the value of loveIts
        this.loveIts++;
        console.log('Love it clicked. LoveIts = ' + this.loveIts);
    }

    onDontLoveIt() {
        //click event listener for Don't love it
        //decrease the value of loveIts
        this.loveIts--;
        console.log('Don\'t love it clicked. LoveIts = ' + this.loveIts);
    }
}
