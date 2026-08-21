const awsConfig = {
  Auth: {
    Cognito: {
      userPoolId: 'us-east-2_uTOCOsOGQ', // e.g., ap-south-1_xxxxxxxxx
      userPoolClientId: '1aj3u954129jq785utk9b02rjd', // e.g., 1a2b3c4d5e6f7g8h9i0j1k2l3m
      loginWith: {
        email: true,
      },
    }
  },
  API: {
    baseUrl: 'YOUR_API_GATEWAY_URL' // e.g., https://xxxxxxxxxx.execute-api.ap-south-1.amazonaws.com
  }
};

export default awsConfig;
