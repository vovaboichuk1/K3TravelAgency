import React from 'react'

import "./Main.css"
import Search from '../../components/search/Search'
import Sort from '../../components/sort/Sort'
import ItemBlock from '../../components/itemBlock/ItemBlock'

const Main = () => {
    const [sortType, setSortType] = React.useState({
        name: 'за популярністю',
        sortProperty: 'rating',
    });
    console.log(sortType);
  return (
    <main className="travels" >
        <div className='travels_top'>
            <h1 className='travels_title'>Подорожі</h1>
            <div className="travels_sidebar">
                <Search />
                <Sort value={sortType} onChangeSort={(i) => setSortType(i)}/>
            </div>
        </div>
        <div className="travels_items">
            <ItemBlock />   
            <ItemBlock />
            <ItemBlock />
            <ItemBlock />
            <ItemBlock />
            <ItemBlock /> 
        </div>   
             
     </main>
  )
}
export default Main