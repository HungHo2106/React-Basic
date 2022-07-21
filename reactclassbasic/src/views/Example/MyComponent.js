import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {

    state = {
        arrJobs:[
            {id:'abcJob1',name:'Developer',salary:'700'},
            {id:'abcJob2',name:'Bussiness Analysis',salary:'500'},
            {id:'abcJob3',name:'Projet Management',salary:'1000'},
        ],
    }

    addNewJobs = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
        })

    }

    render(){
        return (
            <>
                <AddComponent addNewJobs = {this.addNewJobs} />
                <ChildComponent 
                arrJobs = {this.state.arrJobs}
                deleteAJob = {this.deleteAJob}

                />
            </>
        )
    }

}

export default MyComponent;