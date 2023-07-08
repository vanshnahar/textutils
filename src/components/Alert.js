import React from 'react'

export default function Alert(props) {
    // const capitalize = (element)=>{
    //   if (typeof element !== 'string') {
    //     return ''; // Return an empty string if element is not a valid string
    //   }
    //     let cap=element.toLowerCase();
    //     return cap.charAt(0).toUpperCase() + cap.slice(1);
        
    // };

  return (
    props.alert && (<div className={`alert alert-${props.alert.type}alert-dismissible fade show`} role="alert">
    <strong>{props.alert.type}</strong>: {props.alert.msg} 
    </div>)
    
  );
}
