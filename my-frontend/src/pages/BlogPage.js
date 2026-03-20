import { posts } from "./blog-posts/PostHandler";
import { useParams } from 'react-router-dom';

export default function BlogPage(){
    const {slug} = useParams();
    const post = posts.find((p) => p.slug === slug);

    if (!post){
        return <p>Post not found.</p>
    }

    const PostComponent = post.component;

    return (
        <PostComponent />
    )




}