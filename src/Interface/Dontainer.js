import React from 'react';

class Dontainer extends React.Component {

    divStyle = {
        color: "black",
        background: "white",
        title: "Title Here",
        fontSize: 50,
        padding: 0
    };

    constructor() {
        super();
        console.log("JHHHH");
    }

    setTitle(title) {
        this.divStyle.title = title;
    }

    setBackground(fontSize) {
        this.divStyle.titleFontSize = fontSize;
    }
}

export default Dontainer;
