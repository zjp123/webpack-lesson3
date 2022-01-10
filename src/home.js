import _ from 'lodash'
import React from 'react'
// const Home = () => {
//     return <div>{_.join(['张学友', '杰克逊'])}</div>
// } 
class Home extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div>
                <h1>Home</h1>
                {/* 把 <a> 变成 <Link> */}
                
                {<div>{_.join(['张学友', '张俊鹏'])}</div>}
                {/*
                接着用 `this.props.children` 替换 `<Child>`
                router 会帮我们找到这个 children
                */}
                {/* {this.props.children} */}
            </div>
            )
        }
}

export default Home