import React from 'react';
import axios from 'axios';
import imgURL from '../../utils/getImages';
import { List, Typography, Row, Col } from 'antd';
import RankingList from '../../components/RankingList';
import topImg from '../../publicImages/images/rotationCard1.jpg';
import {Link,Outlet} from 'react-router-dom';

const { Paragraph } = Typography;

const imgStyle = {
    position: 'relative',
    top: -200
}
export default class Wiki extends React.Component {
    state = {
        flowerInfo: [],
        isShow:true
    }
    changeShow=()=>{
        this.setState({isShow:false});
    }
    componentDidMount() {
        axios.get('http://localhost:5000/flowerInfo')
            .then(response => {
                this.setState({ flowerInfo: response.data.data });
            })
            .catch(error => {
                const flowerInfos = [
                    {
                        area: "牵牛花在中国除西北和东北的一些省外，大部分地区都有分布。本种原产热带美洲，现已广植于热带和亚热带地区。",
                        careKnowledge: "<p>牵牛花子发芽温度为20-30℃，一般在四月末五月初播种（南方还可以提前），按品种分行播在细沙土苗床中，湿度适中时大约10天左右萌发。大约再过10天左右，子叶完全张开。待真叶刚刚萌发时，就应移栽入小盆中，过早苗弱，过迟伤根，都不利于以后的发育。小盆上应作好标记，注明品种。</p><p>牵牛盆栽时，待小盆中的幼苗长出两三片真叶后，此时根系已发展好，即可定植在中盆中，并预先加好底肥。牵牛花的根系发展需要温度，据日本研究者认为，用黑盆比用红盆吸热好。要经常转盆使阳光照射均匀，使根系发展完备。</p><p>牵牛花的真叶长出三四片后，中心开始生蔓，这时应该摘除。第一次摘心后，叶腋间又生枝蔓，待枝蔓生出三四片叶后，再次摘心，同时结合整形。每次摘心后都应追肥，所用肥料和菊花用的追肥类似。注意不使肥水和泥浆沾污叶片（包括子叶），以免叶片脱落。枝蔓成长后即进入花期（一般在定植后一个月），理想的情况是枝蔓的第一叶又生腋芽，第二和第三叶的叶腋发出花苞 。</p>",
                        environment: "顺应性较强，喜阳光充足，亦可耐半遮荫。喜暖和凉快，亦可耐暑热高温，但不耐寒，怕霜冻。喜肥美疏松土堆，能耐水湿和干旱，较耐盐碱。种子发芽适合温度18-23℃，幼苗在10℃以上气温即可生长。",
                        hearts: 0,
                        id: 1,
                        name: "牵牛花",
                        symbol: "名誉、爱情永固。"
                    },
                    {
                        area: "原产印度、中国南方和世界各地广泛栽培。现广泛植栽于亚热带地区。主要分布在伊朗、埃及、土耳其、摩洛哥、阿尔及利亚、突尼斯，以及西班牙、法国、意大利等地中海沿岸国家，东南亚各国均有栽培。",
                        careKnowledge: `盆栽茉莉花：盛夏季每天要早、晚浇水，如空气干燥，需补充喷水；冬季休眠期，要控制浇水量，如盆土过湿，会引起烂根或落叶。生长期间需每周施稀薄饼肥一次。春季换盆后，要经常摘心整形，盛花期后，要重剪，以利萌发新枝，使植株整齐健壮，开花旺盛。茉莉盆栽要求培养土富含有机质，而且具有良好的透水和通气性能，一般可用田园土4份、堆肥4份、河沙或谷糠灰2份，外加充分腐熟的干枯饼末、鸡鸭粪等适量，并筛出粉末和粗粒，以粗粒垫底盖面。<br/>
                                        <strong>上盆</strong>时间以每年4-5月份新梢末萌发前最为适宜。按苗株大小选用合适的花盆。上盆时一手扶苗，一手铲填培养土，待土盖满全部根系后，将植株稍向上轻提，并把盆振动几下，使土与根系紧密接触。然后用手把盆土压实，让土面距盆沿有2厘米的距离，留作浇水。栽好后，浇定根水，然后放在稍加遮荫的地方7-10天，避免阳光直射，以后逐渐见光。日常管理的关键是水，要根据茉莉喜湿润，不耐旱，怕积水，喜透气的特性，掌握浇水时间和浇水量。至6-7月份可开花。这时根系已恢复正常生长，每7-10天要浇一次稀薄矾肥水。以后可按成株茉莉管理，当年不再换盆。<br/>
                                        从6月至9月开花期勤施含磷较多的液肥，最好每2-3天施一次，<strong>肥料</strong>可用腐熟好的豆饼和鱼腥水肥液，或者用硫酸铵、过磷酸钙，一般化肥成分兑多了会烧死茉莉植株。也可用0.1%的磷酸二氢钾水溶液，在傍晚向叶面喷洒，也可促其多开花。茉莉喜肥，特别是花期长，需肥较多。它还喜酸性土，平时可每周浇一次1：10的矾肥水。第一次花后，宜用豆饼等作迫肥，施于表土中，开花时酌施骨粉、磷肥，有条件的可浇腐熟的人粪尿，这样可使茉莉花香浓郁。在盛花的高温时，应每4天施肥1次，不妨大肥大水，一般上午浇水，傍晚浇肥，第二天解水，这样有利于的茉莉根部吸收。浇肥不宜过浓，否则易引起烂根。浇前用小铲将盆土略松后再浇，不要在盆土过干或过湿时浇肥，于似干非干时施肥效果最好。<br/>
                                        为使盆栽茉莉株形丰满美观，花谢后应随即<strong>剪</strong>去残败花枝，以促使基部萌发新技，控制植株高度。9月上旬停止施肥，以提高枝条成熟度，有利越冬。茉莉花畏寒，在气温下降到6-7℃时，应搬入室内，同时注意开窗通风，以免造成叶子变黄脱落。这时气温常不稳定，遇有天气暖时，仍应搬到室外，通风见光。茉莉搬入室内过冬，宜放置在阳光充足的房间里，室温应在5℃以上。每7天左右浇1次水，使盆土微湿。这样，冬季亦能保持枝叶鲜绿，不失其观赏效果。<br/>
                                        盆栽茉莉花一般每年应<strong>换盆换土</strong>一次。换盆时，将茉莉根系周围部分旧土和残根去掉，换上新的培养土，重新改善土壤的团粒结构和养分，有利于茉莉的生长。换好盆，又要像上盆那样浇透水，以利根土密接，恢复生长。换盆前应对茉莉进行一次修剪，对上年生的枝条只留10厘米左右，并剪掉病枯枝和过密、过细的枝条。生长期经常疏除生长过密的老叶，可以促进腋芽萌发和多发新枝、多长花蕾。春季4-5月份茉莉正抽枝长叶，耗水量不大，可2-3天浇1次水，中午前后浇，要见干见湿，浇必浇透；5-6月为茉莉春花期，浇水可略多些；盛夏6-8月为高温气候，正值茉莉生长快、叶面蒸发作用也加快的盛花期，日照强，需水多，可早晚各浇1次水。天旱时还应用水喷洒叶片及盆周围的地面。因茉莉既不耐干旱，又怕渍涝，故夏季雨天时应及时倒除盆内积水，秋天气温降低，可减为1-2天浇1次水；冬季则要严格控制浇水量，如盆土湿度过大，对越冬不利。`,
                        environment: "茉莉性喜温暖湿润，在通风良好、半阴的环境生长最好。土壤以含有大量腐殖质的微酸性砂质土壤为最适合。大多数品种畏寒、畏旱，不耐霜冻、湿涝和碱土。冬季气温低于3℃时，枝叶易遭受冻害，如持续时间长就会死亡。而落叶藤本类就是很耐寒耐旱的了。",
                        hearts: 0,
                        id: 2,
                        name: "茉莉",
                        symbol: "忠贞、尊敬、清纯、贞洁、质朴、玲珑、迷人。"
                    },
                ]
                this.setState({ flowerInfo: flowerInfos });
                
            })
    }
    render() {
        const { flowerInfo,isShow } = this.state;
        return (
            <div style={{ backgroundColor: '#fff' }}>
                <Row>
                    <Col span={24}>
                        <div style={{ width: '100%', height: '400px', overflow: 'hidden' }}><img style={imgStyle} src={topImg} alt="topImg" /></div>
                    </Col>
                </Row>
                <Row justify="space-around" style={{display:isShow?'':'none'}}>
                    <Col span={16}>
                        <List
                            itemLayout="vertical"
                            size="default"
                            pagination={{
                                onChange: page => {
                                    // console.log(page);
                                },
                                pageSize: 4,
                            }}
                            header={<h2>花卉知识</h2>}
                            dataSource={flowerInfo}

                            renderItem={item => (
                                <List.Item
                                    key={item.id}
                                    extra={
                                        <img
                                            width={200}
                                            alt="logo"
                                            src={imgURL[item.id]}
                                        />
                                    }
                                >
                                    <List.Item.Meta
                                        title={<Link to="flower" onClick={this.changeShow}>{item.name}</Link>}
                                    />
                                    <Paragraph ellipsis={{ rows: 3 }}>{item.environment}</Paragraph>
                                </List.Item>
                            )}
                        />
                    </Col>
                    <Col>
                        <RankingList/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Outlet/>
                    </Col>
                </Row>
            </div>
        );
    }
}