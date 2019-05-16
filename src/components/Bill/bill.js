import React from 'react'
import './Bill.css'

const Bill=(props)=>{
   // console.log(props)
    return (<div className="menu">  
            <table>
            <tbody>
                <tr>
                <th>  {props.kind}</th>
                <th> {props.price}</th>
                </tr>
                </tbody>
            </table>
          </div>
        );
} 

export default Bill; 