import e from 'express'
import React, { useState } from 'react'

const AddBrew = () => {

    const [formData, setFormData] = useState([{name: '', type: ''}]);

    const createNew = (e:any) => {
        e.preventDefault()
        setFormData([...formData, {name: '', type: ''}])
    }

    const handleChange = (e: any, index: any) => {
        e.preventDefault()
        const form = [...formData];
        formData[index].name = e.target.value
        setFormData(form)
    };

    return (
        <div>
            {/* ADD BREW

            1. Brewing Information: 
                1.1 brew_type, brew_date, brew_name, brew_description, user_id


            2. Use hop, malt and yeast.
                (calculate: get info data by id. let's create an api a bit later. ) */}

            <form>
                {formData.map((item: any, index: number) => <div>
                    <label>재료이름</label>
                        <input type="text"  onChange={(e) => handleChange(e, index)}></input>
                    <label>재료종류</label>
                        <input type="text" ></input>
                    <button onClick={createNew} >Create one</button>
                    </div>
                )}
            </form>

        </div>
    )
}

export default AddBrew
