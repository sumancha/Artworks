import { Post } from "../../../models/post";

export interface PostState{
    posts: Post[];
} 

export const intitalState: PostState = {
    posts: [
        {id: '1', title: 'First Post', description: 'This is the first post'},
        {id: '2', title: 'Second Post', description: 'This is the second post'},    
        {id: '3', title: 'Third Post', description: 'This is the third post'},
    ]
}