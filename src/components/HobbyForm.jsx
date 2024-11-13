import React from 'react'
import './comps.css'
const HobbyForm = ({setHobbyValue,handleSubmit,submitButtonName}) => {
    const handleChange = (e) => {
        const {name,value} = e.target;
        setHobbyValue((prev)=> {
          return {
            ...prev,
            [name]:value,
          }})
      }
  
    return (
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
            <input placeholder='Title' type="text" id="tile" name="title"  onChange={handleChange} /><br />
            <br />
            <textarea placeholder='Content (Optional)' type="textarea" id="content" name="content"  onChange={handleChange} /><br />
            <br />
            <input placeholder='Image Url' type="text" id="image" name="image"  onChange={handleChange} /><br />
            <br />

            <button type='submit' value="submit">{submitButtonName}</button>
        </form>

    </div>
    )
}

export default HobbyForm
