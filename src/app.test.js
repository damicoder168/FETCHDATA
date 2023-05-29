import { configure }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'


import App from './App'

configure({adapter : new Adapter()})

describe( '<App /> ', () => {
    it('should  render two <App /> elements if not authenticated', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find(App)).toHaveLength(2)
    })
})





axios.get('https://wft-geo-db.p.rapidapi.com/v1/geo/cities?rapidapi-key=347582bfe5msh90a51298ebb6e67p160ab1jsne4df805632bf')