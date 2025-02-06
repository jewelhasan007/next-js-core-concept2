"use client"
import styles from '../meals/styles.module.css'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const MealsPage = () => {
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("a")
 
    const mealsData = async() =>{
        try{
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
        const data = await res.json()
        console.log(data.meals)
        setMeals(data.meals)
        setError("")
        }
        catch(error){
            setError("NO DATA FOUND")
        }
  }

    const handler = (e) =>{
        
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    useEffect(()=>{
        mealsData();
    },[]);

    return (
        <div className='mt-12'>
        <h3 className={ styles.font_tomato}>The meals page</h3>

        <div >
        <input onChange={handler} className='border-y-2 border-l-2 rounded-l-md p-1 border-gray-500' type="text" placeholder='Search Here...' />
        <button onClick={()=>mealsData()} className='bg-green-400 border-y-2 border-r-2  border-gray-500 rounded-md p-1'>Search</button>
        <div className=' mt-12 grid grid-cols-3 gap-12'>
         { meals?.length > 0 && !error &&
            meals?.map((meal) =>(
            <div key={meal?.idMeal} className='border-2 rounded-md'>
                <Image src={meal.strMealThumb} width={200} height={200} alt={meal.strMeal}></Image>
                <h4 className='font-bold'>{meal.strMeal}</h4>
                <h6>{meal.strInstructions}</h6>
            </div>
            )) }
            {
                error && <h5 className='text-blue-700 font-bold'>No Data Found...</h5>
            }          
        </div>
        </div>
    </div>
    );
};

export default MealsPage;