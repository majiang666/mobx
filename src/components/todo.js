import React,{ Component } from 'react';
import { WingBlank,Button,InputItem,WhiteSpace,List,Toast,Modal } from 'antd-mobile';
import { observer,inject } from 'mobx-react';
import { action,observable,toJS } from 'mobx'
import './../assets/css/todo.css';
const Item = List.Item;
const alert = Modal.alert;
const prompt = Modal.prompt;
class Todo extends Component{
    componentWillMount(){
        document.title = "[结业] mobx 增、删、改、查"
    }
    @observable val = '';
    @action
    inputs = (e) => {
        this.val = e;
    }
    @action
    add = () => {
        if(this.val === ''){
            Toast.info('输入值不能为空',1);
            return;
        }
        this.props.Todo.datas.push({
            "name":this.val,
            "id":(Math.random() * 10000).toFixed(0)
        })
        Toast.info('添加成功',1)
        this.val = "";
        console.log(this.val);
    }

    @action
    delete(id){
        alert('Delete', 'Are you sure???', [
            { 
                text: 'Cancel', 
                onPress: () => Toast.info('取消删除',1)
            },
            { 
                text: 'Ok', 
                onPress: action(() => this.props.Todo.datas = this.props.Todo.datas.filter(item => item.id !== id))
            },
        ])
    }
    @action
    edit(item){
        // console.log(item);
        prompt(
            '编辑', 
            '请输入编辑内容', 
            [
                { 
                    text: 'Cancel',
                    onPress: () => Toast.info('取消编辑',1)
                },
                { 
                    text: 'Submit', 
                    onPress: action(value => {
                        let arrs = [];
                        let data = toJS(this.props.Todo.datas);
                        data.forEach(element => {
                            if(element.id === item.id){
                                element.name = value;
                            }
                            arrs.push({
                                name:element.name,
                                id:element.id
                            })
                        });
                        this.props.Todo.datas = arrs;
                        Toast.info('编辑成功',1)
                    })
                },
            ], 
            'default', 
            item.name
        )
    }
    render(){
        return(
            <div>
                <h1 style={{textAlign:'center'}}>mobx 增、删、改、查</h1>
                <WhiteSpace size="lg"></WhiteSpace>
                <WingBlank>
                    <InputItem onChange={this.inputs} clear value={this.val} placeholder="请输入内容"></InputItem>
                    <WhiteSpace size="lg"></WhiteSpace>
                    <Button type="primary" size="large" inline onClick={this.add}>添加</Button>
                </WingBlank>
                <h1 style={{textAlign:'right',fontSize:'14px',padding:'0 15px',color:'#f00'}}>共计：{ this.props.Todo.total }</h1>
                {
                    this.props.Todo.datas.length !== 0 
                    ?
                    <List renderHeader={() => 'LIST'}>
                        {
                            (this.props.Todo.datas).map((item,i) => {
                                return(
                                    <Item key={item.id} extra={
                                        <>
                                        <span onClick={this.edit.bind(this,item)}>编辑</span>
                                        &nbsp;&nbsp;
                                        <span onClick={this.delete.bind(this,item.id)}>删除</span>
                                        </>
                                    }>{ item.name }</Item>
                                )
                            })
                        }
                    </List>
                    :
                    <p style={{textAlign:'center',fontSize:'16px',color:'#999'}}>暂无数据...</p>
                }
            </div>
        )
    }
}

export default inject('Todo')(observer(Todo));