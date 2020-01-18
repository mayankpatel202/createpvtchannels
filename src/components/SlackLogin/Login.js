// eslint-disable-next-line no-unused-vars
import React from 'react';

function SlackLogin() {
    console.log("HI")
    window.location = "https://slack.com/oauth/authorize?scope=identity.basic&client_id=432579980291.906710749733&state=aaaBBBBCCCCddddGGGG";
    return null;
}

export default SlackLogin;