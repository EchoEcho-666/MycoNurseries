
import NameOfBlog, {
    postMeta as nameOfBlogMeta
} from "./NameOfBlog.jsx"

import NameOfBlog2, {
    postMeta as nameOfBlog2Meta
} from "./NameOfBlog2.jsx"

export const posts = [ 
    {
        ...nameOfBlogMeta,
        component: NameOfBlog,
    },
    {
        ...nameOfBlog2Meta,
        component: NameOfBlog2,
    }
]
