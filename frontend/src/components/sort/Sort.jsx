import React from 'react'

import './Sort.css'

const Sort = ({ value, onChangeSort }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const popupList = [
    {name: 'за популярністю', sortProperty: 'rating'}, 
    {name: 'за алфавітом', sortProperty: 'alphabetically'},
    {name: 'за ціною', sortProperty: 'price'},
  ];

  const onClickListItem = (i) => {
    onChangeSort(i);
    setIsVisible(false);
  }

  return (
    <div className='sort' onClick={() => setIsVisible(!isVisible)}>
      <div className="sort_label">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" fill="#323232"/></g><defs><rect width="24" height="24" fill="white"/></defs></svg>
        <b>Сортирування:</b>
        <span>
          {value.name}
        </span>
      </div>
      {isVisible && (
      <div className="sort_popup">
        <ul className="sort_list">
          {popupList.map((obj, i) => (
            <li 
							key={i}
							onClick={() => onClickListItem(obj)}
							className={value.sortProperty === obj.sortProperty ? 'active' : ''}
              // className={
              //   if (value.sortProperty === obj.sortProperty) {
              //     'active'
              //   } Else {
              //     ''
              //   }
              // }
              >
							{obj.name}
						</li>
          ))};
        </ul>
      </div>
      )}
    </div>
  )
}
export default Sort;