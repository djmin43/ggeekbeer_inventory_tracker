import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'

interface NewBrew {
    brew_type: string;
    brew_date: string;
    brew_name: string;
    brew_description: string;
    user_id: number;
}

const AddBrew = ({today}: any) => {

    const [newBrew, setNewBrew] = useState<NewBrew>({
        brew_type: '',
        brew_date: today,
        brew_name: '',
        brew_description: '',
        user_id: 3
    });

    const handleChange = (e: any) => {
        e.preventDefault();
        setNewBrew({
            ...newBrew, 
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = async (e:any) => {
        try {
        e.preventDefault();
        const postNew = await axios.post('/brew/post_new', newBrew)
        console.log(postNew);
        } catch(error) {
            console.log(error)
        }
        

    }

    // const {brew_type, brew_date, brew_name, brew_description, user_id} = req.body

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>타입:
                    <select name="brew_type" onChange={handleChange}>
                        <option>production</option>
                        <option>test</option>
                    </select>
                </label>
                <label>날짜:
                    <input  type="date" name="brew_date" value={newBrew.brew_date} onChange={handleChange}/>
                </label>
                <label>이름:
                    <input type="text" name="brew_name" onChange={handleChange}/>
                </label>
                <label>설명:
                    <input type="text" name="brew_description" onChange={handleChange}/>
                </label>
                <button >양조 등록</button>
            </form>
        </div>
    )
}

export default AddBrew
