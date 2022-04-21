import React from 'react';
import {Link} from 'react-router-dom';
import { Carousel } from 'antd';
import firstImg from "../publicImages/flowerImgs/07.jpg";
import secondeImg from "../publicImages/flowerImgs/05.jpg";
import thirdImg from "../publicImages/flowerImgs/06.jpg";

export default class RankingList extends React.Component {
    render() {
        return (
            <div className="rangkingListBox">
                <h2 className="top">花卉热门榜</h2>
                <Carousel autoplay effect="fade">
                    <div>
                        <div className="rankingListImgs">
                            <img src={firstImg} alt="firstImg" style={{width:'300px',height:'150px'}}/>
                        </div>
                    </div>
                    <div>
                        <div className="rankingListImgs">
                            <img src={secondeImg} alt="secondeImg" style={{width:'300px',height:'150px'}}/>
                        </div>
                    </div>
                    <div>
                        <div className="rankingListImgs">
                            <img src={thirdImg} alt="thridImg" style={{width:'300px',height:'150px'}}/>
                        </div>
                    </div>
                </Carousel>
                <ul className="rankingList">
                    <li><Link to='/wiki/flower/?id=7'>玫瑰</Link></li>
                    <li><Link to='/wiki/flower/?id=5'>郁金香</Link></li>
                    <li><Link to='/wiki/flower/?id=6'>百合</Link></li>
                    <li><Link to='/wiki/flower/?id=13'>康乃馨</Link></li>
                    <li><Link to='/wiki/flower/?id=10'>鸢尾</Link></li>
                </ul>
            </div>
        );
    }
}