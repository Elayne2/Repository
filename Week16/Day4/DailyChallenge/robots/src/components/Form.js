import React from 'react'
import '../style.css'
import {selectrobot} from '../actions'
import {connect} from 'react-redux'

function Form(props){
    console.log('form robots', props.robots)
    const Default = [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          image: 'https://robohash.org/1?200x200'
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
          image: 'https://robohash.org/2?200x200'
        },
        {
          id: 3,
          name: 'Clementine Bauch',
          username: 'Samantha',
          email: 'Nathan@yesenia.net',
          image: 'https://robohash.org/3?200x200'
        },
        {
          id: 4,
          name: 'Patricia Lebsack',
          username: 'Karianne',
          email: 'Julianne.OConner@kory.org',
          image: 'https://robohash.org/4?200x200'
        },
        {
          id: 5,
          name: 'Chelsey Dietrich',
          username: 'Kamren',
          email: 'Lucio_Hettinger@annie.ca',
          image: 'https://robohash.org/5?200x200'
        },
        {
          id: 6,
          name: 'Mrs. Dennis Schulist',
          username: 'Leopoldo_Corkery',
          email: 'Karley_Dach@jasper.info',
          image: 'https://robohash.org/6?200x200'
        },
        {
          id: 7,
          name: 'Kurtis Weissnat',
          username: 'Elwyn.Skiles',
          email: 'Telly.Hoeger@billy.biz',
          image: 'https://robohash.org/7?200x200'
        },
        {
          id: 8,
          name: 'Nicholas Runolfsdottir V',
          username: 'Maxime_Nienow',
          email: 'Sherwood@rosamond.me',
          image: 'https://robohash.org/8?200x200'
        },
        {
          id: 9,
          name: 'Glenna Reichert',
          username: 'Delphine',
          email: 'Chaim_McDermott@dana.io',
          image:'https://robohash.org/9?200x200'
        },
        {
          id: 10,
          name: 'Clementina DuBuque',
          username: 'Moriah.Stanton',
          email: 'Rey.Padberg@karina.biz',
          image:'https://robohash.org/10?200x200'
        }
      ]
    
    function hansellinput(e){
        var value = e.target.value.toLowerCase()
        console.log("value", value)

        if(value !== ""){
            var temp = []
            props.robots.map((robot)=>(
                (robot.name.toLowerCase().includes(value))? temp.push(robot) : console.log('not')
            ))
            props.next(temp)
        }
        else{
            props.next(Default)
        }
    }

    return(
        <div className='search'>
            <label > Your ROBOT </label>
            <input onInput={ hansellinput }  type="text" name="" id="search" placeholder="search a robots"></input>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        robots : state

    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        next : (robot)=>{
            dispatch(selectrobot(robot))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form)