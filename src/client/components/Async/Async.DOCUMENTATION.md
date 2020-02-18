### Synopsis

Just a wrapper around **AWESOME react-select** with OpusCapita specific styles

See documentation of [react-select](https://github.com/JedWatson/react-select)


### Code Example

```
<div>
  <div style={{ marginBottom: '20px' }}>
    <Async
      innerRef={ref => console.log(ref)}
      value= {{ value: 'two1', label: 'Two1', statusId: '400'}}
      loadOptions={
        (inputValue, callback) => {
            return callback([
              { value: 'two1', label: 'Two1', statusId: '400'},
              { value: 'two2', label: 'Two2', statusId: '400'},
              { value: 'two3', label: 'Two3', statusId: '400'},
              { value: 'two4', label: 'Two4', statusId: '700'},
              { value: 'two5', label: 'Two5', statusId: '700'}
            ]);
        }
      }
      styles={{
          option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            const customStyles = {};
            if (data.statusId === '700') {
              customStyles.backgroundColor = "#ccc";
            } else {
              customStyles.backgroundColor = "white";
            }
            return {
              ...styles,
              ...customStyles,
              ':active': {
                ...styles[':active'],
                backgroundColor: data.statusId === '700' ? "#ccc" : "white",
              },
            }
          }
        }}
    />
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

