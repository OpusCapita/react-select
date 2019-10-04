### Synopsis

Just a wrapper around **AWESOME react-select** with OpusCapita specific styles

See documentation of [react-select](https://github.com/JedWatson/react-select)

### Code Example

```
<div>
  <div style={{ marginBottom: '20px' }}>
    <Select
      innerRef={ref => console.log(ref)}
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
  </div>
  <div style={{ marginBottom: '20px' }}>
    <Select
      options={[
        { label: 'Chocolate', value: 'chocolate' },
        { label: 'Vanilla', value: 'vanilla' },
        { label: 'Strawberry', value: 'strawberry' },
        { label: 'Caramel', value: 'caramel' },
        { label: 'Cookies and Cream', value: 'cookiescream' },
        { label: 'Peppermint', value: 'peppermint' }
      ]}
      isDisabled={true}
      placeholder='Select isDisabled=true'
      onChange={_scope.handleChange}
      value={_scope.state.value}
    />
  </div>
  <Select
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
    placeholder='Select with Portal'
    menuPortalTarget={document.body}
  />
</div>
```

### Component Name

Select

### License

Licensed by © 2017 OpusCapita

