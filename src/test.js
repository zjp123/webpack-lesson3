import _ from 'lodash'

export default function () {

    let ele = document.createElement('div')
    ele.innerHTML = _.join(['周杰伦', '刘德华'])
    document.body.appendChild(ele)
}