import React from 'react'
import './NavSecondary.css'
import ingramPic from '../../Assets/ingram.png'

import { Input } from 'antd';
import { Button } from 'antd';
import { Row, Col } from 'antd';


const { Search } = Input;



const onSearch = value => console.log(value);

function NavSecondary() {
    return (
        <div className='nav__container'>
            <div className="nav__search">
                <Row align="middle">
                    <Col flex="185px" className="nav__logo">
                        <img src={ingramPic} className="nav__logo-ingram" alt="Logo" />
                    </Col>

                    <Col flex="auto">
                        <Search className="nav__searchbar" placeholder="input search text" onSearch={onSearch} />
                    </Col>

                    <Col flex="200px" justify="end">
                        <Button className="nav__btn" ghost> LOG IN</Button>
                    </Col>
                </Row>
            </div>

            <div className="nav__menu">

            </div>

        </div>
    )
}

export default NavSecondary