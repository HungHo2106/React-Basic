import React from 'react';
import './Demo.scss'

class ChildComponent extends React.Component {

    state = {
        showJobs: false,
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        this.props.deleteAJob(job)
    }


    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        return (
            <>
                {showJobs === false ? <div><button className='btn-show' onClick={() => this.handleShowHide()}>Show</button></div> :
                    <>
                        <div className='jobs-list'>
                            {arrJobs.map((item) => {
                                    if(item.salary >= 500){
                                        return (<div key= {item.id}>
                                            {item.name} - {item.salary} <></> <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                        </div>)
                                    }else {
                                        return (<div></div>)
                                    }
                                })
                            }
                        </div>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </>
        )
    }

}

export default ChildComponent;