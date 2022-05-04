import { Grid, Typography } from '@mui/material';
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {skillIcon:'https://i.postimg.cc/MTW374QW/html.png', title:'HTML'},
    {skillIcon:'https://i.postimg.cc/g0RbSfj8/css.png', title:'CSS'},
    {skillIcon:'https://i.postimg.cc/ZK0gs1Dn/js.png', title:'JavaScript'},
    {skillIcon:'https://i.postimg.cc/bJjBPSGr/bootstrap.png', title:'Bootstrap'},
    {skillIcon:'https://i.postimg.cc/QNzSCV0N/react.png', title:'React JS'},
    {skillIcon:'https://i.postimg.cc/vZgJTpWk/node.png', title:'Node JS'},
    {skillIcon:'https://i.postimg.cc/W1dvrDP9/mongo.png', title:'MongoDB'},
    {skillIcon:'https://i.postimg.cc/3NqLHxbR/firebase.png', title:'Google Firebase'},
    {skillIcon:'https://i.postimg.cc/26DRP2LJ/mui.png', title:'Material UI'},
    {skillIcon:'https://i.postimg.cc/3NfqJBW3/git.png', title:'Git'},
    {skillIcon:'https://i.postimg.cc/y8MwZvjd/github.png', title:'GitHub'},
    {skillIcon:'https://i.postimg.cc/7YwtJ9cH/tailwind.png', title:'Tailwind CSS'},
    {skillIcon:'https://i.postimg.cc/KjTXcD9X/heroku.png', title:'HeroKu'},
    {skillIcon:'https://i.postimg.cc/KcnsYw0p/netlify.png', title:'Netlify'},
    {skillIcon:'https://i.postimg.cc/5tfFwPv3/sass.png', title:'SASS'},
    {skillIcon:'https://i.postimg.cc/MZYRGJQG/jquery.png', title:'jQuery'},
    {skillIcon:'https://i.postimg.cc/wxwZV62n/figma1.png', title:'Figma'},
    {skillIcon:'https://i.postimg.cc/YCTwxprt/ps.png', title:'Photoshop'}
    ]
  return (
    <section id='skills'>
      <Typography variant='h3' className='bolder-text section-title skills-title'>Skills</Typography>
      <Grid container spacing={2}>
        {
          skills.map((skill, index) => <Grid key={index} item xs={4} md={3} lg={2}>
            <div className="skill-box" title={skill.title}>
              <div className="inner-skill-box">
                <div className="skill-box-front">
                  <img src={skill.skillIcon} className='skill-image' alt="" />
                </div>
                <div className="skill-box-back">
                  <Typography variant='h6' className='bolder-text'>{skill.title}</Typography>
                </div>
              </div>
            </div>
          </Grid>
          )
        }
      </Grid>
    </section>
  );
};

/*














*/ 

export default Skills;