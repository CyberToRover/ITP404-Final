import React, {Component} from 'react';
import { List, Avatar, Button, Checkbox, Spin, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import satellite from "../assets/images/satellite.svg";

class SatelliteList extends Component {
    constructor(){
        super();
        this.state = {
            selected: [],
            isLoad: false
        };
    }

    onChange = e => {
        const { dataInfo, checked } = e.target;
        const { selected } = this.state;
        const list = this.addOrRemove(dataInfo, checked, selected);
        this.setState({ selected: list })
    }

    addOrRemove = (item, status, list) => {
        const found = list.some( entry => entry.satid === item.satid);
        if(status && !found){
            list.push(item)
        }

        if(!status && found){
            list = list.filter( entry => {
                return entry.satid !== item.satid;
            });
        }
        return list;
    }

    onShowSatMap = () =>{
        this.props.onShowMap(this.state.selected);
    }

    // Notification part
    openNotification = () => {
        this.props.onShowMap(this.state.selected);
        const args = {
          message: 'Notification',
          description:
            'Congratulations! You could track the satellites you want on the map now!',
          icon: <SmileOutlined style={{ color: '#108ee9' }} />,
          duration: 20,
        };
        notification.open(args);
    };



    render() {
        console.log(this.state.selected);
        const satList = this.props.satInfo ? this.props.satInfo.above : [];
        const { isLoad } = this.props;
        const { selected } = this.state;

        return (
            <div className="sat-list-box">
                <Button className="sat-list-btn"
                        size="large"
                        disabled={ selected.length === 0}
                        // onClick={this.onShowSatMap}
                        onClick={this.openNotification}
                >Track on the map</Button>
                <hr/>

                {
                    isLoad ?
                        <div className="spin-box">
                            <Spin tip="Loading..." size="large" />
                        </div>
                        :
                        <List
                            className="sat-list"
                            itemLayout="horizontal"
                            size="small"
                            dataSource={satList}
                            // renderItem把list中的所有item都做了一遍，但不同于forEach，只是return了所有结果
                            renderItem={item => (
                                <List.Item
                                    actions={[<Checkbox dataInfo={item} onChange={this.onChange}/>]}
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar size={50} src={satellite} />}
                                        title={<p>{item.satname}</p>}
                                        description={`Launch Date: ${item.launchDate}`}
                                    />
                                </List.Item>
                            )}
                        />
                }
            </div>
        );
    }
}

export default SatelliteList;
