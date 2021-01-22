import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components';
import nextId from "react-id-generator";

const GlobalStyle = createGlobalStyle`
 body
       {
        margin: 50px 0 0 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
                      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
                      sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #eaf5fc;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`
const SearchPanelDiv = styled.div`
    display: flex;
`

export default class App extends Component {
    state = {
        data : [
            {label: "Going to learn React", important: true, like: false, id: 1},
            {label: "That is so good", important: false, like: false, id: 2},
            {label: "I need a break...", important: false, like: false, id: 3}
        ],
        term: '',
        filter: 'all'
    };

deleteItem = (id) => {
    this.setState(({data}) => {
        const index = data.findIndex(elem => elem.id === id)
        
        const before = data.slice(0, index);
        const after = data.slice(index + 1);

        const newArr = [...before, ...after];

        return {
            data: newArr
        }
    });
}

addItem = (body) => {
    const newItem = {
        label: body,
        important: false,
        id: nextId()
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        console.log(newItem.id);
        return {
            data: newArr
        }
    });
}

commonToggle = ({id, important = false, like = false}) => {
    this.setState(({data}) => {
        const index = data.findIndex(elem => elem.id === id);
 
        const old = data[index];
        const newItem = {...old};
 
        if (important) {
            newItem.important = !old.important;
        }
 
        if (like) {
            newItem.like = !old.like;
        }
 
        const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
 
        return {
            data: newArr
        }
    });
}
 
onToggleImportant = id => {
    this.commonToggle({id: id, important: true});
}
 
onToggleLiked = id => {
    this.commonToggle({id: id, like: true})
}

searchPost(items, term) {
    if(term.length === 0) {
        return items
    }

    return items.filter( (item) => {
        return item.label.indexOf(term) > -1
    });
}

filterPost = (items, filter) => {
    if(filter === 'like') {
        return items.filter(item => item.like)
    } else {
        return items
    }
}

onUpdateSearch = (term) => {
    this.setState({term});
}

onFilterSelect = (filter) => {
    this.setState({filter});
}

render() {
    const {data, term, filter} = this.state;
    const liked = data.filter(item => item.like).length;
    const allPosts = data.length;

    const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

    return (
        <React.StrictMode>
            <GlobalStyle/>
         <AppBlock>
            <AppHeader
            liked = {liked}
            allPosts = {allPosts}/>
            <SearchPanelDiv className="search-panel">
                <SearchPanel
                onUpdateSearch={this.onUpdateSearch}/>
                <PostStatusFilter
                filter={filter}
                onFilterSelect={this.onFilterSelect}/>
            </SearchPanelDiv>
            <PostList 
            posts={visiblePosts}
            onDelete={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleLiked={this.onToggleLiked}/>
            <PostAddForm
            onAdd={this.addItem}/>
          </AppBlock>
        </React.StrictMode>
    )

    }
}