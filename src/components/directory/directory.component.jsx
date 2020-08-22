import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './directory.styles.scss';
import MenuItem from  '../menu-item/menu-item.component';
import {selectDirectorySections} from '../../redux/directory/directory.selectors'


const Directory = ({ sections }) => {
	const displayMenuItem = sections.map(({ id, ...otherSectionProps }) => (
		<MenuItem key={id} {...otherSectionProps} />
	));

	return <div className="directory-menu">{displayMenuItem}</div>;
};



const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);

// const displayMenuItem = () => {
//     return this.state.sections.map(({id, ...otherSectionProps}) => (
//         <MenuItem key = {id} {...otherSectionProps }/>
//     ));
// };