import React, {useState, } from 'react'
import { WorldMap } from './WorldMap'
import { Button, Selet, Spin, Row, Col } from 'antd';
import { APP_DESC} from '../constants/constants';
import { useNavigate } from 'react-router';
import hero from './../assets/hero.png'

export const Home = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [error, setError] = useState()

    return  <div className='home-section'>
      <Row className='home-section'>
        <Col span={12}>
        <div className='prompt-section'>
          {APP_DESC}
      </div>
      <div>
            <Button className='standard-btn' size="large" type="primary" onClick={() => navigate('/dicover')}>
              Discover issues
            </Button>
      </div>
        </Col>
        <Col span={12}>
          <img src={hero}/>
        </Col>
      </Row>
           
        {loading && <Spin/>}
        {error && <p className='error-text'>{error}</p>}
    </div>

}