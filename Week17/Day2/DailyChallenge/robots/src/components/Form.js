import React from 'react'
import { useEffect } from 'react'
import '../style.css'
import {selectrobot, robosThunk} from '../actions'
import {connect} from 'react-redux'

function Form(props){
    const getDtaFromFetch = ()=>{
        props.getdata()
        console.log('form robots', props.data)
    }
    useEffect(() => {
        getDtaFromFetch();
    }, []);

    function hansellinput(e){
      var value = e.target.value.toLowerCase()
      console.log("value", value)

      if(value !== ""){
        console.log('in form')
        var temp = []
        props.data.map((robot)=>(
          (robot.name.toLowerCase().includes(value))? temp.push(robot) : ''
        ))
        props.next(temp)
      }else{
        props.next(props.data)
      }
    }

    return(
        <div className='search'>
            <label > Your ROBO</label>
            <input onInput={ hansellinput }  type="text" name="" id="search" placeholder="search robots"></input>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data : state.robots

    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        next : (robot)=>{
            dispatch(selectrobot(robot))
        },
        getdata : ()=>{
            dispatch(robosThunk())
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form)