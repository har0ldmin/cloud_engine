const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const nunjucks = require("nunjucks");
const path = require("path");

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');

nunjucks.configure(['public/'], {  
    autoescape: true,
    express: app
});

const serviceRouter = require('./routes/service');
const homeRouter = require('./routes/home');
const authRouter = require('./routes/auth');
const selectionRouter = require('./routes/selection');
const solutionRouter = require('./routes/solution')
const resultsRouter = require('./routes/results')
const aboutUsRouter = require('./routes/about')
const myDashboardRouter = require('./routes/myDashboard');
const instanceRouter = require('./routes/instance');
const historyRouter = require('./routes/history');
const settingsRouter = require('./routes/settings')
const guestDashboardRouter = require('./routes/guestDashboard')
const guestInstanceRouter = require('./routes/guestInstance')
const guestHistoryRouter = require('./routes/guestHistory')
const guestSettingsRouter = require('./routes/guestSettings')
const wishlistRouter = require('./routes/wishlist')
const contactTeamRouter = require('./routes/contactTeam')
const guestcontactTeamRouter = require('./routes/guestcontactTeam')
const guestwishlistRouter = require('./routes/guestwishlist')


// Home
app.use('/', homeRouter);

// Login
app.use('/auth', authRouter);

// Our services
app.use('/service', serviceRouter);
app.use('/selection', selectionRouter);
app.use('/solution', solutionRouter);
app.use('/results', resultsRouter);

// About us
app.use('/aboutUs2', aboutUsRouter);

// My Dashboard
app.use('/myDashboard', myDashboardRouter);
app.use('/instance', instanceRouter);
app.use('/history', historyRouter);
app.use('/settings', settingsRouter);
app.use('/wishlist', wishlistRouter)
app.use('/contactTeam', contactTeamRouter)


// Guest Dashboard
app.use('/guestDashboard', guestDashboardRouter)
app.use('/guestInstance', guestInstanceRouter)
app.use('/guestHistory', guestHistoryRouter)
app.use('/guestSettings', guestSettingsRouter)
app.use('/guestcontactTeam', guestcontactTeamRouter)
app.use('/guestwishlist', guestwishlistRouter)


module.exports = app;
