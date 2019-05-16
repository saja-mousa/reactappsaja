import React ,{Component}from 'react'
import Bill from '../Bill/bill'
class BillMap extends Component{
 
  
    render(){

    return (
       
      this.props.onBill.map((x,index)=>{
        console.log('item on map',x)

        // console.log('totalprice',totalprice)
          
             return( <Bill
              key={x[0].itemId}
              index={index}
              kind={x[0].itemDesc} 
              price={x[0].itemPrice}
              click={this.totalprice} >

           </Bill> 
            

             );
       })
    );

} }

export default BillMap;