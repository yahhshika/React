function Title(){
    return <h1>This is a title</h1>
}

// export
// export {Title}; //when you export multiple components // to require in some other file you'll write import {title} from filename
export default Title;// when you are exporting just one item. to require you will write import title from filename