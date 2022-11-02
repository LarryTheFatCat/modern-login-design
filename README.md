## Modern Rustic Login, Sign Up, Forgot password, and main screen UI

# Features

This is a simple, modern, and easy to use UI template that is built with HTML, CSS and JavaScript. It is fully responsive and works on all devices. It is also very easy to customize and use. It is built with the latest technologies and is very fast and lightweight. 

# Screenshots
<img src="imgs/login.png" alt="">
<br>
<img src="imgs/forgotpassword.png" alt="">
<br>
<img src="imgs/signup.png" alt="">
<img src="forgotpassword.png" alt="">
<br>
<img src="signup.png" alt="">
# Installation

1. Download the files from the repository
2. Open the index.html file in your browser
3. Enjoy!

# License

MIT License

Copyright (c) [2022] [Johnathan M.]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

# Contact

If you have any questions, feel free to make an issue to contact me. There will be a questions section to on GitHub issues that you can create yourself stating your question.

# Credits

- [Two](https://www.GitHub.com/twothreetwo/)
- [Unlicense](https://unlicense.org/)

# Support

Have any issues? Feel free to open an issue on the GitHub repository and I will try to fix it as soon as possible.

# Contributing

Feel free to contribute to this project by opening a pull request on the GitHub repository. I will review it and merge it if it is good.


# Todo List
- [ ] Finish rewriting project
- [ ] Complete Auth for username/email/password checks
- [ ] Make code a lot easier to read
- [ ] Add more comments
- [ ] Jquery to Vanilla JS
- [ ] Add debugging tools
- [ ] Rewrite the readme.md file
- [x] Change license
- [ ] Fix bugs and issues  (if any)
- [ ] Archive Repository
# Notes

Just so you guys know if you do wanna use this, there are a couple things to change


## Major changes you must do.

Change the DataSite Key for the google Captcha V2 Badge

``` 
                <div class="g-recaptcha"
                **data-sitekey="6Ld6ElsiAAAAAPe-eu5IS0U-ODART0K2ebCLln_9"**
                data-callback="onSubmit"
                data-size="invisible">
          </div>
```

Change this so you can link to a proper domain so the reCaptchaV2 Badge will actually work and not give you an error.

Link the Buttons to a main page, follow color pattern so it actually looks good...

Here's a script for when you want to check when someone signs in with google using the sign in btn I have created in signup.html.

                <script>
                    function onSignIn(googleUser) {
                        // Useful data for your client-side scripts:
                        var profile = googleUser.getBasicProfile();
                        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
                        console.log('Full Name: ' + profile.getName());
                        console.log('Given Name: ' + profile.getGivenName());
                        console.log("Image URL: " + profile.getImageUrl());
                        console.log("Email: " + profile.getEmail());
                    
                        // The ID token you need to pass to your backend:
                        var id_token = googleUser.getAuthResponse().id_token;
                        console.log("ID Token: " + id_token);
                    }
                </script>

## Minor changes you can do.

Currently, the google sign in thing is broken, I don't really know how to fix it it just goes to the error screen, you can fix that yourself by going to google cloud and creating ur own credentials and stuff. I don't really know how to do that, so I just left it as is. 

You can also change the colors of the buttons and stuff, I just left it as is.

