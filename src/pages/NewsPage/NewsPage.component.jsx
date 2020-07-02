import React, { Component } from "react";
import "./NewsPage.styles.scss";
import RegisterForm from "../RegisterForm/RegisterForm.component";


class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        name: "",
        description: "",
        author: '',
        level: "Junior",
        salary: 30000
      },
      news: []
    };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState(prevState => ({
      post: { ...prevState.post, [name]: value }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState(prevState => ({
      news: [...prevState.news, prevState.post],
      post: { name: "", description: "", author: '', level: "", salary: 30000 }
    }));
  };

  render() {
    return (
      <div className="App">
        <h2 style={{textAlign: 'center'}}>News Site</h2>
        <RegisterForm
          handleChange={this.handleChange}
          post={this.state.post}
          handleSubmit={this.handleSubmit}
        />
        
      </div>
    );
  }
}
export default NewsPage;