import React, {Component} from 'react';
import { connect } from 'react-redux';

class ClacDisplay extends Component {

    render() {
        return (
            <div style= {{display:'block', backgroundColor: 'lightgreen', minHeight:'40px'}}>
                <p> {this.props.calc.display} </p>
            </div>
        );
    }


}

const mapStateToProps = state => ({
    ...state
});


export default connect (
    mapStateToProps
)(ClacDisplay)