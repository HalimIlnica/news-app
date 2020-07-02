// import React from 'react';

// import './CreateNewsPage.styles.scss';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// class CreateNewsPage extends React.Component {


//   render() {
//     return (
//         <div>
//         <h3 className="news-s">News Site</h3>

//         <form class="form-style-9">
//             <ul>
        
//             <p>Headline:</p>
//             <li>
//                 <input 
//                 name="title"
//                 type="text" 
//                 name="field3" 
//                 class="field-style field-full align-none" 
//                 placeholder="Add the title here..." 
//                 onChange={this.handleChange}
//                 value={this.state.post.name}
//                 />
//             </li>
            
//             <p>Description:</p>
//             <li>
//             <textarea 
//                 type="text" 
//                 name="field5" 
//                 className="field-style" 
//                 placeholder="Add news description here..."
//                 onChange={this.handleChange}
//                 value={this.state.post.description}
//             />
//             </li>


//             <li>
//                 <input 
//                 type="text" 
//                 name="field3" 
//                 class="field-style field-split align-left" 
//                 placeholder="Author" 
//                 onChange={this.handleChange}
//                 value={this.state.post.author}
//                 />
//                     Date: <DatePicker 
//                     style={{borderColor: '#28739E', width:'100%', color:'red'}} 
//                     name="field4" 
//                     class="field-style field-split align-right" 
//                     selected={this.state.startDate} />
//             </li>

//             <li>
//             <button 
//                 onClick={this.handleSubmit} 
//                 type="submit" 
//                 value="Create">
//                     Create
//             </button>
//             </li>
//             </ul>
//         </form>
  
      
//         </div>
//     );
//   }
// }
// export default CreateNewsPage;


import React from "react";

    export default ({ handleChange, handleSubmit, post, name }) => {
      return (
        <div className="form-container">
          <form>
            <div className="form-group">
              <input
                className="col-12 form-control"
                name="name"
                onChange={handleChange}
                type="text"
                value={post.name}
                placeholder="post name"
              />
            </div>
            <div className="form-group">
              <textarea
                className="col-12 form-control"
                name="description"
                onChange={handleChange}
                type="text"
                value={post.description}
                placeholder="post description"
              />
            </div>
            <div className="form-group">
              <input
                className="col-12 form-control"
                name="salary"
                onChange={handleChange}
                type="number"
                value={post.salary}
                placeholder="post salary"
              />
            </div>
            <div className="form-group">
              <select
                className="form-control"
                onChange={handleChange}
                name="level"
                value={post.level}
              >
                <option>Junior</option>
                <option>Mid</option>
                <option>Senior</option>
                <option>Any</option>
              </select>
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      );
    };
