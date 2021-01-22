import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import { ListGroup } from 'reactstrap';
import styled from 'styled-components';

const StyledListGroup = styled(ListGroup)`
    margin-top: 50px;

    .list-group-item {
     padding: 20px 35px 10px 35px;
     margin-top: 10px;
    }
`

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

const elements = posts.map((item) => {
    if (typeof item === 'object' && isEmpty(item)) {
        const {id, ...itemProps} = item;

    return (
        <li key={id} className="list-group-item">
                <PostListItem 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleLiked={() => onToggleLiked(id)}/>
        </li>
    )
    }
})


function isEmpty(obj) {
    for(let key in obj)
    {
        return true;
    }
    return false;
}

    return (
        <StyledListGroup>
            {elements}
        </StyledListGroup>
    )
}

export default PostList;