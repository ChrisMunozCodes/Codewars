function opposite(number) {
    return Math.sign(number) === Math.sign(1) ? -Math.abs(number) : Math.abs(number)
}