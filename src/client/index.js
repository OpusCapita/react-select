import { components } from 'react-select';
import Select from './components/Select';
import Async from './components/Async';
import AsyncCreatable from './components/AsyncCreatable';
import Creatable from './components/Creatable';

Select.Async = Async;
Select.AsyncCreatable = AsyncCreatable;
Select.Creatable = Creatable;

export default Select;
export {
	Async,
	AsyncCreatable,
	Creatable,
	components
};
