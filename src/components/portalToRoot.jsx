import React from "react"; 
import ReactDOM from "react-dom";

export default class PortalToRoot extends React.Component {
    constructor(props) {
      super(props); 
      this.el = document.createElement('div');
    }
  
    componentDidMount() { 
        document.getElementById('root').appendChild(this.el);
    }
  
    componentWillUnmount() { 
        document.getElementById('root').removeChild(this.el);
    }
    
    render() { 
      return ReactDOM.createPortal( 
        this.props.children, 
        this.el,
      );
    }
  }