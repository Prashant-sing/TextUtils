import React from 'react'

export default function Alert(props) {
    const Capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    //we r using props.alert here so that we don't get error because null type alert can't be shown
    //So, basically, "props.alert &&" helps us avoid getting null as alert type
    //and ${props.alert.type} giving the success type in alert that's why alert becomes green
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">     
        <strong>{Capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>
  )
}
