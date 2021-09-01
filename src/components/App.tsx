import React from 'react';
import logo from '../logo.svg';
import styles from '../styles/sApp';
import { withStyles } from '@material-ui/core';

interface AppProps {
    classes: {
        App: string;
        'App-logo': string;
        'App-header': string;
        'App-link': string;
    };
}

class App extends React.Component<AppProps, unknown> {
    constructor(props: AppProps) {
        super(props);
    }
    render(): JSX.Element {
        const { classes } = this.props;

        return (
            <div className={classes.App}>
                <header className={classes['App-header']}>
                    <img
                        src={logo}
                        className={classes['App-logo']}
                        alt="logo"
                    />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className={classes['App-link']}
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default withStyles(styles)(App);
