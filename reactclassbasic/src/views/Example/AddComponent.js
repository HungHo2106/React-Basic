import React from 'react';

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: '',
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value,
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        if(!this.state.title || !this.state.salary){
            alert('Missing required parameters')
            return;
        }
        console.log('>>> check data:', this.state)
        this.props.addNewJobs({
            id: Math.floor(Math.random() * 100),
            name: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })
    }

    render(){
        return(
            <form>
                <label for="fname">Job's Title: </label><br/>
                <input type="text" value={this.state.title}
                    onChange={(event)=>this.handleChangeTitle(event)}/>
                <br/>
                <label for="lname">Salary: </label><br/>
                <input type="text"  value={this.state.salary}
                    onChange={(event)=>this.handleChangeSalary(event)}/>
                <br/><br/>
                <input type="submit"
                    onClick={(event)=>this.handleSubmit(event)}/>
            </form> 
        )
    }

}

export default AddComponent;