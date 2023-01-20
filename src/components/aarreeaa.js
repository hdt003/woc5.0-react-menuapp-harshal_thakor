import React, { useEffect, useState } from 'react'
import  { Component } from 'react'
import Item from './Item'
import Spinner from './Spinner'
import {db} from '../firebase'
import { getDoc } from "firebase/firestore"; 
import { doc, setDoc,deleteDoc,collection,getDocs,query,where } from "firebase/firestore"; 


export default class Area extends Component {
    constructor(props){
        super(props);
        //state in react
        this.state={
            array:[],
            // img:"",
            // description:"",
            // food_type:"",
            // price:0,
            // popularity: 0,
            // type:"",
            // video:"",
            // name:""
        }
    }
    async componentDidMount(){
        ///////
        const q = query(collection(db, "menu"), where(`${this.props.field}`, "==", `${this.props.value}`));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      
      //////
      var joined = this.state.array.concat(doc.data());
        this.setState({
            array: joined
        })
        console.log("pushed")
        
    })
    console.log("array:",this.state.array)
    }

  render() {
    async function insertData(){
        // await setDoc(doc(db, "restaurant","orizon","menu","abc"), obj);
        // console.log(obj);
        // console.log("data inserted in db");
        
    
        console.log(this.state.array)
        // this.state.array.map((element,index)=>{
        //   console.log(element.name,"attttt",index)
        // })
    
        // const q = query(collection(db, "menu"), where(`${props.field}`, "==", `${props.value}`));
        //   const querySnapshot = await getDocs(q);
        //   querySnapshot.forEach((doc) => {
        //   // doc.data() is never undefined for query doc snapshots
        //   console.log(doc.id, " => ", doc.data())});
      }
    async function deleteData(){
        await deleteDoc(doc(db, "menu", "eUsn0OV4H00R3Bl6JErv"));
        console.log("data deleted in db");
      }
      async function arraypush(){
        this.state.array.push( {
          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI1KcmYpZ8sR6FuUXTohqqlpfjuZPDgJgG8w&usqp=CAU",
          video:"",
          name:"kkkk",
          food_type: "Veg",
          type: "Breakfast",
          description: "abcdkdvsbfjkblnifnbgdnidbn",
          price: "50",
          popularity: "20"
        })
      }
    return (
      <div>
            <div>

            <div className="container my-4">
                <h1><u>Top Food Items in {this.props.value}</u></h1>

                {/* { <Spinner/>} */}
                
                <div className="container">
                        {/* {array.forEach( (item, index)=>{return <div>sdfghj</div>})} */}
                <div className="row">
                        {
                            this.state.array.map((element,index)=>{
                            return <div className="col-sm-12 col-md-6 col-lg-4" key={element.img}>
                                <Item 
                                img={element.img} 
                                description={element.description}
                                food_type={element.food_type}
                                price={element.price}
                                popularity= {element.popularity}
                                type={element.type}
                                video={element.video} 
                                name={element.name}/>
                            </div>
                            })
                        }
                        
                        {/* <div className="col-6"><Item/></div> */}
                </div>
                <button className="btn btn-primary" onClick={insertData}>insert data in db</button>
                <br/>
                <br/>
                <button className="btn btn-primary" onClick={deleteData}>delete data in db</button>
                <br/>
                <br/>
                <button className="btn btn-primary" onClick={arraypush}>array push</button>
                </div>
            </div>
            </div>
      </div>
    )
  }
}


