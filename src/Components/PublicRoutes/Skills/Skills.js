import { Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import './Skills.css';
import SkillBar from 'react-skillbars';

const Skills = () => {
  const tools = [
    {skillIcon:'https://i.postimg.cc/MTW374QW/html.png', title:'HTML', type : 'Advanced'},
    {skillIcon:'https://i.postimg.cc/g0RbSfj8/css.png', title:'CSS',  type : 'Advanced'},
    {skillIcon:'https://i.postimg.cc/ZK0gs1Dn/js.png', title:'JavaScript',  type : 'Average'},
    {skillIcon:'https://i.postimg.cc/bJjBPSGr/bootstrap.png', title:'Bootstrap',  type : 'Advanced'},
    {skillIcon:'https://i.postimg.cc/QNzSCV0N/react.png', title:'React JS',  type : 'Expart'},
    {skillIcon:'https://i.postimg.cc/vZgJTpWk/node.png', title:'Node JS',  type : 'Expart'},
    {skillIcon:'https://i.postimg.cc/W1dvrDP9/mongo.png', title:'MongoDB',  type : 'Expart'},
    {skillIcon:'https://i.postimg.cc/3NqLHxbR/firebase.png', title:'Google Firebase',  type : 'Average'},
    {skillIcon:'https://i.postimg.cc/26DRP2LJ/mui.png', title:'Material UI',  type : 'Expart'},
    {skillIcon:'https://i.postimg.cc/3NfqJBW3/git.png', title:'Git',  type : 'Average'},
    {skillIcon:'https://i.postimg.cc/y8MwZvjd/github.png', title:'GitHub',  type : 'Average'},
    {skillIcon:'https://i.postimg.cc/7YwtJ9cH/tailwind.png', title:'Tailwind CSS',  type : 'Expart'},
    {skillIcon:'https://i.postimg.cc/KjTXcD9X/heroku.png', title:'HeroKu',  type : 'Average'},
    {skillIcon:'https://i.postimg.cc/KcnsYw0p/netlify.png', title:'Netlify',  type : 'Average'},
    {skillIcon:'https://i.postimg.cc/5tfFwPv3/sass.png', title:'SASS',  type : 'Expart'},
    {skillIcon:'https://i.postimg.cc/MZYRGJQG/jquery.png', title:'jQuery',  type : 'Average'},
    {skillIcon:'https://i.postimg.cc/wxwZV62n/figma1.png', title:'Figma',  type : 'Average'},
    {skillIcon:'https://i.postimg.cc/YCTwxprt/ps.png', title:'Photoshop',  type : 'Average'}
    ];
    const backEndSkills = [
      { type: 'NodeJS', level: 65 },
      { type: 'MongoDB', level: 67 },
      { type: 'Express', level: 56 },
      { type: 'REST API', level: 56 },
      { type: 'Cors', level: 56 },
    ];
    const frontEndSkills =[
      { type: 'React', level: 75 },
      { type: 'Javascript', level: 70 },
      { type: 'ContextAPI', level: 70 },
      { type: 'Bootstrap', level: 90 },
      { type: 'Material UI', level: 84 },
      { type: 'SASS', level: 57 },
      { type: 'AOS', level: 88 },
      {type:'jQuery', level:52},
      { type: 'HTML', level: 95 },
      { type: 'CSS', level: 90 },
    ];
    const othersSkills = [
      {type:'GIT', level:70},
      {type:'GitHub', level:75},
      {type:'Firebase', level:62},
      {type:'Figma', level:65},
    ]
  return (
    <section id='skills'>
      <Typography variant='h3' className='bolder-text section-title skills-title'>Skills</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <Typography variant='h6' mb={2} sx={{color:'var(--text-hilight)'}} className='bolder-text'>Front End Skills:</Typography>
          {
            frontEndSkills.map(skill => <SkillBar key={skill.type} skills={[skill]} height={25} animationDelay={-100} animationDuration={1000} />)
          }
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant='h6' mb={2} sx={{color:'var(--text-hilight)'}} className='bolder-text'>BackEnd Skills:</Typography>
          {
            backEndSkills.map(skill => <SkillBar key={skill.type} skills={[skill]} height={25} animationDelay={-100} animationDuration={1000} />)
          }
          <Typography variant='h6' mb={2} sx={{color:'var(--text-hilight)'}} className='bolder-text'>Other Tools:</Typography>
          {
            othersSkills.map(skill => <SkillBar key={skill.type} skills={[skill]} height={25} animationDelay={-100} animationDuration={1000} />)
          }
        </Grid>
      </Grid>
      <Divider/>
      <div className="technologies">
        <Typography variant='overline' mt={1} mb={2} sx={{color:'var(--text-hilight)'}} className='bolder-text'>Technology / Tools where I am proficient:</Typography>
        <Grid container spacing={1} className="">
          {
            tools.map((skill, index) => <Grid key={index} item xs={4} md={3} lg={2}>
              <div className="skill-box" title={skill.title}>
                <div className="inner-skill-box">
                  <div className="skill-box-front">
                    <img src={skill.skillIcon} className='skill-image' alt="" />
                  </div>
                  <div className="skill-box-back">
                    <Typography variant='overline' mb={0} sx={{color:'var(--secondary-color)'}} className='bolder-text'>expertise level</Typography>
                    <Typography variant='h6' className='bolder-text'>{skill.type}</Typography>
                  </div>
                </div>
              </div>
            </Grid>
            )
          }
        </Grid>
      </div>
    </section>
  );
};

/*














*/ 

export default Skills;