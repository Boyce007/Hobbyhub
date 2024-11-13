import React from 'react'

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
    <div >
        <form onSubmit={handleSubmit}>
            <input placeholder='Title' type="text" id="tile" name="title"  onChange={handleChange} /><br />
            <textarea placeholder='Content (Optional)' type="textarea" id="content" name="content"  onChange={handleChange} /><br />
            <input placeholder='Image Url' type="text" id="image" name="image"  onChange={handleChange} /><br />

            <button type='submit' value="submit">{submitButtonName}</button>
        </form>

    </div>
    )
}

export default HobbyForm
