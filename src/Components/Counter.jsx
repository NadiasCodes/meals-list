import React from 'react'
import { useMealsListContext } from '../Provider/MealsProvider'

const Counter = () => {
    const { meals } = useMealsListContext();
  return (
    <div>
      <h3>Number of meals today: {meals.length}</h3>
    </div>
  )
}

export default Counter
