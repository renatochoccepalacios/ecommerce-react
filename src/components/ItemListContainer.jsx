

function ItemListContainer(props) {
    
    const { greeting } = props;

    return (
        <div className="itemListContainer">
            <h1>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer;