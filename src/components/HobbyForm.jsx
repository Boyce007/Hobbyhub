import React from 'react'

const HobbyForm = ({handleSubmit,submitButtonName}) => {
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" id="tile" name="title"  onChange={handleChange} /><br />
        <input type="textarea" id="content" name="content"  onChange={handleChange} /><br />
        <input type="text" id="image" name="image"  onChange={handleChange} /><br />

        <button type='submit' value="submit">{submitButtonName}</button>
        </form>

    </div>
  )
}

export default HobbyForm
