function multipleOfIndex(array) {
    return array.filter((e, i) => {
      return i !== 0 && e % i === 0;
    });
}