const lodash = require('lodash')

const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const reducer = (sum, item) => {
        return sum + item
    }
    return blogs.map(blog => blog.likes).reduce(reducer)
}

const faveBlog = (blogs) => {

    const highest =  Math.max(...blogs.map(blog => blog.likes))
    const faves = blogs.filter(blog => blog.likes === highest)
    const fave = lodash.pick(...faves, ['title', 'author', 'likes'])
    return fave
}

module.exports = {
    dummy,
    totalLikes,
    faveBlog
}