import React, {PureComponent} from 'react'
import E from 'wangeditor'
import {Button} from 'antd'

class EditorComponent extends PureComponent {
  constructor(props) {
      super(props)
      this.state = {
          editorContent: ''
      }
      this.myRef = React.createRef();
  }

  componentDidMount() {
      const editor = new E(this.myRef.current)
      editor.customConfig.onchange = html => {
          this.setState({
              editorContent: editor.txt.html()
          })
      }
      editor.customConfig.menus = [
        'head',  // 标题
        'bold',  // 粗体
        'fontSize',  // 字号
        'fontName',  // 字体
        'italic',  // 斜体
        'underline',  // 下划线
        'strikeThrough',  // 删除线
        'foreColor',  // 文字颜色
        'backColor',  // 背景颜色
        'link',  // 插入链接
        'list',  // 列表
        'justify',  // 对齐方式
        'quote',  // 引用
        'emoticon',  // 表情
        'image',  // 插入图片
        'table',  // 表格
        'video',  // 插入视频
        'code',  // 插入代码
        'undo',  // 撤销
        'redo'  // 重复
    ]
    editor.customConfig.uploadImgShowBase64 = true
    editor.create()
  }

  handleClick = (e) => {
      let content = this.state.editorContent;
      console.log('content', content)
  }

  render() {
      return (
          <div style={{margin:'40px' ,}}>
              <div ref={this.myRef}></div>
              <Button onClick={this.handleClick} style={{width: '100px', marginTop:'50px'}} type='primary'>提交</Button>
          </div>
          
      )
  }
}

export default EditorComponent