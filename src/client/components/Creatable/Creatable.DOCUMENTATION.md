### Synopsis

Just a wrapper around **AWESOME react-select** with OpusCapita specific styles

See documentation of [react-select](https://github.com/JedWatson/react-select)

### Code Example

```
<div>
  <div style={{ marginBottom: '20px' }}>
    <Creatable
      innerRef={ref => console.log(ref)}
			options={[
					{ label: 'Chocolate', value: 'chocolate' },
					{ label: 'Vanilla', value: 'vanilla' },
					{ label: 'Strawberry', value: 'strawberry' },
					{ label: 'Caramel', value: 'caramel' },
					{ label: 'Cookies and Cream', value: 'cookiescream' },
					{ label: 'Peppermint', value: 'peppermint' }
				]}
			isMulti
		/>
  </div>
	<Creatable
		options={[
				{ label: 'Chocolate', value: 'chocolate' },
				{ label: 'Vanilla', value: 'vanilla' },
				{ label: 'Strawberry', value: 'strawberry' },
				{ label: 'Caramel', value: 'caramel' },
				{ label: 'Cookies and Cream', value: 'cookiescream' },
				{ label: 'Peppermint', value: 'peppermint' }
			]}
		isMulti={true}
		placeholder='Select with Portal'
    menuPortalTarget={document.body}
	/>
</div>
```

### Component Name

Creatable

### License

Licensed by © 2017 OpusCapita

