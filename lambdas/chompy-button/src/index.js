// Lambda will use `index.handler` as it's entrypoint.
// If you rename this file or the handler function,
// you will need to update the Lambda configs.

import request from 'request';
require('dot-env');

let userId = process.env.SLACK_USER;
let chompyHost = process.env.CHOMPY_HOST;

export function handler(event, context) {
  request.post({
      url: chompyHost + '/api/users/' + userId + '/toggle',
      json: true,
      body: { status: "from iot button!" }
    },
    function(error, response, body) {
      if(error) {
        console.log("ERROR: " + error)
        context.done(error, body);
      } else {
        console.log("RESPONSE: " + body);
        context.done(null, body);
      }
    });
};
