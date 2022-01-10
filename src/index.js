// console.log(this === window);
// import _ from 'lodash'
// import divFn from './test'

// let ele = document.createElement('div')
// ele.innerHTML = _.join(['哈哈', '嘎嘎'])
// document.body.appendChild(ele)
// divFn()
import React from 'react'
import ReactDOM from 'react-dom'
import About from './about'
import Home from './home'
// 首先我们需要导入一些组件...
// import { Router } from 'react-router'
import { Link, BrowserRouter, Route} from "react-router-dom";

// 然后我们从应用中删除一堆代码和
// 增加一些 <Link> 元素...
class App extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div>
                <h1>App</h1>
                {/* 把 <a> 变成 <Link> */}
                <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/home">home</Link></li>
                </ul>

                {/*
                接着用 `this.props.children` 替换 `<Child>`
                router 会帮我们找到这个 children
                */}
                {/* {this.props.children} */}
                {/* <Home />
                <About /> */}
                {/* <Route exact path="/" component={App}/> */}
                <Route path="/about" component={About}/>
                <Route path="/home" component={Home}/>
            </div>
            )
        }
}

// 最后，我们用一些 <Route> 来渲染 <Router>。
// 这些就是路由提供的我们想要的东西。
ReactDOM.render((
    // <BrowserRouter>
        <BrowserRouter>
            {/* <Route path="/" element={<App />} />
             */}
             <App></App>
        </BrowserRouter>
    // </BrowserRouter>
), document.getElementById("root"))