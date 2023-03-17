import {Component} from "react";
import {GalleryView} from "./GalleryView"

export class GalleryLoader extends Component {


    handlerImageLoader = () => {
        console.log('Image is loaded')
    }

    render() {
        return (
            <GalleryView handlerImageLoader={this.handlerImageLoader}/>
        )
    }
}