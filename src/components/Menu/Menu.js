import React from 'react'
import './Menu.css'

const Menu=(props)=>{
    
    return (<div className="menu">  
    
            <table>
            <tbody>
                <tr>
                <th> <input type="checkbox" onClick={props.handleCheck} defaultChecked={props.defaultChecked}/> </th>
                <th> {props.kind}</th>
                <th> {props.price}</th>
                </tr>
                </tbody>
            </table> 
              </div>
        );
}

export default Menu; 