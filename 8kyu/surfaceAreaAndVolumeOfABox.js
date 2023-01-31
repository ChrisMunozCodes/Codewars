function getSize(width, height, depth){
    return [2 * (width * height + width * depth + height * depth),width * height * depth]
}