import {post,get} from './request'
export const articleList = async(data)=> {
    const res = post('',data)
    return res
}