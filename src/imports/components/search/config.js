import qs from 'qs';
import { SearchActions } from 'imports/actions';
import SearchResults from './main';

const getQuery = ({ query } = { query: {}}) => query;
const getParams = ({ params } = { params: {}}) => params;
const parseMatch = match => qs.parse(getQuery(getParams(match)));

const searchMatch = (match) => {
  console.log('match.params.query\n', parseMatch(match));

  return SearchActions.search(parseMatch(match));
};

const routes = {
  path: '/search(.?):query?',
  component: SearchResults,
  loadData: [ searchMatch ],
};

export default routes;
