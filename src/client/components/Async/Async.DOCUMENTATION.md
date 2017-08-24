### Synopsis

Just a wrapper around **AWESOME react-select** with OpusCapita specific styles

See documentation of [react-select](https://github.com/JedWatson/react-select)


### Code Example

```
<Async
  loadOptions={
    function(input, callback) {
      setTimeout(function() {
        callback(null, {
          options: [
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' }
          ],
          // CAREFUL! Only set this to true when there are no more options,
          // or more specific queries will not be sent to the server.
          complete: true
        });
      }, 500)
    }
  }
/>
```

### Component Name

Async

### License

Licensed by © 2017 OpusCapita

