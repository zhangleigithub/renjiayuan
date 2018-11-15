import React from 'react';
import { connect } from 'dva';
import Clock from '../components/Clock';

function ClockPage() {
    return (
        <Clock />
    );
}

ClockPage.propTypes = {
};

export default connect()(ClockPage);