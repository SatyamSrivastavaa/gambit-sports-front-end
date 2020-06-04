import React from 'react';
import { get } from 'lodash';
import './styles.scss';

// Assets
import { ReactComponent as Member } from '../../../Assets/member.svg';
import { ReactComponent as Quiz } from '../../../Assets/quiz.svg';

// Components
import Button from '../../atoms/Button';

const Contest = ({contest}) => {
    const name = get(contest, 'name', '');
    const maxParticipants = get(contest, 'max_participants', 0);
    const maxWinners = get(contest, 'max_winners', 0);
    const prizes = get(contest, 'prizes', 0);
    const fee = get(contest, 'fee', 0);
    const filledRooms = get(contest, 'filled_rooms', 0);
    const fillingRooms = get(contest, 'filling_rooms', 0);
    const scoreType = get(contest, 'score_type', 'R');
    const payoutType = get(contest, 'payout_type', 'G');

    const getScoreTypeImage = type => {
        switch(type){
            case 'R':
                return <img src={require('../../../Assets/r-min.png')} alt="score-type"/>;
            default:
                return <img src={require('../../../Assets/r-min.png')} alt="score-type"/>;
        }
    }

    const getPayoutTypeImage = type => {
        switch(type){
            case 'G':
                return <img src={require('../../../Assets/g-min.png')} alt="payout-type"/>;
            case 'B':
                return <img src={require('../../../Assets/b-min.png')} alt="payout-type"/>;
            default:
                return <img src={require('../../../Assets/b-min.png')} alt="payout-type"/>;
        }
    }

    return (
        <div className="contest-wrapper">
            <div className="contest-info">
                <div className="contest-description-wrapper">
                    <p className='contest-description'>&#8377; {name}</p>
                    <p className="contest-type-wrapper">
                        {getScoreTypeImage(scoreType)}
                        {getPayoutTypeImage(payoutType)}
                    </p>
                </div>
                <div className="meta-info">
                    <Member />
                    <span className="meta-info-text">{`${maxParticipants} Members`}</span>
                    <Quiz />
                    <span  className="meta-info-text">{`Top ${maxWinners} Win`}</span>
                </div>
                <div className="entry-info-wrapper">
                    <div className="prize-info">
                        <p className="entry-info-header">PRIZES</p>
                        <p>
                            <span className="entry-info-money">&#8377;{prizes}</span>
                            <img className="arrow" src={require('../../../Assets/green-arrow-min.png')} alt="green-arrow"/>
                        </p>
                    </div>
                    <div className="prize-info">
                        <p className="entry-info-header entry-header">PRIZES</p>
                        <p>
                            <span className="entry-info-money entry-money">&#8377;{fee}</span>
                            <img className="arrow" src={require('../../../Assets/gray-arrow-min.png')} alt="green-arrow"/>
                        </p>
                    </div>
                    <Button text="Join" primary />
                </div>
            </div>
            <div className="rooms-info">
                {
                    filledRooms 
                        ? (
                            <p>
                                <span>{`${filledRooms} Rooms Filled `}&#8226;</span>
                                <span>{` ${fillingRooms} Filling`}</span>
                            </p>
                        )
                        : <span>Rooms Available</span>
                }
                
            </div>
        </div>
    )
}

export default Contest;
