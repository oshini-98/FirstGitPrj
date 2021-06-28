

export const Book = ({Img, Title, Author}) => {

    const clickHandler = () => {
        alert('hello world');
    };
    const complexExample = (Author) => {}
    return (
        <article className='book'>
            <Img src={Img} alt=''/>
            <h1 onClick={() => console.log(Title)}>{Title}</h1>
            <h4>{Author}</h4>
            <button type="button" onClick={}>reference example</button>
            <button type=button onClick={() => complexExample(Author)}>more complex example</button>
        </article>
    );
};
export default Book;