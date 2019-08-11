import React from 'react';

class Dontainer extends React.Component {

    dontainerStyle ={
        background: "whitesmoke",
        padding: 20,
        paddingTop:10,
        paddingBottom:10,
        margin: 20
    }

    titleStyle = {
        color: "black",
        fontSize: 30,
        title: "Title Here"
    }

    contentStyle={
        color: "black",
        fontSize: 20
    }

    setTitle(title) {
        this.titleStyle.title = title;
    }

    setTitleFontSize(titleFontSize) {
        this.titleStyle.fontSize = titleFontSize;
    }

    setPaddingZero(){
        this.dontainerStyle.padding = 0;
        this.dontainerStyle.paddingTop = 0;
        this.dontainerStyle.paddingBottom = 0;
    }
}

export default Dontainer;
