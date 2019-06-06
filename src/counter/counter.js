import React from "react";
import template from "./counter.jsx";
import { connect } from 'react-redux';


class counter extends React.Component {
  render() {
    return template.call(this);
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps", state);
  return {
    count: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementClick: () => {
      console.log("Dispatch", dispatch);
      const action = {
        type:'INCREMENT',
        data:'mydata'      
      };
      dispatch(action);
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(counter);
