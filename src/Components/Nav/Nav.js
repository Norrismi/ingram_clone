import React from 'react'
import { Button } from 'antd';
import './Nav.css'
import { Typography } from 'antd';
import { Row, Col } from 'antd';

const { Text } = Typography;

function Header() {
    return (
        <div className='header-container'>
            <div className="header-navbar">
                <div className="header-btns">
                    <Row>
                        <Col flex="100px" className="nav__logo">
                            <Button type="link" block id='btn'>Shop</Button>
                        </Col>
                        <Col flex="100px">
                            <Button type="link" block id='btn'>Cloud</Button>
                        </Col>
                        <Col flex="100px">
                            <Button type="link" block id='btn'>Commerce & Lifecycle</Button>
                        </Col>
                        <Col flex="100px" >
                            <Button type="link" block id='btn'>IoT</Button>
                        </Col>
                        <Col span={4} push={10} >
                            <Button type="link" block id='btn'>County:</Button>
                        </Col>
                        <Col span={4} push={8}>
                            <Button type="link" block id='btn'><Text underline>United States</Text></Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Header