import React,{Component} from 'react';
import './App.css';
import MenuMap from './components/menuMap/menuMap'
import BillMap from './components/BillMap/billMap' 
import axios from 'axios';



class App extends Component {

  state={
    menu:[ ], 
      onBill:[   ],
      total:[ ],
      String:[],
      totalPrice:null
  }

 
  componentDidMount(){
   axios.get('http://94.127.209.194:3333/AudioGramServices/webapi/myresource/menu')
    .then(response=>{
      const items = response.data
      const updateItem= items.map(item=>{
      //  console.log(item)
        return {...item }        
      });
      this.setState({menu:updateItem})
      
    })
  }


 handleCheck=(indexToDeleted)=>{
  let totalPrice1=0;
    const currentData=[...this.state.menu];
  ////////// delet selected item////////
        const addedObject=currentData.splice(indexToDeleted,1);
 //////////onBill array//////
        this.state.onBill.push(addedObject) 
 ///////total price/////////
        this.state.total.push(addedObject[0].itemPrice)
        console.log('[app.js] total:',this.state.total)

          this.setState({menu:currentData})
          console.log('[app.js] onbill:',this.state.onBill)

          ///////// added price and sumation the total price
          this.state.total.map(price =>{
            totalPrice1=totalPrice1+ price;
            console.log('totalPrice',totalPrice1)
            this.setState({totalPrice:totalPrice1})
         console.log('this.state.totalPrice',this.state.totalPrice)
         })
     return document.getElementById('price').innerHTML=totalPrice1;
   
   }
  

   postData=()=>{
    let data=null;
    let myJsonString =null
   
    console.log('[app.js] onbill',this.state.onBill )
    this.state.onBill.map((item,index)=>{
   console.log('[app.js] item',item)

  data={
    orderUserName: "saja",
    orderItemId: item[0].itemId,
    orderPrice: item[0].itemPrice
    }
    this.state.String.push(data)
   //console.log('String',String)
  myJsonString = JSON.stringify(data);
  })
  // console.log('data',data)
   console.log('myJsonString',myJsonString)

    
  axios.post('http://94.127.209.194:3333/AudioGramServices/webapi/myresource/post',myJsonString)
  .then(response=>{
   console.log('response',response)  
   })
  .catch(error=>{
      console.log(error)
      
  });    
   }


   render(){
 
   return (
      <div className="App">
        <header className="App-header">
         <h2>  Restaurant Menu</h2>
        
          <table>
          <tbody>
            <tr>
            <th>choose</th>
            <th> The kind</th>
            <th> price</th>
            </tr>
            </tbody>
          </table>
          
          <MenuMap 
          menu={this.state.menu}
          handleCheck={this.handleCheck}
          defaultChecked={this.state.checked} >
          </MenuMap>
        
        </header>

        <div className="bill">
          <h2>  Restaurant bill</h2>
          <table>
            <tbody>
            <tr>
            <th> kind</th>
            <th> price </th>
            </tr>
            </tbody>
          </table>
        
         <BillMap key={this.state.menu.itemId} total={this.state.total} onBill={this.state.onBill} />

         <table>
            <tbody className="totalPrice">
            <tr> 
            <th> Totul price</th>
            <th id="price">   </th>
            </tr>
            
            </tbody>
          </table>
          <table>
            <tbody className="totalPrice">
          
            <tr> 
              <th className="postData">
              <button onClick={this.postData}>post Data</button>
               </th>
              </tr>
            </tbody>
          </table>
    
        
    
         </div>
         </div>
    );
   }
 }

export default App;