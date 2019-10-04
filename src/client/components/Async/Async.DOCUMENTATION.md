### Synopsis

Just a wrapper around **AWESOME react-select** with OpusCapita specific styles

See documentation of [react-select](https://github.com/JedWatson/react-select)


### Code Example

```
<div>
  <div style={{ marginBottom: '20px' }}>
    <Async
      innerRef={ref => console.log(ref)}
      loadOptions={
        (inputValue, callback) => {
          setTimeout(() => {
            callback([
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' }
            ].filter(item=>item.value === inputValue || item.label === inputValue));
          }, 1000);
        }
      }
    />
  </div>
  <div style={{ marginBottom: '20px' }}>
    <Async
      innerRef={ref => console.log(ref)}
      loadOptions={
        (inputValue, callback) => {
          setTimeout(() => {
            callback([
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' }
            ].filter(item=>item.value === inputValue || item.label === inputValue));
          }, 1000);
        }
      }
      isDisabled={true}
      placeholder='Select isDisabled=true'
    />
  </div>
  <Async
    loadOptions={
      (inputValue, callback) => {
        setTimeout(() => {
          callback([
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' }
          ].filter(item=>item.value === inputValue || item.label === inputValue));
        }, 1000);
      }
    }
    placeholder='Select with Portal'
    menuPortalTarget={document.body}
  />
</div>
```

### Component Name

Async

### License

Licensed by © 2017 OpusCapita

