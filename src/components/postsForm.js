import React, { Component } from 'react'

 class PostForm extends Component {
     state = {
         title:"",
         body:""
     }
 onSubmit =(e) =>{
     e.preventDefault();
   
     const post = {
         title:this.state.title,
         body :this.state.body
     }

    fetch('https://jsonplaceholder.typicode.com/posts', {
         method:'POST',
         headers: {
             'content-type':'application/json'
         },
         body:JSON.stringify(post)
    }
     )
     .then(res => res.json())
     .then(data => console.log(data))

}
    render() {
        console.log(this.state.body)
       
        return (
            <div>
                <h1>Add Post</h1>
                <form>
                    <div>
                        <label>
                            Title
                        </label>
                        <br/>
                        <input type="text" name="title" onChange = {e =>this.setState({title:e.target.value})}value = {this.state.title}/> 
                    </div>
                    <br />
                    <div>
                        <label>
                            Body
                        </label>
                        <br/>
                        <textarea type="text" name="body" onChange ={e =>{this.setState({body:e.target.value})}} value = {this.state.body}/> 
                    </div>
                    <br />
                    <button type = "submit" onClick ={this.onSubmit}>SUBMIT</button>
                </form>
                  
            </div>
        )
    }
}
export default PostForm