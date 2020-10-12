import React from 'react';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './AboutMe.module.css';

const { Octokit } = require("@octokit/rest");
const octokit = new Octokit();

class AboutMe extends React.Component {
  state = {
    isLoading: true,
    reposList: [],
    userInfo: {}
  }

  componentDidMount() {
    octokit.repos.listForUser({username: 'AnnaKots',})
    .then(data => {
      octokit.users.getByUsername({username: 'AnnaKots',})
      .then(user => {
        this.setState({
          isLoading: false,
          reposList: data.data,
          userInfo: user.data
        })
      });
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Card>
      <div className={styles.wrap}>
      <div>
      {
        this.state.isLoading
        ? <div className={styles.progress}><CircularProgress/></div>
        : <div>
        <h1 className={styles.title}>Обо мне</h1>
        <div className={styles.info}>
        <div><h3 className={styles.inline}>Имя: </h3>
        <span className={styles.text}>{this.state.userInfo.name}</span></div>
        <div><h3 className={styles.inline}>Город: </h3>
        <span className={styles.text}>{this.state.userInfo.location}</span></div>
        <div><h3 className={styles.inline}>Информация о себе: </h3>
        <span className={styles.text}>{this.state.userInfo.bio}</span></div>
        </div>
        <img src={this.state.userInfo.avatar_url} alt='busy' style={{width: 200}}/>
        <h3 className={styles.title}>Мои репозитории</h3>
        <ol className={styles.list}>
        {this.state.reposList.map(repo =>
          (<li key={repo.id}><a href={repo.html_url} className={styles.link}>{repo.name}</a></li>)
        )}
        </ol>
        </div>
      }
      </div>
      </div>
      </Card>
    );
  }
}

export default AboutMe;
