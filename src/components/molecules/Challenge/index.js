import React from 'react';
import './styles.scss';
import { get } from 'lodash';

// Components
import Timer from '../Timer';

const Challenge = ({challenge}) => {
    const challengeId = get(challenge, 'sports_id', '');
    const prizeMoney = get(challenge, 'prize_money', 0);
    const startTime = get(challenge, 'start_time', '');
    const description = get(challenge, 'desc', '');
    const parties = get(challenge, 'match_parties', []);

    const renderTeamsDetails = (parties, description) => {
        const firstPartyName = get(parties[0], 'party_name', '');
        const firstPartyImage = get(parties[0], 'party_img_url', '');
        const secondPartyName = get(parties[1], 'party_name', '');
        const secondPartyImage = get(parties[1], 'party_img_url', '');
        const firstTeamShortName = get(parties[0], 'meta_info.party_short_name', '')
        const secondTeamShortName = get(parties[1], 'meta_info.party_short_name', '')

        return (
            <div className="teams-container">
                <img src={firstPartyImage} alt="first-team" className="team"/>
                <div className="party-names-container">
                    <p className="teams">{`${firstTeamShortName || firstPartyName} v ${secondTeamShortName || secondPartyName}`}</p>
                    <p className="challenge-meta-info">
                        <span>{description}</span>
                        <img src={require('../../../Assets/live-min.png')} alt="live" className="live"/>
                        <span>Live Score Updates</span>
                    </p>  
                </div>
                <img src={secondPartyImage} alt="second-team" className="team"/>
            </div>
        )
    }

    return (
        <div className="challenges-list" key={challengeId}>
                <div className="challenge">
                    <p className="challenge-header">Picks</p>
                    {renderTeamsDetails(parties, description)}
                    <div className="challenge-info">
                        <p className="meta-info">
                            <img src={require('../../../Assets/ruppe-min.png')} alt="rupee"/>
                            <p className="price">{prizeMoney}</p>
                        </p>
                        <p className="meta-info">
                            <img src={require('../../../Assets/timer-min.png')} alt="timer"/>
                            <Timer remainingTime={startTime} />
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default Challenge;
