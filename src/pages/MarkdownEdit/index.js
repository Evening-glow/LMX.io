import React, { Component } from 'react';
import { Row, Col, Button, Drawer } from 'antd';
import { CloudUploadOutlined, BoldOutlined, ItalicOutlined, StrikethroughOutlined, OrderedListOutlined, UnorderedListOutlined } from '@ant-design/icons';
import markdownIt from 'markdown-it';
import { connect } from 'react-redux';
import { actionCreators as finishActionCreators } from '../Finish/store';
import { bindActionCreators } from 'redux';
import shortid from 'shortid';
import axios from '../../utils/request';

import './index.css';

const md = new markdownIt({
    html: false, breaks: true, linkify: true,
    xhtmlOut: false,
});
//禁用将电子邮件转换为链接
md.linkify.set({ fuzzyEmail: false });
class MarkdownEdit extends Component {

    state = {
        visible: false,
        htmlString: '',
        release: {
            user: this.props.loginData.user.username,
            userID: this.props.loginData.user.UID,
            title: '',
            markString: ''
        },

    }
    /**
     * 编辑区onChange事件，将文本内容保存到markString，
     * 使用markdown解析器中render（）解析为html文本
     * 利用react提供的dangerouslySetInnerHTML属性将 html字符串 转化为 真正的html标签 的操作
     * */
    handleChange = string => {
        this.setState({
            release: {
                ...this.state.release,
                markString: string
            }
        });
        const markTohtml = md.render(string);
        // console.log(string)
        this.setState({ htmlString: markTohtml });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const time = new Date().toLocaleString('chinese', { hour12: false }).replace(' 下午', ' ');
        const releaseData = {
            ...this.state.release,
            time: time
        };
        axios.post('/api/releaseArt', releaseData)
            .then(res => {
                let { status, msg } = res.data;
                // console.log(res.data)
                this.props.finishFn.addFinishAc({
                    type: status === 0 ? 'success' : 'error',
                    msg: msg,
                    id: shortid.generate()
                });
            })
            .catch(err => console.log(err))
        this.setState({})
    }
    /**
     * 编辑区和展示区 同步滚动
     */
    handleScroll = (who, e) => {
        //编辑区滚动
        if (who === 1) {
            this.showCon.scrollTop = e.target.scrollTop;
        } else if (who === 2) {
            this.textareaNode.scrollTop = e.target.scrollTop;
        }
    }
    handleTwoCharStyle = which => {
        // 选中文字，在文字两侧加**
        // 未选中文字,在光标所在处添加文字**加粗文字**
        // console.log(this.textareaNode.selectionStart,this.textareaNode.selectionEnd)\
        const SELECT = ['**加粗样式**', '*斜体样式*', '~~删除线格式~~'];
        const CHOSEN = ['**', '*', '~~'];
        let { selectionStart, selectionEnd } = this.textareaNode;
        if (selectionStart === selectionEnd) {
            this.textareaNode.value = this.textareaNode.value.slice(0, selectionStart) + SELECT[which] + this.textareaNode.value.slice(selectionEnd);
        } else {
            this.textareaNode.value = this.textareaNode.value.slice(0, selectionStart) + CHOSEN[which] + this.textareaNode.value.slice(selectionStart, selectionEnd) + CHOSEN[which] + this.textareaNode.value.slice(selectionEnd);
        }
        this.handleChange(this.textareaNode.value);
    }

    handleOnlyCharStyle = which => {
        const SELECT = ['# 标题', '1. 列表项1', '- 列表项1'];
        const CHOSEN = ['# ', '1. ', '- '];
        let { selectionStart, selectionEnd } = this.textareaNode;
        if (selectionStart === selectionEnd) {
            this.textareaNode.value = this.textareaNode.value.slice(0, selectionStart) + SELECT[which] + this.textareaNode.value.slice(selectionEnd);
        } else {
            this.textareaNode.value = this.textareaNode.value.slice(0, selectionStart) + CHOSEN[which] + this.textareaNode.value.slice(selectionStart, selectionEnd) + this.textareaNode.value.slice(selectionEnd);
        }
        this.handleChange(this.textareaNode.value);
    }
    inputChange = e => {
        this.setState({
            release: {
                ...this.state.release,
                title: e.target.value
            }
        });
    }
    showDrawer = () => {
        this.setState({ visible: true });
    };
    onClose = () => {
        this.setState({ visible: false });
    };
    render() {
        return (
            <Row justify='center' >
                <Col span={24}>
                    <form onSubmit={this.handleSubmit}>
                        <Row className='titleBox' justify="space-between" align="middle">
                            <Col id='toolbar'>
                                <Button icon={<BoldOutlined />} className="btn" onClick={e => this.handleTwoCharStyle(0)}>加粗</Button>
                                <Button icon={<ItalicOutlined />} className="btn" onClick={e => this.handleTwoCharStyle(1)}>斜体</Button>
                                <Button className="btn" icon={<span style={{ color: '#333', paddingRight: '5px' }}>H</span>} onClick={e => this.handleOnlyCharStyle(0)}>标题</Button>
                                <Button className="btn" icon={<StrikethroughOutlined />} onClick={e => this.handleTwoCharStyle(2)}>删除线</Button>
                                <Button className="btn" icon={<OrderedListOutlined />} onClick={e => this.handleOnlyCharStyle(1)}>有序列表</Button>
                                <Button className="btn" icon={<UnorderedListOutlined />} onClick={e => this.handleOnlyCharStyle(2)}>无序列表</Button>
                                <Button type="ghost" onClick={this.showDrawer}>
                                    编辑器使用指南
                                </Button>
                                <Drawer title="编辑器使用指南" placement="right" onClose={this.onClose} visible={this.state.visible}>
                                    <h2>标题</h2>
                                    <p><strong>(注意：#号后面一定要有一个空格)</strong></p>
                                    <p>
                                        # 一级标题<br />
                                        ## 二级标题<br />
                                        ### 三级标题<br />
                                        #### 四级标题<br />
                                        ##### 五级标题<br />
                                        ###### 六级标题<br />
                                    </p>
                                    <h2>文本样式</h2>
                                    <p>*强调文本* _强调文本_</p>
                                    <p>**加粗文本** __加粗文本__</p>
                                    <p>~~删除文本~~</p>
                                    <p>&gt; 引用文本</p>
                                    <p>2^10^ 运算结果是 1024。</p>
                                    <h2>列表</h2>
                                    <p>无序列表使用星号(*)、加号(+)或是减号(-)作为列表标记，这些<strong>标记后面要添加一个空格；</strong></p>
                                    <p>列表嵌套只需在子列表中的选项前面添加四个空格即可；</p>
                                    <p>- 项目</p>
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;* 项目</p>
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ 项目</p>
                                    <p>
                                        1. 项目1<br/>
                                        2. 项目2<br/>
                                        3. 项目3<br/>
                                    </p>
                                    <h2>水平线</h2>
                                    <p>可以在一行中用三个以上的星号、减号、底线来建立一个分隔线，<strong>行内不能有其他东西</strong></p>
                                    <p>****</p>
                                    <p>---</p>
                                    <p>____</p>
                                </Drawer>
                            </Col>
                            <Col>标题：<input type='text' name='title' className='articleTitle' onChange={this.inputChange} required autoComplete='off' /><Button htmlType="submit" type='primary' icon={<CloudUploadOutlined />}>发布</Button></Col></Row>

                        <Row>
                            {/**编辑区 */}
                            <Col span={12} className='markdownEdit'>
                                <textarea ref={textareaNode => this.textareaNode = textareaNode} name='content' onChange={e => this.handleChange(e.target.value)} onScroll={e => this.handleScroll(1, e)} className='articleTextarea' />
                            </Col>
                            {/**展示区 */}
                            <Col ref={showCon => this.showCon = showCon} span={12} className='showContainer' onScroll={e => this.handleScroll(2, e)} dangerouslySetInnerHTML={{ __html: this.state.htmlString }}></Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        );
    }
}
const mapStateToProps = state => {
    return {
        loginData: state.login
    }
}
const mapDispatchToProps = dispatch => {
    return {
        finishFn: bindActionCreators(finishActionCreators, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MarkdownEdit);