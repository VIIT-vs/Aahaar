
import React from 'react'

function DonorPage() {
  return (
   
    <div className=' DonorPage'>
    
     
      <form className='Form'>
        <fieldset classname= 'Field'>
        <legend>Donar Information </legend>
          <label >Donar Name<input type='text' placeholder='Please Enter Your Name '></input></label>
          
          <p>
            <label>Menu </label><br />
          <label>VEG<input type="checkbox" name="Veg" value="VEG"></input></label>
          <label>NON-VEG<input type="checkbox" name="Non-veg" value="NON-VEG"></input></label>
          </p>
          <label>Quantity Of Food</label>
          <ul Quantity Of Food>
            <select>
            <option><li>10 persons</li></option>
            <option><li>10-100 persons</li></option>
            <option><li>100-500</li></option>
            <option><li>more than 50</li></option>
            </select>
          </ul>
          <label>  Menu Description<input type='Textarea' placeholder='Enter your menu'></input></label>
          <p>
            <label>date<input type='date'></input></label>
          </p>
           <p>
            <label>Choose Time <input type='time' required></input></label>
          </p>
          <p>
            <label>PickUp Where<input type='location'placeholder='Enter Your Location' required></input></label>
          </p>
          <p>
          <label>all above food is fresh</label><br />
           <input type="radio" name="donation" value="agree" />  Agree
           <input type="radio" name="donation" value="disagree" /> disAgree
          </p>
           <button type="submit">Submit</button>
       </fieldset> 
      </form>
    </div>
   
  )
}
export default  DonorPage;

