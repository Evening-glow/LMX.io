import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import topImg from "../../publicImages/images/rotationCard2.jpg";
import RankingList from '../../components/RankingList';
import footerLeft from '../../publicImages/images/footerLeft.jpg';
import footerRight1 from '../../publicImages/images/footerRight1.jpg';
import footerRight2 from '../../publicImages/images/footerRight2.jpg';
import footerRight3 from '../../publicImages/images/footerRight3.jpg';
import footerRight4 from '../../publicImages/images/footerRight4.jpg';
import centerImg from '../../publicImages/images/painting.jpg';
import './index.css';


export default class Home extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: '#fafafa' }}>
                <Row>
                    <Col span={24}>
                        <div style={{ width: '100%', height: '400px', overflow: 'hidden' }}><img src={topImg} alt="topImg" /></div>
                    </Col>
                </Row>
                
                <Row className='fooContainer' justify='center'>
                    <Col span={12}><img src={footerLeft} alt="footerLeftImg" style={{ width: '100%' }} /></Col>
                    <Col span={10} className='fooText'>
                        <p className="fooBig">“去种花吧!”回归自然的美好，让花草疗愈我们的心灵。</p>
                        <p className='fooCenter'>
                            只需要几个花盆，培上
                            泥土，播下种子或种上绿植，你便拥有了一个花园
                            小世界，拥有了广阔的自然空间。
                        </p>
                        <p className='fooLast'>改造院子、整理修复环境的过程，其实也是对心灵的修补。万物皆有伤心事，我们总会经历生离死别、泪水忧伤，但总有美好的东西将我们托起，有时候是爱情，有时候是亲情，有时候是植物。所以当你难过时，不妨试着养花吧!</p>
                    </Col>
                    <div className='fooFloat'>
                        <div><img src={footerRight1} alt="footerRight1" className='fooRightImg' /></div>
                        <div><img src={footerRight2} alt="footerRight2" className='fooRightImg nomarginleft' /></div>
                        <div><img src={footerRight3} alt="footerRight3" className='fooRightImg nomarginleft' /></div>
                        <div><img src={footerRight4} alt="footerRight4" className='fooRightImg nomarginleft' /></div>
                    </div>
                </Row>
                <Row justify='center'><Col span={24}><div className='wreath'>热门推荐</div></Col></Row>
                <Row justify='center' className='centerBox'>
                    <Col span={5} style={{ margin: '10px', marginRight: '0' }}><img src={centerImg} alt="rightImg" className='centerImg' /></Col>
                    <Col span={12} className="container flowerInfo">
                        <p style={{ fontSize: '1.6rem', color: '#87d068', fontWeight: '600' }}>花艺</p>
                        <ul>
                            <li><Link to='/skill/skillInfo/?id=2'>她的插花源于瞬间灵感虽不完美却打动人心</Link></li>
                            <li><Link to='/skill/skillInfo/?id=1'>开业6年斩获多个奖项“一丛植造”如何在高端商场站稳脚跟</Link></li>
                            <li><Link to='/skill/skillInfo/?id=4'>巴黎街头邂逅中国风花店独特的自然风情俘获人心</Link></li>
                            <li><Link to='/skill/skillInfo/?id=6'>枯山花道：由道家文化衍生出的平民花道</Link></li>
                            <li><Link to='/skill/skillInfo/?id=3'>她是“贵州好人”也是传统插花的公益使者</Link></li>
                            <li><Link to='/skill/skillInfo/?id=5'>汉楚插花：胸怀山河，大有风骨</Link></li>
                        </ul>
                    </Col>
                    <Col span={5}><RankingList /></Col>
                </Row>
            </div>
        );
    };
}