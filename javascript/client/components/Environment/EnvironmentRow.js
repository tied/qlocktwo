import React from 'react';
import EnvironmentItem from './EnvironmentItem';

class EnvironmentRow extends React.Component {
    render() {
        return (
            <div className='row'>
                {this.props.items.map((item, index) => <EnvironmentItem {...item} key={index} />)}
            </div>
        );
    }
}

EnvironmentRow.propTypes = {
    items: React.PropTypes.array.isRequired
};

export default EnvironmentRow;