import React from 'react'
import Menu from '../Menu/Menu'


const MenuMap= props=>{
// console.log('menu',props.menu)
return (
props.menu.map((x,index)=>{

    return( <Menu 
        key={x.itemId}
         kind={x.itemDesc} 
        price={x.itemPrice} 
        handleCheck={()=>props.handleCheck(index)}
        defaultChecked={props.defaultChecked} ></Menu>

    );
})

);
}
export default MenuMap;