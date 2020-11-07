import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FatText from '../FatText';

const Wrapper = styled.div`
	height: 50vh;
	text-align: center;
`;

const SearchPresenter = ({ searchTerm, loading }) => (
	<Wraaper>{searchTerm === undefined && <FatText text={'Search for something'} />}</Wraaper>
);

SearchPresenter.propTypes = {
	searchTerm: PropTypes.string
};

export default SearchPresenter;
