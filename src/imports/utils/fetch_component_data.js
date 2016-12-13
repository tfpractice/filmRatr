const fetchDef = { fetchData: [], needs: [], };
const isWrapped = ({ WrappedComponent = null, }) => WrappedComponent;

const getNeeds = ({ needs, } = fetchDef) => needs;
const getData = ({ fetchData, } = fetchDef) => fetchData;

const compData = component => isWrapped(component)
    ? getData(component.WrappedComponent)
    : getData(component);

const flatten = (prev = [], next = []) => [ ...prev, ...next, ];

const fetchComponentData = (dispatch, components, params) => {
  console.log('================fetchComponentData===================');

  // console.log('================components===================', components);
  // console.log('================params===================', params);

  const needs = components.map(compData).reduce(flatten, []);

  console.log('================needs===================', needs);

  const promises = needs.map(need => Promise.resolve(dispatch(need(params))));

  return Promise.all(promises);
};

export default fetchComponentData;
