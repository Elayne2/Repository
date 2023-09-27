import React from 'react'
import '../style.css'
import Post from './post'
import blogimg from '../images/blog.png'
import {connect} from 'react-redux'



class Home extends React.Component{

    constructor(){
        super()
    }

    render(){

        return(
            <div className='posts'>
                <h3>Home Page</h3>
                <ul>
                    {this.props.data.map((item)=>(
                        <li key={item.id}> 
                            <div className='cont' >
                                <img src={blogimg} alt='img_blog'></img>
                            </div>
                            <div className='comp'><Post data ={item} /> </div> 
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

}

const mapStateToProps = (state) =>{
    return {
        data : state.obj
    }
}
export default connect(mapStateToProps)(Home);