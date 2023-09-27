const selectrobot = (robot) => {
    console.log('action state', robot)
    return{
        type : 'SELECTED_ROBOT',
        payload: robot
    }
}


export {selectrobot}