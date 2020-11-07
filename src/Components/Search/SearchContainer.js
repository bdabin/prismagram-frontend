import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { withRouter } from 'react-router-dom';
import SearchPresenter from './SearchPresenter';
import { SEARCH } from './SearchQueries';

export default withRouter(({ location: { search } }) => {
	const searchTerm = search.split('=')[1];
	const { data, loading } = useQuery(SEARCH);
	return <SearchPresenter searchTerm={searchTerm} data={data} loading={loading} />;
});
