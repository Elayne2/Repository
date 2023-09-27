import '../style.css'
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import deletePost from '../actions/actions'

function Details(props){
    const p_id = useParams().post_id
    const navigate = useNavigate()
    let data;
    
    (function fillPost (){
        data = props.posts.filter((item)=> item.id === p_id);
    })()

    function handleClick(e){
        e.preventDefault()
        let specific_id = e.target.dataset.id
        console.log('specific_id', specific_id)
        navigate('/')
        props.next(specific_id)

    }
    

    return(
        <div className='details'>
            <h4> {data[0].title} </h4>
            <p> {data[0].body} </p>
            <button onClick={handleClick} data-id={data[0].id} >DELETE POST</button>
            
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        posts : state.obj
    }
}

const mapDespatchToProps = (dispatch)=>{
    return {
        next : (p_id)=>{
            dispatch(deletePost(p_id))
        }
    }
}
export default connect(mapStateToProps, mapDespatchToProps)(Details);