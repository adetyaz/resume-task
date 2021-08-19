import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

const Profile =()=>(
    <section className="profile">
        <h3 className="profile__title">career and education</h3>
        <h2 className="profile__subtitle">More of my credentials</h2>
        <div className="profile__content">
            <div className="profile__career">
            <h3 className="profile__title">&#8212;Experience</h3>
                <Timeline>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot variant="outlined" color="dark" />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <span className="profile__date">
                                June 2020 - Present
                            </span>
                            <h3 className="profile__workplace">ThyFlow</h3>
                            <h4 className="profile__role">Web Developer</h4>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot variant="outlined" color="dark" />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                        <span className="profile__date">
                                June 2019 - Present
                            </span>
                            <h3 className="profile__workplace">iCodemag</h3>
                            <h4 className="profile__role">Writer</h4>  
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot variant="outlined" color="dark" />
                        </TimelineSeparator>
                        <TimelineContent>
                        <span className="profile__date">
                                December 2018 - June 2019
                            </span>
                            <h3 className="profile__workplace">Edawah Technologies</h3>
                            <h4 className="profile__role">Mobile and Web Developer</h4>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot variant="outlined" color="dark" />
                        </TimelineSeparator>
                        <TimelineContent>
                        <span className="profile__date">
                                April 2016 - November 2016
                            </span>
                            <h3 className="profile__workplace">Grand Oak Limited</h3>
                            <h4 className="profile__role">Assistant Systems and Network Manager</h4>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
            <div className="profile__education">
            <h3 className="profile__title">&#8212;Education</h3>
            <Timeline align="right">
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot variant="outlined" color="dark" />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <span className="profile__date">
                                January 2018 - December 2020
                            </span>
                            <h3 className="profile__workplace">Alhikmah University Ilorin</h3>
                            <h4 className="profile__role">Bachelors degree, Computer Science</h4>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot variant="outlined" color="dark" />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <span className="profile__date">
                                OCt 2012 - August 2017
                            </span>
                            <h3 className="profile__workplace">Fountain University, Osogbo</h3>
                            <h4 className="profile__role">Bachelors degree, Computer Science</h4>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot variant="outlined" color="dark" />
                        </TimelineSeparator>
                        <TimelineContent>
                            <span className="profile__date">
                                Oct 2005 - July 2011
                            </span>
                            <h3 className="profile__workplace">Nigerian Navy Secondary School</h3>
                            <h4 className="profile__role">Secondary School Certificate</h4>
                           
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
    </section>
);
export default Profile