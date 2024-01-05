function hello(name) {
    if (name === '' || name === undefined) {
      return `Hello, World!`;
    } else {
      const capitalized = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
      return `Hello, ${capitalized}!`
    }
  }