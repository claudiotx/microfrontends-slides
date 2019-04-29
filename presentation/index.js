// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  MarkdownSlides,
  Slide,
  Text,
  Markdown
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';


// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif'),
  demoApp: require('../assets/demo-app.png'),
  altarLogo: require('../assets/altar-logo.png'),
  examples: require('../assets/examples.jpg'),
  cicd: require('../assets/cicd.jpg'),
  evolution: require('../assets/evo.jpg'),
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >

        <Slide transition={['zoom']} bgColor='primary'>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Micro frontends 🚀
          </Heading>
          <Text margin='10px 0 0' textColor='tertiary' fit bold>
            www.claudioteixeira.com
          </Text>
        </Slide>

        <Slide bgColor='secondary'>
          <Image src={images.altarLogo} width={800} />
        </Slide>

        <Slide bgColor='primary'>
          <Heading size={3} textColor='pink' caps>
            This is not new
          </Heading>
          <List>
            <ListItem> iFrames (window.postMessage()) </ListItem>
            <ListItem> DualBoot (AngularJS, Angular) </ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor='tertiary'>
          <Heading size={4} textColor='primary' caps>
            Micro-frontends are the future of Complex Frontend architectures.
          </Heading>

          <Heading size={6} textColor='secondary'>
            Common Scenario:
          </Heading>

          <List>
            <ListItem>5 Serverless APIs</ListItem>
            <ListItem>6 Server APIs</ListItem>
            <ListItem>3 Message Queues</ListItem>
            <ListItem>2 Android Client</ListItem>
            <ListItem>
              1 Big Web App Client 🤦‍♂️
              <Text> </Text>
              <Text> </Text>
              <List>
                <ListItem  textSize='35'> Micro-frontend 1 (Admin, Dynamic Header) </ListItem>
                <ListItem  textSize='35'> Micro-frontend 2 (Main View, Dynamic Header, Footer) </ListItem>
                <ListItem  textSize='35'> Micro-frontend 3 (Editor, Help, Dynamic Header, Charts) </ListItem>
                <ListItem  textSize='35'> Micro-frontend 4 (Help, Charts, Admin) </ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>

        <Slide bgColor='secondary'>
          <Heading size={3} textColor='pink' caps>
            Splitting
          </Heading>
          <Image src={images.examples} />
        </Slide>


        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Heading size={6} textColor='secondary' caps>
          Constraints that may lead to MicroFrontends
          </Heading>
          <List>
            <ListItem> Teams constantly affected by external dependencies </ListItem>
            <ListItem> Codebase evolves in a huge snow ball becoming unmanageable with time </ListItem>
            <ListItem> 1 of the features of the app is too complex, split it as an external project, it may accelerate the time to market of specific feature </ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <Heading size={3} textColor='pink' caps>
          Deciding
          </Heading>
          <List>
            <ListItem> If you have a small project, forget it. </ListItem>
            <ListItem> If you have a medium project, forget it. </ListItem>
            <ListItem bgColor='green'> If you have a large project (+50 components), MAYBE you should see. </ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <Heading size={3} textColor='yellow' caps>
          I have a large project
          </Heading>
          <List>
            <ListItem> Monorepo with subfolders  </ListItem>
            <ListItem> Multiple repos for multiple teams and a glueing script </ListItem>
            <ListItem> One huge app with routing/session/auth that everyone works on </ListItem>
          </List>
          <Text textColor="lightyellow"> ⚠️ Don't forget that your code needs to live nearby as it will be glued up by a MetaFramework. </Text>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <Heading size={3} textColor='pink' caps>
          Micro-frontends !== WebComponents
          </Heading>
          <Text textColor='tertiary'>
            WebComponents are project independent small&simple re-usable components which make use DOM element attributes to receive and emit data. 'h1' 'login-form' 'copyright-footer'
          </Text>
          <Text textColor='primary'>
            Micro Frontends are project specific components that will know how to talk to a specific API, support SSR, will share an event bus.. 'my-complex-specific-form' 'my-complex-grid'
          </Text>
        </Slide>


        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <Heading size={3} textColor='pink' caps>
          Micro-frontends (Basic Rules)
          </Heading>
          <List>
            <ListItem> Only use for complex apps. </ListItem>
            <ListItem> Use it only to make things easier, not complicated </ListItem>
            <ListItem> Make standards across micro apps (same eslints, tslints) </ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <Heading size={3} textColor='yellow' caps>
          Micro-frontends (More Rules)
          </Heading>
          <List>
            <ListItem> Apps do not share logic, it's independent implementation.</ListItem>
            <ListItem > Only thing shared is the Event Bus</ListItem>
            <ListItem> Split your team in subteams, each team has responsability for one frontend </ListItem>
            <ListItem> Split the frontends by business domain (eg. SalesApp, CustomerApp, FactoryApp, SalesGridApp, SalesExplorerApp)</ListItem>
            <ListItem bgColor='red'> Understand the impact of this approach in your company and developers</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <Heading size={3} textColor='pink' caps>
          Micro-frontends
          </Heading>
          <Text textColor="lime">This is a bit like the micro-services for APIs </Text>
          <List>
            <ListItem> 99% Isolation!! (1% event bus) </ListItem>
            <ListItem> Isolated Unit/E2E Tests </ListItem>
            <ListItem> CI/CD Pipeline on the frontend</ListItem>
          </List>
        </Slide>

        <Slide bgColor='secondary'>
        <Heading size={3} textColor='pink' caps>
          CI/CD Pipeline
        </Heading>
        <Image src={images.cicd} />
        </Slide>

        <Slide bgColor='secondary'>
        <Heading size={3} textColor='pink' caps>
          Evolution
        </Heading>
        <Image src={images.evolution} />
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <Heading size={3} textColor='lime' caps>
            How to implement?
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <Heading size={3} textColor='yellow' caps>
          Steps
          </Heading>
          <List>
            <ListItem> Create a Root App that will load together using the same router, same domain and without refreshing the page. This app should be responsible for session/auth. </ListItem>
            <ListItem bgColor='grey'> The apps are lazy loaded on the fly and can be loaded on the same or different pages (via the magic of `single-spa`) </ListItem>
            <ListItem> Initial load time is actually quite fast</ListItem>
            <ListItem bgColor='grey'> Hot reload entire chunks of your application (not files) *via webpack </ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <Heading size={3} textColor='red' caps>
          Module Bundling (Webpack)
          </Heading>
          <List>
          <ListItem> Webpack (to load our child apps' files) </ListItem>
          <ListItem> Babel for ESNext Transpiling </ListItem>
          <ListItem> TS-Loader for TS Transpiling </ListItem>
          </List>
        </Slide>


        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <Heading size={3} textColor='yellow' caps>
          Root App (SINLE-SPA JS Metaframework)
          </Heading>
          <List>
          <ListItem> React</ListItem>
          <ListItem> AngularJS</ListItem>
          <ListItem> Angular</ListItem>
          <ListItem> react-router</ListItem>
          <ListItem> angular-ui-router</ListItem>
          <ListItem> Webpack</ListItem>
          <ListItem> Babel</ListItem>
          <ListItem> Vue</ListItem>
          <ListItem> Svelte</ListItem>
          <ListItem> Ember</ListItem>
          <ListItem> Inferno</ListItem>
          <ListItem> Preact</ListItem>
          <ListItem> CycleJS</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <Heading size={3} textColor='red' caps>
          Child Apps
          </Heading>
          <List>
          <ListItem> All of them are kept in their subfolders with a particular new file: `index.js` </ListItem>
          </List>
        </Slide>

        <CodeSlide
          transition={[]}
          lang='js'
          bgColor='secondary'
          color='#FFFFFF'
          code={require('!!raw-loader!../assets/glue-index.js')}
          ranges={[
            {
              loc: [0, 0],
              title: 'index.js'
            },
            {
              loc: [0, 7],
              note: 'Imports for Angular'
            },
            {
              loc: [7, 17],
              note: 'DOM Element Container getter/creator'
            },
            {
              loc: [20, 27],
              note: 'Single SPA Magic - Lifecycle hooking'
            },
            {
              loc: [27, 33],
              note: 'Exporting 3 lifecycle hooks: boostrap/mount/unmount'
            }
          ]}/>

        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <Heading size={3} textColor='lightblue' caps>
          React / Angular / VueJs..
          </Heading>
          <Text textColor="white"> Same `index.js` structure/lifecycle hooks 😀 </Text>
          <Text textColor="white"> This file is the one that `single-spa` uses to lazy load the apps. 🔥 </Text>
          <Text textColor="grey"> It tells to `single-spa` meta framework how to bootstrap, mount and unmount the apps. </Text>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <Heading size={3} textColor='red' caps>
          Angular...
          </Heading>
          <Text textColor="white"> Because Angular is a bit more advanced and full-blown framework, we have to change some bits: </Text>
          <List>
            <ListItem> No need for `main.ts`, we will be importing only `src/app/app.module.ts`; (browser module, registering components and setting bootstrap component) </ListItem>
            <ListItem bgColor='grey'> We neet to add event bus listeners only on this lifecycle method: `ngAfterContentInit` which is called when component is rendered for the first time. </ListItem>
          </List>
        </Slide>

        <CodeSlide
          transition={[]}
          lang='js'
          bgColor='secondary'
          color='#FFFFFF'
          code={require('!!raw-loader!../assets/steps-angular.sample')}
          ranges={[
            {
              loc: [0, 0],
              title: 'Create & Attach an Angular 7 App'
            },
            {
              loc: [0, 2],
              note: 'Use CLI to generate a new app'
            },
            {
              loc: [2, 3],
              note: 'Create the hooks injection file'
            },
            {
              loc: [3, 4],
              note: `registerApplication('angularFooter', () => import('../angular-footer/index.js')`
            },
            {
              loc: [4, 5],
              note: 'Run it...'
            },
            {
              loc: [5, 6],
              note: 'Problems..'
            },
            {
              loc: [6, 7],
              note: `import { AppComponent } from './app.component.ts';`
            },
            {
              loc: [7, 8],
              note: '...'
            },
            {
              loc: [8, 9],
              note: ':('
            },
            {
              loc: [9, 10],
              note: `template: require('./app.component.html'),`
            },
            {
              loc: [10, 13],
              note: `export default class AppModule { }`
            },
            {
              loc: [13, 16],
              note: `selector: 'AngularAppFooter',`
            },
          ]}/>

        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <Heading size={3} textColor='lightblue' caps>
          Angular
          </Heading>
          <Text textColor="white"> These adjustments were required to sucessfully add a fresh Ng7 App to the game 😀 </Text>
        </Slide>

        <Slide bgColor='secondary'>
        <Heading size={3} textColor='lightblue' caps>
          Demo App
          </Heading>
          <Image src={images.demoApp} width={1280} />
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <Heading size={3} textColor='yellow' caps>
          Demo App - Apps
          </Heading>
          <Text textColor="white"> Angular 7.2.12 Header App </Text>
          <Text textColor="white"> React 15 Section App </Text>
          <Text textColor="white"> Angular 4.4.7 Section App </Text>
          <Text textColor="white"> Angular 7.2.12 Footer App </Text>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <Heading size={3} textColor='lime' caps>
          Demo App - Files
          </Heading>
          <List>
            <ListItem bgColor='red'> src/root-app/root-app.js  </ListItem>
            <ListItem bgColor='red'> ./index.html </ListItem>
            <ListItem bgColor='red'> src/event-bus/index.js *singleton export</ListItem>
            <ListItem> src/angular </ListItem>
            <ListItem> src/angular-footer </ListItem>
            <ListItem> src/angular-header </ListItem>
            <ListItem> src/react </ListItem>
            <ListItem> src/vue-app1 </ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <Heading size={4} textColor='lightyellow' caps>
          Routing (via Metaframework)
          </Heading>
          <Text textColor="lime"> Routing, authentication and session management should happen at the metaframework </Text>
          <List>
            <ListItem> http://localhost:9090/#/  </ListItem>
            <ListItem > http://localhost:9090/#demo1/ </ListItem>
          </List>
          <Text textColor="lightyellow"> In the  demo we are just registering apps to paths and calling start(); </Text>
        </Slide>

        <Slide bgColor='primary'>
          <Heading size={3} textColor='red' caps>
            File Sizes
          </Heading>
          <List>
            <ListItem> 0.js => Angular 7 Vendor 1.2MB (there is a second package.json, so fair enough)  </ListItem>
            <ListItem> 1.js => Angular 4 Vendor 50 KB </ListItem>
            <ListItem> 2.js => React 15 Vendor 8.3 Kb </ListItem>
            <ListItem> common-dependencies.js => 1MB </ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <Heading size={4} textColor='lightyellow' caps>
          Who is using?
          </Heading>
          <List>
            <ListItem> Facebook </ListItem>
            <ListItem> Microsoft </ListItem>
            <ListItem> Google </ListItem>
            <ListItem> ... </ListItem>
          </List>
        </Slide>

        <Slide bgColor='secondary'>
          <Image src={images.altarLogo} width={800} />
        </Slide>
      </Deck>
    );
  }
}
