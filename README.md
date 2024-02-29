# Web Development Project 1 - Tennis Tournament Portal

Submitted by: Lucas Umberger

This web app displays the upcoming ATP tennis tournaments and provides links and information for each tournament

Time spent: 4 hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **There is a unique theme for events or resources relevant to a specific community**
- [x] **At least 10 unique resources or events are displayed in a responsive card format**

The following **optional** features are implemented:

- [x] Buttons or links to a related resources are on each card component

## Video Walkthrough

Here's a walkthrough of implemented features:

![](walkthrough.gif)

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ScreenToGif
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

One of the challenges I faced was getting the information for each tournament to show at the bottom of the Card components. I tried changing the padding and margin, or changing the flex-direction, but that did not work. I did end up fixing the issue by changing the line height for the h3 and h4 selectors. Another learning point during this project was that in a React App the images cannot be accessed from a file within source without import, so to include them in my page I moved the images to the public folder.

## License

    Copyright 2024 Lucas Umberger

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
