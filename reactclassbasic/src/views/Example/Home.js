import React from 'react';
import { withRouter } from "react-router";
import Color from '../HOC/Color';
import Image from '../../assets/images/images.jpg';
import { connect } from 'react-redux';

class Home extends React.Component {
    componentDidMount() {
        setTimeout(() =>{
            this.props.history.push('/todo')
        }, 3000)
    }

    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user);
    }
    handleCreateUser = () => {
        this.props.addUserRedux();
    }


    render(){
        let listUsers = this.props.dataRedux;
        return(
            <>
                <div>
                    Hello world from Homepage with Hung Ho
                </div>
                <div>
                    <img src= {Image} style={{width: '400px', height:'200px', marginTop:'20px'}}/>
                </div>
                <div>
                    {listUsers && listUsers.length > 0 && 
                    listUsers.map((item,index) => {
                        return (
                            <div key={item.id}>
                                {index + 1} - {item.name} 
                                &nbsp; <span onClick={()=> this.handleDeleteUser(item)}>X</span>
                            </div>
                        )
                    })}
                    <button onClick={()=> this.handleCreateUser()}>Create New</button>
                </div>
            </>
        )
    }
}

// export default withRouter(Home); // => HOC: higher order components

const mapStateToProps = (state) => {
   return {
        dataRedux : state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux : (userDelete) => dispatch({type: 'DELETE_USER', payload: userDelete}),
        addUserRedux : () => dispatch({type: 'CREATE_USER'}),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));