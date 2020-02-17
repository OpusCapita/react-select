export default {
  styles: {
    option: (styles) => {
      return {
        ...styles,
        backgroundColor: 'white',
        ':active': {
          ...styles[':active'],
          backgroundColor: "white",
        },
      }
    }
  }
}
