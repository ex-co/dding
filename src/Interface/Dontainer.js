import React from 'react';

class Dontainer extends React.Component {

    title = "";
    content = "";

    constructor(props) {
        super();
        console.log(props);
        this.setTitle(props.title); 
        if(props.content === "contents"){
            this.content = props.content;
        }
        else{
            this.setContent(<props.content></props.content>);
        }
    }

    dontainerStyle = {
        background: "whitesmoke",
        padding: 20,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 40,
        borderRadius: 15
    }

    titleStyle = {
        color: "black",
        fontSize: 25
    }

    contentStyle = {
        color: "black",
        fontSize: 10,
    }

    setTitle(title) {
        this.title = title;
    }

    setContent(content) {
        this.content = content;
    }

    setTitleFontSize(titleFontSize) {
        this.titleStyle.fontSize = titleFontSize;
    }

    setPaddingZero() {
        this.dontainerStyle.padding = 0;
        this.dontainerStyle.paddingTop = 0;
        this.dontainerStyle.paddingBottom = 0;
    }

    _getContent() {
        return (
            <div>
                {this.content}
            </div>
        )
    }

    _getTitle() {
        return this.title;
    }

    render() {
        return (
            <div style={this.dontainerStyle}>
                <div style={this.titleStyle}>
                    {this._getTitle()}
                </div>
                <div style={this.contentStyle}>
                    {this._getContent()}
                </div>
            </div>
        )
    }
}

export default Dontainer;
