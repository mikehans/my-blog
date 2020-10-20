---
path: "/blog/why-power-platform"
date: "2020-10-01"
title: "Why Power Platform?"
author: "Mike Hansford"
tags:
    - Power Platform
---
## Intro to Power Platform
### What is it?

#### Low code / no code?
Low code / no code apps help to fill the void between the business's need for apps vs. the IT department's capacity to meet that need.

#### So do I think that fully coded apps are done with?
No. Fully coded apps remain very relevant. So what are my criteria for fully coded apps? 
1) Is the app a line-of-business app, following a defined business process? Is the need essentially forms over data? This is a good candidate for low code / no code apps as they help reduce the cost of running an instance of the process
1) Conversely, does the app define the business? The app is probably public facing. Apps in this category help to present the public face of the organisation
1) Are business users dealing with a very high degree of data throughput? If your users view upwards of 20 pages per minute, any web based architecture may fall short of expectations and Power Platform is no different. What about caching and pre-loading, etc? That assumes that the data is predictable and can be loaded ahead of time.

### What problems does this help to solve?
- a great deal of applications required by businesses that are needed  by 1 or 2 people on a periodic basis
  - these apps probably need access to existing data
  - you can see the need for these apps when you walk around the company floor and you see people with several apps open and they're hopping between them trying to integrate data manually
- there are 2 potential use cases
   - a professional developer can use Power Platform to rapidly produce LOB apps to serve these needs
   - interested business persons (citizen developers) can readily learn to produce straight-forward apps to suit their needs
      - in this instance, a professional developer would be beneficcial to this process
        - supporting citizen developers thru
          - governance / handrail provision
            - take responsibility for the data layer, inc. structures, relationships and rules
          - bail citizen devs out when things get too hard
          - run the company user group
          - help to generalise apps so they serve the needs of others
          - operationalise apps so they can be robust
              - the builder is likely to put up with limitations in an app and will hand hold the app when required
#### What am I doing with this?
- intro to learning plan
  - 

### Am I done with coding?
Nope. I just want to be more judicious about what I cut code for and what I don't.

In general, there are many apps within the business for which custom coding is a waste of time. For LOB apps, where the priority is to reduce cost and increase both velocity and reliability custom code is antithetical to the business goal. Custom code takes time to write and prepare for production... I could, with Power Platform write in an hour or two what it would take me a week or more with custom code. That's a 90% or more cost saving to the business for me to write a product that does the same thing.

#### So what's the place of custom code with Power Platform?
- functions particular to the business, eg.
  - a data source
  - an API
  - a custom auth mechanism
- data design
- data layer provision
- creating common modules
  - say the developer notices the same 4 steps being done regularly in a flow. To improve utility and reduce errors in assembly, the dev could combine them into 1 step and socialise this through the user group
