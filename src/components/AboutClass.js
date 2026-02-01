
import React from "react";

class AboutClass extends React.Component{

    constructor(props){
        super(props) ;

        this.state= {
            count: 0
        }
    }

    
       

    render(){
         const {name,email} = this.props;
        const {count} = this.state;
        return(
        <div className="aboutclass">
            <h1>Count:{ count} </h1>
            <button className="border border-solid border-black px-2 rounded-lg" onClick={()=> {
                this.setState({
                    count : this.state.count+1,
                });

            }}>increase count</button>

 <button className="border border-solid border-black px-2 mx-2 rounded-lg" onClick={()=> {
                
                if(this.state.count>=1){
                    this.setState({
                    count : this.state.count -1 ,
                });
                }

            }}>decrease count</button>


            <h1>{name}</h1>
            <h2>{email}</h2>
            <h2>Stay connected</h2>
        </div>
        )
    }
}

export default AboutClass;