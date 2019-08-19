
import React              from 'react';
import                    './index.css';

// import { Link }        from 'react-router';
// import { connect }        from 'react-redux';
// import store              from '../../redux/store.js';
// import * as actions       from '../../redux/actions';



// create pure component
export class Unit extends React.Component {

  getClassName() {
    if (this.props.old) return 'CGL-old';
    return this.props.alive ? 'CGL-alive' : 'CGL-dead';
  }

  render() {
    return (
      <div className='CGL-unitblock'>
        <div className={this.getClassName() + ' CGL-unit'}
             onClick={() => this.props.unitClick(
               this.props.alive,
               this.props.row,
               this.props.column
             )} />
      </div>
    );
  }

};



// create connected container component
// const mapStateToProps = function(store) {
//   return {
//     alive: store.getIn(["boardMap", this.props.row, this.props.column, "alive"])
//   };
// };

// const mapDispatchToProps = function(dispatch, ownProps) {
//   return {
//     alterState: function() {
//       dispatch(defaultAction('add-to-new', 'add-more'))
//     }
//   }
// }

//export const UnitContainer = connect(mapStateToProps, actions)(Unit);


