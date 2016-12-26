import { unaryMap, } from './store/dedupe';
const fetchDef = { fetchData: [], needs: [], };
const isWrapped = ({ WrappedComponent = null, }) => WrappedComponent;

const getNeeds = ({ needs, } = fetchDef) => needs;
const getData = ({ fetchData, } = fetchDef) => fetchData;
const getWrapped = c => isWrapped(c) ? c.WrappedComponent : c;

const compData = component => isWrapped(component)
    ? getData(component.WrappedComponent)
    : getData(component);

const flatten = (prev = [], next = []) => [ ...prev, ...next, ];

const fetchComponentData = (dispatch, components, params) => {
  const needs = components.map(compData).reduce(flatten, []);

  return Promise.all(needs.map(n => n(params)).map(dispatch));
};

export default fetchComponentData;
