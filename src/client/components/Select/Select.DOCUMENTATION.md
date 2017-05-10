### Synopsis

Select is 
*Write here a short introduction and/or overview that explains **what** component is.*

### Props Reference

| Name                           | Type                    | Description                                                 |
| ------------------------------ | :---------------------- | ----------------------------------------------------------- |
| demoProp                       | string                  | Write a description of the property                         |

### Code Example

```
<Select
  multi={false}
  options={[
    { label: 'Chocolate', value: 'chocolate' },
	  { label: 'Vanilla', value: 'vanilla' },
	  { label: 'Strawberry', value: 'strawberry' },
	  { label: 'Caramel', value: 'caramel' },
	  { label: 'Cookies and Cream', value: 'cookiescream' },
	  { label: 'Peppermint', value: 'peppermint' }
  ]}
  onChange={_scope.handleChange}
  value={_scope.state.value}
/>
```

### Component Name

Select

### License

Licensed by © 2017 OpusCapita

