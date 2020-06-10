import React from 'react';

const Results = ({ currentTopics, setStorage }) => (
    <div className="result-list-container">
        { currentTopics && 
            currentTopics.map(item => (
            <div className="result-item" key={item.full_name}>
                <div className="flex justify-center align-center result-card-header">
                    <img className="avatar" src={item.owner.avatar_url} alt="User avatar" />
                    <a className="link" href={item.url} target="_blank" rel="noopener noreferrer">
                        <div className="flex wrap">
                            <div>{item.owner.login}/</div>
                            <div>{item.name}</div>
                        </div>
                    </a>
                </div>
                <div className="m10-0">{item.description}</div>
                <div className="flex">
                    <div><div className={`btn card-btn ${localStorage.getItem(item.id) !== null ? 'selected' : ''}`} 
                    onClick={() => setStorage(item.id)}>
                    
                        <i className="card-icon fas fa-star" />{item.stargazers_count}</div></div>
                    <div><div className="btn card-btn"><i className="card-icon fas fa-code-branch" />{item.forks}</div></div>
                    <div><div className="btn card-btn"><i className="card-icon fas fa-eye" />{item.watchers}</div></div>
                </div>
            </div>
            ))
        }       
    </div>
);

export default Results;
