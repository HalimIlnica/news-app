import React from 'react';
import './NewsDetailsPage.styles.scss';

const NewsDetailsPage = () => (
    <div className="news-detail">
        <div className="details">
          
           <div className="news">
                <h2>News Site</h2>
           </div>
           <div className="title">
                <h2>Title</h2>
           </div>
            <div className="description">
                 <h5>Description</h5>
            </div>

            <div className="author-date">
                <div className="author">
                    <p>Here is Author Name</p>
                </div>
                <div className="date">
                    <p >Here is the date</p>
                </div>
            </div>

            <div className="goback-remove">
                <div className="goback">
                    <button>GO BACK</button>
                </div>
                <div className="remove">
                    <button>REMOVE</button>
                </div>
            </div>


            
        </div>
    </div>
);

export default NewsDetailsPage;