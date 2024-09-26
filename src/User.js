import React from "react";

export default class User extends React.Component{
     ClassTest() {
         return "this is Class Component";
    }
    Hello(){
        return "hello Akash"
    }
    render(){
        return(
          <>
          <h1>This Is Class based User Componenet</h1>
          </>
        )
    }
}