import React,{ Component } from "react";

import Dashboard from "./Dashboard"
import allGRoupsRequest from "../../Request/all_group_request";

class DashboardContainer extends Component{
state={
  loading: false,
  allGroups: []
}

componentDidMount(){
  this.setState({loading: true});
  allGRoupsRequest().then(result=>{
    console.log("ALL GROUPS REQUEST RESULT: ", result);
    this.setState({allGroups: result, loading: false})
  })
}

render(){
console.log("PARAMS :", this.props.match.params.id)
  if(this.state.loading){
    return <div>loading...</div>
  }
  return(
    <div>
      <Dashboard allGroups={this.state.allGroups} id={this.props.match.params.id}/>
      </div>
  )

}

}

export default DashboardContainer;