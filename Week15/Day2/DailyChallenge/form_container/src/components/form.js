import React, { useState } from 'react'
import InputWithLabel from './inputs'
import EnteredInformation from './information'
import '../style.css'
function FormComponent(){
 
    const [information, setInformation] = useState({
        first_name : '',
        last_name : '',
        age : '',
        gender : '',
        destination : '',
        nuts : 'No',
        lactose : 'No',
        vegan : 'No'
    })


    const handelChange =(e)=>{
        let _type = e.target.type
        let element = e.target
        let _value = e.target.value
        let _id = e.target.id
        console.log(e.target)
        console.log('_type:' ,_type, '_value:', _value,'_id:' , _id)
        switch(_type){
            case 'text': 
                        (_id === 'firstName')? setInformation({...information, first_name : _value})
                        :(_id === 'lastName')? setInformation({...information, last_name : _value})
                        : setInformation({...information, age : _value})
                        break;

            case 'radio': 
                        (_id === 'Male')? setInformation({...information, gender : _id})
                        : setInformation({...information, gender : _id})
                        break;

            case 'select-one':
                        setInformation({...information, destination : _value})
                        break;

            case 'checkbox': 
                            (_id === 'Nuts_Free')?
                                (element.checked)? setInformation({...information, nuts : 'Yes'})
                                : setInformation({...information, nuts : 'No'})
                            
                            :(_id === 'Lactose_Free')?
                                (element.checked)? setInformation({...information, lactose : 'Yes'})
                                : setInformation({...information, lactose : 'No'})
                            
                            : (element.checked)? setInformation({...information, vegan : 'Yes'})
                                : setInformation({...information, vegan : 'No'})
                            break;
                            

            default: setInformation({first_name : 'hello',
            last_name : 'hellow',
            age : '',
            gender : '',
            destination : '',
            nuts : 'No',
            lactose : 'No',
            vegan : 'No'})
        }
    }

    return(
        <div className='frm'>
            <h1>Sample form</h1>
            <form className='form'>
                <h3>First_Name :</h3>
                <input onChange={handelChange} type='text' id='firstName' placeholder='First_Name' name='firstName' />
                <h3>last_name :</h3>
                <input onChange={handelChange} type='text' id='lastName' placeholder='Last_Name' name='lastName' />
                <h3>Age :</h3>
                <input onChange={handelChange} type='text' id='age' placeholder='Age' name='age'/>
                <br/>
                <InputWithLabel onChange={handelChange} type='radio' label ='Female' id='Female' name='gender'  />
                <InputWithLabel onChange={handelChange} type='radio' label ='Male'  id='Male' name='gender' />
                
                <br/>
                
                <h3>Select your destination :</h3>
                <select onChange={handelChange} type= 'option' name='destination' >
                    <option> choose  destination</option>
                    <option>las Vegas</option>
                    <option>Ilaty</option>
                    <option>Maccoa</option>
                    
                </select>
                <br/><br/>
                <h3>Dietary restrictions:</h3>
                <InputWithLabel onChange={handelChange} type='checkbox' label ='Nuts Free' id='Nuts_Free' name='Nuts_Free' />
                <InputWithLabel onChange={handelChange} type='checkbox' label ='Lactose Free' id='Lactose_Free' name='Lactose_Free' />
                <InputWithLabel onChange={handelChange} type='checkbox' label ='Vegan' id='Vegan' name='Vegan' />
                <br/>
                <button type='submit' >Submit</button>
            </form>
            <hr/>
            <EnteredInformation information = {information} />
        </div>
    )
}

export default FormComponent;