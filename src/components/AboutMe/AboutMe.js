import React from 'react';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import styles from './AboutMe.module.css';

const { Octokit } = require("@octokit/rest");
const octokit = new Octokit();

class AboutMe extends React.Component {
  state = {
    isLoading: true,
    isError: false,
    reposList: [],
    userInfo: {}
  }

  name = 'AnnaKots';

  componentDidMount() {
    octokit.users.getByUsername({username: this.name,})
    .then(user => {
      octokit.repos.listForUser({username: this.name,})
      .then(data => {
        this.setState({
          isError: false,
          isLoading: false,
          reposList: data.data,
          userInfo: user.data
        });
      })
    })
    .catch(err => {
      console.log(err);
      this.setState({
        isError: true,
        isLoading: false
      });
    });
  }

  render() {
    return (
      <Card>
      <div className={styles.wrap}>
      <div>
      {
        this.state.isLoading
        ? (<div className={styles.progress}><CircularProgress/></div>)
        : (this.state.isError
          ? <h1 className={styles.progress}>Что-то пошло не так…</h1>
          : <div>
        <h1 className={styles.title}>Обо мне</h1>
        <div className={styles.info}>
          <div>
            <h3 className={styles.inline}>Имя: </h3>
            <span className={styles.text}>{this.state.userInfo.name}</span>
          </div>
          <div>
            <h3 className={styles.inline}>Город: </h3>
            <span className={styles.text}>{this.state.userInfo.location}</span>
          </div>
          <div>
            <h3 className={styles.inline}>Информация о себе: </h3>
            <span className={styles.text}>{this.state.userInfo.bio}</span>
          </div>
          <form action={this.state.userInfo.html_url} className={styles.buttonOuter}>
            <Button
            variant="contained"
            color="primary"
            type="submit"
            className={styles.buttonInner}>GitHub</Button>
          </form>
        </div>
        <img src={this.state.userInfo.avatar_url} alt='busy' style={{width: 200}}/>
        {
          this.name === 'AnnaKots'
          ? <div>
              <h3 className={styles.title}>Портфолио</h3>
              <ol className={styles.list}>
                <li><a href={'http://annakots.mcdir.ru/'} className={styles.link}>
                  Страница магазина
                </a></li>
                <li><a href={'http://cardgame.annakots.mcdir.ru/'} className={styles.link}>
                  Карточная игра
                </a></li>
                <li><a href={'http://atmcashflow.annakots.mcdir.ru/'} className={styles.link}>
                  Прогнозирование денежных потоков
                </a></li>
              </ol>
            </div>
          :<div></div>}
        <h3 className={styles.title}>Мои репозитории</h3>
        <ol className={styles.list}>
          {this.state.reposList.map(repo =>
            (<li key={repo.id}>
              <a href={repo.html_url} className={styles.link}>{repo.name}   </a>
               (основная технология
              <span className={styles.language}> {repo.language}</span>)
              </li>)
          )}
        </ol>
        </div>)
      }
      </div>
      </div>
      </Card>
    );
  }
}

export default AboutMe;
