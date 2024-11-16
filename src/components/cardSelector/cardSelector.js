import { useState, useEffect, useRef } from 'react';


const CardSelector = ({cardListTotal, cardsPerPage, setCurrentPage}) => {

    const cardsBtns = useRef([])


    let pages = []

    for(let i=0; i<Math.ceil(cardListTotal / cardsPerPage) ;i++){
        pages.push(i)
    }

    const handlePageChange = (index) => {
        setCurrentPage(index);
        console.log(index)

        cardsBtns.current.forEach((btn) => {
            if(btn){
                btn.classList.remove('card-active')
            }
        })

        if(cardsBtns.current[index]){
            cardsBtns.current[index].classList.add('card-active')
        }

    };

    return ( 
        <ul className='cards-selector-ul'>
        {pages.map((btn, index) => {
            return (
                <li onClick={() => handlePageChange(index)} key={index} className='cards-selector-el'>
                    <button ref={el => cardsBtns.current[index] = el} className='cards-selector'></button>
                </li>
            )
        })}
        </ul>
     );
}
 
export default CardSelector;