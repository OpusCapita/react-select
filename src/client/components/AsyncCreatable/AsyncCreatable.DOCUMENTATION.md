### Synopsis

Just a wrapper around **AWESOME react-select** with OpusCapita specific styles

See documentation of [react-select](https://github.com/JedWatson/react-select)

### Code Example

```
<AsyncCreatable
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
```

### Component Name

AsyncCreatable

### License

Licensed by © 2017 OpusCapita

