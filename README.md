# chompy-button

Toggle your chompy status via an AWS IoT button

## Setup

This is a function built for running on AWS Lambda to be triggered via a programmable IoT button.

In order for this to work, you will need a [chompy server](https://github.com/plukevdh/chompy) running and know the
Slack user ID that you want to use (format of U00000000). Create a `.env.json` file in the function's
src directory with the following:

```json
{
  "SLACK_USER": "U00000000",
  "CHOMPY_HOST": "https://chompy.example.com",
  "NOTIFY_CHANNEL": "name-of-channel-to-notify"
}
```

`NOTIFY_CHANNEL` is optional, but it sets where notifications of your new status will be broadcast.

Then build and deploy to Lambda!

## Help with that last part

We've built some cool Lambda tooling if you want to make deploying these kinds of functions to Lambda easier.
Check out [jarbs](https://github.com/articulate/jarbs)!
