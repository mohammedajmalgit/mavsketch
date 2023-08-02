import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FoodItemsList from '../Components/FoodItemsList'

const Home = () => {
  const [FoodItem, setFoodItem] = useState()
  const [newFood, setNewFood] = useState({
    id: "",
    title: "",
    description: "",
    image: ""
  })
  const api = "https://api.itematch.com/api/admin/dummy_data/"

  useEffect(() => {
    getFoodList()
  }, [])

  const getFoodList = async () => {
    try {
      const setApi = await axios.get(api);
      setFoodItem(setApi.data.items);
    } catch (err) {
      console.log(err.message);
      setFoodItem("");
    }
  }

  const addToList = (e) => {
    e.preventDefault()
    newFood.id = (FoodItem.length) + 1
    FoodItem.push(newFood)
    setNewFood({ ...newFood, title: "", description: "" })
  }

  return (
    <div className='container'>
      <div className='addContainer'>
        <span className='heading'>Add Food</span>
        <form onSubmit={addToList}>
          <div>
            <input
              type="text"
              id="input1"
              placeholder='Food Name'
              value={newFood.title}
              onChange={(e) => {
                setNewFood({ ...newFood, title: e.target.value })
              }}
              className='inputField'
            />

          </div>
          <div>
            <input
              type="text"
              id="input2"
              placeholder='Food Description'
              value={newFood.description}
              onChange={(e) => {
                setNewFood({ ...newFood, description: e.target.value })
              }}
              className='inputField mt10'
            />
          </div>
          <button type="submit" className='mt10 button1'>Save</button>
        </form>
      </div>
      <FoodItemsList
        FoodItem={FoodItem}
        setFoodItem={setFoodItem}
      />
    </div>
  )
}

export default Home