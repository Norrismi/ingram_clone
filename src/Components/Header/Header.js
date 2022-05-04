import React from 'react'
import { Button } from 'antd';
import './Header.css'
import { Typography } from 'antd';

const { Text } = Typography;

function Header() {
    return (
        <div className='header-container'>
            <div className="header-btns">
                <Button type="link" block id='btn'>Shop</Button>
                <Button type="link" block id='btn'>Cloud</Button>
                <Button type="link" block id='btn'>Commerce & Lifecycle</Button>
                <Button type="link" block id='btn'>IoT</Button>
            </div>

            {/* <div className='header-location'>
                <Button type="link" block id='btn'>County:</Button>
                <Button type="link" block id='btn'>
                    <Text underline>United States</Text>
                </Button>
            </div> */}
        </div>
    )
}

export default Header