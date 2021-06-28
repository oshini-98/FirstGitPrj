import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
import {index} from './books'
import Book from './Book'
//function Greeting(){
//    return <h4>this is jone and this is my first component</h4>;
//}


function BookList() {
    return (
        <section className='bookList'>
            {index.map((book) => {
                return <Book book={book}></Book>;
                })}
        </section>
    );
}





ReactDom.render(<BookList/>,document.getElementById('root')
);