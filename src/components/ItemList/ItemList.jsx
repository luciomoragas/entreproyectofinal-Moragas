import React from 'react';
import Item from '../Item/Item';

const ItemList = ({Curso}) => {

    return (
        Curso.map((curso) => <Item key={curso.id} curso = {curso} />)
    )



}



export default ItemList;