import React from 'react';
import { Carousel } from 'antd';
import firstImg from "../publicImages/images/rotationCard1.jpg";
import secondeImg from "../publicImages/images/rotationCard2.jpg";
import thirdImg from "../publicImages/images/rotationCard3.jpg";

export default class RankingList extends React.Component{
    render(){
        return (
            <div className="rangkingListBox">
                    <h2 className="top">花卉热门榜</h2>
                    <Carousel autoplay effect="fade">
                        <div>
                            <div className="rankingListImgs">
                                <img src={firstImg} alt="firstImg" />
                            </div>
                        </div>
                        <div>
                            <div className="rankingListImgs">
                                <img src={secondeImg} alt="secondeImg" />
                            </div>
                        </div>
                        <div>
                            <div className="rankingListImgs">
                                <img src={thirdImg} alt="thridImg" />
                            </div>
                        </div>
                    </Carousel>
                    <ul className="rankingList">
                        <li>玫瑰</li>
                        <li>郁金香</li>
                        <li>百合</li>
                        <li>梅花</li>
                        <li>樱花</li>
                    </ul>
                </div>
        )
    }
}