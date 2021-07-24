import React from 'react';
import { Provider } from 'react-redux'
import { Container, CssBaseline } from '@material-ui/core';
import { Header, Theme } from '@mono-nx-test-with-nextjs/fe-wtc-tech-test';
import { Footer } from '@mono-nx-test-with-nextjs/ui';
import LINKS from '../../../common/links.json';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useStore } from '../redux/store'

const { Instructions, Storybook, Design, Swagger } = LINKS;

const useStyles = makeStyles(() =>
  createStyles({
    contentContainer: {
      padding: '0 27px',
    },
    root: {
      padding: '0',
    },
  })
);

const App = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState)

  const classes = useStyles();
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Container className={classes.root}>
          <Header />
          <div className={classes.contentContainer}>
            <Component {...pageProps} />
          </div>
          <Footer links={[Instructions, Design, Swagger, Storybook]} />
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
