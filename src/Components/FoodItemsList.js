import React, { useState } from 'react'

const FoodItemsList = ({ FoodItem, setFoodItem }) => {
 
  const deleteItem = (idx) => {
    const updatedItemsArray = FoodItem.filter(item => item.id !== idx);
    setFoodItem(updatedItemsArray)
  }
  return (
    <div>
      {
        FoodItem && FoodItem.map((e, idx) => {
          return (
            <div className='listContainer mt10'>
              <div className='list'>
                <span className='title'>
                  {e.title}
                </span>
                <div>
                  {e.description}
                </div>
              </div>
              <button onClick={() => deleteItem(e.id)} className='deleteButton'>Delete</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default FoodItemsList