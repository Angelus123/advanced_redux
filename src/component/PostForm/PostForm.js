import React, { Component } from 'react'
import { connect } from "react-redux"
import { createPost } from '../../actions/postActions'
import {PropTypes} from 'prop-types'
 class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: ""

        }
        this.onChangeHandle = this.onChangeHandle.bind(this);
        this.onSubmitHandle = this.onSubmitHandle.bind(this);
    }

    onChangeHandle(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmitHandle(e){
        e.preventDefault()
        const post= {
            title:this.state.title,
            body:this.state.body
        }
        this.props.createPost(post)
       

    }
    render() {
        return (
            <div>
                <h1>PostForm</h1>
                <form onSubmit={this.onSubmitHandle}>
                    <div>
                        <label>Title</label><br />
                        <input type="text" name="title" value={this.state.title} onChange={this.onChangeHandle} />
                    </div>
                    <div>
                        <label>Body</label><br />
                        <textarea cols="50" rows="5" name="body" value={this.state.body} onChange={this.onChangeHandle} />
                    </div>
                    <input type="submit" value="SUBMIT" />

                </form>
            </div>
        )
    }
}
PostForm.propTypes = {
    createPost:PropTypes.func.isRequired 
}

export default connect ( null, { createPost })( PostForm)