import React, { Component } from 'react';
import styled from 'styled-components';

let AppListItem = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.25rem;
      
    button {
        width: 35px;
        height: 35px;
        margin: 3px;
        font-size: 17px;
        border: none;
        cursor: pointer;
        :focus {
            box-shadow: none;
            outline: none;
        }
      }
    
    .btn-star {
        color: ${props => props.star.starColor};
      }
    .btn-trash {
          color: red;
      }
    .fa-heart {
          width: 35px;
          height: 35px;
          text-align: center;
          line-height: 35px;
          font-size: 16px;
          color: red;
          transition: 0.3s all;
          transform: ${props => props.theme.ts};
          opacity: ${props => props.theme.op};
      }
`

let ItemLabel = styled(AppListItem)`
        display: block;
        line-height: 35px;
        cursor: pointer;
        user-select: none;
        transition: 0.5s all;
        color: ${props => props.style.color};
`

AppListItem.defaultProps = {
   theme: {
    op: "0",
    ts: "translateX(30px)"
},
    star: {
        starColor: "#FFD700"
    }
}

ItemLabel.defaultProps = {
    style: {
    color: "black"
}}

const theme = {
    op: "1",
    ts: "translateX(0px)"
}

const star = {
    starColor: "#aeaeae"
}

const style = {
    color: "#FFD700"
}

export default class PostListItem extends Component {
    state = {like: this.like}
    render() {
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;

            const liked = like ? { theme: theme } : AppListItem.defaultProps;
            const appImportant = important ? { style: style } : ItemLabel.defaultProps;
            const itemImportant = important ? { star: star } : AppListItem.defaultProps;

        return (
        <AppListItem {...liked} {...itemImportant}>
            <ItemLabel {...appImportant} as="span" 
            onClick={onToggleLiked}>
                {label}
            </ItemLabel>
        <div className="d-flex justify-content-center align-items-center">
            <button 
                type="button" 
                className="btn-star btn-sm"
                onClick={onToggleImportant}>
                    <i className="fa fa-star"></i>
            </button>
            <button 
                type="button" 
                className="btn-trash btn-sm"
                onClick={onDelete}>
                    <i className="fa fa-trash"></i>
            </button>
                <i className="fa fa-heart"></i>
        </div> 
    </AppListItem>
        )
    }
}