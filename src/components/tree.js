import React from 'react'
import treeData from '../json/index'
import getApi from '../js/api'
const url = 'http://zhouxunwang.cn/data/?id=34&key=R5RTF4G5F5H&sort=acs&time=1418816972'
class Tree extends React.Component {

  state = {
    msgs: []
  }
  componentWillMount() {
    this.getData(url)
  }
  /** 请求数据 */
  getData = async (url) => {
    const res = await getApi(url, { a: 1 })
    if (res.success) {

      this.setState({ msgs: res.msg })
      return
    }
    this.setState({ msgs: treeData.msg })
  }

  getTree = (msgs) => {
    return msgs.map(v => {
      return (
        <ul className='ul-1'>
          <li className='li-1'>
            {/* 一级 */}
            <img src={require('../images/2.jpg')} alt="" />
            <span>{v.text}</span>
          </li>
          {v.children && v.children.map(v1 => {
            return (
              <>
                <li className='li-2'>
                  {/* 二级 */}
                  <img src={require('../images/2.jpg')} alt="" />
                  <span>{v1.text}</span>
                </li>
                {v1.children && v1.children.map(v2 => {
                  return (
                    // 三级
                    <li className='li-3'>
                      <span>{v2.text}</span>
                      <img src={require('../images/1.jpg')} alt="" />
                    </li>
                  )
                })}
              </>
            )
          })}
        </ul>
      )
    })
  }
  render() {
    const { msgs } = this.state;
    return (
      <>
        {this.getTree(msgs)}
      </>
    )
  }
}

export default Tree