import React, { cloneElement } from "react";


/* export default function Familia(props){
    return(
        <div>
            {
                React.Children.map(props.children, child => {
                    return cloneElement(child, props);
                })
            }
        </div>
    )
} */


export default function Familia(props) {
  return (
    <div>
        {props.children.map((child, index) => {
            return cloneElement(child, {...props, key: index})
        })}
    </div>
  )
}
