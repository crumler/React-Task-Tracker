let DBURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        DBURL = 'http://localhost:5000';
        break;

    case 'rumler-task-tracker.herokuapp.com/':
        DBURL = 'https://rumler-task-tracker.herokuapp.com/'
}

export default DBURL