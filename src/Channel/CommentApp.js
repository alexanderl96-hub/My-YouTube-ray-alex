import React, { Component } from 'react'
import CommentSection from './CommentSection'
import Form from './Form'
class CommentApp extends Component {
    constructor() {
        super()
        this.state = {
            comments: [],
            input: "",
            input2: '',
          };
    }
      handleChange = (e) => {
        const { value } = e.target;
        this.setState({
            input: value,
            
          });
      };
      handleChange2 = (e) => {
        const { value } = e.target;
        this.setState({
            
            input2: value
          });
      };
      handleSubmit = (e) => {
        e.preventDefault();
        const { input ,input2} = this.state;
        const newcomment = {
          text: input + input2
        };
        this.addComments(newcomment);
        this.setState({ input: "" ,input2: ''});
      };
      addComments = (comment) => {
        this.setState((prevState) => {
          return {
            comments: [...prevState.comments, comment]
          };
        });
      };
      deleteComments = (comment) => {
        const { comments } = this.state;
        const filterComment = comments.filter((item) => {
          return comment !== item
        });
        this.setState({ comments: filterComment });
      };
    render() {
        const { input, comments } = this.state;
        return (
            <div>
                <h3>Comment Board</h3>
                <Form
                input={input}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                handleChange2={this.handleChange2}
                />
                <CommentSection
                comment={comments}
                deleteComments={this.deleteComments}
                />
            </div>
        )
    }
}
export default CommentApp




// import React, { Component } from 'react'
// import CommentSection from './CommentSection'
// import Form from './Form'
// class CommentApp extends Component {
//     constructor() {
//         super()
//         this.state = {
//             comments: [],
//             input: "",
//           };
//     }
//       handleChange = (e) => {
//         const { value } = e.target;
//         this.setState(
//           {
//             input: value
//           }
//         );
//       };
//       handleSubmit = (e) => {
//         e.preventDefault();
//         const { input } = this.state;
//         const newcomment = {
//           text: input,
//           uuid: uuidv4()
//         };
//         this.addComments(newcomment);
//         this.setState({ input: "" });
//       };
//       addComments = (comment) => {
//         this.setState((prevState) => {
//           return {
//             comments: [...prevState.comments, comment]
//           };
//         });
//       };
//       deleteComments = (commet) => {
//         const { comments } = this.state;
//         const filterComment = comments.filter((item) => {
//           return comments.uuid !== item.uuid;
//         });
//         this.setState({ comments: filterComment });
//       };
//     render() {
//         const { input, comment } = this.state;
//         return (
//             <div>
//                 <h3>Comment Board</h3>
//                 <Form
//                 input={input}
//                 handleChange={this.handleChange}
//                 handleSubmit={this.handleSubmit}
//                 />
//                 <CommentSection
//                 comment={comment}
//                 deleteComments={this.deleteComments}
//                 />
//             </div>
//         )
//     }
// }
// export default CommentApp