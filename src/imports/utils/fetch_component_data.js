const fetchDef = { fetchData: [], needs: [], };

const getNeeds = ({ needs, } = fetchDef) => needs;
const getData = ({ fetchData, } = fetchDef) => fetchData;

const isWrapped = ({ WrappedComponent = null, }) => WrappedComponent;

const compData = component => isWrapped(component)
    ? getData(component.WrappedComponent)
    : getData(component);

const compNeeds = component => isWrapped(component)
    ? getNeeds(component.WrappedComponent)
    : getNeeds(component);

const flatten = (prev = [], next = []) => [ ...prev, ...next, ];

const fetchComponentData = (dispatch, components, params) => {
  const needs = components.map(compData).reduce(flatten, []);
  const promises = needs.map(need => Promise.resolve(dispatch(need(params))));
  return Promise.all(promises);
};

export default fetchComponentData;
