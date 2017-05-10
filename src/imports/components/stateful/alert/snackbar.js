// import React from 'react';
// import Snackbar from 'material-ui/Snackbar';
// import RaisedButton from 'material-ui/RaisedButton';
//
// export default class AlertBar extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.state = { open: false, };
//   }
//
//   handleTouchTap = () => {
//     this.setState({ open: true, });
//   };
//
//   handleRequestClose = () => {
//     this.setState({ open: false, });
//   };
//
//   render() {
//     return (
//       <div>
//         <RaisedButton
//           onTouchTap={this.handleTouchTap}
//           label={this.props.message}
//         />
//         <Snackbar
//           open={this.state.open}
//           message={this.props.message}
//           autoHideDuration={2000}
//           onRequestClose={this.handleRequestClose}
//         />
//       </div>
//     );
//   }
// }
