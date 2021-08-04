`yarn install` (requires node v14 or later)  
`yarn test`

In order to run the test, you'll have to add a `.env` file with the env vars:

`EMAIL_ADDRESS={{your_email_address}}`
<br>
And
</br>
`PASSWORD={{your_password}}`

I changed the starter code a bit so instead of exporting the `open()` function, it's inside the LoginPage class and i exported the class to call in the test.

I also added a spec reporter in the wdio.conf file just to make reading test pass/failures easier