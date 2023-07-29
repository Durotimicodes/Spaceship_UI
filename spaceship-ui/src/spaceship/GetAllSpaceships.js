import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link, useSearchParams, useNavigate} from "react-router-dom"
import { API_URL } from '../config'
import GetOneSpaceship from './GetOneSpaceship'

function GetAllSpaceships() {

    const [spaceships, setSpaceship] = useState([])
    const [ids, setID] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    let navigate = useNavigate();

    const fetchData = async () => {
        const page = searchParams.get("id") ? "&id=" + searchParams.get("id") : "";
        //make backend request
        try {
            const response = await fetch(`${API_URL}/spaceships`)
            const json = await response.json();
            setSpaceship(json.data)
            setID(json.data.id)
        }
        catch (error) {
            console.log("error",error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [searchParams])


  return (
    <div className='flex justify-center'>
        <div className='lg:w-1/3 w-full'>
            <div className='p-10'>
            <div className='mb-10 flex items-center justify-between'>
                <h1 className='font-bold'>CRUD APP</h1>
                <button className='bg-purple-700 text-white px-3 py-1.5 rounded'>Add Spaceship</button>
            </div>
            <div>
                {spaceships.length > 0 ? spaceships.map((spaceship, key) => <GetOneSpaceship key={key} spaceship={spaceship} fetchData={fetchData}/>) : ""}
            </div>
            
            </div>

        </div>
        
    </div>
  )
}

export default GetAllSpaceships
